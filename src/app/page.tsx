"use client"
import { CldUploadButton } from 'next-cloudinary'
import Image from 'next/image'
import { CldImage } from 'next-cloudinary';

export default function Home() {
  return (
    
   <main>
    <CldUploadButton uploadPreset='xyybqnjw'/>
    
<CldImage
  width="100"
  height="200"
  src="oyulcrfs5l9k6jx6hyzo"
  sizes="100vw"
  alt="Description of my image"
/>
   </main>
  )
}
