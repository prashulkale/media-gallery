"use client"

import { CldImage   } from "next-cloudinary";
import { UploadResult } from "../page";
import { Button } from "@/components/ui/button";


const CloudinaryImage = (props : any) => {
 
  return (
   
     
      <CldImage

        {...props}
        
          />
        
    
  )
}

export default CloudinaryImage