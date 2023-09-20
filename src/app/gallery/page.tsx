
import { CldImage } from "next-cloudinary";
import UploadButton from "./uploadButton";
import cloudinary from "cloudinary"

import CloudinaryImage from "./CloudinaryImage";
import { ImageGrid } from "@/components/image-grid";
import SearchFrom from "./search-form";
 export type SearchResult = {
  public_id : string
  tags : string[]
} 




const GalleryPage = async ( {  
  searchParams: { search },
}: {
  searchParams: { search: string };
}
) => {

 const results = await  cloudinary.v2.search
  .expression(`resource_type:image${search ? ` AND tags=${search}`  : "" }`)
  .sort_by('created_at','desc')
  .with_field("tags")
  .max_results(30)
.execute() as {resources: SearchResult[]}

const MAX_COLUMNS = 4
  
function getColumns(colIndex : number ) {
  return results.resources.filter((resource, idx ) => idx % MAX_COLUMNS === colIndex)
}
  return (
    <div className=" flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl mr-10 font-bold">GalleryPage</h1>
    <UploadButton/> 
      </div>
<SearchFrom/>

<div>

 <ImageGrid  
 images={
  results.resources
 }
 />
</div>

    </div>
  )
}

export default GalleryPage