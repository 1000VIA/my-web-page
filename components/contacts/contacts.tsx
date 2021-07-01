import Link from "next/link";
import {
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiMail,
  FiSmartphone,
} from "react-icons/fi";
import Footer from "../footer/footer";

const Contacts = () => {
  return (
    <div className="flex flex-col w-full h-screen  bg-gradient-to-r from-gray-500 to-black">
      <h1 className="text-white font-bold text-3xl flex justify-center pt-4">
        Contact me
      </h1>
      <div className="grid grid-cols-2 gap-4 p-4">
        <Link href="https://github.com/1000VIA">
          <a className="justify-self-center  h-36 w-36  flex items-center justify-center bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-2xl  ">
            <FiGithub className="text-9xl text-white" />
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/milvia-alvarez-178a1b180/">
          <a className="justify-self-center  h-36 w-36  flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl">
            <FiLinkedin className="text-9xl text-white" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/milviaalvarez11/">
          <a className="justify-self-center h-36 w-36  flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
            <FiInstagram className="text-9xl text-white" />
          </a>
        </Link>
        <Link href="https://twitter.com/MilviaAlvarez11">
          <a className="justify-self-center  h-36 w-36  flex items-center justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-2xl">
            <FiTwitter className="text-9xl text-white" />
          </a>
        </Link>
      </div>
      <div className="h-full w-full flex justify-center">
        <Link href="https://www.facebook.com/MilviaAlvarez11">
          <a className="h-36 w-36  flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500   rounded-2xl">
            <FiFacebook className="text-9xl text-white" />
          </a>
        </Link>
      </div>

      <Footer />
    </div>
  );
};
export default Contacts;
