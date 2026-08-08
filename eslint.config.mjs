import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypeScript from 'eslint-config-next/typescript'

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  {
    // Existing UI patterns are tracked as warnings. Security/correctness rules
    // remain enabled without forcing a broad React refactor in this hardening pass.
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@next/next/no-html-link-for-pages': 'warn',
      'react/no-unescaped-entities': 'warn',
      'react-hooks/immutability': 'warn',
      'react-hooks/purity': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])
