"use client"

import { CldUploadButton } from "next-cloudinary";
import { UploadResult } from "../page";

const GalleryPage = () => {

  return (
    <div className="flex space-between">
        <h1 className="text-4xl font-bold">GalleryPage</h1>
        <CldUploadButton
    
    onUpload={(result: any) =>{
      console.log(result.info.public_id);
      
    }}
    uploadPreset='xyybqnjw'
    />

    </div>
  )
}

export default GalleryPage