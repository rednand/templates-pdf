import { defineConfig } from 'tsup'

export default defineConfig({
  format: ['cjs', 'esm'],
  entry: ['./src/index.ts'],
  dts: true,
  shims: true,
  external: [],
  clean: true,
})
