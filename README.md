# NotePanda

A modern, full-stack note-taking application built with the MERN stack, featuring intelligent rate limiting and a sleek, responsive user interface.

## Features

- **Full CRUD Operations**: Create, read, update, and delete notes seamlessly
- **Rate Limiting**: Smart rate limiting powered by Upstash Redis to prevent abuse
- **Modern UI**: Beautiful, responsive design using Tailwind CSS and DaisyUI
- **Mobile Responsive**: Works perfectly on all device sizes
- **Real-time Feedback**: Toast notifications for all user actions
- **Fast Performance**: Optimized with Vite for lightning-fast development and builds

## Tech Stack

### Frontend
- **React 19** - Modern UI library with hooks
- **React Router 7** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Beautiful component library
- **Vite** - Next-generation frontend tooling
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Elegant toast notifications
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Upstash Redis** - Serverless Redis for rate limiting
- **CORS** - Cross-origin resource sharing

## Project Structure

```
NotePanda/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js          # MongoDB connection
│   │   │   └── upstash.js     # Upstash Redis config
│   │   ├── controllers/
│   │   │   └── notesController.js
│   │   ├── middleware/
│   │   │   └── rateLimiter.js  # Rate limiting middleware
│   │   ├── models/
│   │   │   └── Note.js         # Note schema
│   │   ├── routes/
│   │   │   └── notesRoutes.js
│   │   └── server.js           # Entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NotesNotFound.jsx
│   │   │   └── RateLimitedUI.jsx
│   │   ├── lib/
│   │   │   ├── axios.js        # API configuration
│   │   │   └── utils.js
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── package.json                # Root package.json
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notes` | Get all notes |
| `GET` | `/api/notes/:id` | Get a specific note |
| `POST` | `/api/notes` | Create a new note |
| `PUT` | `/api/notes/:id` | Update a note |
| `DELETE` | `/api/notes/:id` | Delete a note |

## Rate Limiting

NotePanda implements intelligent rate limiting to ensure fair usage:

- **100 requests per minute** per IP address
- Powered by Upstash Redis for distributed rate limiting
- Graceful error handling with user-friendly messages
- Automatic retry suggestions

## UI/UX Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations**: Loading spinners and transitions for better UX
- **Toast Notifications**: Real-time feedback for all user actions
- **Intuitive Navigation**: Clean, modern interface with clear call-to-actions