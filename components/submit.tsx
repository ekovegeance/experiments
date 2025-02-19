import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function ButtonSubmit() {
 const {pending} = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Sabmiting..." : "Submit"}
    </Button>
  );
}
