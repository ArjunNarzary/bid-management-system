# Bid Management System - Email Archiving

This system automatically archives emails from a G-Suite inbox using Gmail API and OAuth integration. It stores emails and their attachments in a PostgreSQL database and Google Drive.

## Features

- OAuth-based Gmail API integration
- Automatic email archiving
- Attachment handling with Google Drive storage
- Email threading support
- Modern web interface for viewing archived emails

## Prerequisites

- Node.js 18 or later
- PostgreSQL database
- Google Cloud Platform account with Gmail API and Google Drive API enabled

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd bid-management-system
   ```

2. Install dependencies:

   ```bash
   npm install
     or
   npm install --force
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env`
   - Fill in the required environment variables:
     - `DATABASE_URL`: PostgreSQL connection string
     - `GOOGLE_CLIENT_ID`: Google OAuth client ID
     - `GOOGLE_CLIENT_SECRET`: Google OAuth client secret
     - `GOOGLE_REDIRECT_URI`: OAuth redirect URI (e.g., http://localhost:3000/api/auth/callback/google)
     - `GOOGLE_DRIVE_FOLDER_ID`: Google Drive folder ID for storing attachments
     - `AUTH_SECRET`: Generate random secret key

4. Set up the database:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Google Cloud Platform Setup

1. Create a new project in Google Cloud Console
2. Enable the Gmail API and Google Drive API
3. Create OAuth 2.0 credentials:
   - Set the application type as "Web application"
   - Add authorized redirect URIs
   - Download the client ID and client secret

## Usage

1. Visit the application in your browser (default: http://localhost:3000)
2. Click "Connect Gmail" to start the OAuth flow
3. Grant the required permissions
4. View archived emails in the dashboard
5. If no emails is shown wait for 2 minutes and refresh, email will be fetch and save to database on first render in background.

## Development

- The application is built with Next.js 14 and TypeScript
- Uses Prisma as the ORM for database operations
- Implements Google APIs for email and file handling
- Uses Tailwind CSS for styling and shadcn for UI components

## Security Considerations

- Next Auth is used for authentication
- No token or refresh are stored
- All API endpoints are protected
- File attachments are stored in a dedicated Google Drive folder

## License
