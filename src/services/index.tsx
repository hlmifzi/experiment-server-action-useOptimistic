"use server";

import axios from "axios"
import { hostname  } from "./constant"
import { revalidatePath } from "next/cache"

const api = axios.create({
    baseURL: hostname,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const get = async (endPoint: string) => {
    try {
        const response = await api.get(endPoint);
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

export const post = async (endPoint: string, body= {}) => {
    try {
        const response = await api.post(endPoint, body);
        return response.data;
    } catch (error) {
        console.error(error)
    } finally {
        revalidatePath("")
    }
}