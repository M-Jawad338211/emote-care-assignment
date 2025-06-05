# TherapyConnect - Therapist Booking Application

A modern, responsive web application for discovering and booking therapy sessions with licensed mental health professionals. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <https://github.com/M-Jawad338211/emote-care-assignment.git>
   cd therapist-booking-app
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install

   # or

   yarn install

   # or

   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev

   # or

   yarn dev

   # or

   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode

## 🏗️ Architecture & Design Decisions

### Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query (TanStack Query) for server state
- **Testing**: Cypress with React Testing Library
- **Icons**: Lucide React

### Key Design Decisions

#### 1. **Next.js App Router**

- **Why**: Modern routing with better performance and developer experience
- **Benefits**: Server components, improved SEO, better code splitting
- **Trade-off**: Newer API with less community resources compared to Pages Router

#### 2. **React Query for Data Fetching**

- **Why**: Powerful server state management with caching and synchronization
- **Benefits**: Automatic background refetching, optimistic updates, error handling
- **Implementation**: Used for therapist data fetching with proper loading states

#### 3. **Context + React Query Hybrid**

- **Why**: Separate concerns between client state (booking dialog) and server state (therapist data)
- **Benefits**: Clean separation, better performance, easier testing
- **Pattern**: Context for UI state, React Query for server data

#### 4. **Component-Based Architecture**

- **Why**: Reusable, maintainable, and testable components
- **Benefits**: Easy to extend, good separation of concerns
- **Examples**: `TherapistCard`, `BookSessionButton`, `TherapistFilters`

#### 5. **TypeScript Throughout**

- **Why**: Type safety, better developer experience, fewer runtime errors
- **Benefits**: IntelliSense, refactoring safety, self-documenting code
- **Implementation**: Strict TypeScript configuration with proper type definitions

#### 6. **Tailwind CSS + shadcn/ui**

- **Why**: Utility-first CSS with pre-built accessible components
- **Benefits**: Consistent design system, fast development, accessibility built-in
- **Customization**: Custom color scheme avoiding default blue/indigo

#### 7. **ES Modules Configuration**

- **Why**: Modern JavaScript standard, better tooling support
- **Benefits**: Tree shaking, static analysis, future-proof
- **Implementation**: `"type": "module"` in package.json, ES imports throughout

### Data Flow

1. **Homepage** → Marketing content with navigation to therapist discovery
2. **Find Therapist Page** → Filters + therapist grid with real-time search
3. **Therapist Profile** → Detailed view with booking capability
4. **Booking Flow** → Modal form with toast notifications

### State Management Strategy

- **Server State**: React Query for therapist data, caching, and synchronization
- **Client State**: React Context for booking dialog state
- **Form State**: Local component state with controlled inputs
- **URL State**: Search params for filters (shareable URLs)

## 🧪 Testing Strategy

### Testing Framework

- **Cypress**: Test runner with ES module support
- **User Events**: Realistic user interaction simulation

### Test Coverage

- **Unit Tests**: Individual component functionality
- **End to End Tests**: Page visibility and content tracking

### Running Tests

\`\`\`bash `npm run e2e`

## 🚨 Known Issues & Limitations

### Current Limitations

#### 1. **Mock Data Only**

- **Issue**: Application uses static JSON data instead of real API
- **Impact**: No real-time updates, limited scalability
- **Workaround**: API routes simulate real backend behavior
- **Future**: Replace with actual database and API integration

#### 2. **Non-Functional Booking**

- **Issue**: Booking form doesn't actually create appointments
- **Impact**: Demo-only functionality
- **Current**: Shows success toast and resets form
- **Future**: Integrate with calendar API and payment processing

#### 3. **Limited Authentication**

- **Issue**: No user authentication or authorization
- **Impact**: Anyone can access all features
- **Security**: No protected routes or user-specific data
- **Future**: Implement NextAuth.js or similar solution

#### 4. **No Real-Time Features**

- **Issue**: No live chat, notifications, or real-time availability
- **Impact**: Static user experience
- **Future**: WebSocket integration for live features

#### 5. **Basic Error Handling**

- **Issue**: Limited error boundaries and error states
- **Impact**: Poor user experience during failures
- **Current**: Basic try-catch with generic error messages
- **Future**: Comprehensive error handling strategy

### Browser Compatibility

- **Supported**: Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Not Supported**: Internet Explorer
- **Mobile**: Responsive design works on all modern mobile browsers

### Accessibility Status

- **Partial Compliance**: Basic WCAG 2.1 AA compliance
- **Keyboard Navigation**: Works for most components
- **Screen Readers**: Basic support with ARIA labels
- **Color Contrast**: Meets minimum requirements
- **Missing**: Comprehensive accessibility audit needed

### Development Guidelines

- Follow TypeScript best practices
- Write tests for new components
- Use semantic commit messages
- Ensure accessibility compliance
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Check existing documentation
- Review test files for usage examples

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies.**
