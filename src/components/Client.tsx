'use client'

const Client = ({children}: any) => {
    console.log("client")
  return (
    <>
    <div>client</div>
        {children}
    </>
  )
}

export default Client
