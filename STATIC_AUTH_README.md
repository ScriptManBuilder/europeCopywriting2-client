# Static Authentication Mode

This application now runs in **static mode** without requiring a backend server.

## Features

- ✅ **No Backend Required**: All authentication is handled client-side
- ✅ **Environment-Based Credentials**: Test user credentials stored in `.env`
- ✅ **Course Access Control**: Only the test user can access courses
- ✅ **Full Registration/Login**: Other users can register/login but won't see courses

## Test User Credentials

The test user has exclusive access to all courses in the Account page:

```
Email: test@test.com
Password: 12345
```

These credentials are defined in the `.env` file:

```env
REACT_APP_TEST_USER_EMAIL=test@test.com
REACT_APP_TEST_USER_PASSWORD=12345
REACT_APP_TEST_USER_FIRSTNAME=Test
REACT_APP_TEST_USER_LASTNAME=User
```

## How It Works

### Authentication Flow

1. **Login**: User enters credentials
2. **Validation**: Credentials are checked against environment variables
3. **Storage**: User data is stored in `localStorage` as `static_user`
4. **Session**: User remains logged in until logout

### Course Access

- **Test User** (`test@test.com`): Full access to all courses with videos
- **Other Users**: Can login/register but see "No courses available" message

### Account Page Sections

1. **Profile Information**: Shows user's first name, last name, email, and account status
2. **My Copywriting Courses**: 
   - For `test@test.com`: Displays all courses with videos and details
   - For others: Shows empty state with message to purchase courses
3. **Order History**: Empty state for all users (static mode)

## Course Display Features

For the test user, each course includes:

- **Course Overview**: Progress stats (Total Courses, Hours of Content, Lifetime Access)
- **Video Player**: Multiple videos per course with subtitles in 4 languages (EN, FR, ES, NL)
- **Course Details**: Duration, Level, Language, Access type
- **Course Description**: Full course description
- **Video Protection**: Context menu disabled, download prevention enabled

## File Structure

```
src/
├── contexts/
│   └── AuthContext.tsx          # Static authentication logic
├── pages/
│   └── Account.tsx              # Course display logic
├── services/
│   └── api.ts                   # Disabled API (for compatibility)
└── data/
    └── products.ts              # Course data
```

## Key Changes

### AuthContext.tsx
- Removed backend API calls
- Added environment variable-based authentication
- Uses `localStorage` for session management

### Account.tsx
- Enhanced course display with modern UI
- Course access restricted to `test@test.com`
- Added video protection features
- Mobile-responsive design

### api.ts
- All functions throw errors in static mode
- Kept for backward compatibility
- Authentication managed by AuthContext

## Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Important Notes

- ⚠️ **Security**: This is a static demo. Do not use in production with sensitive data.
- 📝 **Data Persistence**: User sessions persist in `localStorage` only
- 🔄 **Course Updates**: Modify `src/data/products.ts` to update course content
- 🎨 **Styling**: Course UI is fully responsive and mobile-optimized

## Customization

### Change Test User Credentials

Edit `.env` file:

```env
REACT_APP_TEST_USER_EMAIL=your@email.com
REACT_APP_TEST_USER_PASSWORD=yourpassword
REACT_APP_TEST_USER_FIRSTNAME=FirstName
REACT_APP_TEST_USER_LASTNAME=LastName
```

### Add More Courses

Edit `src/data/products.ts` to add course data and videos.

### Modify Course Access

Edit `src/pages/Account.tsx`, line where `isTestAccount` is checked:

```tsx
const isTestAccount = user?.email === 'test@test.com';
```

## Migration Back to Backend

To restore backend functionality:

1. Restore original `AuthContext.tsx` with API calls
2. Restore original `api.ts` implementation
3. Update `.env` with correct `REACT_APP_API_BASE_URL`
4. Remove static authentication logic

---

**Version**: 2.0 (Static Mode)  
**Last Updated**: December 4, 2025
