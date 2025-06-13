import { Contact, Film, File } from "lucide-react";
import Link from "next/link";
import React from "react";
import {Badge} from "@/components/ui/badge";

const features = [
  {
    icon: Film,
    title: "Noemovie",
    description: "A simple movie search app. Fetch data API, zustand.",
    libraries: ["Zustand"],
    link: "/neomovie",
  },
  {
    icon: File,
    title: "Noeform",
    description:
      "A simple form with validation. Server action, useActionState.",
    libraries: ["Zod"],
    link: "/neoform",
  },
  {
    icon: Contact,
    title: "Noecontact",
    description:
      "A simple CRUD (Search, Pagination) contact form with server action. Server action, useActionState.",
    libraries: ["Prisma ORM", "Zod"],
    link: "/neocontact",
  },
  {
    icon: File,
    title: "File Upload",
    description:
        "File upload Client side with API route. Upload file to Vercel Blob.",
    libraries: ["Vercel Blob"],
    link: "/fileupload",
  },
];

const Features01Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight text-center">
          Unleash Your Creativity
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-(--breakpoint-lg) mx-auto px-6">
          {features.map((feature, index) => (
            <Link
              href={feature.link}
              key={index}
              className="flex flex-col border rounded-xl py-6 px-5"
            >
              <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <feature.icon className="h-6 w-6" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                {feature.title}
              </span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
                <div className="mt-2 flex flex-wrap gap-2">
                    {feature.libraries.map((lib, libIndex) => (
                    <Badge key={libIndex}>
                        {lib}
                    </Badge>
                    ))}
                </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features01Page;
