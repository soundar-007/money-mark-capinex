# Simple API Integration

This is a clean, simple API integration using React Query (TanStack Query) and Axios.

## What's Included

### 1. **Simple API Client** (`src/lib/api.js`)

- Basic Axios instance with auth token handling
- Simple interceptors for authentication
- Automatic token cleanup on 401 errors

### 2. **API Functions** (`src/lib/apiFunctions.js`)

- Simple functions for all API calls
- No complex classes or inheritance
- Easy to understand and modify

### 3. **React Query Hooks** (`src/hooks/useApi.js`)

- `useLogin()` - for login operations
- `useProfile()` - for user profile
- `useLeads()` - for leads data
- `useCreateLead()` - for creating leads
- `useUpdateLead()` - for updating leads
- `useDeleteLead()` - for deleting leads
- `useCampaigns()` - for campaigns data
- `useCreateCampaign()` - for creating campaigns
- `useUsers()` - for users data

## Setup

1. **Install dependencies:**

   ```bash
   npm install @tanstack/react-query axios
   ```

2. **Create `.env.local` file:**

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
   ```

3. **Use the hooks in your components:**

   ```jsx
   import { useLogin, useLeads } from "@/hooks/useApi";

   function MyComponent() {
     const { mutate: login, isPending, error } = useLogin();
     const { data: leads, isLoading } = useLeads();

     const handleLogin = () => {
       login({ mobile_number: "1234567890", otp: "123456" });
     };

     return (
       <div>
         <button onClick={handleLogin} disabled={isPending}>
           {isPending ? "Logging in..." : "Login"}
         </button>

         {error && <p>Error: {error.message}</p>}

         {isLoading ? (
           <p>Loading leads...</p>
         ) : (
           <ul>
             {leads?.map((lead) => (
               <li key={lead.id}>{lead.name}</li>
             ))}
           </ul>
         )}
       </div>
     );
   }
   ```

## Features

- ✅ **Simple & Clean** - No complex classes or inheritance
- ✅ **React Query** - Built-in caching, loading states, error handling
- ✅ **Automatic Auth** - Tokens handled automatically
- ✅ **Easy to Use** - Just import and use the hooks
- ✅ **Type Safe** - Easy to add TypeScript later
- ✅ **Performance** - React Query handles caching and updates

## How It Works

1. **API Client** (`api.js`) handles all HTTP requests
2. **API Functions** (`apiFunctions.js`) define the actual API endpoints
3. **React Query Hooks** provide easy-to-use interfaces with loading states
4. **Automatic Token Management** - tokens are stored and sent automatically
5. **Error Handling** - React Query handles errors and retries

## Adding New API Endpoints

1. Add the function to `src/lib/apiFunctions.js`:

   ```js
   export const apiFunctions = {
     // ... existing functions
     getNewData: async (params) => {
       const response = await api.get("/new-endpoint", { params });
       return response.data;
     },
   };
   ```

2. Add the hook to `src/hooks/useApi.js`:

   ```js
   export const useNewData = (params = {}) => {
     return useQuery({
       queryKey: ["newData", params],
       queryFn: () => apiFunctions.getNewData(params),
     });
   };
   ```

3. Use in your component:
   ```jsx
   const { data, isLoading } = useNewData();
   ```

That's it! Simple, clean, and easy to maintain.
