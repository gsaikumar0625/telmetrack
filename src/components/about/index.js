
import React from 'react'
import Heading from '../Heading';
import AboutImg from '../../../src/assests/about.png'
const About = () => {
  const links = [
    { text: 'Home', url: '/' },
    { text: 'About Us', url: '/about' }
  ];
  return (
    <>
      <Heading heading={'About Us'} links={links} />

      <div className='w-full bg-white flex justify-center'>
        <div className="mx-auto flex flex-col justify-end">
          <div class="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1">
            <div class="font-semibold leading-[1.9rem] text-black col-span-12 g-white py-5 
            text-start mt-2"> 
              <section class="page-section animate__animated animate__zoomIn" id="about">
                <div class="container">
                  <div class="text-center">
                    <h2 class="section-heading text-uppercase text-primaryColor font-extrabold ">About</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                  </div>
                  <ul class="timeline">
                    <li>
                      <div class="timeline-image">
                        <img class="rounded-circle img-fluid" src={AboutImg} alt="..." /></div>
                       
                      <div class="timeline-panel">
                        <div class="timeline-heading">
                          <h4>2009-2011</h4>
                          <h4 class="subheading">Our Humble Beginnings</h4>
                        </div>
                        <div class="timeline-body">
                          <p class="text-muted">Lorem ipsum dolor sit amet,
                           consectetur adipisicing elit. Sunt ut voluptatum eius sapiente,
                            totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, 
                            sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                      </div>
                    </li>
                    <li class="timeline-inverted">
                      <div class="timeline-image">
                        <img class="rounded-circle img-fluid" src={AboutImg} alt="..." /></div>
                      <div class="timeline-panel">
                        <div class="timeline-heading">
                          <h4>March 2011</h4>
                          <h4 class="subheading">An Agency is Born</h4>
                        </div>
                        <div class="timeline-body">
                          <p class="text-muted">Lorem ipsum dolor sit amet, consectetur 
                          adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                           temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt 
                           et ea quo dolore laudantium consectetur!</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="timeline-image">
                        <img class="rounded-circle img-fluid" src={AboutImg} alt="..." /></div>
                      <div class="timeline-panel">
                        <div class="timeline-heading">
                          <h4>December 2015</h4>
                          <h4 class="subheading">Transition to Full Service</h4>
                        </div>
                        <div class="timeline-body">
                          <p class="text-muted">Lorem ipsum dolor sit amet, consectetur
                           adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis 
                           temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et
                            ea quo dolore laudantium consectetur!</p>
                        </div>
                      </div>
                    </li>
                    <li class="timeline-inverted">
                      <div class="timeline-image">
                        <img class="rounded-circle img-fluid" src={AboutImg} alt="..." /></div>
                      <div class="timeline-panel">
                        <div class="timeline-heading">
                          <h4>July 2020</h4>
                          <h4 class="subheading">Phase Two Expansion</h4>
                        </div>
                        <div class="timeline-body">
                          <p class="text-muted">Lorem ipsum dolor sit amet, consectetur
                           adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis 
                           temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et 
                           ea quo dolore laudantium consectetur!</p>
                        </div>
                      </div>
                    </li>
                    <li class="timeline-inverted">
                      <div class="timeline-image">
                        <h4>
                          Be Part
                          <br />
                          Of Our
                          <br />
                          Story!
                        </h4>
                      </div>
                    </li>
                  </ul>


                </div>
              </section>








              {/* <p className='mb-12'>
                The Erneston name has been associated with the fresh produce
                industry in South Florida since 1923 and spans more than four generations.
                As the former CEO of J&J Produce, Chris Erneston III has taken his years of
                experience and in-depth knowledge of the industry and founded Life Family Farms.
                His reputation as a man of integrity and faith coupled with his vast range of
                experience in farming sales and marketing positions Life Family Farms to be a
                market leader in the supply of farm fresh produce to its customers on a year-round basis.</p>

              <img src='https://www.lifefamilyfarms.com/images/Erneston-Family-new.jpeg' />

              <div>
                <h1 class="text-primaryColor mt-12 mb-8 font-extrabold"
                  style={{ fontSize: 40 }}>Our Farms</h1>
                <p className='text-secondaryColor font-bold mb-3'>How TelemeTrak Saved the Air Force Millions and Improved Safety</p>

                <p className='mb-8'>Life Family Farms provides a year-round supply of farm fresh vegetables and
                  fruits from our farms across the Americas. Our produce is grown in optimum conditions
                  and we remain committed to sustainability by making sure our farmlands utilize local
                  resources and benefit the surrounding environment.</p>

                <p className='mb-12'>We produce in the <span className='text-secondaryColor font-bold'>United States, Guatemala, Mexico, Peru, Colombia, Argentina, Chile, Honduras,
                  Dominican Republic</span>  and<span className='text-secondaryColor font-bold'> Costa Rica </span> forming strong alliances and partnerships that are
                  focused on the long-term.Life Family Farms is positioned to supply a high volume of
                  fresh quality produce with year-round availability.</p>

                <img src='https://www.lifefamilyfarms.com/images/Life-Family-Map-p-1080.png' />

                <p className='text-secondaryColor font-bold mb-3'>
                  Grower Relations
                </p>

                <p className='mb-8'>We have a powerful team with over 100 years of
                  combined experience in farming, importing, and distributing. Our unwavering
                  commitment to quality and service ensures excellent communication and delivers strong relationships from “Farm to Family.” </p>
 
                <Carousel className="my-12">
                  <img
                    src="https://www.lifefamilyfarms.com/images/_MG_6967.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="https://www.lifefamilyfarms.com/images/_MG_6967.jpg"
                    alt="image 2"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="https://www.lifefamilyfarms.com/images/_MG_6993.jpg"
                    alt="image 3"
                    className="h-full w-full object-cover"
                  />
                </Carousel> 

                <p className='text-secondaryColor font-bold mb-3'>
                  Logistics
                </p>

                <p className='mb-12'>Logistics is critical in our industry. Our expertise in importing
                  and cold chain management enables us to bring customers the safest and freshest produce
                  year-round. We can also facilitate and cover any
                  logistical need you have while saving you valuable time and money. We work with full
                  truckload and LTL carriers.</p>

                <img src='https://www.lifefamilyfarms.com/images/Logistics.jpg' />


                <p className='text-secondaryColor font-bold mb-3 mt-12'>
                  Food Safety and Quality Assurance
                </p>

                <p className='mb-12'>Food safety policies and procedures are a high priority
                  to ensure that our product is always the finest, superior quality. All of our
                  operations follow internationally accepted best practices and food safety,
                  environmental, and sustainability industry standards. Through internal and
                  external audits, Life Family Farms and our grower-partners are proud to always
                  comply with our Foreign Supplier Verification Program, the FDA, and FSMA
                  regulations.</p> 

                <p className='text-secondaryColor font-bold mb-3'>
                  Certifications and Compliance
                </p>
                <ul className='list-disc'>
                  <li className='mb-2'>
                    HACCP-based Good Manufacturing Practices (GMP’s) Food Safety Certified
                  </li>
                  <li className='mb-2'>Traceability Program</li>
                  <li className='mb-2'>HACCP Programs</li>
                  <li className='mb-2'>Global GAP Certified Farms</li>
                  <li className='mb-2'>Federal Regulatory Compliance (FDA, USDA, CBP)</li>
                  <li className='mb-2'>FSMA Compliant</li>
                  <li className='mb-2'>Internal training programs on quality and safety</li>
                </ul> 
              </div> 
               */}

            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default About