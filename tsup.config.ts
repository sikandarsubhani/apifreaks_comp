import { defineConfig } from 'tsup';

export default defineConfig({
  // Build separate entries: server-safe and client-only
  entry: ['src/exports-server.ts', 'src/exports-client.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  // Externalize runtime-only or host-provided dependencies so bundlers
  // don't try to resolve optional packages that may not be installed here.
  external: [
    'react',
    'react-dom',
    '@tryghost/admin-api',
    '@tryghost/content-api',
  ],
  outDir: 'dist',
  tsconfig: './tsconfig.build.json',
});
