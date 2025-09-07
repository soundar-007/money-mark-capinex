# Authentication System

This is a clean, simple authentication system with route protection and automatic redirects.

## What's Included

### 1. **AuthContext** (`src/context/AuthContext.jsx`)

- Manages authentication state (user, isAuthenticated, isLoading)
- Handles login, logout, and user updates
- Automatically checks auth status on page refresh
- Stores tokens and user info in localStorage

### 2. **ProtectedRoute** (`src/components/Auth/ProtectedRoute.jsx`)

- Protects routes based on authentication requirements
- Automatically redirects users:
  - **Not logged in** → redirected to login page
  - **Already logged in** → redirected to dashboard
- Shows loading spinner while checking auth status

### 3. **Updated useLogin Hook**

- Now uses AuthContext for state management
- Automatically updates authentication state on successful login
- No more manual localStorage management

### 4. **Enhanced Header Component**

- Shows user information
- Logout functionality
- User dropdown menu

## How It Works

### **Route Protection:**

1. **Login Page** (`/`):

   ```jsx
   <ProtectedRoute requireAuth={false}>
     <Login />
   </ProtectedRoute>
   ```

   - If user is already logged in → redirected to `/dashboard`
   - If user is not logged in → shows login page

2. **Dashboard Pages** (`/dashboard/*`):
   ```jsx
   <ProtectedRoute requireAuth={true}>
     <DashboardWrapper>{children}</DashboardWrapper>
   </ProtectedRoute>
   ```
   - If user is not logged in → redirected to `/`
   - If user is logged in → shows dashboard

### **Authentication Flow:**

1. **User visits any page**
2. **AuthContext checks localStorage for tokens**
3. **ProtectedRoute determines access**
4. **Automatic redirects based on auth status**

### **On Page Refresh:**

- AuthContext automatically checks localStorage
- Maintains authentication state
- No need to re-login

## Usage Examples

### **Using AuthContext in Components:**

```jsx
import { useAuth } from "@/context/AuthContext";

function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}
```

### **Protecting Routes:**

```jsx
import { ProtectedRoute } from '@/components/Auth';

// For pages that require authentication
<ProtectedRoute requireAuth={true}>
  <MyProtectedPage />
</ProtectedRoute>

// For pages that should not be accessible when logged in
<ProtectedRoute requireAuth={false}>
  <LoginPage />
</ProtectedRoute>
```

## Features

- ✅ **Automatic Redirects** - Users are redirected based on auth status
- ✅ **Route Protection** - Dashboard pages are protected from unauthorized access
- ✅ **Persistent Login** - Login state survives page refresh
- ✅ **Clean API** - Simple hooks and components
- ✅ **Loading States** - Shows loading while checking authentication
- ✅ **User Dropdown** - Easy logout and user info display

## Security Features

- **Token-based Authentication** - Uses JWT tokens
- **Automatic Token Cleanup** - Removes tokens on logout
- **Route-level Protection** - Prevents unauthorized access
- **Secure Storage** - Tokens stored in localStorage (can be enhanced to httpOnly cookies)

## File Structure

```
src/
├── context/
│   └── AuthContext.jsx          # Authentication state management
├── components/
│   └── Auth/
│       ├── index.js             # Auth component exports
│       └── ProtectedRoute.jsx   # Route protection component
├── hooks/
│   └── useApi.js                # Updated to use AuthContext
└── app/
    ├── layout.jsx               # Includes AuthProvider
    ├── page.jsx                 # Login page (no auth required)
    └── dashboard/
        └── layout.jsx           # Dashboard layout (auth required)
```

## Setup

1. **AuthProvider is already added to your root layout**
2. **ProtectedRoute components are already wrapping your routes**
3. **useLogin hook is already updated to use AuthContext**

## Testing

1. **Visit `/` (login page)** - should show login form
2. **Login successfully** - should redirect to `/dashboard`
3. **Try to visit `/` again** - should redirect to `/dashboard`
4. **Logout** - should redirect to `/`
5. **Try to visit `/dashboard`** - should redirect to `/`
6. **Refresh any page** - authentication state should persist

That's it! Your authentication system is now fully functional with proper route protection and automatic redirects. 🚀

