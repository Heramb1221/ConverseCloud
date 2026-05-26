# ConverseCloud

> Connect with native speakers. Practice any language. In real time.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4-000000?style=flat-square&logo=express)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./LICENSE)
[![Status](https://img.shields.io/badge/Status-Active_Development-brightgreen?style=flat-square)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](./CONTRIBUTING.md)

---

# Screenshots

| Preview | Description |
|---|---|
| <img width="1914" height="863" alt="image" src="https://github.com/user-attachments/assets/498d913b-9758-4aaa-a5e1-d98fb2212a20" /> | Landing / Login |
| <img width="753" height="848" alt="image" src="https://github.com/user-attachments/assets/467e42b7-fd5a-4cf0-8611-7fc735752c79" /> | User Onboarding |
| <img width="1898" height="860" alt="image" src="https://github.com/user-attachments/assets/2d2ee1f1-e1af-472a-837a-dfc8d171e248" /> | Home / Discover |
| <img width="1899" height="861" alt="image" src="https://github.com/user-attachments/assets/212e7907-f557-4b31-b2c0-d4e4f83abed1" /> | Real-Time Chat |
| <img width="1036" height="590" alt="image" src="https://github.com/user-attachments/assets/e8f1142f-49a5-43b9-bbad-61ca3ad3169a" /> | Video Calling |
| <img width="221" height="329" alt="image" src="https://github.com/user-attachments/assets/57b8aa70-cf6a-4ed2-9126-269140f54743" /> | Theme Selector |

---

# About The Project

ConverseCloud is a full-stack language exchange platform where users connect with native speakers to practice conversational language skills.

Users create profiles declaring:

- Native language
- Learning language
- Bio
- Location

The platform then surfaces compatible partners, enabling:

- Friend connections
- Real-time messaging
- Video calls

The project was built to explore engineering challenges around:

- Real-time communication systems
- Authentication state propagation
- WebSocket lifecycle management
- Deterministic channel identity
- Managed infrastructure tradeoffs

The application uses the MERN stack with deliberate technology choices:

- TanStack Query over Redux
- httpOnly JWT cookies over localStorage
- Stream SDK over self-hosted Socket.io

Each decision was made with explicit tradeoff awareness.

---

# Live Demo

| Surface | Link |
|---|---|
| Frontend | [Live Demo](https://conversecloud.onrender.com/) |

---

# Project Type

**Full-Stack Real-Time Social Platform**

- MERN Stack
- Real-Time Messaging
- WebRTC Video Calling
- Third-Party SDK Integration

---

# Project Status

## Active Development

Core functionality is complete.

Known issues and technical debt are documented below.

> Not production-hardened.

---

# Why I Built This

Language learning platforms teach grammar and vocabulary well but rarely provide structured access to real conversational partners.

This project was built to solve that gap while exploring engineering challenges such as:

- Authentication state propagation in React
- Canonical peer-to-peer channel identity
- Build-vs-buy tradeoffs in managed infrastructure

---

# Features

## Core Features

- User authentication
- Persistent sessions
- Profile onboarding
- Random avatar generation
- Friend request system
- Real-time text messaging
- WebRTC video calls
- 30+ UI themes

---

## Engineering Features

- Deterministic channel IDs
- Singleton Stream client
- Selective query invalidation
- Backend-generated Stream tokens

---

## Security Features

- httpOnly JWT cookies
- SameSite=Strict cookies
- bcrypt password hashing
- Protected middleware routes
- Password exclusion from projections

---

## Developer Experience

- TanStack Query
- Custom hooks abstraction
- Centralized Axios instance
- Zustand theme persistence

---

# Tech Stack

## Frontend

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI rendering |
| Vite | 7 | Build tooling |
| TanStack Query | v5 | Server state management |
| React Router | v7 | Routing |
| Zustand | v5 | Theme state |
| Axios | v1 | HTTP client |
| Stream Chat React | v13 | Chat UI SDK |
| Stream Video SDK | v1 | Video calling |
| Tailwind CSS | v3 | Styling |
| DaisyUI | v4 | Component system |
| Lucide React | Latest | Icons |

---

## Backend

| Technology | Version | Purpose |
|---|---|---|
| Node.js | >=20 | Runtime |
| Express | v4 | HTTP framework |
| Mongoose | v8 | MongoDB ODM |
| jsonwebtoken | v9 | JWT handling |
| bcryptjs | v3 | Password hashing |
| cookie-parser | v1 | Cookie middleware |
| cors | v2 | CORS config |
| dotenv | v16 | Environment loading |
| stream-chat | v8 | Stream backend SDK |

---

## Database

| Technology | Purpose |
|---|---|
| MongoDB Atlas | Hosted database |
| Mongoose ODM | Schema validation |

---

## External APIs

| Service | Purpose |
|---|---|
| Stream Chat API | Real-time messaging |
| Stream Video API | WebRTC signaling |

---

# Architecture

## High-Level System Diagram

```text
┌─────────────────────────────────────────────────────────┐
│                    Browser (SPA)                        │
│                                                         │
│ React + Vite                                            │
│ TanStack Query Cache ←→ Axios API calls                 │
│ Stream Chat React ←→ WebSocket                          │
│ Stream Video SDK ←→ WebRTC                              │
└──────────────┬──────────────────────────────────────────┘
               │ HTTP + JWT Cookies
               ▼
┌─────────────────────────────────────────────────────────┐
│              Express Server (Node.js)                   │
│                                                         │
│ cors → express.json → cookieParser → Router             │
│                                                         │
│ protectRoute middleware                                 │
│ jwt.verify + User.findById                              │
│                                                         │
│ Controllers: auth / user / chat                         │
│ Stream SDK: token generation                            │
└──────────────┬──────────────────────────────────────────┘
               │ Mongoose Queries
               ▼
┌─────────────────────────────────────────────────────────┐
│                  MongoDB Atlas                          │
│                                                         │
│ Collections: users, friendrequests                      │
└─────────────────────────────────────────────────────────┘
               ↕
┌─────────────────────────────────────────────────────────┐
│             Stream Platform (Managed)                   │
│                                                         │
│ Chat Infrastructure                                     │
│ WebRTC Signaling                                        │
└─────────────────────────────────────────────────────────┘
```

---

# Request Lifecycle

## Protected API Call

```text
User Action
    ↓
React component calls query/mutation
    ↓
Axios sends request + cookies
    ↓
Express middleware chain
    ↓
protectRoute middleware
    ↓
jwt.verify(token)
    ↓
User.findById()
    ↓
Controller logic
    ↓
MongoDB query
    ↓
JSON response
    ↓
TanStack Query cache update
    ↓
React re-render
```

---

# Chat Channel Identity

Two users always resolve to the same channel through lexicographic sorting.

```text
User A: abc123
User B: xyz789

["abc123", "xyz789"].sort()
    ↓
channelId = "abc123-xyz789"
```

This ensures deterministic channel creation regardless of who initiates the conversation.

---

# Folder Structure

```text
conversecloud/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
└── package.json
```

---

# Installation

## Prerequisites

- Node.js >= 20
- MongoDB Atlas account
- Stream account

---

# Clone Repository

```bash
git clone https://github.com/Heramb1221/ConverseCloud

cd conversecloud
```

---

# Install Dependencies

## Backend

```bash
cd backend

npm install
```

---

## Frontend

```bash
cd frontend

npm install
```

---

# Environment Variables

## Backend — `backend/.env`

```env
PORT=5001

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/conversecloud

JWT_SECRET_KEY=your_jwt_secret_minimum_32_characters

STREAM_API_KEY=your_stream_api_key

STREAM_API_SECRET=your_stream_api_secret

NODE_ENV=development
```

---

## Frontend — `frontend/.env`

```env
VITE_STREAM_API_KEY=your_stream_api_key
```

---

# Run Development Servers

## Backend

```bash
cd backend

npm run dev
```

---

## Frontend

```bash
cd frontend

npm run dev
```

---

# Development URLs

| Service | URL |
|---|---|
| Backend | http://localhost:5001 |
| Frontend | http://localhost:5173 |

---

# Build For Production

```bash
cd frontend

npm run build
```

Output:

```text
frontend/dist/
```

Then:

```bash
cd ../backend

NODE_ENV=production npm start
```

---

# Environment Variables Reference

| Variable | Location | Required | Description |
|---|---|---|---|
| PORT | backend | No | Express server port |
| MONGO_URI | backend | Yes | MongoDB connection |
| JWT_SECRET_KEY | backend | Yes | JWT signing secret |
| STREAM_API_KEY | backend | Yes | Stream API key |
| STREAM_API_SECRET | backend | Yes | Stream API secret |
| NODE_ENV | backend | No | Production mode |
| VITE_STREAM_API_KEY | frontend | Yes | Public Stream key |

---

# Usage

## New User Flow

1. Signup
2. Complete onboarding
3. Browse recommended users
4. Send friend requests
5. Accept requests
6. Start chatting
7. Initiate video calls

---

## Theme System

Users can select from 30+ DaisyUI themes.

Theme selection persists via `localStorage`.

---

# API Documentation

## Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/signup | Create account |
| POST | /api/auth/login | Login |
| POST | /api/auth/logout | Logout |
| POST | /api/auth/onboarding | Complete onboarding |
| GET | /api/auth/me | Current authenticated user |

---

## Users

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/users | Recommended users |
| GET | /api/users/friends | Friend list |
| GET | /api/users/friend-requests | Incoming requests |
| GET | /api/users/outgoing-friend-requests | Outgoing requests |
| POST | /api/users/friend-request/:id | Send request |
| PUT | /api/users/friend-request/:id/accept | Accept request |

---

## Chat

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/chat/token | Generate Stream token |

---

# Example Login Request

```bash
curl -X POST http://localhost:5001/api/auth/login \
  -H "Content-Type: application/json" \
  -c cookies.txt \
  -d '{"email":"user@example.com","password":"password123"}'
```

---

# Example Response

```json
{
  "success": true,
  "user": {
    "_id": "64f2a...",
    "fullName": "Jane Doe",
    "email": "user@example.com",
    "isOnboarded": true,
    "nativeLanguage": "english",
    "learningLanguage": "japanese",
    "profilePic": "https://avatar.iran.liara.run/public/42.png"
  }
}
```

---

# Performance Considerations

## Optimized Areas

- TanStack Query deduplication
- Set-based lookup optimization
- Selective cache invalidation
- httpOnly auth cookies

---

## Known Bottlenecks

- Auth middleware DB query
- Recommendations collection scans
- Missing pagination
- Large Stream SDK bundle size

---

# Tradeoffs & Limitations

| Decision | Tradeoff |
|---|---|
| Stream SDK | Vendor lock-in |
| MongoDB | Less relational power |
| HS256 JWT | Shared secret architecture |
| No refresh tokens | Cannot revoke JWTs |
| Monolith deployment | Tight frontend/backend coupling |
| No service layer | Faster dev, lower maintainability |

---

# Challenges Faced

## WebSocket Lifecycle Management

Managing singleton Stream clients inside React's `useEffect` lifecycle required careful cleanup handling to prevent duplicate WebSocket connections during component re-renders.

---

## Canonical Channel Identity

Two users initiating a chat must always resolve to the same Stream channel. Deterministic channel IDs derived from sorted user IDs solved this problem cleanly.

---

## Auth State Propagation

TanStack Query cache invalidation was used to broadcast authentication state updates across mounted React components without prop drilling or Redux complexity.

---

## Frontend / Backend Auth Coordination

Stream requires both:

- Backend-signed tokens
- Frontend API keys

Keeping signing secrets server-side while coordinating token delivery required clear separation of concerns.

---

# What I Learned

- Difference between server state and client state
- Cookie auth complexity
- Managed infrastructure tradeoffs
- Importance of atomic DB operations
- Node.js event loop constraints
- Real-world authentication architecture
- Query caching strategies
- WebSocket lifecycle management

---

# Future Scope

- Refresh token rotation
- Redis caching
- Recommendation pagination
- MongoDB transactions
- Rate limiting
- Zod validation
- Helmet.js
- Automated testing
- CI/CD pipelines
- Lazy loading
- Docker containerization

---

# Repository Philosophy

This repository is a production-inspired prototype.

The architecture intentionally mirrors real engineering decisions while documenting limitations transparently.

The goal is engineering understanding — not engineering theater.

---

# Contributing

This is a personal portfolio project.

Feedback and issue reports are welcome.

If contributing:

1. Open an issue
2. Describe the problem
3. Reference affected files if possible

---

# License

MIT License.

See `LICENSE` for details.

---

# Contact

**Heramb Chaudhari**

[![GitHub](https://img.shields.io/badge/GitHub-Heramb1221-black?style=for-the-badge&logo=github)](https://github.com/Heramb1221)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Heramb%20Chaudhari-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/heramb-chaudhari)

[![Email](https://img.shields.io/badge/Email-hchaudhari1221%40gmail.com-red?style=for-the-badge&logo=gmail)](mailto:hchaudhari1221@gmail.com)

---

> Built as a full-stack engineering exploration project.  
