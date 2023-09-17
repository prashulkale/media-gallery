import CloudinaryImage from "@/app/gallery/CloudinaryImage";
import { SearchResult } from "@/app/gallery/page";

const MAX_COLUMNS = 4
export function ImageGrid({images } : {images : SearchResult[]}){
  
function getColumns(colIndex : number ) {


  return images.filter((resource, idx ) => idx % MAX_COLUMNS === colIndex)
}
 return (
    <div className="grid grid-cols-4  gap-4">
{[ getColumns(0),
    getColumns(1),
    getColumns(2),
    getColumns(3),
    getColumns(4 )
].map((cloumn  , idx)=> <div  key = "idx" className = "flex flex-col gap-4" >  
    
    {cloumn.map((result) => (
      
      <CloudinaryImage 
      
      key = {result.public_id}
      width = "400" 
      height = '300'
      alt = "an image of something"
      imageData = {result}
       
       />

    ))}
</div>)}
    </div>
  )
}