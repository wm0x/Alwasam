import { Button } from "@/components/ui/button";

//icons
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";
import { PiSnapchatLogoBold } from "react-icons/pi";
import { IoMdLogIn } from "react-icons/io";

// btn to scroll to up..
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {

  
  return (
    <div className=" min-h-screen bg-[#1d1d1d] overflow-hidden">
      <header className="sticky top-0 py-4 z-50 flex items-center justify-center">
        <div className="container sticky top-0 ">
          <div className="relative flex justify-between border-2 border-[#d8b043]/15 p-2.5 rounded-xl overflow-hidden">
            <div className="absolute inset-0 backdrop-blur z-[-1]"></div>
            <div className="flex items-center">
              <img src="/logo-alwasam.png" alt="logo" className="h-15 w-12" />
            </div>
            <div className="flex items-center rounded-xl">
              <a href="/auth/login">
                <Button variant={"alwasam"} className="text-white">
                  تسجيل الدخول
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section */}
        <div className="relative flex flex-col items-center text-center">
          <svg
            version="1.1"
            id="layer-1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="500px"
            height="500px"
            viewBox="0 0 500 500"
            enableBackground="new 0 0 500 500"
            xmlSpace="preserve"
            className="animate-spin-slow"
          >
            <svg
              version="1.1"
              id="layer-1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="500px"
              height="500px"
              viewBox="0 0 500 500"
              enableBackground="new 0 0 500 500"
              xmlSpace="preserve"
              className="animate-spin-slow"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="50%" stopColor="#198f93" />
                  <stop offset="100%" stopColor="#198f93" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="50%" stopColor="#37c9be" />
                  <stop offset="100%" stopColor="#37c9be" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="grad3" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="50%" stopColor="#73f2dd" />
                  <stop offset="100%" stopColor="#73f2dd" stopOpacity="0" />
                </linearGradient>
              </defs>

              <path
                className="opacity-20 "
                fill="#661f29"
                d="M237.773,56.673c-98.48,0-178.314,79.834-178.314,178.315c0,98.48,79.834,178.314,178.314,178.314 c98.481,0,178.314-79.834,178.314-178.314C416.088,136.507,336.255,56.673,237.773,56.673z M237.774,384.817 c-82.749,0-149.829-67.079-149.829-149.829c0-82.75,67.081-149.831,149.829-149.831c82.751,0,149.828,67.082,149.828,149.831 C387.603,317.738,320.525,384.817,237.774,384.817z"
              />
              <path
                className="opacity-50"
                fill="#1d1d1d"
                d="M247.303,76.867c-98.481,0-178.315,79.834-178.315,178.317 c0,98.479,79.834,178.314,178.315,178.314c98.481,0,178.314-79.836,178.314-178.314C425.617,156.701,345.784,76.867,247.303,76.867z M247.304,405.013c-82.749,0-149.83-67.08-149.83-149.829c0-82.751,67.081-149.833,149.83-149.833s149.828,67.081,149.828,149.833 C397.132,337.933,330.053,405.013,247.304,405.013z"
              />
              <path
                className="opacity-50"
                fill="#883f2d"
                d="M262.227,56.672c-98.48,0-178.314,79.834-178.314,178.315 c0,98.48,79.834,178.315,178.314,178.315c98.481,0,178.314-79.835,178.314-178.315C440.541,136.506,360.708,56.672,262.227,56.672z M262.227,384.817c-82.748,0-149.829-67.079-149.829-149.83c0-82.75,67.081-149.831,149.829-149.831 c82.752,0,149.829,67.082,149.829,149.831C412.056,317.738,344.979,384.817,262.227,384.817z"
              />
              <path
                className="opacity-20 "
                fill="#882d37"
                d="M264.227,438.497c98.48,0,178.314-79.834,178.314-178.315c0-98.48-79.834-178.314-178.314-178.314 c-98.481,0-178.314,79.834-178.314,178.314C85.912,358.663,165.745,438.497,264.227,438.497z M264.226,110.353 c82.749,0,149.829,67.079,149.829,149.829s-67.08,149.831-149.829,149.831c-82.751,0-149.828-67.082-149.828-149.831 C114.397,177.432,181.475,110.353,264.226,110.353z"
              />
              <path
                className="opacity-50"
                fill="#661f29"
                d="M252.697,421.303c98.48,0,178.314-79.834,178.315-178.316 c0-98.479-79.834-178.314-178.315-178.314S74.383,144.508,74.383,242.986C74.383,341.469,154.216,421.303,252.697,421.303z M252.696,93.157c82.749,0,149.83,67.08,149.83,149.829c0,82.752-67.081,149.832-149.83,149.832s-149.828-67.081-149.828-149.832 C102.868,160.237,169.947,93.157,252.696,93.157z"
              />
              <path
                className="opacity-20"
                fill="#aa3c45"
                d="M232.773,438.498c98.48,0,178.314-79.834,178.314-178.315 c0-98.48-79.834-178.315-178.314-178.315c-98.481,0-178.314,79.835-178.314,178.315C54.459,358.664,134.292,438.498,232.773,438.498 z M232.773,110.353c82.748,0,149.829,67.079,149.829,149.83c-0.001,82.749-67.081,149.831-149.829,149.831 c-82.752,0-149.829-67.082-149.829-149.831C82.944,177.432,150.021,110.353,232.773,110.353z"
              />
            </svg>
          </svg>

          <div className="absolute top-[32%] left-[50%] transform -translate-x-1/2 text-4xl font-normal tracking-tight text-[#434343]">
            <h1 className="text-7xl font-bold tracking-tighter bg-gradient-to-br from-[#ff8a00] via-[#e52e71] to-[#882d37] text-transparent bg-clip-text py-2 ">
              الوسام
            </h1>
            <h1 className="text-3xl font-semibold tracking-tighter bg-gradient-to-r from-[#ff0099] via-[#d8b043] to-[#ff0099] text-transparent bg-clip-text mt-3">
              للتأجير
            </h1>
          </div>
          <p className="text-lg font-light text-white/60 mt-6 max-w-[40ch] mx-auto leading-relaxed">
            منصة إلكترونية مخصصة للموظفين فقط، تتيح لهم إمكانية تأجير السيارات
            بكل سهولة ومتابعة حالة الطلبات مما يعزز الكفاءة في إدارة أسطول
            السيارات وضمان سير العمليات بسلاسة
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center items-center px-4 relative">
          <img
            src="shape.png"
            alt=""
            className="absolute top-[-70px] left-[-0] max-w-none w-[100%] h-auto object-cover z-0"
          />

          <img
            src="/g90-removebg-preview.png"
            alt="g90"
            className="object-contain max-w-full h-auto z-10"
          /> 

          <div
            className="flex items-center justify-center text-center mt-8 w-full"
            dir="rtl"
          >
            <Button
              variant={"alwasam2"}
              className="w-full max-w-xs py-3 text-lg text-white"
            >
              <IoMdLogIn />
              تسجيل الدخول الان
            </Button>
          </div>
        </div>
      </div>
      <footer className="w-full bg-gradient-to-b from-[#1d1d1d] to-red-900 p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-6 gap-x-12 text-center lg:text-left">
          <div className="flex items-center space-x-4">
            <img
              src="/logo-alwasam.png"
              alt="KAU logo"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <ul className="flex gap-y-2 gap-x-8 text-3xl">
            <li>
              <a
                href="#" //whatsapp 
                className="text-slate-300 hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-110"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="#" //snapchat 
                className="text-slate-300 hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
              >
                <PiSnapchatLogoBold />
              </a>
            </li>
            <li>
              <a
                href="#" // twitter
                className="text-slate-300 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110"
              >
                <RiTwitterXFill />
              </a>
            </li>
            <li>
              <a
                href="#" // twitter
                className="text-slate-300 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110"
              >
                <CiLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <p className="block mt-8 text-center text-black-500 text-sm border-t border-white pt-4 text-red-400">
          جميع الحقوق محفوظه لشركة الوسام © 2025
        </p>
      </footer>
      <ScrollToTop></ScrollToTop>
    </div>
  );
}
