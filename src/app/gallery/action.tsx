"use server"
import cloudinary from  "cloudinary"
import { revalidatePath } from "next/cache"


export async function   MarkAsFavorite(publicId : string){
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]) 
    revalidatePath("/gallery")
}