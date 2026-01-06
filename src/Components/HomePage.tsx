import ProfilePicture from "../assets/ProfilePicture.jpg";

import { BiDownload } from "react-icons/bi"
import { GrContactInfo } from "react-icons/gr"
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const HomePage = () => {
    return (
        <div className="ml-[200px] font-serif ">
        <section className=" p-32 flex gap-8 items-center min-h-screen">
            <div className="text-xl ">
                <motion.h1 className="text-3xl font-bold" animate={{
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
                <h1 className="text-2xl"> <Typewriter
                    words={["Frontend Web Developer,"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={60}
                    delaySpeed={1500}
                /></h1>
                <p className="">I build captivating,user-friendly websites that transform your ideas into engaging experiences and promotes business processes.</p>
                <div className="pt-12 p-4 flex gap-4">
                    <button className="bg-blue-800 text-white rounded-2xl p-4 flex gap-2 items-center hover:bg-white  hover:text-blue-700  ">
                        <GrContactInfo size={20} /> Contact Me
                    </button>
                    <button className="bg-blue-800 text-white rounded-2xl p-4 flex gap-2 items-center hover:bg-white  hover:text-blue-700 ">
                        <BiDownload size={20} /> Download CV
                    </button>
                </div>
            </div>
            <div>
                <img src={ProfilePicture} alt="" className="w-96 h-64 rounded-full object-cover" />
            </div>
        </section>
        </div>
    )
}

export default HomePage
