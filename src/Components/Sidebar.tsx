
import { BiDownload, BiFile } from "react-icons/bi"

import { GiSkills } from "react-icons/gi"
import { GrContactInfo } from "react-icons/gr"
import { HiHome } from "react-icons/hi"
const Sidebar = () => {
    return (
        <div className="bg-blue-900 fixed top-0 left-0 w-[200px] h-screen hidden md:block
">
            <h1 className="pt-9 px-2 font-bold text-white text-xl font-serif">Opeyemi James</h1>

            <div className="pt-12">
                <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="p-9 text-white py-4 flex hover:bg-gray-200 hover:text-blue-800 hover:rounded-xl cursor-pointer px-4  gap-5 items-center">
                    <HiHome size={20} /> HOME
                </button>
                <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className=" text-white py-4 flex hover:bg-gray-200 hover:rounded-xl hover:text-blue-800  cursor-pointer px-4 gap-5 items-center " >
                    <GiSkills size={20} />  SKILLS
                </button>
                <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="text-white py-4 flex hover:bg-gray-200 hover:rounded-xl hover:text-blue-800  cursor-pointer px-4 gap-5 items-center" >
                    <BiFile size={20} />  PORTFOLIO
                </button>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-white py-4 flex hover:bg-gray-200 hover:rounded-xl hover:text-blue-800  cursor-pointer px-4 gap-5 items-center" >
                    <GrContactInfo size={20} />  CONTACT
                </button>


            </div>
            <div className="pt-12 p-4">
                <a
                    href="/my-portfolio-website/public/Copy of JAMES OPEYEMI PRAISE CV.pdf"
                    download='/my-portfolio-website/public/Copy of JAMES OPEYEMI PRAISE CV.pdf'
                    className="bg-blue-600 text-white rounded-2xl p-4 flex gap-2 items-center hover:bg-blue-700 transition-colors"
                >
                    <BiDownload size={20} /> Download CV
                </a>
            </div>


        </div>
    )
}

export default Sidebar
