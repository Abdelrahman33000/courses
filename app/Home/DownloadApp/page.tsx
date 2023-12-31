// import React from "react";
// import Image from "next/image";
// import Illustration from "../../../public/Assets/section1/Illustration (1).svg";
// import Illustration_2 from "../../../public/Assets/section1/Illustration (2).svg";
// import Frame from "../../../public/Assets/section1/Frame.svg";
// import Link from "next/link";

// const DownloadApp = () => {
//   return (
//     <div className="container">
//       <br />
//       <br />
//       <div className="row">
//         <div className="col text-center p-40">
//           <h1 className="Text">Choose the learning category you need</h1> <br />
//           <p className="Text">
//             Cupcake danish tiramisu powder soda ginger cake Dessert carrot{" "}
//             <br /> cake tartsweet marzipan for fruitcake <br />
//           </p>
//         </div>
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//       </div>
//       <div className="row p-10">
//         <div className="col right  d-flex align-items-center ">
//           <div className="col">
//             <h3 className="col Text">Programming</h3> <br />
//             <p className="col Text">
//               Muffin lemon drops toffee <br />
//               roll brownie jelly beans <br />
//               Croissant chocolate cake too <br />
//             </p>
//             <Link href={"#"}>
//               <h5 className="Text">
//                 Learn more{" "}
//                 <Image
//                   className="Text"
//                   src={Frame}
//                   alt="Frame"
//                   width={20}
//                   height={20}
//                 ></Image>{" "}
//               </h5>{" "}
//             </Link>
//           </div>
//           <Image className="ms-auto" src={Illustration} alt="dks"></Image>
//         </div>
//         <div className="col left  d-flex align-items-center  ">
//           <div className="">
//             <h3 className="col Text">Graphic Design</h3>
//             <p className="col Text">
//               Muffin lemon drops toffee <br />
//               Croissant chocolate cake tootsie roll Cupcake sugar
//               <br />
//             </p>
//             <Link href={"#"}>
//               <h5 className="Text">
//                 Learn more{" "}
//                 <Image src={Frame} alt="Frame" width={20} height={20}></Image>{" "}
//               </h5>{" "}
//             </Link>
//           </div>

//           <Image className="ms-auto" src={Illustration_2} alt="dks"></Image>
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//     </div>
//   );
// };

// export default DownloadApp;














"use client"
import React, { useEffect } from "react";
import Illustration from "../../../public/Assets/section1/Illustration (1).svg";
import Illustration_2 from "../../../public/Assets/section1/Illustration (2).svg";
import Frame from "../../../public/Assets/section1/Frame.svg";
import Link from "next/link";
import HomeCard from "@/app/Components/HomeCard/HomeCard";
import VideoPreview, {  } from "../../Components/VideoPreview/videopreview";
import VideoPlayer from "../../Components/VideoPreview/videopreview";
import ReactPlayer from "react-player";
import ip13 from "../../../public/Group 3.svg";
import ip13Pro from "../../../public/IP13.svg";
import MockUp from "../../../public/Ip13ProMax.svg";
import Logo from "@/app/Components/Logo/Logo";
import Image from 'next/image';
import "./DownloadApp.css";
import googlePlay from "../../../public/googleplay.svg";
import AppStore from "../../../public/appstore.svg";
import "aos/dist/aos.css";
import AOS from "aos";

const DownloadApp:React.FC = () => {
  useEffect(() => {
    
  
    AOS.init({duration:2000})
  }, [
  
  ])
  
  return (
    <> <p className="h1 text-light text-center py-4 text-dark fw-bold"> Hobby-zone Mobile Application </p>

      <hr />
    
    <div className="container-fluid download-section ">
     
     <div className="row">
        <div className="secionTwo image-wrapper-two "> 
        <div className="firstPreview">
          <div className="features">
          <h2>Connect with Like-minded Individuals</h2>
            <p>Join specific hobby groups tailored to your interests. Whether it's photography, crafting, gaming, or any other pursuit, you'll find kindred spirits who share your passion Showcase your latest projects, creations, or achievements. Our community is a space to celebrate your successes and get constructive feedback from fellow hobbyists.</p>
          </div>
        
        <Image className="first-mockUp-two" data-aos={"fade-left"} 
        src={ip13Pro} alt="hg"  ></Image>
        
        </div>
        
        <div className="second-preview">
        <div className="features">
        <h2 className="text-center">VIP Community Access</h2>
            <p>Connect with other Premium members in an exclusive VIP community. Share ideas, collaborate on projects, and enjoy a more intimate and focused interaction with like-minded individuals Enjoy special discounts on hobby-related workshops, events, and merchandise. Hobby Zone Premium members receive exclusive offers to enhance their learning and networking opportunities.</p>
          </div>
        
          <Image className="first-mockUp-two" data-aos={"fade-left"} 
        src={ip13} alt="hg"  ></Image>
        </div>
        </div>
        
        


        <div className="image-wrapper "> 
        <div className="details-wraper"> 
        <h2 className="Header" data-aos={"fade-right"}> Welcome to Hobby-Zone </h2>
        <p className="details" >your go-to platform for discovering and mastering new hobbies! Our app, help, is your 24/7 companion for all things hobbies, offering assistance and guidance whenever you need it. Our passionate team is dedicated to ensuring your hobby exploration is as smooth as possible, utilizing the latest technology to provide quick and efficient service.</p>
        <Image className="google-play-icon" 
        src={googlePlay} alt="googleplay"  ></Image>
        <Image  className="app-store-icon" 
        src={AppStore} alt="appstore"  ></Image>
        </div>
        <Image className="first-mockUp" data-aos={"fade-left"} 
        src={MockUp} alt="hg"  ></Image>
        </div>
        
     </div>
     
     
    </div>
    </>
  );
};

export default DownloadApp;
