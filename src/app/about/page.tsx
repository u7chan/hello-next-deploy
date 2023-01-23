export default async function Page() {
  const result = await fetch(`${process.env.BASE_URL}/api/ip`);
  const { ip } = await result.json();
  return (
    <>
      <h1>About</h1>
      <p>ip: {ip}</p>
    </>
  );
}
