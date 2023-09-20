"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import React, { useState } from "react";


const SearchFrom = () => {
  const [tagName, setTagName] = useState("");
  const router  = useRouter();
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      console.log(tagName)
      router.replace(`/gallery?search=${encodeURIComponent(tagName)}`)
      router.refresh()
    }}>

      <h5>Search by Tag</h5>
      <div className="flex gap-2 ">
        <Input
          onChange={(e) => setTagName(e.currentTarget.value)}
          id="tag-name"
          value={tagName}
          className="col-span-3"
        />
        <Button type="submit" >Search</Button>
      </div>
    </form>
  );
};

export default SearchFrom;
