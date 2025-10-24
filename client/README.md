# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Environment variables and API URL

This frontend expects a Vite environment variable `VITE_API_URL` to be set which points to the backend API base URL (including the trailing slash and `/api/v1/noteapp/` path). Example (create `frontend/.env`):

VITE_API_URL="http://localhost:4002/api/v1/noteapp/"

If `VITE_API_URL` is not set, the app falls back to `http://localhost:4002/api/v1/noteapp/`.
