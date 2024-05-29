import express from 'express';

const startServer = async () => {
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });

  return app;
};

startServer().catch(err => console.error(err));
