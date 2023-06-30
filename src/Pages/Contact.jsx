import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import gif from '../assets/tech/84924-email-sent.gif';

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
            <div className='max-w-screen-xl mx-auto'>
                <div className='flex gap-5'>
                    <form ref={form} onSubmit={sendEmail} className='text-white text-lg font-semibold space-y-3 w-1/2'>
                        <input style={glassStyle} type="text" name="name" placeholder='Your Name' required className='block w-full shadow-lg shadow-white' />
                        <input style={glassStyle} type="email" name="email" placeholder='Your Email' required className='block w-full shadow-lg shadow-white' />
                        <input style={glassStyle} type="text" name="subject" required placeholder='Subject' className='block w-full shadow-lg shadow-white' />
                        <textarea className='w-full shadow-lg shadow-white' style={glassStyle} name="message" id="" cols="30" rows="10" placeholder='Text Message' required></textarea>
                        <input style={glassStyle} type="submit" value="submit" className='block w-full shadow-lg shadow-white hover:shadow-blue-600 ' />
                    </form>
                    <img className=' rounded-full shadow-xl shadow-blue-600' src={gif} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;