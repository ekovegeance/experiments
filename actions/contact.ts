/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(6,),
    phone: z.string().min(11,)
})

/**
 * Get all contacts
 * @returns 
 */
export const getContacts = async () => {
    try {
        const contacts = await prisma.contact.findMany();
        return contacts;

    } catch (error) {
        throw new Error(" Failed to fetch contact data")

    }
}

/**
 * Get contact by id
 * @param id 
 * @returns 
 */
export const getContactById = async (id: string) => {
    try {
        const contact = await prisma.contact.findUnique({
            where: { id: id }
        });
        return contact;

    } catch (error) {
        throw new Error("Failed to fetch contact data")

    }
}

/**
 * Create contact
 * @param formData
 */
export const createContact = async (prevState: any, formData: FormData) => {

    const rawData = Object.fromEntries(formData.entries());

    // Validate the form data
    const validatedData = contactSchema.safeParse(rawData)

    if (!validatedData.success) {
        return {
            Error: validatedData.error.flatten().fieldErrors
        }
    }
    try {
        await prisma.contact.create({
            data: {
                name: validatedData.data.name,
                phone: validatedData.data.phone,
            }
        })

    } catch (error) {
        throw new Error('Failed to create data')
    }
    revalidatePath("/neocontact")
    redirect("/neocontact")
}

/**
 * Update contact by id
 * @param id
 * @param formData 
 */
export const updateContact = async (id: string, prevState: any, formData: FormData) => {

    const rawData = Object.fromEntries(formData.entries());

    // Validate the form data
    const validatedData = contactSchema.safeParse(rawData)

    if (!validatedData.success) {
        return {
            Error: validatedData.error.flatten().fieldErrors
        }
    }
    try {
        await prisma.contact.update({
            data: {
                name: validatedData.data.name,
                phone: validatedData.data.phone,
            }, where: {
                id: id
            }

        })

    } catch (error) {
        throw new Error('Failed to create data')
    }
    revalidatePath("/neocontact")
    redirect("/neocontact")
}


/**
 * Delete contact by id
 * @param id 
 */
export const deleteContact = async (id: string) => {
    try {
        await prisma.contact.delete({
            where: { id: id }
        })

    } catch (error) {
        throw new Error('Failed to delete data')
    }
    revalidatePath("/neocontact")
}


export const contactPagination = async (page: number, pagaSize: number) => {
    const skip = (page - 1) * pagaSize;

    const [contacts, total] = await Promise.all([
        prisma.contact.findMany({
            skip: skip,
            take: pagaSize,
            select: {
                id: true,
                name: true,
                phone: true,
                createdAt: true
            }
        }),
        prisma.contact.count()
    ])

    const totalPages = Math.ceil(total / pagaSize);

    return {
        contacts,
        totalPages
    }
}