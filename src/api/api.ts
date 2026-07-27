export async function getFilelist() {
  const fileName = 'test';
  const res = await fetch(`data/${fileName}.json`);
  const data = await res.json();
  return data;
}
