

import { CldImage } from "next-cloudinary";
import UploadButton from "../gallery/uploadButton";
import cloudinary from "cloudinary"
import CloudinaryImage from "../gallery/CloudinaryImage";
import { SearchResult } from "../gallery/page";
import { ForceRefresh } from "@/components/force-refresh";

const FavoritesList = async (
  {initialResources} : {initialResources : SearchResult[]}
) => {


  const [resources, setResources] = useState(initialResources)

  return (


    <div className="grid grid-cols-4  gap-4">

    {resources.map((result) => (
      
      <CloudinaryImage 
      
      key = {result.public_id}
      onUnheart = {(unheartedResource) => {
        setResources ((currentResource) => {
          currentResource.filter((resource) => {

            resource.public_id !== unheartedResource.public_id;
          })
        }) 
      }}
      width = "400" 
      height = '300'
      alt = "an image of something"
      imageData = {result}
       
       />

    ))}
    </div>
  )
}

export default FavoritesList;