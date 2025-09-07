# API Integration System Documentation

## Overview

This project includes a comprehensive API integration system built with axios, featuring interceptors, error handling, and React hooks for seamless API communication.

## Architecture

```
src/
├── config/
│   └── api.config.js          # API configuration and environment settings
├── lib/
│   └── axios.js               # Axios instance with interceptors
├── services/
│   ├── api.service.js         # Base API service class
│   ├── auth.service.js        # Authentication service
│   ├── leads.service.js       # Leads management service
│   ├── campaign.service.js    # Campaign management service
│   ├── user.service.js        # User management service
│   └── index.js               # Service exports
├── utils/
│   └── errorHandler.js        # Error handling utilities
├── hooks/
│   └── useApi.js              # React hooks for API calls
└── docs/
    └── API_INTEGRATION.md     # This documentation
```

## Features

- ✅ **Axios with Interceptors**: Request/response handling, authentication, retry logic
- ✅ **Environment-based Configuration**: Development, staging, and production settings
- ✅ **Service Layer**: Organized API services for different modules
- ✅ **Error Handling**: Comprehensive error parsing and user-friendly messages
- ✅ **React Hooks**: Custom hooks for API calls with loading states
- ✅ **Authentication**: Token management, refresh logic, and session handling
- ✅ **File Upload**: Progress tracking and multipart form handling
- ✅ **Retry Logic**: Exponential backoff for failed requests
- ✅ **Request Cancellation**: Abort controller support
- ✅ **Logging**: Development logging and production error tracking

## Setup

### 1. Install Dependencies

```bash
npm install axios
```

### 2. Environment Configuration

Create a `.env.local` file in your project root:

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api

# Environment
NODE_ENV=development

# Authentication
NEXT_PUBLIC_AUTH_ENABLED=true
```

### 3. Import and Use

```javascript
import { authService, leadsService, useApi } from "@/services";
```

## Usage Examples

### Basic API Call

```javascript
import { useApi } from "@/hooks/useApi";
import { leadsService } from "@/services";

function LeadsComponent() {
  const { data, loading, error, execute } = useApi(leadsService.getLeads);

  useEffect(() => {
    execute({ page: 1, limit: 10 });
  }, [execute]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.userMessage}</div>;

  return (
    <div>
      {data?.map((lead) => (
        <div key={lead.id}>{lead.name}</div>
      ))}
    </div>
  );
}
```

### Authentication

```javascript
import { useApi } from "@/hooks/useApi";
import { authService } from "@/services";

function LoginComponent() {
  const { loading, error, execute } = useApi(authService.login, {
    onSuccess: (response) => {
      // Handle successful login
      console.log("Login successful:", response.data);
    },
    onError: (error) => {
      // Handle login error
      console.error("Login failed:", error);
    },
  });

  const handleLogin = async (credentials) => {
    try {
      await execute(credentials);
    } catch (error) {
      // Error already handled by onError callback
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {/* Form fields */}
      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
```

### File Upload with Progress

```javascript
import { useApi } from "@/hooks/useApi";
import { leadsService } from "@/services";

function DocumentUpload({ leadId }) {
  const { loading, error, execute } = useApi(leadsService.uploadLeadDocuments);

  const handleFileUpload = async (files) => {
    const onProgress = (percent) => {
      console.log(`Upload progress: ${percent}%`);
    };

    try {
      await execute(leadId, files, onProgress);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={(e) => handleFileUpload(e.target.files)}
        disabled={loading}
      />
      {loading && <div>Uploading...</div>}
      {error && <div>Error: {error.userMessage}</div>}
    </div>
  );
}
```

### List Management with Pagination

```javascript
import { useApiList } from "@/hooks/useApi";
import { leadsService } from "@/services";

function LeadsList() {
  const {
    data: leads,
    loading,
    error,
    pagination,
    execute,
    addItem,
    updateItem,
    removeItem,
  } = useApiList(leadsService.getLeads);

  useEffect(() => {
    execute({ page: 1, limit: 10 });
  }, [execute]);

  const handleAddLead = async (leadData) => {
    try {
      const response = await leadsService.createLead(leadData);
      addItem(response.data);
    } catch (error) {
      console.error("Failed to add lead:", error);
    }
  };

  const handleUpdateLead = async (leadId, updates) => {
    try {
      await leadsService.updateLead(leadId, updates);
      updateItem(leadId, updates);
    } catch (error) {
      console.error("Failed to update lead:", error);
    }
  };

  const handleDeleteLead = async (leadId) => {
    try {
      await leadsService.deleteLead(leadId);
      removeItem(leadId);
    } catch (error) {
      console.error("Failed to delete lead:", error);
    }
  };

  return (
    <div>
      {/* Leads list */}
      {leads?.map((lead) => (
        <div key={lead.id}>
          {lead.name}
          <button
            onClick={() => handleUpdateLead(lead.id, { status: "active" })}
          >
            Activate
          </button>
          <button onClick={() => handleDeleteLead(lead.id)}>Delete</button>
        </div>
      ))}

      {/* Pagination */}
      <div>
        Page {pagination.page} of {pagination.totalPages}
        <button
          onClick={() => execute({ page: pagination.page - 1, limit: 10 })}
          disabled={pagination.page <= 1}
        >
          Previous
        </button>
        <button
          onClick={() => execute({ page: pagination.page + 1, limit: 10 })}
          disabled={pagination.page >= pagination.totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
```

### Optimistic Updates

```javascript
import { useApiOptimistic } from "@/hooks/useApi";
import { leadsService } from "@/services";

function LeadStatus({ lead }) {
  const { loading, error, execute } = useApiOptimistic(
    leadsService.updateLeadStatus
  );

  const handleStatusChange = async (newStatus) => {
    const optimisticUpdate = { status: newStatus };

    try {
      await execute(optimisticUpdate, lead.id, newStatus);
    } catch (error) {
      // Optimistic update will be automatically reverted
      console.error("Status update failed:", error);
    }
  };

  return (
    <div>
      <select
        value={lead.status}
        onChange={(e) => handleStatusChange(e.target.value)}
        disabled={loading}
      >
        <option value="new">New</option>
        <option value="contacted">Contacted</option>
        <option value="qualified">Qualified</option>
        <option value="converted">Converted</option>
      </select>
      {loading && <span>Updating...</span>}
      {error && <span>Error: {error.userMessage}</span>}
    </div>
  );
}
```

## Service Methods

### Authentication Service

```javascript
// Login
await authService.login({ email, password, rememberMe });

// Logout
await authService.logout();

// Refresh token
await authService.refreshToken();

// Get profile
await authService.getProfile();

// Update profile
await authService.updateProfile(userData);

// Check authentication
const isAuth = authService.isAuthenticated();

// Get user info
const userInfo = authService.getUserInfo();
```

### Leads Service

```javascript
// Get leads with filters
await leadsService.getLeads({
  page: 1,
  limit: 10,
  search: "john",
  status: "active",
  priority: "high",
});

// Create lead
await leadsService.createLead(leadData);

// Update lead
await leadsService.updateLead(leadId, updates);

// Delete lead
await leadsService.deleteLead(leadId);

// Update status
await leadsService.updateLeadStatus(leadId, "qualified");

// Upload documents
await leadsService.uploadLeadDocuments(leadId, files, onProgress);

// Get statistics
await leadsService.getLeadStats({ dateFrom: "2024-01-01" });
```

### Campaign Service

```javascript
// Get campaigns
await campaignService.getCampaigns({ status: "active" });

// Create campaign
await campaignService.createCampaign(campaignData);

// Start campaign
await campaignService.startCampaign(campaignId);

// Pause campaign
await campaignService.pauseCampaign(campaignId, "User request");

// Get campaign performance
await campaignService.getCampaignPerformance(campaignId);
```

### User Service

```javascript
// Get users
await userService.getUsers({ role: "admin" });

// Create user
await userService.createUser(userData);

// Update user
await userService.updateUser(userId, updates);

// Assign role
await userService.assignRole(userId, roleId);

// Get user permissions
await userService.getUserPermissions(userId);
```

## Error Handling

### Automatic Error Handling

The system automatically handles common HTTP errors:

- **400/422**: Validation errors with detailed messages
- **401**: Authentication errors (triggers token refresh)
- **403**: Authorization errors
- **404**: Not found errors
- **429**: Rate limiting errors
- **500+**: Server errors with retry logic

### Custom Error Handling

```javascript
const { error, execute } = useApi(apiFunction, {
  onError: (error) => {
    // Custom error handling
    if (error.type === "VALIDATION") {
      showValidationErrors(error.responseData.errors);
    } else if (error.type === "AUTHENTICATION") {
      redirectToLogin();
    }
  },
});
```

### Error Display

```javascript
import { formatErrorForDisplay } from "@/utils/errorHandler";

function ErrorDisplay({ error }) {
  if (!error) return null;

  const formattedError = formatErrorForDisplay(error);

  return (
    <div className={`alert alert-${formattedError.severity.toLowerCase()}`}>
      <span>{formattedError.icon}</span>
      <strong>{formattedError.title}</strong>
      <p>{formattedError.message}</p>
    </div>
  );
}
```

## Configuration

### Environment Variables

```env
# Development
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api

# Staging
NEXT_PUBLIC_API_BASE_URL=https://staging-api.yourdomain.com/api

# Production
NEXT_PUBLIC_API_BASE_URL=https://api.yourdomain.com/api
```

### API Configuration

```javascript
// src/config/api.config.js
const API_CONFIG = {
  development: {
    baseURL: "http://localhost:3001/api",
    timeout: 30000,
    retryAttempts: 3,
    retryDelay: 1000,
  },
  production: {
    baseURL: "https://api.yourdomain.com/api",
    timeout: 30000,
    retryAttempts: 3,
    retryDelay: 1000,
  },
};
```

## Best Practices

### 1. Use Service Layer

Always use the service layer instead of calling axios directly:

```javascript
// ✅ Good
await leadsService.getLeads(params);

// ❌ Bad
await apiClient.get("/leads", { params });
```

### 2. Handle Loading States

Always show loading indicators:

```javascript
const { loading, data, error } = useApi(apiFunction);

if (loading) return <Spinner />;
if (error) return <ErrorMessage error={error} />;
```

### 3. Use Appropriate Hooks

- `useApi`: For single API calls
- `useApiList`: For list data with pagination
- `useApiOptimistic`: For optimistic updates

### 4. Error Boundaries

Implement React error boundaries for API errors:

```javascript
class ApiErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    if (error.type === "AUTHENTICATION") {
      // Handle auth errors
    }
  }
}
```

### 5. Request Cancellation

Cancel requests when components unmount:

```javascript
useEffect(() => {
  const { execute, cancel } = useApi(apiFunction);

  execute();

  return () => {
    cancel(); // Cancel ongoing request
  };
}, []);
```

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure your API server allows requests from your frontend domain
2. **Authentication Errors**: Check if tokens are properly stored and sent
3. **Network Errors**: Verify API base URL and network connectivity
4. **Timeout Errors**: Adjust timeout values in configuration

### Debug Mode

Enable debug logging in development:

```javascript
// Console will show detailed request/response logs
console.log("🚀 API Request:", requestDetails);
console.log("✅ API Response:", responseDetails);
console.log("❌ API Error:", errorDetails);
```

## Performance Considerations

1. **Request Deduplication**: Use React Query or SWR for caching
2. **Lazy Loading**: Load data only when needed
3. **Pagination**: Implement proper pagination for large datasets
4. **Debouncing**: Debounce search inputs to avoid excessive API calls

## Security

1. **HTTPS**: Always use HTTPS in production
2. **Token Storage**: Store tokens securely (httpOnly cookies for sensitive apps)
3. **Input Validation**: Validate all user inputs before sending to API
4. **Rate Limiting**: Implement rate limiting on the client side

## Testing

### Mock API Responses

```javascript
// Mock service for testing
const mockLeadsService = {
  getLeads: jest.fn().mockResolvedValue({
    data: mockLeads,
    success: true,
  }),
};

// Test component
const { result } = renderHook(() => useApi(mockLeadsService.getLeads));
```

### Error Testing

```javascript
// Test error handling
const mockErrorService = {
  getData: jest.fn().mockRejectedValue(new Error("Network error")),
};

const { result } = renderHook(() => useApi(mockErrorService.getData));
```

## Contributing

When adding new services:

1. Extend the base `ApiService` class
2. Follow the existing naming conventions
3. Add proper error handling
4. Include JSDoc comments
5. Add to the services index file
6. Update this documentation

## Support

For issues or questions:

1. Check the error logs in the browser console
2. Verify environment configuration
3. Test API endpoints directly
4. Review network tab for request/response details
