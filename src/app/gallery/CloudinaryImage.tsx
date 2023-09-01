"use client";

import { CldImage } from "next-cloudinary";
import { UploadResult } from "../page";
import { Button } from "@/components/ui/button";
import Heart from "@/components/Heart";
import { MarkAsFavorite } from "./action";
import { useTransition } from "react";
import { useSearchParams } from "next/navigation";


const CloudinaryImage = (props: any & {public_id : string}) => {
  const [Transition , startTransition] = useTransition();
  return (
    <div className="relative">
      <CldImage {...props} />
     
      <Heart 
      
        onClick = {()=> {
     startTransition(()=>{
       MarkAsFavorite(props.public_id);;

     });

        
          // cloudinary.v2.uploader.add_tag("favorite")
        }}
      
      className = "absolute w-10  cursor-pointer hover:text-red-500  top-2 right-2"/>
    </div>
  );
};

export default CloudinaryImage;
