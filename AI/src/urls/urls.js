const port = import.meta.env.VITE_SERVER_PORT;
const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;

const environment = import.meta.env.VITE_ENVIRONMENT;

const renderUrl = import.meta.env.VITE_RENDER_URL;

export const serverApiUrl =
  environment === "production" ? `${renderUrl}/` : `${baseUrl}:${port}/`;
