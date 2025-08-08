import { Client } from 'pg';

const connectDB = async () => {
  const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    port: 5431,
    database: 'urlshortner',
  });

  try {
    await client.connect();
    console.log('Connected to db successfully');
    return client;
  } catch (err) {
    console.log('Failed to connect to db');
    return client;
  }
};

export default connectDB;
