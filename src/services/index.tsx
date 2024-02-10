"use server";

import axios from "axios"
import { hostname  } from "./constant"
import { revalidateTag } from "next/cache"

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
        revalidateTag("users")
    }
}

export const getFetch = async(endPoint: string) => {
    const res = await fetch(`${hostname}${endPoint}`)
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
}