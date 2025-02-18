"use client";
import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import { Minimize2 } from "lucide-react";

export default function BoxMoive({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <div className="w-full h-[600px] rounded-md border">
      <div className="flex justify-between items-center ">
        <span className="mx-2 font-semibold">{title}</span>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          <Minimize2 />
        </Button>
      </div>

      {isOpen && children}
    </div>
  );
}
