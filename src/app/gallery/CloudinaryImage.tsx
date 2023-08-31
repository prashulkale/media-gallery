"use client";

import { CldImage } from "next-cloudinary";
import { UploadResult } from "../page";
import { Button } from "@/components/ui/button";
import Heart from "@/components/Heart";


const CloudinaryImage = (props: any) => {
  return (
    <div className="relative">
      <CldImage {...props} />
      <Heart  className = "absolute w-10  top-2 right-2"/>
    </div>
  );
};

export default CloudinaryImage;
