import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from './common/Header'
import Footer from './common/Footer'
import contactimg from "./image/TD.png"


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_4011qjf',
            'template_xubzh6a',
            form.current,
            'sKTAvKIsW880ZUSRU')
            .then((result) => {
                console.log(result.text);
                console.log("message sent successfully")
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <Header />


            <div className='contact-from-section'>
                <div className='container'>

                    <div class=" row  ">



                        <h2 class="h1-responsive font-weight-bold text-center heading-h1main">Contact us<hr /></h2>




                        <div class="col mb-md-0 mb-5 my-100">



                            <form id="contact-form" ref={form} onSubmit={sendEmail}>


                                <div class="row">

                                    <div class="col-md-12">
                                        <div class="md-form mb-3">
                                            <label for="name" class="">Your name</label>
                                            <input type="text" id="name" name="user_name" class="form-control" />

                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="md-form mb-3">
                                            <label for="email" class="">Your email</label>
                                            <input type="text" id="email" name="user_email" class="form-control" />

                                        </div>
                                    </div>


                                </div>




                                <div class="row">




                                    <div class="md-form mb-5">
                                        <label for="message">Your message</label>
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>

                                    </div>

                                </div>
                                <div class="md-form mb-3">
                                    <input type="submit" value="Send" />
                                </div>
                            </form>


                        </div>



                        <div class="col text-center contact-info my-100"  >
                            <ul class="list-unstyled mb-0">
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                                    <p>San Francisco, CA 94126, USA</p>
                                </li>

                                <li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                    <p>+ 01 234 567 89</p>
                                </li>

                                <li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                </svg>
                                    <p>contact@mdbootstrap.com</p>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>

<div  className='map-section'></div>


            <Footer />
        </>

    )
}

export default Contact;
