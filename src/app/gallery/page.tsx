
import { CldImage } from "next-cloudinary";
import UploadButton from "./uploadButton";
import cloudinary from "cloudinary"
import CloudinaryImage from "./CloudinaryImage";
type SearchResult = {
  public_id : string
}

const GalleryPage = async () => {

 const results = await  cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('created_at','desc')
  .max_results(5)
.execute() as {resources: SearchResult[]}

  console.log(results);
  

  return (
    <div className=" flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl mr-10 font-bold">GalleryPage</h1>
    <UploadButton/> 
      </div>

    <div className="grid grid-cols-4  gap-4">

    {results.resources.map((result) => (
      <CloudinaryImage key = {result.public_id} width = "400" height = 
      '300'
      alt = "an image of something"
       src = { result.public_id}/>

    ))}
    </div>
    </div>
  )
}

export default GalleryPage