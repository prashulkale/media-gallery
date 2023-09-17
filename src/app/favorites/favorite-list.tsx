"use client";

import { CldImage } from "next-cloudinary";
import UploadButton from "../gallery/uploadButton";
import { SearchResult } from "../gallery/page";
import { useState } from "react";
import { ImageGrid } from "@/components/image-grid";
import { Result } from "postcss";

const FavoritesList = ({
  initialResources,
}: {
  initialResources: SearchResult[];
}) => {
  const [resources, setResources] = useState(initialResources);

  return (
    <>
      <ImageGrid images={resources} />
    </>
  );
};

export default FavoritesList;
