import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[url('https://i.ibb.co/ch1ZYQnZ/13.jpg')] bg-repeat py-16 px-8 md:px-20 text-[#382b1f] mt-20">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex flex-col items-start">
            <img
              src="https://i.ibb.co/MD0Sxd81/logo1.png"
              alt="Logo"
              className="w-16 h-16 mb-2"
            />
            <h2 className="text-2xl font-bold mb-2">Espresso Emporium</h2>
            <p className="text-sm mb-4">
              Always ready to be your friend. Come & Contact with us to share your memorable moments,
              to share with your best companion.
            </p>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-[#8b4513]"><FaFacebookF /></a>
              <a href="#" className="hover:text-[#8b4513]"><FaTwitter /></a>
              <a href="#" className="hover:text-[#8b4513]"><FaInstagram /></a>
              <a href="#" className="hover:text-[#8b4513]"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <h3 className="text-xl font-bold">Get in Touch</h3>
            <p className="flex items-center gap-2"><FaPhoneAlt /> +88 01533 333 333</p>
            <p className="flex items-center gap-2"><FaEnvelope /> info@gmail.com</p>
            <p className="flex items-center gap-2"><FaMapMarkerAlt /> 72, Wall street, King Road, Dhaka</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Connect with Us</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="input input-bordered w-full" />
            <input type="email" placeholder="Email" className="input input-bordered w-full" />
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Message"
              rows={4}
            ></textarea>
            <button className="btn btn-outline border-[#382b1f] text-[#382b1f] hover:bg-[#382b1f] hover:text-white">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
