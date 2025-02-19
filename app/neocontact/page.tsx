import ContactTable from "@/components/neocontact/contact-table";
import Search from "@/components/neocontact/search";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { Suspense } from "react";

export default function NoeContactPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className=" w-full max-w-3xl">
        <div className="flex items-center justify-between gap-1 mb-5">
          <Search />
          <Link href="/neocontact/create">
            <Button>Create</Button>
          </Link>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <ContactTable />
        </Suspense>
      </div>
    </div>
  );
}
