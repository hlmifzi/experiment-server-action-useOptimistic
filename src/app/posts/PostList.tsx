'use client'

import { useOptimistic, useRef } from "react"
import SubmitButton from "./SubmitButton"
import { post } from "../../services"

export const PostList = ({ users }: { users: any }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [optimisticUsers, addOptimisticUsers] = useOptimistic(
    users,
    (state: any[], newUsers: any) => {
      return [
        ...state, {
          name: newUsers.name,
          sending: true
        }
      ]
    }
  );

  const handleAdd = async (formData: FormData) => {
    const newUser = {
      name: formData.get("name") as string
    }

    addOptimisticUsers(newUser)
    formRef.current?.reset()
    await post(`api/v1/user`, newUser)
  }

  return (
  
      <form action={handleAdd} ref={formRef}>
        <input type="text" name="name" />
        <SubmitButton />
        {optimisticUsers?.map((user: any, i: number) => {
          return (
            <div key={i}>
              <p>{user.name}{" "}</p>
              {!!user.sending && <small> (Sending...)</small>}
            </div>
          )
        })}
      </form>
    
  )
}

export default PostList
