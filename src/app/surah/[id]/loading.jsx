"use client";
import React from "react";
import { Bars } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="w-full min-h-full flex justify-center items-center align-middle my-40">
      <Bars
        height="80"
        width="80"
        color="#22A5AD"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
