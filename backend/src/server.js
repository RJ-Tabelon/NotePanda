import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

console.log('NODE_ENV:', process.env.NODE_ENV);

// middlewares
if (process.env.NODE_ENV !== 'production') {
  console.log('CORS enabled for development');
  app.use(
    cors({
      origin: ['http://localhost:5173', 'http://localhost:5174']
    })
  );
} else {
  console.log('CORS disabled for production');
}
app.use(express.json()); // middlware that will parse json bodies (req.body)
app.use(rateLimiter);

app.use('/api/notes', notesRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server started on PORT:', PORT);
  });
});
