# Repository Restructuring - Migration Notes

## Overview
The repository has been reorganized from a flat structure to a logical folder structure following best practices for full-stack JavaScript projects.

## New Structure

```
/
├── src/                       # Frontend code
│   ├── components/            # React components
│   ├── styles/                # CSS files
│   ├── assets/                # Static assets
│   └── main.jsx               # Frontend entry point
├── server/                    # Backend code
│   ├── models/                # Database models
│   └── *.js                   # Server files
├── public/                    # Public files
│   └── index.html
└── config files
```

## Breaking Changes

### For Developers Working on Frontend
- All React components are now in `src/components/`
- CSS files are in `src/styles/`
- Assets are in `src/assets/`
- The entry point `main.jsx` is in `src/`

### For Developers Working on Backend
- Server files are now in `server/`
- Database models are in `server/models/`
- The start command in `package.json` has been updated to `nodemon server/index.js`

### Updated Import Paths

**Frontend:**
```javascript
// OLD:
import App from './App.jsx';
import './index.css';
import logo from './logo.png';

// NEW:
import App from './components/App.jsx';
import './styles/index.css';
import logo from './assets/logo.png';
```

**Backend:**
```javascript
// OLD:
const User = require("./model/UserSchema");
require("./db/conn");

// NEW:
const User = require("./models/UserSchema");
require("./conn");
```

## Configuration Changes

### vite.config.js
- Added `publicDir: 'public'` to specify the public directory

### package.json
- Updated start script from `nodemon index.js` to `nodemon server/index.js`

### .gitignore (NEW)
- Added to prevent committing build artifacts and dependencies

## Running the Application

### Backend (unchanged)
```bash
npm start
```
This will run `nodemon server/index.js`

### Frontend (assumed to be separate)
The frontend is typically run with a separate process:
```bash
npm run dev  # or similar Vite command
```

## What Was NOT Changed
- No functionality was modified
- All original code logic remains the same
- Database connections and API endpoints are unchanged
- Environment variables remain the same

## Security Notes
The security scan identified 9 pre-existing issues:
- Missing rate limiting on several routes
- Clear-text cookies being sent without SSL enforcement

These issues existed before the reorganization and should be addressed in a separate security-focused PR.

## Questions?
If you encounter any issues with the new structure, please check that:
1. Your import paths are updated correctly
2. You're running commands from the repository root
3. Dependencies are installed (`npm install`)

## Rollback (if needed)
To rollback to the old structure, checkout the commit before the restructuring:
```bash
git checkout 1898fd7  # Last commit before restructuring
```
