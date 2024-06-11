# Product Page

## Overview

This project is a simple product listing page built with React and Vite. It fetches product data from a public API and displays it in a grid layout. Clicking on a product logs the product details to the console.

## Features

- Fetches and displays a list of products.
- Displays product image, title, price, and rating.
- Logs product details to the console when a product is clicked.

## Project Setup

### Prerequisites

- Node.js and npm installed
- Git installed

Dependencies
Dependencies
@emotion/react: ^11.11.4
@emotion/styled: ^11.11.5
@mui/material: ^5.15.19
react: ^18.2.0
react-dom: ^18.2.0
react-router-dom: ^6.23.1
styled-components: ^6.1.11
Dev Dependencies
@types/react: ^18.2.66
@types/react-dom: ^18.2.22
@vitejs/plugin-react: ^4.2.1
eslint: ^8.57.0
eslint-plugin-react: ^7.34.1
eslint-plugin-react-hooks: ^4.6.0
eslint-plugin-react-refresh: ^0.4.6
vite: ^5.2.0
ESLint Configuration
This project uses ESLint to enforce code quality and consistency. The ESLint configuration is specified in .eslintrc.cjs.

javascript
Copy code
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2',
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
  ],
  rules: {
    'react/prop-types': 'warn',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
Available Scripts
In the project directory, you can run:

npm run dev
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

npm run build
Builds the app for production to the dist folder.

npm run lint
Runs ESLint to check for code quality and consistency.

npm run preview
Runs the built app in preview mode.

Components
ProductList
Displays a list of products with their images, titles, prices, and ratings.

Props:

products (array): The list of products to display.
onProductClick (function): The function to call when a product is clicked.
How to Contribute
If you would like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes.
Commit your changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any inquiries or feedback, please contact CodingCowboy30.
