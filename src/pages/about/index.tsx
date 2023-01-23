import { NextPage } from 'next'
import { useEffect, useState } from 'react'

const Page: NextPage = () => {
  const [ip, setIp] = useState('')
  useEffect(() => {
    const api = async (): Promise<string> => {
      const result = await fetch(`/api/ip`)
      const { ip } = await result.json()
      return ip
    }
    api().then((data) => setIp(data))
  }, [])
  return (
    <>
      {ip ? (
        <>
          <h1>About</h1>
          <p>ip: {ip}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default Page
