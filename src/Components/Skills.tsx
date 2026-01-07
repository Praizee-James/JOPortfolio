import { motion } from "framer-motion"
const Skills = () => {
    return (
        <section className="ml-[200px] p-10 bg-white flex flex-col items-center gap-6">
            <div className="w-60 h-10 bg-blue-800 text-white items-center mx-auto text-center rounded-2xl">
                <h1 className="font-bold font-serif text-2xl">SKILLS</h1>
            </div>
            <div className=" flex flex-col sm:flex-row flex-wrap justify-center gap-6">
                <motion.div className="w-[200px] h-[300px] bg-blue-800 text-white rounded-full  items-center p-4 text-center flex flex-col justify-center  p-4 text-center" animate={{ y: [-20, 0] }}  // lift up 20px then drop
                    transition={{
                        duration: 1,
                        repeat: 0,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}>

                    <h1 className="text-xl font-bold mb-2">Core Technologies</h1>
                    <h2>HTML5</h2>
                    <h2>CSS3</h2>
                    <h2>JavaScript (ES6+)</h2>
                    <h2>TypeScript</h2>


                </motion.div>
                

                <motion.div className="w-[200px] h-[300px] bg-blue-800 text-white rounded-full items-center flex flex-col justify-center  p-4 text-center" animate={{ y: [-20, 0] }}  // lift up 20px then drop
                    transition={{
                        duration: 1,
                        repeat: 0,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }} >
                    <h1 className="text-xl font-bold mb-2">Frameworks & Libraries</h1>
                    <h2>React</h2>
                    <h2>TailwindCSS</h2>
                    <h2>Framer Motion</h2>
                </motion.div>

                <motion.div className="w-[200px] h-[300px] bg-blue-800 text-white rounded-full items-center flex flex-col justify-center  p-4 text-center" animate={{ y: [-20, 0] }}  // lift up 20px then drop
                    transition={{
                        duration: 1,
                        repeat: 0,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}>
                    <h1 className="text-xl font-bold mb-2">Version Control & Tools</h1>
                    <h2>Git </h2>
                    <h2>GitHub</h2>
                    <h2>VS Code</h2>
                    
                </motion.div>
                <motion.div className="w-[200px] h-[300px] bg-blue-800 text-white rounded-full items-center flex flex-col justify-center  p-4 text-center" animate={{ y: [-20, 0] }}  // lift up 20px then drop
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}>
                    <h1 className="text-xl font-bold mb-2">Other Skills</h1>
                    <h2>REST APIs</h2>
                    <h2>TypeScript</h2>
                    <h2>Responsive Design</h2>

                </motion.div>
                <motion.div className="w-[200px] h-[300px] bg-blue-800 text-white rounded-full items-center flex flex-col justify-center  p-4 text-center" animate={{ y: [-20, 0] }}  // lift up 20px then drop
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}>
                    <h1 className="text-xl font-bold mb-2">Build Tools & Environment</h1>
                    <h2>Vite</h2>
                    <h2>npm/Yarn</h2>
                    
                </motion.div>
                <motion.div className="w-[200px] h-[300px] bg-blue-800 text-white rounded-full items-center flex flex-col justify-center  p-4 text-center" animate={{ y: [-20, 0] }}  // lift up 20px then drop
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}>
                    <h1 className="text-xl font-bold mb-2">Soft Skills</h1>
                    <h2>Problem-solving</h2>
                    <h2>Communication</h2>
                    <h2>Adaptability</h2>
                    <h2>Teamwork</h2>
                </motion.div>
               
            </div>

        </section>
    )
}

export default Skills
