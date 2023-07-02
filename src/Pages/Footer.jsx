import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center text-white p-10 bg-base-200 text-base-content rounded">
    <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-center gap-4">
            <a href="#about" className="">About Me</a>
            <a href="#contact" className="link link-hover">Contact Me</a>
        </div>
        <div className="mt-4 ">
            <div className="flex justify-center gap-4">
                <a href="https://www.facebook.com/barakatahmed.tanzil"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                <a href="https://www.instagram.com/barakatahmedtanzil/" className="text-3xl"> <FaInstagram/> </a>
            </div>
        </div>
        <div className="mt-4 text-center ">
            <p className="text-sm">Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
    </div>
</footer>

    );
};

export default Footer;