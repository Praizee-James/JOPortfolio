import CakeDelivery from '../assets/CakeDelivery.png';
import LuxuryPerf from '../assets/LuxuryPerf.png';
import Omoney from '../assets/Omoney.png';
import TalentLink from '../assets/TalentLink.png';
import Netflix from '../assets/Netflix.png'
import { FaReact, FaJsSquare,FaGithub,FaCloudDownloadAlt, FaCss3 } from 'react-icons/fa';
 
const Works = () => {
    const WorkImages =[
        {
        id: 1,
       title:'OMoney',
       image: Omoney,
       link:'https://omoney-website.vercel.app/' ,
       Github : 'https://github.com/Praizee-James/Omoney-website',
       tech:[
        
        <FaJsSquare key="js" />,
        <FaCss3 key="Tailwind css" />,
        
       ],
    },
     {
        id:2,
       title:'TalentLink',
       image:TalentLink,
       link:'https://talent-link-two.vercel.app/' ,
       Github : 'https://github.com/Praizee-James/TalentLink',
       tech:[
        <FaReact key="react" />,
        <FaJsSquare key="js" />,
        <FaCloudDownloadAlt key='API' />,
        <FaCss3 key="Tailwind css" />,
       ],
    },
     {
        id:3,
       title:'Luxury Perfume',
       image:LuxuryPerf,
       link:'https://luxury-perf.vercel.app/' ,
       Github : 'https://github.com/Praizee-James/Luxury-perf',
       tech:[
        <FaReact key="react" />,
        <FaJsSquare key="js" />,
        <FaCss3 key="Tailwind css" />,
       ],
    },
    {
        id: 4,
       title:'Fluffy Treats',
       image:CakeDelivery,
       link:'https://cake-website-iota-bice.vercel.app/' ,
       Github : 'https://github.com/Praizee-James/Cake-website',
       tech:[
        <FaReact key="react" />,
        <FaJsSquare key="js" />,
         <FaCss3 key="Tailwind css" />,
       ],
    },
     {
        id:5,
       title:'Netflix clone',
       image:Netflix,
       link:'hhttps://first-netflix-clone-one.vercel.app/' ,
       Github : 'https://github.com/Praizee-James/first-netflix-clone',
       tech:[
        <FaReact key="react" />,
        <FaJsSquare key="js" />,
        <FaCloudDownloadAlt key='API' />,
       ],
    },
     
 ]
  return (
    <section id="portfolio" className="ml-0 md:ml-[200px] lg:ml-[200px] p-6 sm:p-8 lg:p-10   min-h-screen  bg-blue-900 flex flex-col  gap-6">
        <h1 className='text-3xl font-bold text-white mx-auto'>Portfolio</h1>
      <div className='grid 
  grid-cols-1 
  sm:grid-cols-1
  md:grid-cols-2 
  lg:grid-cols-3 gap-4 mx-auto '>
        {WorkImages.map((WorkImage,index) => (
            <a key ={index} 
            href={WorkImage.link}
            target='_blank'
            rel='noopener noreferrer'
            className=" w-full max-w-sm md:max-w-full mx-auto group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
                {/* Image */}
                <div className='overflow-hidden aspect-[16/9]'>
                    <img src={WorkImage.image} alt="" className=" w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                {/* Title body */}
                <div className="p-6">
                    <h2 className="text-xl font-semibold  mb-4 group-hover:text-blue-700 transition-colors">{WorkImage.title}</h2>
                {/* Github link */}
                <div>
                     <a key ={index} 
            href={WorkImage.Github}
            target='_blank'
            rel='noopener noreferrer'
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700 transition-colors"
            >
<FaGithub className="text-lg" />
    View on GitHub
            </a>
            
                    
                </div>
                {/* Technology used */}
                <div className="flex gap-4 text-2xl ">
                    {WorkImage.tech}
                </div>
                </div>
            </a>
        ))}
      </div>
     
    </section>
  )
}

export default Works
