"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Pencil, Trash } from "lucide-react";
import { Contact } from "@prisma/client";
import Link from "next/link";
import { contactPagination, deleteContact } from "@/actions/contact";
import DialogDelete from "./dialog-delete";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import Paginate from "./paginate";

export default function ContactTable() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = 5;

  useEffect(() => {
    const fetchContacts = async () => {
      const { contacts, totalPages } = await contactPagination(page, pageSize);
      setContacts(contacts as Contact[]);
      setTotalPages(totalPages);
    };
    fetchContacts();
  }, [page]);

  const handleDeleteContact = async (id: string) => {
    try {
      await deleteContact(id);
    } catch (error) {
      console.log(error);
    }
    setIsOpen(false);
    toast.success("Contact deleted successfully");
  };

  return (
    <div className="mt-5">
      <h1 className="text-xl font-semibold mb-2">Contact List</h1>
      <div className="border border-gray-200 rounded-md h-80 overflow-y-auto">
        <Table className="p-5">
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact, index) => (
              <TableRow key={contact.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.createdAt.toDateString()}</TableCell>
                <TableCell className="flex gap-2 justify-end">
                  <Link href={`/neocontact/edit/${contact.id}`}>
                    <Button size="icon" variant="secondary">
                      <Pencil />
                    </Button>
                  </Link>
                  <Button
                    size="icon"
                    variant="destructive"
                    onClick={() => {
                      setIsOpen(true);
                    }}
                  >
                    <Trash />
                  </Button>
                  <DialogDelete
                    open={isOpen}
                    onOpenChange={setIsOpen}
                    onDelete={() => handleDeleteContact(contact.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-5">
        <Paginate page={page} totalPages={totalPages} />
      </div>
    </div>
  );
}
