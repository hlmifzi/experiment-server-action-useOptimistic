import { Suspense } from "react";
import { get } from "../../services"
import PostList from "./PostList";

const Posts = async () => {

  const users = await get(`api/v1/user`)

  return (
    <div>
      <h1>User</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PostList users={users} />
      </Suspense>
    </div>
  )
}

export default Posts
