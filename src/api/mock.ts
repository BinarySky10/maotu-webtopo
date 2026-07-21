export async function getPublicJson(jsonName: string = 'WaterQushuibengzhan.json') {
  const res = await fetch(`data/${jsonName}`);
  const data = await res.json();
  return data;
}
export async function savePublicJson(
  fileName: string = 'test.json',
  data: object = { test: '请传入正确数据' }
) {
  const res = await fetch('/api/savePublicJson', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ subDir: 'data', fileName, data })
  });
  return res.json();
}
