# Rupvan Foundation

A modern, responsive website for Rupvan Foundation - A senior care and nursing home dedicated to providing compassionate care for the elderly.

## Features

- **Multi-page Navigation**: Home, About, Events, Volunteer, Donate, and Contact pages
- **Multi-language Support**: Available in English, Hindi, and Marathi
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Events Gallery**: Static gallery showcasing various events and activities
- **Donation Information**: Bank account details and contact information for contributions
- **Contact Form**: Integrated form submission for inquiries
- **Interactive Map**: Embedded Google Maps showing the foundation's location
- **Founder Profiles**: Information about the leadership team

## Technologies Used

- **React** - Frontend framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Context API** - State management for language selection

## Contact Details

- **Address**: LANDMARK, St. Joseph's High School, RUPVAN FOUNDATION, RUPVAN GOLDEN AGE HOMES AND NURSING A-17, SECTOR -6, NEW PANVEL EAST, Panvel, Maharashtra 410206
- **Phone**: 093267 90060
- **Email**: info@rupvanfoundation.org

## Bank Details

- **Account Name**: Rupvan Foundation
- **Account Number**: 50200062927731
- **Bank**: HDFC Bank
- **IFSC Code**: HDFC0000256
- **Branch**: New Panvel (Branch Code: 0256)

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
