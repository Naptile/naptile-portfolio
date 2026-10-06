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
            
            title:"Certificate in Cybersecurity",
            source:"IBM",
            description:"Got a certification from power Learn project Africa for accomplishing a 16week training on Software development with specialization in MERN stack",
            image:"/Ai.png",
            date:"April 2025"

        
        },
         {
            
            title:"Certificate in Web Development",
            source:"Power Learn Project",
            description:"Got a certification from power Learn project Africa for accomplishing a 16week training on Software development with specialization in MERN stack",
            image:"/ibmWeb.png",
            date:"November 2025"
        
        },
        {
            
            title:"Certificate in Cybersecurity",
            source:"TechCrush",
            description:"Got a certification from power Learn project Africa for accomplishing a 16week training on Software development with specialization in MERN stack",
            image:"/cybersecurity.png",
            date:"November 2025"
        
        },
        {
            
            title:"Diploma in Cyber And Cloud Security",
            source:"Panoramics synergy & Transformation college",
            description:"Got a certification from power Learn project Africa for accomplishing a 16week training on Software development with specialization in MERN stack",
            image:"/cyberAndCloudSecurity.jpeg",
            date:"November, 2025"
        
        },
         {
            
            title:"Certificate in Software Development",
            source:"Power Learn Project",
            description:"Got a certification from power Learn project Africa for accomplishing a 16week training on Software development with specialization in MERN stack",
            image:"/aisafari.png",
            date:"June 2026"
        
        }
    ]
    return(
        <div className="min-w-full">
            <h1 className="text-4xl font-bold text-center  ">Certification</h1>
            <div className="grid grid-cols cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
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