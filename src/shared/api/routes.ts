export const baseUrl =
  import.meta.env.MODE === 'production'
    ? 'https://quickshop-json-server.vercel.app'
    : 'http://localhost:3000';

export const routes = {
  products: '/products',
} as const;
