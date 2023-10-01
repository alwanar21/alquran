"use client";
import React from "react";

export default function DangerouslySetInnerHTML({ konten, className }) {
  return (
    <p className={className} dangerouslySetInnerHTML={{ __html: konten }} />
  );
}
