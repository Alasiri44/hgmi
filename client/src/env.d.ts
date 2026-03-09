/// <reference types="react-scripts" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_API_KEY: string;
  readonly VITE_GOOGLE_MAPS_API_KEY: string;
  // add more env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}