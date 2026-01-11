# Technical Decisions

## 1. UI Components: Ant Design (antd)

**Decision:** Ant Design

**Reasons:**
- **Pre-Built Components:** Ready-made, well-designed components (Spinner, Message Box)
- **Consistency:** Unified design system across the app
- **Documentation:** Extensive documentation and examples
- **Time-Efficient:** Reduces development time by avoiding building all UI from scratch

**Usage in Project:**
- Spinner for loading states
- Message Box for notifications

---

## 2. Drag and Drop: @dnd-kit/core

**Decision:** @dnd-kit/core

**Reasons:**
- **Specialized Library:** Designed for drag & drop functionality
- **Modern Architecture:** React hooks-based API
- **Accessibility:** Built-in support for keyboard and screen readers
- **Performance:** Lightweight and optimized
- **Flexibility:** Easy to customize Kanban drag & drop

**Usage in Project:**
- Drag & drop cards between Kanban columns

**Alternatives Considered:**
- react-beautiful-dnd (deprecated/less maintained)
- React DnD (older API, more complex)

---

## 3. Data Fetching: TanStack Query + Axios

**Decision:** TanStack Query with Axios

**Reasons:**
- **Server State Management:** Efficient caching, background updates, and data synchronization
- **Loading & Error States:** Built-in management of loading, error, and success states
- **Developer Experience:** DevTools for monitoring queries and mutations
- **Axios Benefits:** Simple API, interceptors, and automatic JSON handling

**Usage in Project:**
- Fetch all inquiries and update their phases
- Optimized server state handling for Kanban board without unnecessary re-fetches

**Alternatives Considered:**
- Fetch API (less features)
- SWR (good, but TanStack Query more feature-rich)

---

## 4. Date Formatting: Day.js

**Decision:** Day.js

**Reasons:**
- **Lightweight:** Only 2KB (compared to Moment.js ~200KB)
- **Simple API:** Easy formatting and parsing dates
- **Immutable:** Immutable date operations

**Alternatives Considered:**
- Moment.js (too heavy, deprecated)
- date-fns (good, but more verbose API)

---

## 5. Type Safety: TypeScript

**Decision:** TypeScript

**Reasons:**
- **Compile-time Type Checking:** Prevents errors before runtime
- **Fast Compilation:** Optimized compiler with better refactoring support
- **Generics:** Enables reusable and flexible code
- **Self-Documentation:** Types act as documentation for components and API data

**Benefits:**
- Safer refactoring
- Better IDE support (autocomplete, IntelliSense)
- Improved team collaboration

---

## 6. Project Config & Port

**Decision:** Default API port is configurable in `src/api/index.ts`

**Reason:**
- When running locally your project may need to be on a different port and you can change the port from /src/api/index.ts
---
