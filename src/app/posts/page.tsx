import { Suspense } from "react";
import PostList from "./PostList";
import { fetchUser } from "../posts/action"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

// https://dev-overflow-nextjs13-rakibtweets.vercel.app/

const Posts = async () => {

  const users = await fetchUser()

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
