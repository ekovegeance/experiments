"use client";
import React, { useActionState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createContact } from "@/actions/contact";
import ButtonSubmit from "../submit";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CrateContactForm() {
  const [state, formAction] = useActionState(createContact, null);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Contact</CardTitle>
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
              placeholder="eg. Eko Saputra"
              className={state?.Error.name ? "border-destructive focus-visible:ring-0 " : ""}
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
              placeholder="eg. 08000"
              className={state?.Error.phone ? "border-destructive focus-visible:ring-0" : ""}
            />
            <Label className="text-sm text-destructive">
              {" "}
              {state?.Error.phone}
            </Label>
          </div>
          <div className=" flex flex-row gap-4">
            <Link href="/neocontact">
              <Button variant="secondary" className="w-full">
                <ArrowLeft /> back
              </Button>
            </Link>
            <ButtonSubmit />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
