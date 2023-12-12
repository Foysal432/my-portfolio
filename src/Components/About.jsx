import { FaAnglesRight } from "react-icons/fa6";
const About = () => {
    return(
        <div>
            <div className="  bg-base-200">
  <div className="hero-content   lg:flex-row-reverse">
    <div className="text-center w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">About Me</h1>
      <p className="py-6">I Can Develop Your Website if  You Want</p>
      <div className="grid grid-cols-2 gap-2">
        <h1 className="flex items-center "> <span className="text-orange-400 mr-2"><FaAnglesRight /></span> Work simple and cline design</h1>
        <h1 className="flex items-center "> <span className="text-orange-400 mr-2"><FaAnglesRight /></span> Web Design Full stack</h1>
        <h1 className="flex  "> <span className="text-orange-400 mr-2"><FaAnglesRight /></span> New idea and user friendly design</h1>
        <h1 className="flex  "> <span className="text-orange-400 mr-2"><FaAnglesRight /></span> New idea and user friendly design</h1>
      </div>
      <div>
        <button className="btn bg-orange-400 mt-5">Download My Resume</button>
      </div>
    </div>
    <div className="card shrink-0  max-w-sm  w-1/2">
    <div>
        <img src="https://i.ibb.co/gmRKWvq/Remove-background-project-min-1.png" alt="" />
    </div>
    </div>
  </div>
</div>
        </div>
    )}
export default About;