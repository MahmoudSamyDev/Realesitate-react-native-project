# Real Estate Property Booking App - Project Overview

## 📱 Application Description

A modern, full-featured React Native mobile application for property rental and booking, built with Expo and styled using NativeWind (TailwindCSS for React Native). The app provides an intuitive interface for users to browse, search, and book properties while managing their accounts, payments, and bookings.

## 🎯 Business Model

**Property Rental Platform** - Connecting property owners with renters through a seamless mobile booking experience.

### Core Services:

- Property listings (Houses, Condos, Villas, Apartments, Studios, etc.)
- Real-time availability and booking
- Secure payment processing
- User account management
- Referral rewards program
- 24/7 customer support

## 🏗️ Tech Stack

### Core Technologies

- **React Native**: 0.81.5
- **Expo SDK**: 54
- **React**: 19.1.0
- **TypeScript**: 5.9.2 (Strict mode)
- **Expo Router**: v6 (File-based routing)

### Styling & UI

- **NativeWind**: v4 (TailwindCSS for React Native)
- **TailwindCSS**: 3.4.17
- **Custom Font Family**: Rubik (6 weights)
- **Icons**: Custom PNG icon set

### State Management

- **React Context API**: Global authentication state
- **Local State**: useState for component-level state
- **URL State**: useLocalSearchParams for filters and search

### Navigation

- **Expo Router**: File-based routing system
- **Tab Navigation**: Bottom tabs for main screens
- **Stack Navigation**: For nested screens and modals

## 📂 Project Structure

```
real-esitate/
├── app/                          # Expo Router pages
│   ├── _layout.tsx              # Root layout (fonts + AuthProvider)
│   ├── sign-in.tsx              # Authentication screen
│   ├── global.css               # Global Tailwind styles
│   └── (root)/                  # Protected routes
│       ├── _layout.tsx          # Auth guard
│       ├── bookings.tsx         # User bookings
│       ├── payments.tsx         # Payment methods
│       ├── (tabs)/              # Tab navigation
│       │   ├── _layout.tsx      # Tab bar configuration
│       │   ├── index.tsx        # Home/Feed
│       │   ├── explore.tsx      # Search & Browse
│       │   └── profile.tsx      # User profile
│       └── properties/
│           └── [id].tsx         # Property details (dynamic)
│
├── components/                   # Reusable components
│   ├── Home/                    # Home-specific components
│   │   ├── Header.tsx
│   │   ├── Search.tsx
│   │   └── Sections/
│   │       ├── Featured.tsx
│   │       └── Recommendation.tsx
│   └── UI/                      # Reusable UI components
│       ├── BookedCard.tsx       # Horizontal booking card
│       ├── FeaturedCard.tsx     # Large featured property card
│       ├── RecommendedCard.tsx  # Grid property card
│       ├── PaymentCard.tsx      # Payment method card
│       ├── Filters.tsx          # Category filter pills
│       ├── SettingItem.tsx      # Settings list item
│       ├── Comment.tsx          # Review/comment component
│       ├── PaymentEditModal.tsx # Payment editing modal
│       ├── InviteFriendsModal.tsx # Referral modal
│       ├── HelpCenterModal.tsx  # Support modal
│       └── LanguageModal.tsx    # Language selection modal
│
├── constants/                    # Static data and assets
│   ├── data.ts                  # Mock data (properties, settings, etc.)
│   ├── icons.ts                 # Icon imports
│   └── images.ts                # Image imports
│
├── lib/                          # Utility libraries
│   └── AuthContext.tsx          # Global authentication context
│
├── utils/                        # Helper functions
│   ├── helpers.ts               # Utility functions
│   └── Types/
│       └── appartments.ts       # TypeScript interfaces
│
└── assets/                       # Static assets
    ├── fonts/                   # Rubik font family
    ├── icons/                   # PNG icons
    └── images/                  # App images
        ├── Featured/
        ├── Main/
        └── Recommendations/
```

## 🎨 Design System

### Color Palette

```javascript
primary: {
  100: "#0061FF0A",  // Light blue (10% opacity)
  200: "#0061FF1A",  // Light blue (26% opacity)
  300: "#0061FF",    // Primary blue
}
accent: {
  100: "#FBFBFD",    // Off-white
}
black: {
  DEFAULT: "#000000",
  100: "#8C8E98",    // Light gray
  200: "#666876",    // Medium gray
  300: "#191D31",    // Dark navy
}
danger: "#F75555",   // Error red
```

### Typography

**Rubik Font Family** (6 weights):

- Regular
- Light
- Medium
- SemiBold
- Bold
- ExtraBold

### Component Patterns

- **Cards**: Rounded corners (lg, xl, 2xl, 3xl)
- **Shadows**: Soft shadows for depth (shadow-md, shadow-lg)
- **Borders**: Subtle borders (border-primary-100, border-primary-200)
- **Buttons**: Rounded-full for primary actions
- **Spacing**: Consistent padding (px-[20px], py-4, gap-3)

## 🔐 Authentication Flow

### Current Implementation (Frontend Only)

1. **Sign In Screen** (`/sign-in`)
   - Google OAuth button (placeholder)
   - Simulated authentication with loading state
   - 2-second delay for UX feedback

2. **Auth Context** (`lib/AuthContext.tsx`)
   - Global state: `isAuthenticated`, `isLoading`
   - Methods: `login()`, `logout()`
   - React Context API provider

3. **Protected Routes** (`app/(root)/_layout.tsx`)
   - Guards all authenticated routes
   - Redirects to `/sign-in` if not authenticated
   - Shows loading indicator during auth check

4. **Sign Out**
   - Available in Profile screen
   - Clears authentication state
   - Redirects to sign-in

## 📱 Core Features

### 1. Property Discovery

- **Home Feed**: Featured properties and recommendations
- **Search**: Real-time search with debouncing (500ms)
- **Filters**: Category-based filtering (Houses, Condos, Villas, etc.)
- **Property Details**: Full property information with gallery, facilities, location

### 2. Booking Management

- **My Bookings**: View active bookings
- **Booking Cards**: Horizontal layout with property details
- **Property Navigation**: Quick access to property details

### 3. Payment Methods

- **Multiple Payment Types**: Visa, Mastercard, PayPal, Apple Pay
- **Default Payment**: Set preferred payment method
- **Edit Payments**: Modal-based editing with validation
- **Secure Messaging**: Payment security information

### 4. User Profile

- **Profile Photo**: Editable profile picture
- **Settings Menu**:
  - My Bookings
  - Payments
  - Security
  - Language
  - Help Center
  - Invite Friends
  - Logout

### 5. Modals & Popups

- **Payment Edit Modal**: Edit card details
- **Invite Friends Modal**: Referral system with copy link
- **Help Center Modal**: Support categories with contact options
- **Language Modal**: English/Arabic selection (placeholder)

## 🔄 Data Flow

### State Management Pattern

```
Global State (Context API)
    ↓
AuthProvider (wraps entire app)
    ↓
Protected Routes → Authenticated Screens
    ↓
Local State (useState) → Component UI
    ↓
URL State (params) → Filters & Search
```

### Component Communication

- **Parent → Child**: Props
- **Child → Parent**: Callback functions
- **Global**: Context API
- **Navigation**: Expo Router

## 🎯 Key Features Implementation

### Search with Debouncing

```typescript
const debouncedSearch = useDebouncedCallback(
  (text: string) => router.setParams({ query: text }),
  500,
);
```

### URL-Based Filtering

```typescript
const { filter = "All" } = useLocalSearchParams<{ filter?: string }>();
const filteredData = filterRecommendationsByCategory(filter);
```

### Modal Management

```typescript
const [modalVisible, setModalVisible] = useState(false);
// Opens modal, manages backdrop tap, handles close
```

### Dynamic Routing

```typescript
// File: app/(root)/properties/[id].tsx
const { id } = useLocalSearchParams<{ id: string }>();
const property = allProperties.find((p) => p.id === id);
```

## 📊 Data Structure

### Property Object

```typescript
{
  id: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  category: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  description?: string;
  facilities?: string[];
}
```

## 🚀 Future Enhancements

### Planned Features

1. **Backend Integration**
   - Real authentication (OAuth, JWT)
   - API integration for properties
   - Real-time booking system
   - Payment processing (Stripe/PayPal)

2. **Internationalization**
   - Full Arabic localization
   - RTL layout support
   - Language persistence

3. **Advanced Features**
   - Real-time chat with hosts
   - Push notifications
   - Calendar booking system
   - Map integration
   - Property reviews and ratings
   - Favorites/Wishlist

4. **User Features**
   - Profile editing
   - Booking history
   - Transaction history
   - Settings persistence

## 📱 Screen Inventory

### Public Screens

- `/sign-in` - Authentication

### Protected Screens (Tabs)

- `/` (index) - Home Feed
- `/explore` - Search & Browse
- `/profile` - User Profile

### Protected Screens (Stack)

- `/bookings` - My Bookings
- `/payments` - Payment Methods
- `/properties/[id]` - Property Details

### Modals

- Payment Edit Modal
- Invite Friends Modal
- Help Center Modal
- Language Selection Modal

## 🛠️ Development Workflow

### Setup Commands

```bash
npm install              # Install dependencies
npm start               # Start Expo dev server
npm run android         # Run on Android
npm run ios             # Run on iOS
npm run web             # Run in browser
```

### Code Quality

- TypeScript strict mode enabled
- ESLint configuration
- Prettier with Tailwind plugin
- Consistent component patterns

## 📈 Performance Optimizations

- **Debounced Search**: Reduces unnecessary API calls
- **Memoization**: useMemo for filtered data
- **Image Optimization**: Remote image URLs with caching
- **Lazy Loading**: FlatList for large lists
- **Code Splitting**: File-based routing

## 🎨 UI/UX Highlights

- **Modern Design**: Clean, contemporary interface
- **Consistent Patterns**: Reusable components
- **Smooth Animations**: Fade-in modals, touch feedback
- **User Feedback**: Loading states, success messages
- **Accessibility**: Touch targets, readable fonts
- **Responsive**: Adapts to different screen sizes

## 📝 Documentation

- TypeScript interfaces for type safety
- Comments for complex logic
- Consistent naming conventions
- Component prop interfaces

---

**Version**: 1.0.0  
**Last Updated**: February 2026  
**License**: Private
