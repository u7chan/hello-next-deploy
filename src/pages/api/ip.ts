import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  ip: string;
};

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = await fetch('https://httpbin.org/ip');
  const { origin } = await result.json();
  res.status(200).json({ ip: origin });
}
