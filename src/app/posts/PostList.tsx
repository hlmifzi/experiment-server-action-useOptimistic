'use client'

import { useOptimistic, useRef } from "react"
import SubmitButton from "./SubmitButton"
import { post } from "../../services"

export const PostList = ({ users }: { users: any }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [optimisticUsers, addOptimisticUsers] = useOptimistic(
    users,
    (state, newUsers) => [
      ...state, newUsers
    ]
  );

  const handleAdd = async (formData: FormData) => {
    const newUser = {
      name: formData.get("name") as string
    }

    addOptimisticUsers(newUser)
    await post(`api/v1/user`, newUser)
    formRef.current?.reset()
  }

  return (
    <form action={handleAdd} ref={formRef}>
      <input type="text" name="name" />
      <SubmitButton />
      {optimisticUsers?.map((user: any, i: number) => {
        return (
          <div key={i}>{user.name}{" "}
          {!!users.sending && <small> (Sending...)</small>}
          </div>
        )
      })}
    </form>
  )
}

export default PostList
