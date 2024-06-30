"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import BasicInputField from "../../../_component/feilds/basicInputFeild";
import Navbar from "../../../_component/navbar";
import BasicBtn from "../../../_component/Buttons/BasicBtn";
import { updateSelf } from "../../../../Redux/SelfSclice/selfSclice";
import { useParams, useRouter } from "next/navigation";
import {  toast } from 'react-toastify';
const Page = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    shortBio: "",
    bio: "",
    image: "",
    social: {
      twitter: "",
      linkedin: "",
      github: "",
      facebook: "",
      instagram: "",
    },
    workField: "",
    phoneNumber: "",
    address: "",
    age: 0,
    birthday: "",
    degree: "",
    openTowork: "",
  });
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();
  const selfProfile = useSelector((state) =>
    state.self.selfDatas.find((b) => b._id === id)
  );

  useEffect(() => {
    if (selfProfile) {
      setData(selfProfile);
    }
  }, [selfProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => {
      const updatedData = { ...prevState };
      if (name.includes("social.")) {
        const key = name.split(".")[1];
        updatedData.social = {
          ...prevState.social,
          [key]: value,
        };
      } else {
        updatedData[name] = value;
      }
      return updatedData;
    });
  };

  const handleImageUpload = (base64) => {
    setData({
      ...data,
      image: base64,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSelf({ id, updatedData: data }))
      .then((response) => {
        toast.success("Profile updated successfully");
        router.push("/"); // Redirect to another page after successful update
      })
      .catch((err) => {
        toast.warn(`Error: ${err}`);
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col sm:flex-row m-4">
        <div className="w-full sm:w-2/5 flex justify-center text-2xl font-bold sm:items-center sm:justify-start">
          <h1>Update self</h1>
        </div>
        <div className="w-full sm:w-3/5 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <BasicInputField
                id="name"
                label="Name"
                variant="outlined"
                name="name"
                value={data.name}
                onChange={handleChange}
                
              />
            </div>
            <div className="mb-4">
              <BasicInputField
                id="email"
                label="Email"
                variant="outlined"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <BasicInputField
                id="shortBio"
                label="Short Bio"
                variant="outlined"
                name="shortBio"
                value={data.shortBio}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <BasicInputField
                id="bio"
                label="Bio"
                variant="outlined"
                name="bio"
                value={data.bio}
                onChange={handleChange}
                multiline
                rows={4}
              />
            </div>

            <div className="mb-4">
              <BasicInputField
                id="workField"
                label="Work Field"
                variant="outlined"
                name="workField"
                value={data.workField}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <BasicInputField
                id="phoneNumber"
                label="Phone Number"
                variant="outlined"
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <BasicInputField
                id="address"
                label="Address"
                variant="outlined"
                name="address"
                value={data.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <BasicInputField
                id="age"
                label="Age"
                variant="outlined"
                name="age"
                type="number"
                value={data.age}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <BasicInputField
                id="birthday"
                label="Birthday"
                variant="outlined"
                name="birthday"
                value={data.birthday}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <BasicInputField
                id="degree"
                label="Degree"
                variant="outlined"
                name="degree"
                value={data.degree}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <BasicInputField
                id="openTowork"
                label="Open to Work"
                variant="outlined"
                name="openTowork"
                value={data.openTowork}
                onChange={handleChange}
              />
            </div>

            <p>Social Links</p>
            {/* Add fields for social links */}
            {["twitter", "linkedin", "github", "facebook", "instagram"].map(
              (platdiv) => (
                <div className="mb-4" key={platdiv}>
                  <BasicInputField
                    id={`social.${platdiv}`}
                    label={platdiv.charAt(0).toUpperCase() + platdiv.slice(1)}
                    variant="outlined"
                    name={`social.${platdiv}`}
                    value={data.social[platdiv]}
                    onChange={handleChange}
                  />
                </div>
              )
            )}
            <img src={data.image}/>
            <div className="mb-4">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => handleImageUpload(base64)}
              />
            </div>
            <div className="flex items-center justify-between">
              <BasicBtn title="Update" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
