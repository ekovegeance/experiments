"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { updateContact } from "@/actions/contact";
import { useFormState } from "react-dom";
import ButtonSubmit from "../submit";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Contact } from "@prisma/client";

export default function EditContactForm({ contact }: { contact: Contact }) {
  const updateContactWithId = updateContact.bind(null, contact.id);
  const [state, formAction] = useFormState(updateContactWithId, null);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Contact</CardTitle>
        <CardDescription>Insert your data</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              defaultValue={contact.name}
              className={
                state?.Error.name
                  ? "border-destructive focus-visible:ring-0 "
                  : ""
              }
            />
            <Label className="text-sm text-destructive">
              {" "}
              {state?.Error.name}
            </Label>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Phone Number</Label>
            <Input
              type="text"
              id="phone"
              name="phone"
              defaultValue={contact.phone}
              className={
                state?.Error.phone
                  ? "border-destructive focus-visible:ring-0"
                  : ""
              }
            />
            <Label className="text-sm text-destructive">
              {" "}
              {state?.Error.phone}
            </Label>
          </div>
          <div className=" flex flex-row gap-4">
            <Link href="/neocontact">
              <Button variant="secondary" className="w-full">
                <ArrowLeft /> Cancle
              </Button>
            </Link>
            <ButtonSubmit />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
