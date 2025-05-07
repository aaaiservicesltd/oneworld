
import React from 'react';
import Image from 'next/image';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

export default function Home() {
  return (
    <>
      <Header />

      <Carousel
        responsive={{
          desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
          tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
        }}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        showDots
        arrows
      >
        {['85.jpg', '2main.jpg', 'untitled-design.gif'].map((file, index) => (
          <div className="main-section" key={index} style={{
            // backgroundImage: `url(/public/image/${file})`,
            backgroundImage: `url(/image/${file})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '600px'
          }}>
            <div className="main-second d-flex align-items-center h-100">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 text-white">
                    <h1 className="display-5 fw-bold">In publishing and graphic design</h1>
                    <p className="lead">Lorem ipsum is placeholder text commonly used to demonstrate the visual form of a document.</p>
                    <div className="d-flex gap-3 mt-3">
                      <a className="btn btn-light px-4 py-2" href="#">PRESS RELEASE</a>
                      <a className="btn btn-light px-4 py-2" href="#">EXPLORE RIZE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>We Invest Solely In Disruptive Innovation</h2>
              <p>Disruptive innovation transforms expensive or sophisticated products into those more affordable and accessible to a broader population.</p>
              <div className="d-flex gap-3 mt-3">
                <a className="btn btn-primary px-4 py-2" href="#">ARK ETFs →</a>
                <a className="btn btn-outline-primary px-4 py-2" href="#">ARK Venture Fund →</a>
              </div>
            </div>
            <div className="col-md-6">
              <Image src="/image/investmentl.gif" alt="Innovation" width={600} height={400} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Investment Strategies</h2>
          <p className="text-center mb-5">We focus on companies that lead and benefit from disruptive innovation.</p>
          <Carousel responsive={responsive}>
            {['education.png', 'financial.png', 'gro.png', 'natural.png'].map((file, i) => (
              <div key={i} className="px-3">
                <div className="card shadow-sm h-100">
                  <Image src={`/image/${file}`} alt={file} width={500} height={300} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Strategy #{i + 1}</h5>
                    <p className="card-text text-center">Focused on high-impact sectors and scalable technologies.</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h2>Lithium Usage</h2>
          <p className="mb-4">Demand for Lithium-ion batteries is projected to reach 2000 GWh by 2030, representing 8% of global energy supply.</p>
          <div className="row align-items-center">
            <div className="col-md-6">
              <Image src="/image/chart.png" alt="Chart" width={500} height={300} />
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled text-start">
                <li>🔘 Lithium is only ~11% of cathode mass.</li>
                <li>🔘 Makes up 6% of total EV cost.</li>
                <li>🔘 Has minor price impact on total vehicle cost.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Why Invest With Us</h2>
          {[
            { title: 'Expertise', image: 'finance.gif', text: 'Deep knowledge of the lithium mining industry.' },
            { title: 'Track Record', image: '16.gif', text: '30% consistent returns through data-driven strategies.' },
            { title: 'Network', image: '1-A.gif', text: 'Strong industry connections for early access opportunities.' },
            { title: 'Transparency', image: '166.gif', text: 'Open investor dialogue and full strategy visibility.' }
          ].map((item, i) => (
            <div key={i} className="row align-items-center mb-5">
              <div className={`col-md-6 ${i % 2 === 1 ? 'order-md-2' : ''}`}>
                <Image src={`/image/${item.image}`} alt={item.title} width={500} height={300} />
              </div>
              <div className="col-md-6">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
