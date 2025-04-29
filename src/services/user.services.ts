import prisma from "../database/db";
import { User } from "../prisma/generated/prisma";
import { CreateUserInput, UpdateUserInput } from "../interfaces/user.interfaces";


function getAllUsers() {
    return prisma.user.findMany();
}


function getUserById(id: number) {
    return prisma.user.findUnique({
        where: {
            id: id
        }
    });
}

async function createUser(inputData: CreateUserInput): Promise<User> {
    return await prisma.user.create({
        data: {...inputData}
    });
}
