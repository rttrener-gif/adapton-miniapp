/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SUPABASE_URL: string;
    readonly VITE_SUPABASE_ANON_KEY: string;
    // сюда потом можно добавлять остальные VITE_* переменные
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }