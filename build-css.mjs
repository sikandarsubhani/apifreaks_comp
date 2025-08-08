#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const execAsync = promisify(exec);

async function ensureDir(dir) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}

async function buildCSS() {
  console.log('🎨 Building standalone CSS...');

  try {
    // Ensure dist directory exists
    await ensureDir('dist');

    // Process the complete CSS file that includes all utilities and styles
    console.log('⚙️ Processing complete CSS through Tailwind...');
    await execAsync('npx postcss src/library/styles/complete.css -o dist/af-components.css');

    // Process individual files as well for granular imports
    console.log('📦 Processing individual CSS files...');
    await execAsync('npx postcss src/library/styles/globals.css -o dist/globals.css');
    await execAsync('npx postcss src/library/styles/blog.css -o dist/blog.css');
    await execAsync('npx postcss src/library/styles/public-pages.css -o dist/public-pages.css');

    // Create an index.css that imports the main compiled CSS
    const indexCss = `/* APIFreaks Components - Main Entry Point */
@import './af-components.css';`;
    await writeFile('dist/index.css', indexCss);

    console.log('✅ CSS build complete!');
    console.log('📄 Generated files:');
    console.log('  - dist/af-components.css (main compiled CSS - use this!)');
    console.log('  - dist/index.css (entry point)');
    console.log('  - dist/globals.css (individual)');
    console.log('  - dist/blog.css (individual)');
    console.log('  - dist/public-pages.css (individual)');
    console.log('');
    console.log('💡 In your host app, import:');
    console.log('   import "@7sikandar/af-footer/styles"');
    console.log('   // or');
    console.log('   import "@7sikandar/af-footer/styles/af-components.css"');

  } catch (error) {
    console.error('❌ CSS build failed:', error.message);
    process.exit(1);
  }
}

buildCSS();
