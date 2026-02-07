# ReliefKart - Disaster Relief E-Commerce Platform

A full-stack e-commerce platform for purchasing disaster relief and emergency supplies, built specifically for Nepal. Users can browse, search, and purchase essential items like earthquake kits, first aid supplies, water purifiers, and lighting equipment — with integrated payment gateways.

> **"Be Prepared. Stay Safe."** — Shop essential disaster relief supplies. Trusted. Local. Fast.

---

## Tech Stack

| Layer        | Technology                                                  |
| ------------ | ----------------------------------------------------------- |
| **Frontend** | React 19, React Router 7, Tailwind CSS 4, Vite 6           |
| **Backend**  | Java 24, Spring Boot 3.5, Spring Data JPA, Hibernate        |
| **Database** | PostgreSQL                                                  |
| **Payments** | eSewa Payment Gateway, Khalti Payment Gateway               |
| **Others**   | Axios, CryptoJS (HMAC-SHA256 signatures), UUID, Lombok      |

---

## Features

### User Authentication
- User registration with comprehensive validation (email format, phone number, password strength)
- Secure login with session persistence via localStorage
- Real-time form validation with descriptive error messages
- Duplicate email/phone detection

### Product Catalog
- Browse all available disaster relief products
- Filter products by category (Earthquake Kits, First Aid, Water & Food, Lighting & Power)
- Full-text search across product names and categories
- Detailed product pages with availability status, pricing, and descriptions

### Shopping Cart
- Add/remove products with quantity management
- Real-time cart synchronization with backend database
- Persistent cart across sessions (server-side storage)
- Live cart item count in navigation header
- Cart total calculation

### Checkout & Payments
- Order summary review before payment
- **eSewa Integration** — Full payment flow with HMAC-SHA256 signature verification, transaction tracking, and success/failure handling
- **Khalti Integration** — Payment initiation via REST API
- Transaction receipt display with full payment details (transaction code, UUID, status, amount)

### UI/UX
- Fully responsive design (mobile-first with Tailwind CSS)
- Hero section with call-to-action
- Category grid for quick navigation
- Toast notifications for user feedback
- Clean, modern interface with consistent styling

---

## Architecture

```
ReliefKart/
├── Backend/                          # Spring Boot REST API
│   └── src/main/java/com/rabin/backend/
│       ├── controller/               # REST endpoints
│       │   ├── UserController        #   POST /user/register, /user/login
│       │   ├── ProductController     #   GET  /api/products, /api/product/{id}, /api/products/search
│       │   └── CartController        #   GET/POST/DELETE /cart
│       ├── model/                    # JPA entities
│       │   ├── UserDetails           #   User profile with unique email & phone
│       │   ├── Product               #   Product with category, price, availability
│       │   └── CartItem              #   Many-to-one relationships (User ↔ Product)
│       ├── repo/                     # Spring Data JPA repositories
│       └── service/                  # Business logic layer
│
└── frontend/                         # React SPA
    └── src/
        ├── pages/                    # Route-level components
        │   ├── Home                  #   Landing page with hero, categories, featured products
        │   ├── Products              #   Product listing with search & filter
        │   ├── ProductDetail         #   Single product view with add-to-cart & buy-now
        │   ├── Cart                  #   Cart management with quantity controls
        │   ├── CheckOut              #   Order review & payment selection
        │   ├── Login / Register      #   Authentication forms with validation
        │   └── Account / About / Contact
        ├── components/               # Reusable UI components
        │   ├── Header                #   Navigation, search bar, cart badge
        │   ├── Hero                  #   Landing page banner
        │   ├── ProductCard           #   Product display card
        │   ├── CategoryGrid          #   Category navigation tiles
        │   ├── Toast                 #   Notification system
        │   └── Layout / Footer
        ├── context/
        │   └── CartContext           # Global cart state management (React Context API)
        ├── eSewa/                    # eSewa payment integration
        │   ├── EsewaPayment          #   Payment form with signature generation
        │   ├── Success               #   Transaction receipt & confirmation
        │   └── Failure               #   Payment failure handling
        └── khalti/
            └── Khalti                # Khalti payment initiation
```

---

## API Endpoints

### User Management
| Method | Endpoint          | Description                 |
| ------ | ----------------- | --------------------------- |
| POST   | `/user/register`  | Register a new user         |
| POST   | `/user/login`     | Authenticate existing user  |

### Products
| Method | Endpoint                       | Description                          |
| ------ | ------------------------------ | ------------------------------------ |
| GET    | `/api/products`                | Get all products                     |
| GET    | `/api/products?category={cat}` | Filter products by category          |
| GET    | `/api/product/{id}`            | Get single product details           |
| GET    | `/api/products/search?keyword={q}` | Search products by name/category |

### Cart
| Method | Endpoint                       | Description                    |
| ------ | ------------------------------ | ------------------------------ |
| GET    | `/cart?userId={id}`            | Get user's cart items          |
| POST   | `/cart?userId={id}`            | Sync cart items to server      |
| DELETE | `/cart/{itemId}?userId={id}`   | Remove specific cart item      |
| DELETE | `/cart?userId={id}`            | Clear entire cart              |

---

## Database Schema

```
┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│  UserDetails  │       │   CartItem   │       │   Product    │
├──────────────┤       ├──────────────┤       ├──────────────┤
│ id (PK)      │──┐    │ id (PK)      │    ┌──│ id (PK)      │
│ fullName     │  └───>│ userDetails  │    │  │ name         │
│ email (UQ)   │       │ product      │<───┘  │ description  │
│ phoneNumber  │       │ quantity     │       │ price        │
│ password     │       └──────────────┘       │ category     │
└──────────────┘        ManyToOne ↔ ManyToOne │ available    │
                                              │ quantity     │
                                              │ image        │
                                              └──────────────┘
```

---

## Getting Started

### Prerequisites
- Java 24+
- Node.js 18+
- PostgreSQL
- Maven

### Backend Setup
```bash
# Create PostgreSQL database
createdb ReliefKart

# Navigate to backend
cd Backend

# Run Spring Boot application
./mvnw spring-boot:run
```
The API server starts at `http://localhost:8080`

### Frontend Setup
```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```
The app opens at `http://localhost:5173`

---

## Key Technical Highlights

- **Layered Architecture** — Clean separation of concerns with Controller → Service → Repository pattern on the backend
- **Global State Management** — React Context API for cart state with automatic backend synchronization
- **Payment Security** — HMAC-SHA256 signature generation for eSewa payment verification using CryptoJS
- **Relational Data Modeling** — JPA entities with ManyToOne relationships and cascading operations
- **Real-time Search** — Backend keyword search with case-insensitive LIKE queries across product fields
- **Responsive Design** — Mobile-first UI built with Tailwind CSS utility classes
- **RESTful API Design** — Standard HTTP methods and status codes for CRUD operations
- **Transactional Cart Sync** — Atomic cart operations with `@Transactional` annotation ensuring data consistency

---

## Product Categories

| Category          | Example Items                              |
| ----------------- | ------------------------------------------ |
| Earthquake Kits   | Portable survival kits, emergency gear     |
| First Aid         | First aid kits, medical supplies           |
| Water & Food      | Water purifiers, emergency food supplies   |
| Lighting & Power  | Solar torches, portable power solutions    |

---

## Built With

- **React 19** — Component-based UI with hooks and context
- **Spring Boot 3.5** — Production-ready Java backend framework
- **PostgreSQL** — Reliable relational database
- **Tailwind CSS 4** — Utility-first CSS framework
- **Vite 6** — Next-generation frontend build tool
- **eSewa & Khalti** — Nepal's leading digital payment gateways
