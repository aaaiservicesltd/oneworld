import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import energyimg from '../../public/image/about.jpg';
import battery from '../../public/image/company.webp';
import oct from '../../public/image/28-Oct.png';
import abimg from "../../public/image/TD.png"
const About = () => {
  return (
    <>
      <Header />
      <div className='about-us-page'>
  

        <div className='about-first-section pt-100'>
          <div class="container">
          <h1 className='text-center heading-h1main'>About The Company</h1><hr/>
            <div class="row pt-3">
            <div class="col-6 ">
                <img src={energyimg} />
              </div>
              <div class="col-6 about-content">
                
                <p>
                <b>ONE WORLD CAPITAL LTD, established</b><br/>
                 in September 2022, is a 
                premier investment firm specializing in lithium mining company shares. Boasting a remarkable 30%
                 return rate, our expertise and commitment to the lithium sector are evident. We firmly believe in lithium's
                  pivotal role in future energy storage and are dedicated to supporting companies in this domain. With an experienced team 
                  and strong industry connections, we gain early access to promising opportunities. Our pledge to transparency and professionalism
                   ensures investors are regularly informed and their queries addressed.
                   We offer investors a reliable opportunity to tap into the expanding lithium battery market. 
                   Our unique proposition lies in partnering with top-tier battery minerals suppliers, key players in the surging electric
                    vehicles and energy storage sectors.

                 </p>
              </div>
              <p><b>At ONE WORLD CAPITAL LTD we are dedicated to shaping the future of clean energy through
 solar investments. Our mission is to make a significant and positive impact on the environment while providing sound investment opportunities. 
With years of experience and a team of experts, we are committed to driving sustainable change through solar energy investments.</b></p>
             
            </div>
          </div>
        </div>
        {/* <div className='about-second-section '>
          <div class="container">
            <div class="row">
            <div class="col ">
                <img src={battery} />
              </div>
              <div class="col about-content">
                <h1>About Battery</h1>
                <p>
                  If you are creating an "About Us" page for a solar energy investment company, you'll want to 
                  provide a clear and engaging overview of your company's mission, values, expertise, and commitment to 
                  solar energy investment. Here's a template and some key points to consider including.
                  we are dedicated to shaping the future of clean energy through solar investments. 
                  Our mission is to make a significant and positive impact on the environment
                   while providing sound investment opportunities. With years of experience and 
                   a team of experts, we are committed to driving sustainable change through solar energy investments.
                  </p>
              </div>
              
            </div>
          </div>
        </div> */}

        <div className='about-contents '>
          <div className='container'>
<div className='row'>


{/* <img src={oct} alt='octimg'/> */}

<h3>Our Mission</h3>
<p>ONE WORLD CAPITAL LTD is on a mission to accelerate the
 transition to clean, renewable energy through solar investments. 
We are dedicated to making the world a greener place while delivering solid financial returns for our investors.</p>


<h3>Our Expertise</h3>
<p>Our team of seasoned professionals brings a wealth of experience in the solar energy 
investment sector. With a proven track record of successful projects and a 
deep understanding of the industry, we are well-equipped to identify and invest in promising solar ventures.</p>


<h3>What Sets Us Apart</h3>
<p>What sets ONE WORLD CAPITAL LTD apart is our innovative approach to solar energy investments. 
We leverage cutting-edge technologies and strategic partnerships to maximize the potential 
of each project. We are not just investors; we are trailblazers in the clean energy sector..</p>


<h3>Our Commitment to Sustainability</h3>
<p>At the core of our company values is a deep commitment to sustainability. 
We proudly hold certifications that reflect our dedication to environmental responsibility. 
Our partnerships with local communities demonstrate our commitment to social responsibility.</p>


<h3>Investment Strategies</h3>
<p>ONE WORLD CAPITAL LTD specializes in various types of solar energy projects,
 from residential installations to large-scale utility ventures. 
We use a diversified investment approach to ensure long-term growth and success.</p>



<h3>Impact on the Environment</h3>
<p>Our investments directly contribute to reducing carbon emissions and promoting a cleaner
 environment. Each solar project we support plays a vital role in the fight against climate change.</p>



</div>

          </div>
        </div>
      </div>




      <Footer />
    </>
  )
}

export default About