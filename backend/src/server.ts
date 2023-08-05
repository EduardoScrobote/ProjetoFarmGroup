import app from './app';

const port = process.env.EXPRESS_APP_PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});