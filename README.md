# 🌟 Social Media Application

A full-stack social media platform built with modern web technologies.

## 🏗️ Project Structure

### Server (Node.js/Express)
- **Framework**: Express.js
- **Database**: MySQL
- **Authentication**: JWT with cookies

#### API Routes
- Auth (login/register)
- Users
- Posts
- Comments

### Frontend (React)
- **Framework**: React with Vite
- **State Management**: React Context + React Query
- **UI Library**: Material-UI (MUI)
- **Routing**: React Router
- **Styling**: SCSS with dark/light theme support

## ⚠️ Issues and Improvements

### Duplicate Dependencies
- [ ] Remove `react-query` from server (only needed in frontend)
- [ ] Standardize on `date-fns` or native Date instead of `moment`

### Security Concerns
- [ ] Move database credentials from `connect.js` to environment variables
- [ ] Make CORS origin configurable via environment variable (currently hardcoded to `http://localhost:5173`)

### Project Structure
- [ ] Resolve directory structure confusion in client (`src` vs `socialmediaapp`)
- [ ] Standardize project layout

### Error Handling
- [ ] Enhance database connection error handling
- [ ] Implement consistent error responses across all API endpoints

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MySQL (v8.0+)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/michael-haroon/Dream.git
   cd Dream
   ```

2. Set up environment variables
   ```bash
   cp server/.env.example server/.env
   # Update the .env file with your database credentials
   ```

3. Install dependencies
   ```bash
   # Install server dependencies
   cd server
   npm install
   
   # Install frontend dependencies
   cd client
   npm install
   ```

4. Start the development servers
   ```bash
   # In server directory
   npm run dev
   
   # In client directory (new terminal)
   npm run dev
   ```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made by a team at Berkeley
