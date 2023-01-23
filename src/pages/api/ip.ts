import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  ip: string
}

const handler = async (_: NextApiRequest, res: NextApiResponse<Data>) => {
  const result = await fetch('https://httpbin.org/ip')
  const { origin } = await result.json()
  res.status(200).json({ ip: origin })
}

export default handler
