import React from 'react'
import Footer from './common/Footer'
import Header from './common/Header'
import Accordion from 'react-bootstrap/Accordion';
import faq from "./image/644f.png";


const Blog = () => {
    return (
        <>
            <Header />

            <div className='blog-section'>
                <div class="container">

                    <h1 className='  text-center heading-h1main'>Blog</h1><hr />

                    <div class="row pt-5 mt-5">
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

            <div className='faq-section py-5 mb-5' style={{ backgroundImage: `url(${faq})` }}>

                <div className='container py-5 mb-5'>
                    <h1 className='text-center'>Frequently Asked Questions  <hr /></h1>
                    <div className='row pt-3'>
                        <div className='col'>
                            <Accordion >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Accordion Item #3</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Accordion Item #4</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className='col'>
                            <Accordion  >
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Accordion Item #5</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Accordion Item #6</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>Accordion Item #7</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>Accordion Item #8</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog;
