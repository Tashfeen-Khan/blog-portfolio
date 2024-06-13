import React from 'react'

const Resuma = () => {
  return (
    <section id="resume" className="bg-primary-Bg py-8 text-primary-Text">
  <div className="container mx-auto">
    <div className=" px-8  flex flex-col items-center">
      <h2 className="font-medium">Resume</h2>
      <p className="text-4xl font-extrabold md:text-5xl">Check My Resume</p>
    </div>
    <div className="flex flex-wrap ">
      <div className="w-full lg:w-1/2 px-8">
        <h3 className="text-2xl font-bold mt-8 mb-4">Summary</h3>
        <div className="bg-primary-Bg  rounded-lg p-6 ">
          <h4 className="text-lg font-bold text-primary-h1">Alice Barkley</h4>
          <p className="italic ">Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
          <ul className="list-disc mt-4">
            <li>Portland par 127, Orlando, FL</li>
            <li>(123) 456-7891</li>
            <li>alice.barkley@example.com</li>
          </ul>
        </div>
        <h3 className="text-2xl font-bold mt-8 mb-4">Education</h3>
        <div className="bg-primary-Bg  rounded-lg p-6 shadow-md">
          <h4 className="text-lg font-bold text-primary-h1">Master of Fine Arts & Graphic Design</h4>
          <h5 >2015 - 2016</h5>
          <p className="italic">Rochester Institute of Technology, Rochester, NY</p>
          <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
        </div>
        <div className="bg-primary-Bg  rounded-lg p-6 shadow-md mt-4">
          <h4 className="text-lg font-bold text-primary-h1">Bachelor of Fine Arts & Graphic Design</h4>
          <h5 className="">2010 - 2014</h5>
          <p className="italic ">Rochester Institute of Technology, Rochester, NY</p>
          <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-8">
        <h3 className="text-2xl font-bold mt-8 mb-4">Professional Experience</h3>
        <div className="bg-primary-Bg rounded-lg p-6 shadow-md">
          <h4 className="text-lg font-bold text-primary-h1">Senior graphic design specialist</h4>
          <h5 className="">2019 - Present</h5>
          <p className="italic ">Experion, New York, NY</p>
          <ul className="list-disc mt-4">
            <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
            <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
            <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
            <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
          </ul>
        </div>
        <div className="bg-primary-Bg rounded-lg p-6 shadow-md mt-4">
          <h4 className="text-lg font-bold text-primary-h1">Graphic design specialist</h4>
          <h5 className="">2017 - 2018</h5>
          <p className="italic s">Stepping Stone Advertising, New York, NY</p>
          <ul className="list-disc mt-4">
            <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
            <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
            <li>Recommended and consulted with clients on the most appropriate graphic design</li>
            <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Resuma