import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function allImages() {
    const allImages = prisma.image.findMany();
    return allImages;
}