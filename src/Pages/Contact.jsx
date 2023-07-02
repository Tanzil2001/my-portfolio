import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import gif from '../assets/tech/84924-email-sent.gif';
import {  FaWhatsapp } from 'react-icons/fa';
import {  SiGmail } from 'react-icons/si';

const Contact = () => {

    const glassStyle = {
        backgroundColor: 'transparent',
        backdropFilter: 'blur(5px)',
        border: 'none',
        padding: '20px',
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6yvz1rm', 'template_91y1oue', form.current, '3pg1EXFHlCl7fIUsf')
            .then((result) => {
                alert('email send successfully')
                console.log(result);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div id='contact' className="py-24  bg-[#252731]">
            <div className='max-w-screen-xl mx-auto p-10 md:p-0'>
                <div className='text-center text-white text-5xl font-semibold mb-32'>
                    <p>Contact With Me</p>
                </div>
                <div className='flex flex-col-reverse md:flex-row  gap-5'>
                    <form ref={form} onSubmit={sendEmail} className='text-white text-lg font-semibold space-y-3 md:w-1/2 w-full mb-10 md:mb-0'>
                        <input style={glassStyle} type="text" name="name" placeholder='Your Name' required className='block w-full shadow-lg shadow-white' />
                        <input style={glassStyle} type="email" name="email" placeholder='Your Email' required className='block w-full shadow-lg shadow-white' />
                        <input style={glassStyle} type="text" name="subject" required placeholder='Subject' className='block w-full shadow-lg shadow-white' />
                        <textarea className='w-full shadow-lg shadow-white' style={glassStyle} name="message" id="" cols="30" rows="10" placeholder='Text Message' required></textarea>
                        <input style={glassStyle} type="submit" value="submit" className='block w-1/2 md:w-full shadow-lg shadow-white hover:shadow-blue-600 ' />
                    </form>
                    <img className=' rounded-full shadow-xl shadow-blue-600' src={gif} alt="" />
                </div>
                <div className='bg-[#252731] shadow-xl shadow-green-600 md:w-1/2 w-full mx-auto rounded-full text-2xl text-green-600 text-center mt-10  p-5'>
                    <p className='flex items-center justify-center gap-3'><FaWhatsapp/><span>(+880) 1912818889</span></p>
                </div>
                <div className='bg-[#252731] shadow-xl shadow-green-600 md:w-1/2 w-full mx-auto rounded-full text-2xl text-green-600 text-center mt-10  p-5'>
                    <p className='flex items-center justify-center gap-3'><SiGmail/><span>barakattanzil@gmail.com</span></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;