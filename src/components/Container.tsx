"use client";

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="relative mx-auto px-5 max-w-screen-xl">{children}</div>
  );
}
