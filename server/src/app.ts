import cors from 'cors';
import express from 'express';
import connectDB from '../database';

const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get(`/shortenList`, async (req, response) => {
  const { query } = req.query;
  const client = await connectDB();
  await client.query('Select * from urls', (err, res) => {
    if (!err) {
      console.log(res.rows);
      return response.status(200).json({
        data: res.rows,
      });
    } else {
      console.log(err.message);
    }
  });
});

app.post('/shortenUrl', async (req, res) => {
  const { url } = req.body;
  const randomString = `${Math.random().toString(36).substring(2, 8)}.ly`;
  const client = await connectDB();
  await client.query('INSERT INTO urls (url, short_url) VALUES ($1, $2)', [
    url,
    randomString,
  ]);
  res.status(201).json({ shortenedUrl: randomString });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
