'use server'
import { getFetch } from "../../services";


export const fetchUser = async () => {
    const user = await getFetch('api/v1/user')
    return user
}