

import { CldImage } from "next-cloudinary";
import UploadButton from "../gallery/uploadButton";
import cloudinary from "cloudinary"
import CloudinaryImage from "../gallery/CloudinaryImage";
import { SearchResult } from "../gallery/page";
import { ForceRefresh } from "@/components/force-refresh";
import { useState } from "react";

const FavoritesPage = async ({initialResources} : {
  initialResources : SearchResult[]
} ) => {

const [resources, setResources] = useState(initialResources)
  return (
<>




    
    {resources.map((result) => (
      
      <CloudinaryImage 
      
      key = {result.public_id}
      
      width = "400" 
      height = '300'
      alt = "an image of something"
      imageData = {result}
       onUnheart = ((unheartedResources) => {
        setResources((currentResources) => {
          currentResources.filter(

            resources.public_id !== unheartedResource.public_id;

          )
        })
       })
       />

    ))}
    
</>
  
  )
}

export default FavoritesPage;