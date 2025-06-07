"use client";
import React from "react";
import { ContainerScroll } from "../additional/containerScrollAnimation";

export function Cta() {
  return (
    <div className="hidden lg:flex flex-col overflow-hidden z-20 bg-transparent relative">
      <ContainerScroll
        titleComponent={
          <>
            <h3 className="text-4xl font-semibold dark:text-white">
              Zorganizuj sprzedaż w swojej firmie
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                bez wysokich kosztów
              </span>
            </h3>
          </>
        }
      >
        <img
          src={
            "https://ifil-group-spaces.fra1.cdn.digitaloceanspaces.com/Projects/crew-core/full-ui-2.png"
          }
          alt="hero"
          className="rounded-2xl object-cover h-full w-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
