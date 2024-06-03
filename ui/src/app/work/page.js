import React from 'react';
import Navbar from '../_component/navbar';
import Image from 'next/image';
import work1 from '../../../public/work/work-1.jpg';
import work2 from '../../../public/work/work-2.jpg';
import work3 from '../../../public/work/work-3.jpg';
import work4 from '../../../public/work/work-4.jpg';
import work5 from '../../../public/work/work-5.jpg';
import work6 from '../../../public/work/work-6.jpg';

const Page = () => {
  const works = [
    { img: work1, title: 'Lorem ipsum dolor', category: 'Web Design', date: '18 Sep. 2018' },
    { img: work2, title: 'Loreda Cuno Nere', category: 'Web Design', date: '18 Sep. 2018' },
    { img: work3, title: 'Mavrito Lana Dere', category: 'Web Design', date: '18 Sep. 2018' },
    { img: work4, title: 'Bindo Laro Cado', category: 'Web Design', date: '18 Sep. 2018' },
    { img: work5, title: 'Studio Lena Mado', category: 'Web Design', date: '18 Sep. 2018' },
    { img: work6, title: 'Studio Big Bang', category: 'Web Design', date: '18 Sep. 2017' },
  ];

  return (
    <>
      <Navbar />
      <section id="work" className="">
        <div className="gap-2 p-2  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {works.map((work, index) => (
            <div key={index} className="block rounded-lg bg-white shadow-md h-auto">
              <a href="#!">
                <Image
                  className="rounded-t-lg w-full  object-cover"
                  src={work.img}
                  alt={work.title}
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </a>
              <div className="p-6 text-surface dark:text-white">
                <h5 className="mb-2 text-xl font-medium leading-tight">{work.title}</h5>
                <div class="w-more">
                      <span class="text-blue-500">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
                    </div>
                <button
                  type="button"
                className='bg-blue-400 '
                  
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Page;
