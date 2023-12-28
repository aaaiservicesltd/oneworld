import React from 'react'

import serviceimg from "./image/growth.png"
import sales from "./image/sales.png"
import lithum from "./image/lithium1.png"
import Header from './common/Header'
import Footer from './common/Footer'



const Servicepage = () => {
  return (
    <>

<Header/>

    <div className='services-pages' >
 <div className='services-pages-content'>
 <div className='container'>
 <div className=' row service-p'>
    <h1 className='text-center pb-4 heading-h1main'>SECTOR GROWTH RATE</h1>
    <hr/>
    {/* <img src={serviceimg} alt='imggrowth'/> */}
    <p>The Global Lithium market was valued at USD 4650 Million in 2021 and is expected to 
    grow at a CAGR of 19.57% during the forecast period of 2023-2028. The market for lithium-ion 
    batteries is likely to grow significantly over the forecast period because of the electrification of cars.</p>
    <p>In the Lithium Market, the dominant force is the battery application segment, as revealed by 
    our research experts. Lithium plays a pivotal role in the
     production of lithium batteries, with the battery application segment holding
      the largest share in the global lithium market.</p>


    <div className='lithum-market my-5' >
    <h3 className='text-center'>Lithium Market, Volume CAGR (%), by Application , Global ,2022-2027</h3>
    <img src={lithum} alt='salesimg'/></div>
    <img src={sales} alt='salesimg'/>

      <p>Lithium batteries are categorized into disposable and rechargeable types.
       Disposable lithium batteries, employing metallic lithium as an anode, exhibit extended lifespan
       and higher charge density, making them ideal for critical, long-term applications like pacemakers and medical devices.</p>

       <p>Rechargeable lithium batteries encompass lithium-ion and 
       lithium-polymer variants, each with distinct characteristics. Lithium-ion batteries, 
       encased in a rigid housing, are favored for their high energy density and lightweight design, 
       rendering them perfect for portable electronics like cell phones and laptops. The lithium-ion 
       batteries have a broad range of applications, from electric vehicles to power tools and renewable energy storage systems.</p>
       <p>The growing popularity of lithium-ion batteries, driven by their 
       superior capacity-to-weight ratio, enhanced performance, and decreasing costs,
        positions them as the preferred choice. Key global manufacturers like LG Chem, CATL, 
        Panasonic, Samsung SDI, and BYD further boost the demand for lithium in the battery application segment. 
       This trend is projected to persist, reflecting the evolving landscape of lithium utilization 
       in various high-demand industries.</p>

 </div>
</div>
    </div>
    </div>
    <Footer/>
    </>
  )
}














export default Servicepage