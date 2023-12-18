// "use client"
// import "./Hero.css" 
// import Image from 'next/image'; 
// import Illustration from "../../../Assets/Hero/Illustration.svg" 
// import DeafultButton from "../../Components/DeafultButton/DeafultButton"



// const Hero = () => {
//   return (
//     <div className=" container-fluid p-5  Hero ">  
//      <div className="row  text-white ">
//       <div className=" content  col">
//         <p className="h1">  Learn New Course Gain More Skills </p>
//       <p>Explore Indonsias ground-breaking research and education
//       now.Watch this space,as eligible courses will continue to be
//       added as they become available</p>  
//       <form >
//         <input className="input-email-data  form-control px-3  rounded-5" type="text" placeholder="Enter your email adress" />
//       </form>  
//       <DeafultButton   text="Join Class" width="200px"  handleClick={(e)=>{e.preventDefault();
//       console.log("manar")}} />
//          </div>
      
//       <div className="mainImg  text-center col-md-6  
//       order-first order-md-last
//        "> 
//     <Image  src={Illustration}  className="hero-image" alt="hero"></Image> 
    
//     </div> 
  
       

//      </div> 
    
    
      
//     </div>
//   )
// }

// export default Hero








"use client"
import "./Hero.css" 
import Image from 'next/image'; 
import Illustration from "../../../public/Char.svg" 
import DeafultButton from "../../Components/DeafultButton/DeafultButton"
import SecondaryButton from "../../Components/DeafultButton/DeafultButton"
// import SecondaryButton from "@/app/Components/SecondaryButton/secondaryButton";


const Hero = () => {
  
  return (
    
    <div  className=" container-fluid p-5  Hero ">  
     <div className="row  text-white ">
      <div className=" content  col">
        <p className="h1  text-dark">  Learn New Course Gain More Skills </p>
      <p className="hero-text text-dark">Explore a world of hobbies at your own pace through Hobby-zone. Whether you're into crafting, cooking, photography, or any other passion, we've got a diverse range of activities for you. Our goal is to make your hobby journey stress-free, enjoyable, and full of delightful moments.

With Hobby-zone, you're not just learning a new hobby; you're embarking on an adventure of creativity and self-discovery. Our user-friendly app is designed to inspire and support you every step of the way, making it easy to connect with your interests and fellow hobbyists.

!</p>  
      <form >
        {/* <input className="input-email-data  form-control px-3  rounded-5" type="text" placeholder="Enter your email adress" /> */}
      </form>  
      {/* <DeafultButton   text="Join Class" width="200px"  handleClick={(e)=>{e.preventDefault();
      console.log("manar")}} /> */}
        <SecondaryButton color="#000" text="join Now"/>
         </div>
      
      <div className="mainImg  text-center col-md-6  
      order-first order-md-last
       "> 
    <Image  src={Illustration}  className="hero-image" alt="hero"></Image> 
    
    </div> 
  
       

     </div> 
    
    
      
    </div>
  
  )
}

export default Hero
