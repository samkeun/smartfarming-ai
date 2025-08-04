// api/assets.js
export default async function handler(req, res) {
  const { file } = req.query;
  const s3Url = `https://dn8wklnt2iid2.cloudfront.net/${file}`;
  const response = await fetch(s3Url);

  const buffer = await response.arrayBuffer();
  res.setHeader('Content-Type', response.headers.get('content-type'));
  res.send(Buffer.from(buffer));
}
