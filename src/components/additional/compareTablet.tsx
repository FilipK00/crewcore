import React from "react";
import { Compare } from "./compare";

export function CompareTablet() {
  return (
    <div className="w-full h-[50vh] lg:ml-12 flex items-center justify-center shadow-main rounded-xl">
      <Compare
        firstImage="https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/arkusz.png"
        secondImage="https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/full-ui-2.png"
        firstImageClassName="object-cover object-left-top w-full scale-[101%]"
        secondImageClassname="object-cover object-left-top w-full"
        className="w-full h-full rounded-[22px] md:rounded-lg"
        slideMode="hover"
        autoplay={true}
      />
    </div>
  );
}
