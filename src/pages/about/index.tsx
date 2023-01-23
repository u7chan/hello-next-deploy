import { useEffect, useState } from 'react';

export default function Page() {
  const [ip, setIp] = useState('');
  useEffect(() => {
    const api = async (): Promise<string> => {
      const result = await fetch(`/api/ip`);
      const { ip } = await result.json();
      return ip;
    };
    api().then((data) => setIp(data));
  }, []);
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
  );
}
