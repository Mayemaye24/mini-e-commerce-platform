import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import router from './routes';
import { notFoundHandler, errorHandler } from './middleware/error.middleware';

const app = express();

// ✅ Security headers
app.use(helmet());

// ✅ SIMPLE & RELIABLE CORS (no callback)
const allowedOrigins = [
  'http://localhost:4200',
  'http://localhost:3000',
  'https://mini-ecommerce-frontend-chi.vercel.app',
  'https://mini-e-commerce-platform-two.vercel.app',
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// ✅ CRITICAL: handle preflight requests globally
app.options('*', cors({
  origin: allowedOrigins,
  credentials: true,
}));

// ✅ Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Health check route
app.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Mini E-Commerce API is running',
  });
});

// ✅ API routes
app.use('/api/v1', router);

// ✅ Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ✅ Error handling
app.use(notFoundHandler);
app.use(errorHandler);

export default app;