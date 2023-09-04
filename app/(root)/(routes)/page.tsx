"use client";

import { SearchInput } from "@/components/search-input"
// import { Categories } from "@/components/categories"
// import { Companions } from "@/components/companions"


const RootPage = () => {
  return (
    <div className="h-full p-4 space-y-2">
            <SearchInput />
      {/* <Categories />
      <Companions /> */}
    </div>
  )
}

export default RootPage