import CakeDelivery from '../assets/CakeDelivery.png';
import DataWebsite from '../assets/DataWebsite.png';
import NewsWebsite from '../assets/NewsWebsite.png'
import { FaReact,FaJsSquare,FaGithub } from 'react-icons/fa';
 
const Works = () => {
    const WorkImages =[
    {
        id: 1,
       title:'Fluffy Treats',
       image:CakeDelivery,
       link:'https://cake-website-iota-bice.vercel.app/' ,
       Github : 'https://github.com/Praizee-James/Cake-website',
       tech:[
        <FaReact key="react" />,
        <FaJsSquare key="js" />,
       ],
    },
     {
        id:2,
       title:'DailyNews App',
       image:NewsWebsite,
       link:'https://my-news-app-omega.vercel.app/' ,
       Github : 'https://github.com/Praizee-James/my-news-app',
       tech:[
        <FaReact key="react" />,
        <FaJsSquare key="js" />,
        
       ],
    },
     {
        id:3,
       title:'Grow with Data Website',
       image:DataWebsite,
       link:'https://new-data-website.vercel.app/' ,
       Github : 'https://github.com/Praizee-James/React-Website',
       tech:[
        <FaReact key="react" />,
        <FaJsSquare key="js" />,
       ],
    },
 ]
  return (
    <section className="ml-[200px]  min-h-screen p-10 bg-blue-700 flex flex-col  gap-6">
        <h1 className='text-3xl font-bold text-white'>Portfolio</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 '>
        {WorkImages.map((WorkImage,index) => (
            <a key ={index} 
            href={WorkImage.link}
            target='_blank'
            rel='noopener noreferrer'
            className="group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
                {/* Image */}
                <div className='overflow-hidden'>
                    <img src={WorkImage.image} alt="" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
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
