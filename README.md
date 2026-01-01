# DZPlay Frontend

A modern, responsive React application for the DZPlay stadium booking platform. Built with React, TypeScript, Vite, and Tailwind CSS.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Routes](#available-routes)
- [Key Components](#key-components)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Building for Production](#building-for-production)

## ✨ Features

### For Players
- 🔐 User authentication (Email/Password & Google OAuth)
- 🏟️ Browse and search available stadiums
- 📅 Book stadiums for matches
- 👥 Find opponents and create teams
- 📊 View stats and match history
- 💼 Manage bookings and team members
- ⚙️ User profile and settings

### For Stadium Owners
- 🏢 Dashboard with analytics
- 🏟️ Manage stadium listings
- 📅 View and manage schedule
- 💰 Track earnings and revenue
- ⚙️ Stadium settings and configuration

### General Features
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 🚀 Fast page loads with Vite
- 🔄 Real-time updates
- 🛡️ Secure authentication flow
- ♿ Accessible components

## 🛠 Tech Stack

- **Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM 7.11.0
- **Styling**: Tailwind CSS 4.1.18
- **UI Components**: Custom components with class-variance-authority
- **State Management**: React Hooks
- **API Client**: Fetch API with custom wrapper
- **Linting**: ESLint 9.39.1
- **Type Checking**: TypeScript

## 📦 Prerequisites

Before you begin, ensure you have:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**
- **Backend API** running (see [dzplay-backend](../dzplay-backend/README.md))
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Installation

1. **Navigate to frontend directory**
   ```bash
   cd dzplay-frontned
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   # Create .env.local file
   touch .env.local
   ```

4. **Configure environment variables** (see [Environment Variables](#environment-variables) section)

4. **Configure environment variables** (see [Environment Variables](#environment-variables) section)

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Backend API Configuration
VITE_API_URL=http://localhost:3000

# Optional: Google Analytics, Sentry, etc.
# VITE_GA_ID=your_google_analytics_id
# VITE_SENTRY_DSN=your_sentry_dsn
```

### Environment Variable Descriptions

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| VITE_API_URL | Backend API base URL | http://localhost:3000 | Yes |

**Note:** Vite requires environment variables to be prefixed with `VITE_` to be exposed to the client.

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```

The application will start at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

### Type Check
```bash
npx tsc --noEmit
```

---

## 📁 Project Structure

```
dzplay-frontned/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, fonts, etc.
│   ├── components/           # Reusable components
│   │   ├── dashboard/        # Dashboard-specific components
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── StadiumOwnerSidebar.tsx
│   │   ├── layout/           # Layout components
│   │   │   ├── AuthLayout.tsx
│   │   │   └── Navbar.tsx
│   │   ├── shared/           # Shared components
│   │   │   └── TeamCard.tsx
│   │   └── ui/               # UI primitives
│   │       ├── Button.tsx
│   │       └── Input.tsx
│   ├── lib/                  # Utilities and helpers
│   │   ├── api.ts            # API client
│   │   ├── utils.ts          # Utility functions
│   │   └── validation.ts     # Form validation
│   ├── pages/                # Page components
│   │   ├── AuthCallback.tsx  # OAuth callback handler
│   │   ├── FindOpponents.tsx # Find teams/opponents
│   │   ├── Home.tsx          # Landing page
│   │   ├── Login.tsx         # Login page
│   │   ├── MyBookings.tsx    # User bookings
│   │   ├── MyTeam.tsx        # Team management
│   │   ├── PlayerDashboard.tsx # Player dashboard
│   │   ├── Settings.tsx      # User settings
│   │   ├── Signup.tsx        # Registration page
│   │   ├── StadiumBooking.tsx # Stadium booking flow
│   │   ├── StadiumDetails.tsx # Stadium information
│   │   ├── Stats.tsx         # User statistics
│   │   └── stadiumowner/     # Stadium owner pages
│   │       ├── Dashboard.tsx
│   │       ├── Earnings.tsx
│   │       ├── MyStadiums.tsx
│   │       ├── Schedule.tsx
│   │       └── Settings.tsx
│   ├── services/             # API services
│   │   └── auth.service.ts   # Authentication service
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles
├── html-pages/               # Legacy HTML pages (if any)
├── .env.local                # Environment variables (not in git)
├── .gitignore                # Git ignore rules
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── README.md                 # This file
├── tsconfig.json             # TypeScript configuration
├── tsconfig.app.json         # App-specific TS config
├── tsconfig.node.json        # Node-specific TS config
└── vite.config.ts            # Vite configuration
```

---

## 🗺️ Available Routes

### Public Routes (No Authentication Required)

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with platform overview |
| `/login` | Login | User login page |
| `/signup` | Signup | User registration page |
| `/auth/callback` | AuthCallback | OAuth callback handler |

### Player Routes (Authentication Required)

| Route | Component | Description |
|-------|-----------|-------------|
| `/dashboard` | PlayerDashboard | Main player dashboard |
| `/player-dashboard` | PlayerDashboard | Alternative player dashboard URL |
| `/find-opponents` | FindOpponents | Find teams and opponents |
| `/stadiums/details` | StadiumDetails | Stadium details page |
| `/stadiums/details/:id` | StadiumDetails | Specific stadium details |
| `/stadiums/book` | StadiumBooking | Book a stadium |
| `/my-team` | MyTeam | Team management |
| `/my-bookings` | MyBookings | View and manage bookings |
| `/stats` | Stats | Player statistics |
| `/settings` | Settings | User account settings |

### Stadium Owner Routes (Authentication Required)

| Route | Component | Description |
|-------|-----------|-------------|
| `/stadium-owner` | Dashboard | Stadium owner dashboard |
| `/stadium-owner/stadiums` | MyStadiums | Manage stadium listings |
| `/stadium-owner/schedule` | Schedule | View booking schedule |
| `/stadium-owner/earnings` | Earnings | Revenue and earnings tracking |
| `/stadium-owner/settings` | Settings | Stadium owner settings |

---

## 🧩 Key Components

### Layout Components

#### `DashboardLayout.tsx`
Wrapper component for dashboard pages with sidebar and navigation.

```tsx
import DashboardLayout from '@/components/dashboard/DashboardLayout';

<DashboardLayout>
  <YourContent />
</DashboardLayout>
```

#### `Navbar.tsx`
Top navigation bar with logo, menu, and user actions.

#### `Sidebar.tsx`
Player dashboard sidebar navigation.

#### `StadiumOwnerSidebar.tsx`
Stadium owner dashboard sidebar navigation.

### UI Components

#### `Button.tsx`
Reusable button component with variants.

```tsx
<Button variant="primary" size="lg">
  Click Me
</Button>
```

**Variants:** `primary`, `secondary`, `outline`, `ghost`, `danger`
**Sizes:** `sm`, `md`, `lg`

#### `Input.tsx`
Form input component with validation.

```tsx
<Input 
  type="email"
  placeholder="Enter email"
  error="Invalid email"
/>
```

### Shared Components

#### `TeamCard.tsx`
Display team information in a card format.

```tsx
<TeamCard 
  teamName="FC Barcelona"
  players={5}
  wins={10}
  losses={2}
/>
```

---

## 🔌 API Integration

### API Client (`src/lib/api.ts`)

The application uses a custom API client wrapper around the Fetch API.

#### Basic Usage

```typescript
import { api } from '@/lib/api';

// GET request
const users = await api.get('/auth/user');

// POST request
const response = await api.post('/auth/login', {
  email: 'user@example.com',
  password: 'password123'
});

// PATCH request
await api.patch('/auth/user/metadata', {
  role: 'stadiumowner'
});

// DELETE request
await api.delete('/bookings/123');
```

#### Error Handling

```typescript
try {
  const data = await api.post('/auth/login', credentials);
  // Handle success
} catch (error) {
  if (error.status === 401) {
    // Handle unauthorized
  }
  console.error(error.error);
}
```

#### Authentication

The API client automatically includes authentication tokens in requests:

```typescript
// Token is stored in localStorage/sessionStorage
// and automatically added to Authorization header
```

### Authentication Service (`src/services/auth.service.ts`)

Provides authentication-related functionality:

```typescript
import { authService } from '@/services/auth.service';

// Login
await authService.login(email, password);

// Signup
await authService.signup(email, password, role);

// Logout
await authService.logout();

// Get current user
const user = await authService.getCurrentUser();

// Check if authenticated
const isAuth = authService.isAuthenticated();
```

---

## 🎨 Styling

### Tailwind CSS

The project uses Tailwind CSS v4 for styling.

#### Utility Classes

```tsx
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
  <h1 className="text-2xl font-bold text-gray-900">Title</h1>
  <Button className="bg-blue-500 hover:bg-blue-600">Action</Button>
</div>
```

#### Custom Utilities (`src/lib/utils.ts`)

```typescript
import { cn } from '@/lib/utils';

// Merge class names
<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  className
)}>
```

### Color Palette

The project uses a consistent color palette:

- **Primary**: Blue (`bg-blue-500`, `text-blue-500`)
- **Secondary**: Gray (`bg-gray-500`, `text-gray-500`)
- **Success**: Green (`bg-green-500`, `text-green-500`)
- **Danger**: Red (`bg-red-500`, `text-red-500`)
- **Warning**: Yellow (`bg-yellow-500`, `text-yellow-500`)

### Responsive Design

The application is fully responsive:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
</div>
```

---

## 🏗️ Building for Production

### Build Command

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Build Output

```
dist/
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other-assets]
└── index.html
```

### Optimization Features

- ✅ Code splitting
- ✅ Tree shaking
- ✅ Minification
- ✅ Asset optimization
- ✅ Source maps (configurable)

### Deploy

The `dist/` folder can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Configure in repository settings
- **AWS S3**: Upload to S3 bucket
- **Nginx/Apache**: Copy to web server directory

---

## 🧪 Testing

### Manual Testing Checklist

#### Authentication Flow
- [ ] Signup with email/password
- [ ] Login with email/password
- [ ] Login with Google OAuth
- [ ] Logout functionality
- [ ] Session persistence

#### Player Features
- [ ] Browse stadiums
- [ ] View stadium details
- [ ] Book a stadium
- [ ] View bookings
- [ ] Find opponents
- [ ] Manage team

#### Stadium Owner Features
- [ ] View dashboard analytics
- [ ] Add/edit stadium listing
- [ ] View schedule
- [ ] Track earnings
- [ ] Manage settings

#### Responsive Design
- [ ] Mobile devices (320px - 767px)
- [ ] Tablets (768px - 1023px)
- [ ] Desktops (1024px+)

---

## 🔒 Security

### Best Practices Implemented

1. **Authentication**
   - Tokens stored securely
   - Automatic token refresh
   - Logout on token expiration

2. **API Security**
   - CORS configuration
   - HTTPS in production
   - Input validation

3. **Code Security**
   - No sensitive data in code
   - Environment variables for configuration
   - XSS protection

4. **Route Protection**
   - Private route guards
   - Role-based access control
   - Redirect to login when unauthenticated

---

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use

```bash
Error: Port 5173 is already in use
```

**Solution:** Kill the process or use a different port:
```bash
npm run dev -- --port 5174
```

#### API Connection Refused

```bash
Error: Connection refused to https://dzplay-backend.onrender.com
```

**Solution:** Ensure backend server is running:
```bash
cd dzplay-backend
npm run dev
```

#### Module Not Found

```bash
Error: Cannot find module '@/components/...'
```

**Solution:** Check TypeScript path configuration in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

#### Build Fails

```bash
Error: Build failed with errors
```

**Solution:** 
1. Clear node_modules and reinstall
2. Check for TypeScript errors: `npx tsc --noEmit`
3. Verify all imports are correct

---

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style Guidelines

- Use TypeScript for type safety
- Follow React best practices
- Use functional components and hooks
- Keep components small and focused
- Write meaningful variable and function names
- Add comments for complex logic

---

## 📝 License

This project is licensed under the ISC License.

---

## 👥 Support

For issues and questions:
- Check the [Backend README](../dzplay-backend/README.md)
- Review component documentation in code
- Contact the development team

---

## 🚀 Roadmap

### Planned Features
- [ ] Real-time notifications
- [ ] Chat between players/owners
- [ ] Payment integration
- [ ] Rating and review system
- [ ] Advanced search filters
- [ ] Map view for stadiums
- [ ] Mobile app (React Native)

---

**Made with ❤️ for DZPlay**
