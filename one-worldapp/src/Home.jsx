import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import background from "./image/2main.jpg";
import background from "./image/85.jpg";
import background1 from "./image/2main.jpg";
import background2 from "./image/untitled-design.gif";
import img from "./image/investmentl.gif";
import education from "./image/education.png";
import financial from "./image/financial.png";
import nature from "./image/natural.png";
import gro from "./image/gro.png";
import ecosystem from "./image/batter.png";
import morden from "./image/modern-nature.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import expertise from "./image/finance.gif";
import recordtop from "./image/16.gif";
import network from "./image/1-A.gif";
import team from "./image/166.gif";
import charts from "./image/chart.png";






const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const Home = () => {
  return (
    <>
      <Header />
     <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay={true}
        autoPlaySpeed={10000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1,
            partialVisibilityGutter: 30
          }
        }}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div >
        <div className='main-section' style={{ backgroundImage: `url(${background})` }}>
          <div className='main-second'>
            <div className="container  ">
              <div className="row">
                <div className='col-6 main-section-content' >
                  <h1 className=' main-heading'>In publishing and graphic design  </h1>
                  <p className=' main-content'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document .
                  </p>

                  <div className='main-section-btn button-style text-center'>
                    <a className="btn btn-light  px-5 py-3" href="#" role="button">
                      PRESS RELEASE </a>
                    <a className="btn btn-light  px-5 py-3" href="#" role="button">
                      EXPLORE RIZE </a></div>

                </div>
                <div className='col-6'></div>


              </div>
            </div>
          </div>
        </div></div>
        
        <div > <div className='main-section' style={{ backgroundImage: `url(${background1})` }}>
          <div className='main-second'>
            <div className="container  ">
              <div className="row">
                <div className='col-6 main-section-content'>
                  <h1 className=' main-heading'>In publishing and graphic design  </h1>
                  <p className=' main-content'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document .
                  </p>

                  <div className='main-section-btn button-style text-center'>
                    <a className="btn btn-light px-5 py-3" href="#" role="button">
                      PRESS RELEASE </a>
                    <a className="btn btn-light px-5 py-3" href="#" role="button">
                      EXPLORE RIZE </a></div>

                </div>
                <div className='col-6'>
                  {/* <img src={background1} alt='bg-3'/> */}
                </div>


              </div>
            </div>
          </div>
        </div></div>
        <div> <div className='main-section' style={{ backgroundImage: `url(${background2})` }}>
          <div className='main-second'>
            <div className="container  ">
              <div className="row">
                <div className='col-6 main-section-content'>
                  <h1 className=' main-heading'>In publishing and graphic design  </h1>
                  <p className=' main-content'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document .
                  </p>

                  <div className='main-section-btn button-style text-center'>
                    <a className="btn btn-light px-5 py-3" href="#" role="button">
                      PRESS RELEASE </a>
                    <a className="btn btn-light px-5 py-3" href="#" role="button">
                      EXPLORE RIZE </a></div>

                </div>
                <div className='col-6'>
                  {/* <img src={background2} alt='bg-2' /> */}
                </div>


              </div>
            </div>
          </div>
        </div></div>

      </Carousel>



      {/* <div className='second-section'>
        <div className="container text-center">
          <div className="row">
            <div className="col ">

              <img src='https://assets.website-files.com/6448ae7242284b108e33c331/644a3e0fb813b6139b63c998_Client-01.svg' alt='google' />
            </div>
            <div className="col ">
              <img src='https://assets.website-files.com/6448ae7242284b108e33c331/644a3e0fc9e2e84c9892b4c1_Client-02.svg' alt='target' />
            </div>
            <div className="col ">
              <img src='https://assets.website-files.com/6448ae7242284b108e33c331/644a3e0feea06f08be572644_Client-03.svg' alt='webflow' />
            </div>
            <div className="col ">
              <img className='brand' src='https://assets.website-files.com/6448ae7242284b108e33c331/644a3e0fb165b6c5b43cda3c_Client-04.svg' alt='brand' />
            </div>
            <div className="col ">
              <img src='https://assets.website-files.com/6448ae7242284b108e33c331/644a3e0fdb298eeb3a731e7c_Client-05.svg' alt='build up' />
            </div>


          </div>
        </div>
      </div> */}

      <div className='third-section flex-size'>
        <div className="container">
          <div className="row">
            <div className="col-6 ">
              <div className='Invation-content'>
                <h1>We Invest Solely In Disruptive Innovation</h1>
                <p>Disruptive innovation refers to the innovation that transforms expensive or highly sophisticated products or
                  services—previously accessible to a high-end or
                  more-skilled segment of consumers—to those that are more affordable and accessible to a broader population</p>
                <div className='invatrion-section-btn '>
                  <a className="btn px-5 py-3" href="#" role="button">ARK ETFs <span> →</span> </a>
                  <a className="btn  px-5 py-3" href="#" role="button">
                    ARK Venture Fund<span> →</span> </a>

                </div>
              </div>
            </div>
            <div className="col-6">
              <img src={img} alt='' />
            </div>

          </div>
        </div>
      </div>


      <div className='flip-box-section'>



        <div className="container">
          <h1 className='flip-h1  heading-h1main'>Investment <span className='change-c'>Strategies</span><hr /></h1>
          <p className="flip-p">ARK’s thematic investment strategies span market capitalizations, sectors, and geographies
            to focus on companies that we expect to be the leaders, enablers, and beneficiaries of disruptive innovation.
          </p>
          <div className="row">

            <Carousel
              responsive={responsive}
              containerClasclassName="carousel-container"
            >
              <div>   <div className="col mb">
                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      <div className="thumbnail">
                        <img className="img-responsive" src={education} alt="#" />
                        <div className="caption text-center">
                          <h3 className="">Heading for Column 1</h3>

                          <p className="">Here comes the text leaders, enablers, and beneficiaries of disruptive innovation.</p>
                        </div>
                      </div>
                    </div>
                    <div className="back">
                      <h2 className="">Here comes the back</h2>

                      <p className="">What I think is cool is to have a button at the flipped side, but this would have to bee looked into on mobiles, perharps use javascript to place them out of the flip box?</p>
                      <p className=""><a href="#" className="btn btn-light btn-colors" role="button">Button</a>

                      </p>
                    </div>
                  </div>
                </div>


              </div></div>
              <div>   <div className="col mb">
                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      <div className="thumbnail">
                        <img className="img-responsive" src={financial} alt="#" />
                        <div className="caption text-center">
                          <h3 className="">Heading for Column 1</h3>

                          <p className="">Here comes the text leaders, enablers, and beneficiaries of disruptive innovation.</p>
                        </div>
                      </div>
                    </div>
                    <div className="back">
                      <h2 className="">Here comes the back</h2>

                      <p className="">What I think is cool is to have a button at the flipped side, but this would have to bee looked into on mobiles, perharps use javascript to place them out of the flip box?</p>
                      <p className=""><a href="#" className="btn btn-light btn-colors" role="button">Button</a>

                      </p>
                    </div>
                  </div>
                </div>



              </div></div>
              <div> <div className="col mb">
                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      <div className="thumbnail">
                        <img src={gro} lt="#" className="" />
                        <div className="caption text-center">
                          <h3 className="">Heading for Column 1</h3>

                          <p className="">Here comes the text leaders, enablers, and beneficiaries of disruptive innovation.</p>
                        </div>
                      </div>
                    </div>
                    <div className="back">
                      <h2 className="">Here comes the back</h2>

                      <p className="">What I think is cool is to have a button at the flipped side, but this would have to bee looked into on mobiles, perharps use javascript to place them out of the flip box?</p>
                      <p className=""><a href="#" className="btn btn-light btn-colors" role="button">Button</a>

                      </p>
                    </div>
                  </div>
                </div>
              </div></div>
              <div>  <div className="col mb">
                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      <div className="thumbnail">
                        <img src={nature} alt="#" className="" />
                        <div className="caption text-center">
                          <h3 className="">Heading for Column 1</h3>

                          <p className="">Here comes the text leaders, enablers, and beneficiaries of disruptive innovation.</p>
                        </div>
                      </div>
                    </div>
                    <div className="back">
                      <h2 className="">Here comes the back</h2>

                      <p className="">What I think is cool is to have a button at the flipped side, but this would have to bee looked into on mobiles, perharps use javascript to place them out of the flip box?</p>
                      <p className=""><a href="#" className="btn btn-light btn-colors" role="button">Button</a>

                      </p>
                    </div>
                  </div>
                </div>
              </div></div>
              <div>  <div className="col mb">
                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      <div className="thumbnail">
                        <img src={financial} alt="#" className="" />
                        <div className="caption text-center">
                          <h3 className="">Heading for Column 1</h3>

                          <p className="">Here comes the text leaders, enablers, and beneficiaries of disruptive innovation.</p>
                        </div>
                      </div>
                    </div>
                    <div className="back">
                      <h2 className="">Here comes the back</h2>

                      <p className="">What I think is cool is to have a button at the flipped side, but this would have to bee looked into on mobiles, perharps use javascript to place them out of the flip box?</p>
                      <p className=""><a href="#" className="btn btn-light btn-colors" role="button">Button</a>

                      </p>
                    </div>
                  </div>
                </div>
              </div></div>
              <div>  <div className="col mb">
                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      <div className="thumbnail">
                        <img src={education} alt="#" className="" />
                        <div className="caption text-center">
                          <h3 className="">Heading for Column 1</h3>

                          <p className="">Here comes the text leaders, enablers, and beneficiaries of disruptive innovation.</p>
                        </div>
                      </div>
                    </div>
                    <div className="back">
                      <h2 className="">Here comes the back</h2>

                      <p className="">What I think is cool is to have a button at the flipped side, but this would have to bee looked into on mobiles, perharps use javascript to place them out of the flip box?</p>
                      <p className=""><a href="#" className="btn btn-light btn-colors" role="button">Button</a>

                      </p>
                    </div>
                  </div>
                </div>
              </div></div>

            </Carousel>
          </div>
        </div>

      </div>

      <div className='renewable-energy flex-size'>
        <div class="container">
          <div className='lithium-content mt-5 text-center'>
            <h1 className=' heading-h1main'><span className='change-c'>Lithium</span> Usage</h1>
            <hr />
            <p className='py-5'>According to the United Nations Department of Economic and Social Affairs (DESA),
              the demand for Lithium-ion (Li-ion) batteries has surged, increasing from 19 gigawatt hours
              (GWh) in 2010 to a substantial 285 GWh in 2019. Projections indicate that by 2030, this demand is
              expected to skyrocket to an impressive 2000 GWh, equivalent to approximately 8% of the global energy
              supply. This dramatic growth underscores the escalating significance of Li-ion batteries in meeting the world's
              energy needs and highlights their pivotal role in the evolving landscape of energy storage and sustainability.
            </p>
          </div>
          <div className='charts-section row'>
          <div className='col-6'>
            <h3 className='chat-content'>As western countries speed up, new players are expected to rise as per the chart below.</h3>
          </div>
            <div className='col-6'><img src={charts} alt=''/></div>
          </div>
          <div class="row">


            <div class="col-6">
              <div className='renewable-img'>
                <img src={ecosystem} alt='renew' />
              </div>
            </div>
            <div class="col-6 pt-5 ">
              <div className='renew-content content-align'>

                <div className='heading-renew'>
                  <h2 className='pb-3'>Key Facts Of Lithium</h2>
                  {/* <p className='py-2'>ARK identifies more innovation evolving today than ever before.
                   We believe it is changing lives and businesses across the globe
                   dramatically, creating opportunities to own the next big thing by investing in the future today.</p> */}

                  <p> <span className='fw-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record2-fill" viewBox="0 0 16 16">
                    <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                    <path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg></span> 	 In Li-ion cathodes, lithium constitutes just around 11% of the cathode's mass, even
                    though it is a vital component for batteries.</p>
                  <p> <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record2-fill" viewBox="0 0 16 16">
                    <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                    <path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg> </span>	Despite its significance in battery technology,
                    lithium accounts for less than approximately 6% of the overall cost of an electric vehicle (EV), indicating that fluctuations in lithium pricing have a negligible impact on EV costs.
                  </p>
                  <p>  <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record2-fill" viewBox="0 0 16 16">
                    <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                    <path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg></span>		A mere 2% of the total cost of an electric vehicle can be attributed to
                    lithium, emphasizing that its price variations have minimal influence on the overall cost of EVs.

                  </p>



                </div>

                <div className='invatrion-section-btn '>
                  <a className="btn px-5 py-3" href="#" role="button">Send and Receive <span> →</span> </a>


                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 
      <div className='tab-section'>

        <div className='container'>
          <div className='row'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={5}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Expertise</Nav.Link>
                    </Nav.Item>
                    <Tab.Pane eventKey="first">Our team possesses a wealth 
                    of knowledge and experience in the lithium mining industry. This depth 
                    of understanding equips us with the ability to discern the critical factors 
                    that drive success in this dynamic field. We leverage 
                    this expertise to make sound investment decisions, ensuring the best possible outcomes for our clients.</Tab.Pane>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Track Record</Nav.Link>
                    </Nav.Item>
                    <Tab.Pane eventKey="second">Demonstrating our exceptional proficiency,
                     we have consistently achieved a remarkable 30% return rate. This outstanding
                      track record is a testament to our capability to deliver tangible results and optimize
                       returns for our investors.
                     </Tab.Pane>
                    <Nav.Item>
                      <Nav.Link eventKey="third">	Network</Nav.Link>
                    </Nav.Item>
                    <Tab.Pane eventKey="third"> We have fostered strong connections within
                     the lithium mining community. These valuable relationships provide us with an edge,
                      granting early access to emerging investment prospects.
                     Our expansive network ensures that we remain at the forefront of this ever-evolving industry.</Tab.Pane>
                    <Nav.Item>
                      <Nav.Link eventKey="forth">	Transparency</Nav.Link>
                    </Nav.Item>
                    <Tab.Pane eventKey="forth">Our unwavering commitment to transparency and professionalism
                     underscores our approach to investments. We maintain an open and honest dialogue with our investors, 
                     keeping them updated on our investment strategies and performance. We are
                     readily available to address any questions or concerns, ensuring a seamless and reliable
                      investment experience.</Tab.Pane>
                  </Nav>
                </Col>
                <Col sm={7}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">      <img src={expertise} alt='renew' /></Tab.Pane>
                    <Tab.Pane eventKey="second">    <img src={recordtop} alt='renew' />
                     </Tab.Pane>
                    <Tab.Pane eventKey="third">    <img src={network} alt='renew' /></Tab.Pane>
                    <Tab.Pane eventKey="forth">    <img src={team} alt='renew' />.</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div> */}

      <div className='invester-place flex-size'>



        <div class="container ">
          <h1 className='text-center  invest-heading21 heading-h1main '>Why <span className='change-c'>Invest</span>  With Us <hr /></h1>
          <div class="row pt-5">
            <div class="col-6">
              <div className='investing-pl-content content-align'>
                <h1>Expertise</h1>
                <p className='p-2'>Our team possesses a wealth
                  of knowledge and experience in the lithium mining industry. This depth
                  of understanding equips us with the ability to discern the critical factors
                  that drive success in this dynamic field. We leverage
                  this expertise to make sound investment decisions, ensuring the best possible outcomes for our clients.</p>
              </div>
            </div>
            <div class="col-6  order-change">
              <div className='invester-im'>
                <img src={expertise} alt='flt' />
              </div>
            </div>

          </div>
          <div class="row">
            <div class="col-6 ">
              <div className='invester-im'>
                <img src={recordtop} alt='renew' />
              </div>
            </div>
            <div class="col-6">
              <div className='investing-pl-content content-align'>
                <h1>Track Record</h1>
                <p className='p-2'>Demonstrating our exceptional proficiency,
                  we have consistently achieved a remarkable 30% return rate. This outstanding
                  track record is a testament to our capability to deliver tangible results and optimize
                  returns for our investors.</p>
              </div>
            </div>


          </div>
          <div class="row">
            <div class="col-6">
              <div className='investing-pl-content content-align'>
                <h1>Network</h1>
                <p className='p-2'>We have fostered strong connections within
                  the lithium mining community. These valuable relationships provide us with an edge,
                  granting early access to emerging investment prospects.
                  Our expansive network ensures that we remain at the forefront of this ever-evolving industry.</p>
              </div>
            </div>
            <div class="col-6 order-change ">
              <div className='invester-im'>
                <img src={network} alt='renew' />
              </div>
            </div>

          </div>
          <div class="row">
            <div class="col-6 ">
              <div className='invester-im'>
                <img src={team} alt='renew' />
              </div>
            </div>
            <div class="col-6">
              <div className='investing-pl-content content-align'>
                <h1>Transparency</h1>
                <p className='p-2'>Our unwavering commitment to transparency and professionalism
                  underscores our approach to investments. We maintain an open and honest dialogue with our investors,
                  keeping them updated on our investment strategies and performance. We are
                  readily available to address any questions or concerns, ensuring a seamless and reliable
                  investment experience.</p>
              </div>
            </div>


          </div>
        </div>

      </div>



      <div className='blog-section'>
        <div class="container">
          <div class="row blog-heading-section">
            <div class="col-md-6 text-start ">
              <h2 class="section-title no-border v-3"><span>Latest</span> From Blog</h2>
              <p class="sub-section-title v-2">Etiam congue rhoncus gravida. Sed vel sodales tortor. Donec eget dictum enim. Donec tempus euismod metus ac maximus, aenean mattis.</p>
              <div class="mrb-45"></div>

            </div>
            <div class="col-md-6 text-end ">
              <a href='/blog' className='btn ' role='button'>Read More</a>
            </div>
          </div>


          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-md-6 col-xl-4">
                  <article class="post">
                    <div class="article-v2">
                      <figure class="article-thumb">
                        <a href="#">
                          <img src="https://unsplash.it/600/400/?random" alt="blog image" />
                        </a>
                      </figure>

                      <div class="article-content-main">
                        <div class="article-header">
                          <h2 class="entry-title"><a href="#">The day you become better.</a></h2>
                          <div class="entry-meta">
                            <div class="entry-date">July 25,2017</div>

                            <div class="entry-cat">
                              <a href="#">Halie Rose</a>
                            </div>

                          </div>

                        </div>

                        <div class="article-content">
                          <p>Maecenas tempus, tellus eget anyti condimentum rhoncus, sem quam.</p>
                        </div>

                        <div class="article-footer">
                          <div class="row">
                            <div class="col-6 text-left footer-link">
                              <a href="#" class="more-link">Read More</a>
                            </div>

                            <div class="col-6 text-right footer-meta">
                              <a href="#">65 <i class="pe-7s-comment"></i></a>
                              <a href="#">50 <i class="pe-7s-share"></i></a>
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </article>

                </div>


                <div class="col-md-6 col-xl-4">
                  <article class="post">
                    <div class="article-v2">
                      <figure class="article-thumb">
                        <a href="#">
                          <img src="https://unsplash.it/900/600/?random" alt="blog image" />
                        </a>
                      </figure>

                      <div class="article-content-main">
                        <div class="article-header">
                          <h2 class="entry-title"><a href="#">The day you become better.</a></h2>
                          <div class="entry-meta">
                            <div class="entry-date">July 25,2017</div>

                            <div class="entry-cat">
                              <a href="#">Halie Rose</a>
                            </div>

                          </div>

                        </div>

                        <div class="article-content">
                          <p>Maecenas tempus, tellus eget anyti condimentum rhoncus, sem quam.</p>
                        </div>

                        <div class="article-footer">
                          <div class="row">
                            <div class="col-6 text-left footer-link">
                              <a href="#" class="more-link">Read More</a>
                            </div>

                            <div class="col-6 text-right footer-meta">
                              <a href="#">65 <i class="pe-7s-comment"></i></a>
                              <a href="#">50 <i class="pe-7s-share"></i></a>
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </article>

                </div>


                <div class="col-md-6 col-xl-4">
                  <article class="post">
                    <div class="article-v2">
                      <figure class="article-thumb">
                        <a href="#">
                          <img src="https://unsplash.it/500/330/?random" alt="blog image" />
                        </a>
                      </figure>

                      <div class="article-content-main">
                        <div class="article-header">
                          <h2 class="entry-title"><a href="#">The day you become better.</a></h2>
                          <div class="entry-meta">
                            <div class="entry-date">July 25,2017</div>

                            <div class="entry-cat">
                              <a href="#">Halie Rose</a>
                            </div>

                          </div>

                        </div>

                        <div class="article-content">
                          <p>Maecenas tempus, tellus eget anyti condimentum rhoncus, sem quam.</p>
                        </div>

                        <div class="article-footer">
                          <div class="row">
                            <div class="col-6 text-left footer-link">
                              <a href="#" class="more-link">Read More</a>
                            </div>

                            <div class="col-6 text-right footer-meta">
                              <a href="#">65 <i class="pe-7s-comment"></i></a>
                              <a href="#">50 <i class="pe-7s-share"></i></a>
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </article>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      <Footer />
    </>

  )
}

export default Home
