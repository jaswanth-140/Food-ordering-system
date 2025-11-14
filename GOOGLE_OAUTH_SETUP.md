# Google OAuth Setup Instructions

## Getting Your Google Client ID

To enable Google Sign-In in your application, you need to obtain a Google Client ID:

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Enter a project name (e.g., "Food Delivery App")
4. Click "Create"

### Step 2: Enable Google+ API

1. In the left sidebar, go to "APIs & Services" → "Library"
2. Search for "Google+ API"
3. Click on it and press "Enable"

### Step 3: Create OAuth Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. If prompted, configure the OAuth consent screen:
   - Choose "External" user type
   - Fill in required fields (App name, User support email, Developer email)
   - Add authorized domains if deploying to production
   - Save and continue through the scopes and test users sections

4. Back in "Create OAuth client ID":
   - Application type: "Web application"
   - Name: "Food Delivery App Web Client"
   - Authorized JavaScript origins:
     - `http://localhost:5173` (for development)
     - Add your production URL when deploying
   - Authorized redirect URIs:
     - `http://localhost:5173`
     - Add your production URL when deploying
   - Click "Create"

5. Copy the **Client ID** (looks like: `123456789-abcdefg.apps.googleusercontent.com`)

### Step 4: Add Client ID to Your App

1. Copy the environment template:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` in your editor

3. Replace `YOUR_GOOGLE_CLIENT_ID_HERE` with your actual Client ID:
   ```
   VITE_GOOGLE_CLIENT_ID=123456789-abcdefg.apps.googleusercontent.com
   ```

4. Save the file

**Important:** The `.env.local` file is already in `.gitignore` and will NOT be committed to version control. This keeps your Client ID secure.

### Step 5: Test Google Sign-In

1. Restart your development server if it's running
2. Navigate to `/login`
3. Click the "Continue with Google" button
4. Select your Google account
5. You should be logged in and redirected to the home page

## Features Implemented

✅ **Google OAuth Integration**: Real Google account selection and authentication
✅ **User Profile**: Displays Google profile picture and name
✅ **Persistent Login**: User stays logged in even after page refresh (localStorage)
✅ **Logout Functionality**: Sign out button in Profile page
✅ **Auto-redirect**: Already logged-in users are redirected from login page
✅ **One Tap Sign-In**: Quick sign-in without extra clicks

## Security Notes

- **Never commit your Client ID to public repositories** if you have restricted it
- For production, add your actual domain to authorized origins
- Consider implementing backend authentication for production apps
- The current implementation uses localStorage (client-side only)

## Troubleshooting

### "Unauthorized JavaScript origin" error
- Make sure `http://localhost:5173` is added to Authorized JavaScript origins
- Check if you're using the correct port (Vite default is 5173)

### Google button doesn't appear
- Check browser console for errors
- Verify your Client ID is correct
- Make sure you're using a valid Google account

### Sign-in popup blocked
- Allow popups for localhost in your browser settings
- Try disabling popup blockers temporarily

## Next Steps for Production

1. Set up proper backend authentication
2. Add JWT tokens for secure API calls
3. Implement session management
4. Add email/password authentication
5. Create a proper sign-up flow
6. Add account verification
7. Implement "Remember me" functionality with secure cookies
