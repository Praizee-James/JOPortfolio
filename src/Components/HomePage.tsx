import ProfilePicture from "../assets/ProfilePicture.jpg";

import { BiDownload } from "react-icons/bi"
import { GrContactInfo } from "react-icons/gr"
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const HomePage = () => {
    return (
        <div className="ml-0 md:ml-[200px] font-serif ">
            <section id="home" className=" py-20 px-6 sm:px-10 md:px-20 lg:px-32 flex flex-col-reverse md:flex-row gap-10 items-center justify-center min-h-screen  ">
                <div className="text-center md:text-left  ">
                    <motion.h1 className=" text-3xl font-bold" animate={{
                        color: [
                            "#000000", //black
                            "#1e40af", // blue
                            // "#FFFFFF", //white
                            "#dc2626", // red
                            //   "#1e40af", // blue
                        ],
                    }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}>
                        Hi! I'm Opeyemi James,</motion.h1>
                    <h1 className="mt-2 text-xl sm:text-2xl"> <Typewriter
                        words={["Frontend Web Developer,"]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={60}
                        delaySpeed={1500}
                    /></h1>
                    <p className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start  text-gray-700">I build captivating,user-friendly websites that transform your ideas into engaging experiences and promotes business processes.</p>
                    <div className="mt-10 flex flex-col md:flex-row md:items-start gap-4">
                        <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="bg-blue-900 text-white rounded-2xl px-6 py-3 flex gap-2 items-center hover:bg-white  hover:text-blue-800  ">
                            <GrContactInfo size={20} /> Contact Me
                        </button>
                        <div className="">
                <a
                    href="/my-portfolio-website/public/Copy of JAMES OPEYEMI PRAISE CV.pdf"
                    download='/my-portfolio-website/public/Copy of JAMES OPEYEMI PRAISE CV.pdf'
                    className="bg-blue-900 text-white rounded-2xl px-6 py-3 flex gap-2 items-center hover:bg-white  hover:text-blue-800 "
                >
                    <BiDownload size={20} /> Download CV
                </a>
            </div>
                    </div>
                </div>
                <div className="flex justify-center flex-shrink-0">
                    <img src={ProfilePicture} alt="" className="w-40 h-40
          sm:w-56 sm:h-56
          md:w-64 md:h-64 rounded-full object-cover" />
                </div>
            </section>
        </div>
    )
}

export default HomePage
