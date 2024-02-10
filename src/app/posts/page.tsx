import { Suspense } from "react";
import PostList from "./PostList";
import { getFetch } from "../../services";


const Posts = async () => {

  // const users = await get(`api/v1/user`)
  const users = await getFetch('api/v1/user')

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
