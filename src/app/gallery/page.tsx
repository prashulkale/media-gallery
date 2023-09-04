
import { CldImage } from "next-cloudinary";
import UploadButton from "./uploadButton";
import cloudinary from "cloudinary"
import CloudinaryImage from "./CloudinaryImage";
 export type SearchResult = {
  public_id : string
  tags : string[]
}

const GalleryPage = async () => {

 const results = await  cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('created_at','desc')
  .with_field("tags")
  .max_results(30)
.execute() as {resources: SearchResult[]}

  

  return (
    <div className=" flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl mr-10 font-bold">GalleryPage</h1>
    <UploadButton/> 
      </div>

    <div className="grid grid-cols-4  gap-4">

    {results && results.resources.map((result) => (
      
      <CloudinaryImage 
      
      key = {result.public_id}
      width = "400" 
      height = '300'
      alt = "an image of something"
      imageData = {result}
       
       />

    ))}
    </div>
    </div>
  )
}

export default GalleryPage