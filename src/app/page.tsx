"use client"
import { CldUploadButton } from 'next-cloudinary'
import Image from 'next/image'
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';
import { Button } from '@/components/ui/button';


 export type UploadResult = {
  info : {
    public_id : string,

  } 
  event : "success"
}

export default function Home() {
  const [imgId, setImgId] = useState("")

  return (
    
   <main>
     <Button asChild> 
     <div className='flex gap-2'>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
</svg>

    <CldUploadButton
    
    onUpload={(result : any) =>{
      setImgId(result.info.public_id);
      // console.log(result.info.public_id);
      
      
    }}
    uploadPreset='xyybqnjw'
    />
     </div>
     
     
     </Button>
    
    {imgId && (

<CldImage
  width="100"
  height="200"
  src={imgId}
  sizes="100vw"
  alt="Description of my image"
/>
    )}
   </main>
  )
}
