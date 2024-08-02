# User Profile Task

## Description

A React project for managing user profiles. This application uses Vite for development and build tooling, TypeScript for type safety, and various libraries for form handling, data fetching, and UI enhancements.

## Features

- **Form Handling:** Utilizes `react-hook-form` and `@hookform/resolvers` with `zod` for schema validation.
- **Data Fetching:** Integrates `@tanstack/react-query` for efficient data management and caching.
- **Styling:** Styled with Tailwind CSS, with support for automatic prefixing and formatting.
- **Testing:** Includes setup for unit and integration testing with `vitest` and `@testing-library/react`.

## Setup and Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (recommended version: 18.x or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RustamovRR/user-profile-test
   cd user-profile-task

   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Running the project:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

This will start the Vite development server, which will serve the application at http://localhost:5173 by default.

4. **Building the project:**

   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   ```

This command compiles TypeScript and bundles the application using Vite.

## Testing

### Running Tests

    npm run test
    # or
    yarn test
    # or
    pnpm test

## Mock Service Worker (MSW)

The project uses Mock Service Worker for mocking API requests during development and testing. The MSW worker configuration is located in the **_public_** directory.

### Configuring MSW

The MSW worker is set up to serve from the **_./public_** directory as specified in the package.json file:

\***\*package.json\*\***

```bash
"msw": {
  "workerDirectory": [
    "./public"
  ]
}
```
