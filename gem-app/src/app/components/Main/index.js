"use client";
import Link from "next/link";
import "./style.css"; // Importing CSS module
// import { useEffect } from "react";

export default function Home() {

  // useEffect(() => {
  //   const btnImg = document.querySelectorAll(".btnImg p");
  //   const radius = 150;
  //   const angleStep = (2 * Math.PI) / btnImg.length;

  //   btnImg.forEach((image, index) => {
  //     const angle = angleStep * index;
  //     const x = radius * Math.cos(angle);
  //     const y = radius * Math.sin(angle);

  //     image.style.setProperty('--translate-x', `${x}px`);
  //     image.style.setProperty('--translate-y', `${y}px`);
  //   });
  // }, []);  
  
  return (
    <div className="homeContainer row">
      <div className="linksContainer col-4">
      <Link href="/">
            
            <img className="btnImg" src="images/pink-flower.png" alt="image link" />
         
        </Link>
      </div>
       <div className="mainImage col-4">
        <img className="btnImg" src="images/2024LOGO800px.png" alt="Main Image" />
      </div> 
      <div className="linksContainer col-4">
      <Link href="/">
            
            <img className="btnImg" src="images/pink-flower.png" alt="image link" />
         
        </Link>
      </div>
      {/* <div className="imgContainer">
       
          <Link href="/">
            
              <img className="btnImg" src="images/pink-flower.png" alt="image link" />
           
          </Link>
          <Link href="/">
            
              <img className="btnImg" src="images/white-beanie.png" alt="image link" />
           
          </Link>
          <Link href="/">
            
              <img className="btnImg" src="images/bouquet.png" alt="image link" />
           
          </Link>
          <Link href="/">
            
              <img className="btnImg" src="images/necklace.png" alt="image link" />
           
          </Link>
          <Link href="/">
            
              <img className="btnImg" src="images/MeOnFlower.png" alt="Artwork 5" />
           
          </Link>
        </div> */}
      </div>
  );
}
