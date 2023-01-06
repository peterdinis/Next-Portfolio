import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function allProjects() {
    const allProjects = prisma.project.findMany();
    return allProjects;
}