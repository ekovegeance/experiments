import CrateContactForm from "@/components/neocontact/create-contact";
import React from "react";

export default function CreateContactPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <CrateContactForm />
      </div>
    </div>
  );
}
