export default function Certification(){
    const certificates =[
        {
            title:"Certificate in Software Development",
            source:"Power Learn Project",
            description:"Got a certification from power Learn project Africa for accomplishing a 16week training on Software development with specialization in MERN stack",
            image:"/mern.png",
            date:"December 2024"
        },
        {
            
            title:"Certificate in Artificial Intelligence",
            source:"IBM",
            description:"Got a certification from IBM for accomplishing a online course on Artificial Intelligence and its applications in modern technology",
            image:"/Ai.png",
            date:"April 2025"

        
        },
         {
            
            title:"Certificate in Web Development",
            source:"IBM",
            description:"Got a certification from IBM for accomplishing a online course on Web Development and its applications in modern technology",
            image:"/ibmWeb.png",
            date:"November 2025"
        
        },
        {
            
            title:"Certificate in Cybersecurity",
            source:"TechCrush",
            description:"Got a certification from TechCrush for accomplishing a online course on Cybersecurity and its applications in modern technology",
            image:"/cybersecurity.png",
            date:"November 2025"
        
        },
        {
            
            title:"Diploma in Cyber And Cloud Security",
            source:"Panoramics synergy & Transformation college",
            description:"Got a certification for accomplishing a  training on Cyber and Cloud Security ",
            image:"/cyberAndCloudSecurity.jpeg",
            date:"November, 2025"
        
        },
         {
            
            title:"Certificate in AI Safari",
            source:"Power Learn Project",
            description:"Got a certification from power Learn project Africa for accomplishing a 4week training on Artificial Intelligence and its applications in modern technology",
            image:"/aisafari.png",
            date:"June 2026"
        
        }
    ]
    return(
        <div id="certification" className=" flex flex-col justify-center items-center gap-5 px-4 py-10 bg-[#0b0b0c] text-white">
            <h1 className="text-4xl font-bold text-center  ">Certification</h1>
            <div className="grid grid-cols cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 ">
            {certificates.map((certificate,index)=>(
                <div key={index}
                className="flex  flex-col w-full gap-2 p-5 border border-orange-700 border-4 border-l-purple-700 border-r-orange-500   w-full  sm:w-md bg-gradient-to-r from-orange-500 via-indigo-500 to-purple-700 mt-7 rounded-xl shadow-lg  ">
                    <div className="border border-4 rounded-3xl shadow-sm p-1 hover:scale-107 ">
                        <img src={certificate.image} alt="mern certificate " className="rounded-2xl w-full" /></div>
                    <h1 className="text-2xl font-bold whitespace-nowrap">{certificate.title}</h1>
                    <h2 className="text-lg text-center font-mono text-slate-300">{certificate.source}</h2>
                    <h2 className="text-green-00 text-md font-serif ">{certificate.description}</h2>
                    <p className="text-right text-slate-300">{certificate.date}</p>
                </div>
            ))}
            </div>
        </div>
    )
}