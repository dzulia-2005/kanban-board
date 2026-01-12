##  Setup Instructions


### Installation

1. **Clone the repository to Desktop**
```bash
cd ~/Desktop
git clone <repository-url>
```

2. **Navigate to project directory**
```bash
cd kanban-board
```

3. **Install dependencies**
```bash
npm install
```

4. **Run the development server**
```bash
npm run dev
```

5. **Configure environment variables**

After running `npm run dev`, the server will start (usually on port 3000 or 3001).

Check your terminal output for the port number, then create `.env`:

```env
# Example if server runs on port 3000
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api


# Or if server runs on port 3001
# NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
```

6. **Open your browser**

Visit the URL shown in your terminal (usually `http://localhost:3000`)


##  Project Structure

```
└── 📁src
    └── 📁api
        └── 📁inquiries
            ├── index.ts
            ├── index.type.ts
        ├── index.ts
    └── 📁app
        └── 📁api
            └── 📁inquiries
                └── 📁[id]
                    ├── route.ts
                ├── route.ts
        └── 📁fonts
            ├── GeistMonoVF.woff
            ├── GeistVF.woff
        ├── favicon.ico
        ├── globals.css
        ├── layout.tsx
        ├── page.tsx
    └── 📁components
        └── 📁filters
            ├── filterHeader.tsx
        └── 📁kanban
            ├── inquiryModal.tsx
            ├── kanban.type.ts
            ├── kanbanBoard.tsx
            ├── kanbanCard.tsx
            ├── kanbanColumn.tsx
        ├── provider.tsx
        ├── spinner.tsx
    └── 📁context
        └── 📁hooks
            ├── useKanbanContext.ts
        ├── kanbanContext.tsx
        ├── kanbanContext.type.ts
    └── 📁lib
        ├── delay.ts
        ├── queryClient.ts
    └── 📁mockData
        ├── inquiriesData.ts
        ├── inquiriesData.type.ts
    └── 📁react-query
        └── 📁mutation
            ├── inquiries.tsx
        └── 📁query
            └── inquiries.tsx
```

### Key Files Explained

#### `kanbanBoard.tsx`
- Manages DnD context
- Handles drag events
- Coordinates column rendering
- Implements drag overlay

#### `kanbanColumn.tsx`
- Droppable zone for cards
- Displays column statistics
- Manages card sorting context

#### `kanbanCard.tsx`
- Individual draggable inquiry card
- Displays inquiry details
- Handles click events for modal

#### `kanbanContext.tsx`
- Stores filter state
- Manages modal state
- Provides global UI state

---

## Libraries Used

### Core Framework
| Library | Version | Purpose |
|---------|---------|---------|
| **Next.js** | 14.x | React framework with App Router |
| **React** | 18.x | UI library |
| **TypeScript** | 5.x | Type safety |

### Drag & Drop
| Library | Purpose | Why? |
|---------|---------|------|
| **@dnd-kit/core** | Drag & drop primitives | Modern, accessible, performant |
| **@dnd-kit/sortable** | Sortable lists | Built-in sorting logic |
| **@dnd-kit/utilities** | Helper functions | CSS transform utilities |



### State Management
| Library | Purpose | Why? |
|---------|---------|------|
| **@tanstack/react-query** | Server state management | Caching, automatic refetch, mutations |
| **React Context** | UI state management | Simple, built-in, no dependencies |

**Why React Query?**
- Eliminates manual fetch logic
- Automatic background updates
- Built-in loading/error states
- Cache invalidation on mutations
- Optimistic updates capability

### Styling
| Library | Purpose | Why? |
|---------|---------|------|
| **Tailwind CSS** | Utility-first CSS | Rapid development, consistent design |
| **tailwindcss** | Build tool | JIT compiler for optimal bundle size |

### Utilities
| Library | Purpose | Why? |
|---------|---------|------|
| **dayjs** | Date formatting | Lightweight alternative to moment.js |
| **dayjs/plugin/relativeTime** | Relative dates | "2 days ago" formatting |
