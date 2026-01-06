
import { BiDownload, BiFile } from "react-icons/bi"

import { GiSkills } from "react-icons/gi"
import {  GrContactInfo } from "react-icons/gr"
import { HiHome } from "react-icons/hi"
const Sidebar = () => {
    return (
        <div className="bg-blue-800 fixed top-0 left-0 w-[200px] h-screen">
            <h1 className="pt-9 px-2 font-bold text-white text-xl font-serif">Opeyemi James</h1>

            <div className="pt-12">
                <button className="p-9 text-white py-4 flex hover:bg-gray-200 hover:text-blue-700 hover:rounded-xl cursor-pointer px-4  gap-5 items-center">
                   <HiHome size={20}/> HOME
                </button>
                <button className=" text-white py-4 flex hover:bg-gray-200 hover:rounded-xl hover:text-blue-700  cursor-pointer px-4 gap-5 items-center " >
                 <GiSkills size={20}/>  SKILLS
                </button>
                <button className="text-white py-4 flex hover:bg-gray-200 hover:rounded-xl hover:text-blue-700  cursor-pointer px-4 gap-5 items-center" >
                  <BiFile size={20}/>  PORTFOLIO
                </button>
                <button className="text-white py-4 flex hover:bg-gray-200 hover:rounded-xl hover:text-blue-700  cursor-pointer px-4 gap-5 items-center" >
                  <GrContactInfo size={20}/>  CONTACT
                </button>

            
            </div>
            <div className="pt-12 p-4">
                <button className="bg-blue-500 text-white rounded-2xl p-4 flex gap-2 items-center ">
               <BiDownload size={20}/> Download CV
            </button>
            </div>
            
        </div>
    )
}

export default Sidebar
