import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ChevronUp,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1f2060] text-white py-10 px-5 md:px-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-bold">
              <span className="text-orange-400">Infi</span>Lend
            </h2>
            <p className="text-sm mt-2 opacity-80">
              National Portal for Credit Linked Government Schemes
            </p>
          </div>

          {/* Middle Section - Links */}
          <div>
            <h3 className="font-semibold">Links</h3>
            <ul className="mt-2 space-y-2 text-sm opacity-80">
              <li>
                <a href="#">Schemes</a>
              </li>
              <li>
                <a href="#">Our Partners</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Grievances</a>
              </li>
              <li>
                <a href="#">RBI Ombudsman</a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <Facebook className="w-5 h-5 cursor-pointer" />
              <Instagram className="w-5 h-5 cursor-pointer" />
              <Twitter className="w-5 h-5 cursor-pointer" />
              <Linkedin className="w-5 h-5 cursor-pointer" />
              <Youtube className="w-5 h-5 cursor-pointer" />
            </div>
          </div>

          {/* Right Section - Contact */}
          <div>
            <h3 className="font-semibold">Contact Us</h3>
            <p className="text-sm mt-2 opacity-80">For Borrower</p>
            <div className="flex items-center space-x-2 mt-1">
              <Mail className="w-5 h-5" />
              <span className="text-sm">customer.support@infilend.in</span>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <Phone className="w-5 h-5" />
              <span className="text-sm">+91 xxxxxxxxx</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-500 pt-4 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <div className="flex space-x-5">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Disclaimer</a>
          </div>
          <p className="mt-2 md:mt-0">
            &copy;  All Rights Reserved.
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button
          title="Scroll to top"
          className="fixed bottom-5 right-5 bg-orange-500 p-3 rounded-full shadow-lg"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
