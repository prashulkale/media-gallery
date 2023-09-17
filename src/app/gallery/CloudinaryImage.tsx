"use client";

import { CldImage, CldImageProps } from "next-cloudinary";
import Heart from "@/components/Heart";
import { MarkAsFavorite } from "./action";
import { useTransition ,useState } from "react";
import { SearchResult } from "./page";
import FullHeart from "@/components/fullHeart";



const CloudinaryImage = (props:{imageData :  SearchResult ,onUnheart ?: ( onUnheartedResource : SearchResult)=> void} & Omit<CldImageProps, "src" >) => {
  const [Transition , startTransition] = useTransition();
  const {imageData , unhearted} = props;
 
  const [isFavorited, setIsFavorited] = useState(imageData.tags.includes("favorite"))
  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
     {    isFavorited  


     ?    <FullHeart
     onClick = {()=> {
      unhearted?.(imageData)
       setIsFavorited(false)
  startTransition(()=>{
    MarkAsFavorite(imageData.public_id , false);
  });        
     }}
   className = "absolute w-6 h-6 cursor-pointer hover:text-red-500  top-2 right-2"/>

     
    : <Heart 
          onClick = {()=> {
            setIsFavorited(true)
       startTransition(()=>{
         MarkAsFavorite(imageData.public_id , true);
       });        
          }}
        className = "absolute w-6 h-6 cursor-pointer hover:text-red-500  top-2 right-2"/>
        
     
    } 
 
    </div>
  );
};

export default CloudinaryImage;
