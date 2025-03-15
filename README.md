# Rupvan Foundation

## Netlify Deployment Instructions

### Deployment Settings
1. Connect your GitHub repository to Netlify
2. Use the following build settings:
   - Base directory: `rupvan`
   - Build command: `npm install --legacy-peer-deps && npm run build`
   - Publish directory: `dist`

### Environment Variables
- NODE_VERSION: 18
- NPM_FLAGS: --legacy-peer-deps

These settings are already configured in the `netlify.toml` file in the repository.

Step1: Open the project Rupvan-Foundation in VS Code <br>
Step2: cd over to the rupvan directory <br>
Step 3: Install the npm modules using the command: npm install react react-dom react-router-dom lucide-react <br>
Step 4: If vite is not recognized and error is thrown execute the command: npm i vite <br>
Step 5: Run the development server using npm run dev <br>
