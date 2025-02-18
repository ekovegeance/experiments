import { Contact, ChartPie, Film, MessageCircle, File } from "lucide-react";
import Link from "next/link";
import React from "react";

const features = [
  {
    icon: Film,
    title: "Noemovie",
    description: "A simple movie search app. Fetch data API, zustand.",
    link: "/neomovie",
  },
  {
    icon: File,
    title: "Noeform",
    description:
      "A simple form with validation. Server action, useFormState, zod.",
    link: "/neoform",
  },
  {
    icon: Contact,
    title: "Noecontact",
    description:
      "A simple CRUD (Search, Pagination) contact form with server action. Server action,Prisma ORM, useFormState, zod.",
    link: "/",
  },
  {
    icon: Film,
    title: "Media Integrations",
    description:
      "Connect with Spotify, Instagram, or your own media library for dynamic visuals and sound.",
    link: "/",
  },
  {
    icon: ChartPie,
    title: "Advanced Analytics",
    description:
      "Track engagement, clicks, and user activity with intuitive charts and reports.",
    link: "/",
  },
  {
    icon: MessageCircle,
    title: "Seamless Collaboration",
    description:
      "Comment, tag, and assign tasks directly within your documents.",
    link: "/",
  },
];

const Features01Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight text-center">
          Unleash Your Creativity
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-6">
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features01Page;
