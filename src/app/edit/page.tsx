"use client";
import React, { useState } from "react";

import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EditPage = ({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) => {
  const [transformation, setTransformation] = useState<
    undefined | "generative-fill" | "blur" | "grayscale" | "pixelate"
  >();
  
  
  
  const [pendingPrompt, setPendingPrompt] = useState('')
  const [prompt, setPrompt] = useState('')
  
  console.log(prompt);

  return (
    <div className=" flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl mr-10 font-bold">EditPage {publicId}</h1>
      </div>
      <div className="flex  gap-4">
        <Button onClick={() => setTransformation(undefined)}> Clear All</Button>
        <Button onClick={() => setTransformation("blur")}>Apply Blur </Button>
        <Button onClick={() => setTransformation("grayscale")}>Apply Grayscale </Button>
        <Button onClick={() => setTransformation("pixelate")}>Apply Pixelate </Button>


        <div className="flex flex-col">
  <Button onClick={() => {  
    setTransformation("generative-fill"); 
    // setPrompt(pendingPrompt);
  }}>
    Generative Fill
  </Button>
  {/* <input type="text" value={pendingPrompt} onChange={e => setPendingPrompt(e.currentTarget.value )} /> */}
</div>

      </div>

      <div className="grid grid-cols-2 gap-12">
        <CldImage src={publicId} width={300} height={200} alt="cldImg" />
        {transformation === "generative-fill" && (
          <>
            <CldImage
              src={publicId}
              fillBackground= {
                {
                  prompt 
                }
              }
              crop="pad"
              width={500}
              height={400}
              alt="cldImg"
            />
          </>
        )}
        {transformation === "blur" && (
          <>
            <CldImage
              src={publicId}
              blur="800"
              width={300}
              height={200}
              alt="cldImg"
            />
          </>
        )}
        {transformation === "grayscale" && (
          <>
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt="cldImg"
              grayscale
            />
          </>
        )}
        {transformation === "pixelate" && (
          <>
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt="cldImg"
              pixelate
            />
          </>
        )}
     

      </div>
    </div>
  );
};

export default EditPage;
