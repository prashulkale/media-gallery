

import { CldImage } from "next-cloudinary";
import UploadButton from "../gallery/uploadButton";
import cloudinary from "cloudinary"
import CloudinaryImage from "../gallery/CloudinaryImage";
import { SearchResult } from "../gallery/page";
import { ForceRefresh } from "@/components/force-refresh";
import FavoritesList from "./favorite-list";

const FavoritesPage = async () => {

 const results = await  cloudinary.v2.search
  .expression('resource_type:image AND tags= favorite')
  .sort_by('created_at','desc')
  .with_field("tags")
  .max_results(30)
.execute() as {resources: SearchResult[]}

  

  return (

    <div className=" flex flex-col gap-8">
        <ForceRefresh />
      <div className="flex justify-between">
        <h1 className="text-4xl mr-10 font-bold">Fevorite Images</h1>
      </div>
    <FavoritesList  
    initialResources={results.resources}
    />
    
    </div>
  )
}

export default FavoritesPage;