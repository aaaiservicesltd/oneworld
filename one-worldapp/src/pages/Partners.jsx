import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import energyimg from '../../public/image/partner.png';
import elective from '../../public/image/electric.png';
import ev from '../../public/image/ev.png';

const Partners = () => {
    return (
        <>
            <div className='partner-page'>
                <Header />

                <div className='partner-first-section mt-5 pt-5 pt-100'>
                    <div class="container">
                        <h1 className='text-center heading-h1main '>OUR PARTNERS</h1><hr />
                        <div className='row mt-5'>
                            <p>

                                <b>PILBARA MINERALS : </b>
                                A renowned lithium company publicly traded on the Australian Securities Exchange (ASX),
                                stands at the forefront of the global lithium market. It distinguishes itself as the owner of the world's
                                most extensive independent hard-rock lithium operation, strategically located in Western Australia's Pilbara region,
                                celebrated for its mineral-rich geological formations.


                            </p>
                            <p>
                                The company's innovative and sustainable mining practices underline its significance in the lithium sector.
                                Pilbara Minerals has directed its efforts towards lithium and tantalum exploration and production, both vital
                                components in the construction of advanced electronic devices and renewable energy storage systems. The flagship
                                Pilgangoora Lithium-Tantalum Project symbolizes the company's unwavering commitment to sustainable and responsible
                                mining practices.

                            </p>
                            <p>Pilbara Minerals' global importance in the lithium industry is unquestionable.
                                The company is deeply committed to sustainable mining practices and community development,
                                reinforcing its role as a responsible corporate citizen. Its ASX listing and its world-class
                                lithium operation in Western Australia solidify its status as a key contributor to the Australian economy.
                                Additionally, it plays a pivotal role in driving the global transition towards cleaner and more sustainable
                                energy sources, aligning with the broader movement towards a greener and more eco-friendly future. Pilbara Minerals'
                                dedication to sustainable practices, technological innovation, and community engagement makes it a prominent and influential
                                player in the global shift towards clean energy solutions.
                            </p>
                        </div>
                        <div className='row'>
                            <p><b>LIONTOWN RESOURCES :</b> “Liontown Resources is an emerging Tier 1 Battery Minerals producer.
                                Our aim is to be an ESG leader and a globally significant provider of battery minerals for the
                                rapidly growing clean energy market.”
                            </p>
                            <p>Liontown Resources, with its primary focus on lithium mining through projects like Kathleen Valley and Buldania,
                                reached a pivotal juncture in June 2022 when the company's Board officially granted approval for the Final Investment Decision (FID).
                                This strategic move was a momentous step forward in the company's trajectory.</p>
                            <p>Prior to the FID approval, Liontown Resources successfully secured binding offtake agreements
                                with some of the industry's heavyweights, including Tesla, Ford, and LG Energy Solution.
                                These agreements not only validate the company's potential but also underline its significance in the lithium market.</p>
                            <p>
                                Furthermore, to facilitate the realization of these projects, Liontown Resources inked a substantial
                                finance facility deal amounting to a substantial $300 million with Ford. This financial arrangement
                                not only provides the necessary capital but also solidifies partnerships with key players in the
                                automotive and energy sectors.
                            </p>
                            <p>With all these pieces in place, the stage was set for construction to commence in December 2022,
                                signifying the company's commitment to advancing its lithium mining ventures and making a significant impact in the global lithium market.
                                The confluence of strategic decisions, major partnerships, and financial backing positions Liontown Resources
                                as a formidable player in the industry.</p>
                        </div>
                        <div class="row">
                            <h3 className='text-center py-5'> Risk management for the low carbon economy</h3>
                            <div class="col-6 ">
                                <img src={energyimg} />
                            </div>
                            <div class="col-6 partner-content">


                                <p>

                                    As the world shifts away from fossil fuels towards green technologies for a low-carbon future,
                                    the demand for various metals is surging. The push for sustainability, particularly with the goal of complete
                                    electric vehicle adoption by 2050, is placing immense pressure on the supply chains of crucial metals.
                                    This growth is closely tied to the expansion of renewable energy and energy storage systems,
                                    where metals like aluminium, copper, steel, and construction steel play vital roles in generating, storing,
                                    and distributing sustainable energy from solar, wind, hydro and thermal sources.
                                    Additionally, zinc is gaining prominence as a battery material for energy storage at charging
                                    stations and smart energy grids. The exploration of large, stationary lead-acid batteries further contributes
                                    to stability and resilience in these systems. The escalating global demand for materials essential to the sustainable
                                    transition is impacting availability and prices.
                                    The London Metal Exchange (LME) plays a pivotal role in facilitating access
                                    to physical materials, offering hedging solutions, and providing price discovery. This unique positioning allows the LME to
                                    actively support the ongoing global economic shift towards sustainability.
                                </p>
                            </div>

                        </div>

                        <div className='row'>
                            <div className='global-shift'>
                                <h3 className='text-center pt-5 mt-5 '>USA, UK, AND EUROPE’S PLAN FOR BATTERY PRODUCTION</h3><hr />
                                <p>The global shift toward electric vehicles (EVs) is steering nations to strategically position themselves in
                                    the burgeoning electric mobility landscape. In the United States, the Biden administration is placing a significant
                                    emphasis on fostering a robust domestic battery industry to support the growing EV market. Recognizing the pivotal role of batteries
                                    in the EV supply chain, this approach aligns with an international
                                    trend where Western countries, including European nations, aim to reduce dependence on Chinese battery production.</p>
  
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='elective-content'>
<p>The burgeoning interest in electric vehicles (EVs) has transformed
 the lithium-ion EV battery market into a robust $27 billion per year industry.
 Profits of battery manufacturers have surged due to heightened demand, fostering intense competition in the market. </p>
 <p>Projections suggest that by 2027, the market could experience significant expansion,
  reaching a staggering $127 billion. This growth is anticipated as consumers increasingly adopt more affordable EV options, 
  underlining a pivotal shift towards sustainable transportation. The current market
  dynamics underscore the pivotal role of EV batteries in propelling the automotive industry toward a cleaner and more sustainable future.</p>
  <p> In the UK, the commitment to an electric future is evident in the government's
                                    plan to ban new petrol and diesel car sales by 2030, extending to hybrid cars by 2035.
                                    However, challenges persist, notably in charging infrastructure and battery production.
                                    While the UK government targets 300,000 public charging stations by 2030, the Society of Motor
                                    Manufacturers and Traders (SMMT) argues that 2.3 million are needed. The automotive industry's pivotal shift to
                                    electric by 2030 impacts the UK's economy, necessitating increased battery production, a challenge where the UK currently lags.
                                </p>
                                <p>In Europe, the quest for battery autonomy is pronounced. European countries are actively seeking to reduce 
                                reliance on Chinese battery production, aligning with broader geopolitical and environmental considerations.
                              
</p>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='elective-img'>
                                    <img src={elective} alt=''/>
                                </div>
                            </div>
                            <p>   The emergence of new players in the global battery market is anticipated, with various U.S. companies at the
                                  forefront of advancing next-generation battery technologies. Ionic Materials, QuantumScape, Sila Nanotechnologies,
                                   Sion Power, and Sionic Energy exemplify the diverse innovations propelling the battery industry forward.</p>
            
<p>
The collective pursuit of enhancing battery capabilities positions these companies
 as key contributors to the transformative shift towards electric mobility. While the U.S.,
  UK, and Europe grapple with challenges related to charging infrastructure, domestic battery production, 
  and global competition, their strategic visions underscore a shared commitment to navigating the electric future, 
  promising a landscape ripe for innovation and competition.
</p>
                        </div>
                        <div className='row p-5'>
                            
                                <h2 className=' text-center py-5'>MANUFACTURING IN ASIA<hr/></h2>
                                <div className='col-6'>
                                    <div className='ev-img'>
                                        <img src={ev} alt=''/>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='ev-content'>
<p>Asia, recognized as a powerhouse in vehicle parts manufacturing, is rapidly evolving into
 an epicentre for ground-breaking innovations within the battery sector. This transformation is vividly evident
  in the electric vehicle (EV) domain, where the top 10 manufacturers, holding the lithium ion's share of the market, 
  all call Asian countries home. The geographical focus is particularly
 pronounced in China, Japan, and South Korea, underscoring these nations' pivotal roles in advancing electric mobility.</p>
 <p>Remarkably, data sourced from SNE Research illuminates the dominance of Asian manufacturers
  in the EV battery landscape. The triumvirate of CATL, LG, and Panasonic collectively commands an impressive
   70% of the market, exemplifying Asia's unparalleled influence in driving advancements in electric vehicle battery technologies.
    This underscores the region's not just
  as a manufacturing hub but a vital force steering the global trajectory towards a more sustainable and electrified future.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Partners