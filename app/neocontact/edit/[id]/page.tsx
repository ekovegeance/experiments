import { getContactById } from "@/actions/contact";
import EditContactForm from "@/components/neocontact/edit-contact";
import { notFound } from "next/navigation";
import React from "react";

export default async function UpdateContactPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const contact = await getContactById(id);

  if (!contact) {
    return notFound();
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <EditContactForm contact={contact} />
      </div>
    </div>
  );
}
