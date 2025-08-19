import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/exports.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
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
