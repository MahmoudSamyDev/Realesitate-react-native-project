# Software Requirements Specification (SRS)

## ReState - Real Estate Property Booking Mobile Application

---

## Document Information

| **Field**            | **Value**                  |
| -------------------- | -------------------------- |
| **Project Name**     | ReState Mobile Application |
| **Version**          | 1.0.0                      |
| **Document Version** | 1.0                        |
| **Last Updated**     | February 18, 2026          |
| **Document Owner**   | Engineering Team           |
| **Status**           | Active Development         |
| **Classification**   | Internal Use               |

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Overall Description](#2-overall-description)
3. [System Architecture](#3-system-architecture)
4. [Functional Requirements](#4-functional-requirements)
5. [Non-Functional Requirements](#5-non-functional-requirements)
6. [External Interface Requirements](#6-external-interface-requirements)
7. [System Features](#7-system-features)
8. [Data Requirements](#8-data-requirements)
9. [Design Constraints](#9-design-constraints)
10. [Quality Attributes](#10-quality-attributes)
11. [Security Requirements](#11-security-requirements)
12. [Testing Requirements](#12-testing-requirements)
13. [Appendices](#13-appendices)

---

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) document provides a comprehensive description of the ReState mobile application system. It details all functional and non-functional requirements, system architecture, interfaces, and constraints necessary for the development, testing, and deployment of the application.

**Intended Audience**:

- Software developers and engineers
- Quality assurance and testing teams
- System architects
- Project managers
- DevOps engineers
- Technical stakeholders

### 1.2 Scope

**Product Name**: ReState Mobile Application

**Product Description**:
ReState is a cross-platform mobile application built with React Native and Expo SDK that enables users to discover, bookmark, and book property rentals. The system includes user authentication, property management, booking functionality, payment processing, and user profile management.

**Key Capabilities**:

- Multi-platform support (iOS, Android)
- Real-time property search and filtering
- Secure user authentication via OAuth
- Integrated payment processing
- Booking management system
- User profile and preferences management
- Agent communication tools
- Review and rating system
- Referral program

**Benefits**:

- Streamlined property discovery process
- Enhanced user experience through modern mobile UI
- Secure and efficient booking workflow
- Transparent payment processing
- Comprehensive property information access

### 1.3 Definitions, Acronyms, and Abbreviations

| **Term** | **Definition**                               |
| -------- | -------------------------------------------- |
| API      | Application Programming Interface            |
| CDN      | Content Delivery Network                     |
| CORS     | Cross-Origin Resource Sharing                |
| CRUD     | Create, Read, Update, Delete                 |
| JWT      | JSON Web Token                               |
| OAuth    | Open Authorization                           |
| PCI DSS  | Payment Card Industry Data Security Standard |
| REST     | Representational State Transfer              |
| SDK      | Software Development Kit                     |
| TLS      | Transport Layer Security                     |
| UI/UX    | User Interface / User Experience             |
| WCAG     | Web Content Accessibility Guidelines         |

### 1.4 References

- React Native Documentation v0.81.5
- Expo SDK Documentation v54
- IEEE Standard 829-2008 for Software Testing
- ISO/IEC 25010:2011 - Systems and software Quality Requirements and Evaluation
- PCI DSS v4.0 Security Standards
- GDPR Compliance Guidelines
- WCAG 2.1 Level AA Standards

### 1.5 Document Overview

This document is organized into sections covering system architecture, functional requirements, non-functional requirements, interfaces, and technical specifications. Each requirement is uniquely identified and includes priority classification, acceptance criteria, and dependencies.

---

## 2. Overall Description

### 2.1 Product Perspective

ReState is a standalone mobile application that interfaces with backend services, third-party APIs, and external payment providers. The system operates as follows:

**System Context**:

```
┌─────────────────────────────────────────────────────┐
│                  Mobile Application                  │
│              (React Native + Expo)                   │
└──────────────────┬──────────────────────────────────┘
                   │
                   ├──────────> Backend API (REST)
                   │             - Property Data
                   │             - User Management
                   │             - Booking System
                   │
                   ├──────────> Authentication Service
                   │             - Google OAuth
                   │             - JWT Management
                   │
                   ├──────────> Payment Gateway
                   │             - Stripe/PayPal
                   │             - Transaction Processing
                   │
                   ├──────────> Cloud Storage
                   │             - Property Images
                   │             - User Uploads
                   │
                   ├──────────> Push Notification Service
                   │             - Firebase Cloud Messaging
                   │
                   └──────────> Analytics Service
                                 - User Behavior Tracking
                                 - Performance Monitoring
```

### 2.2 Product Functions

The major functions of the ReState application include:

1. **Authentication & Authorization**
   - User registration and login via Google OAuth
   - Session management with token refresh
   - Role-based access control

2. **Property Discovery**
   - Browse property listings
   - Search with debounced text input
   - Filter by category, price, amenities
   - View detailed property information

3. **Favorites Management**
   - Add/remove properties to/from watchlist
   - View saved properties
   - Persistent watchlist across sessions

4. **Booking Management**
   - View active bookings
   - Create new bookings
   - Access booking details
   - Booking history tracking

5. **Payment Processing**
   - Manage multiple payment methods
   - Secure payment information storage
   - Default payment method selection
   - Transaction processing

6. **User Profile**
   - View and edit profile information
   - Update profile picture
   - Manage account settings
   - Logout functionality

7. **Communication**
   - Contact property agents via phone/WhatsApp
   - Share property listings
   - Access customer support

8. **Reviews & Ratings**
   - View property reviews
   - Submit property ratings
   - Read user feedback

### 2.3 User Characteristics

| **User Type**   | **Technical Expertise** | **Frequency of Use** | **Key Needs**                           |
| --------------- | ----------------------- | -------------------- | --------------------------------------- |
| Primary Renter  | Basic to Intermediate   | Daily to Weekly      | Easy property search, clear information |
| Occasional User | Basic                   | Monthly              | Simple booking process, saved searches  |
| Property Agent  | Intermediate            | Daily                | Communication tools, booking management |
| System Admin    | Advanced                | Daily                | System monitoring, user management      |

### 2.4 Operating Environment

**Hardware Platform**:

- iOS Devices: iPhone 8 and later
- Android Devices: Android 8.0+ compatible devices
- Minimum RAM: 2GB
- Storage: 100MB available space
- Network: WiFi or cellular data (3G/4G/5G)

**Software Platform**:

- iOS: 13.0 or later
- Android: API Level 26 (Android 8.0) or later
- React Native: 0.81.5
- Expo SDK: 54
- Node.js: 18.x or later (development)

**Network Environment**:

- Internet connectivity required for full functionality
- Offline mode for cached content viewing
- Bandwidth: Minimum 256 kbps (1 Mbps recommended)

### 2.5 Design and Implementation Constraints

**Technical Constraints**:

- Must use React Native and Expo for cross-platform compatibility
- Must follow React 19.1.0 patterns and best practices
- TypeScript strict mode must be enabled
- Must support both iOS and Android with single codebase
- Maximum bundle size: 50MB for app stores

**Regulatory Constraints**:

- GDPR compliance for EU users
- CCPA compliance for California users
- PCI DSS Level 1 compliance for payment processing
- Apple App Store Review Guidelines
- Google Play Store Developer Policy

**Business Constraints**:

- Development timeline: 6 months
- Budget limitations for third-party services
- Must maintain backward compatibility for 2 major versions

**Technology Constraints**:

- Limited access to native device features through Expo Go
- Image upload size limited to 5MB
- Gallery limited to 20 images per property
- Search results capped at 1000 items per query

### 2.6 Assumptions and Dependencies

**Assumptions**:

- Users have stable internet connectivity
- Users grant necessary permissions (camera, storage, notifications)
- Backend API is available and performant
- Third-party services maintain 99.9% uptime
- Property data is accurately provided by owners

**Dependencies**:

- Google OAuth service availability
- Payment gateway (Stripe/PayPal) operational status
- Cloud storage service for images
- Push notification service (Firebase)
- Backend API development timeline
- App store approval processes

---

## 3. System Architecture

### 3.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Presentation Layer                       │
│  ┌──────────────────────────────────────────────────────┐  │
│  │            React Native Components                    │  │
│  │  - Screens (Home, Explore, Profile, etc.)           │  │
│  │  - UI Components (Cards, Modals, Forms)             │  │
│  │  - Navigation (Expo Router)                         │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────┬───────────────────────────────────┘
                          │
┌─────────────────────────┴───────────────────────────────────┐
│                    Application Layer                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │          State Management (React Context)            │  │
│  │  - AuthContext (Authentication state)                │  │
│  │  - WatchlistContext (Favorites management)           │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │               Business Logic Layer                    │  │
│  │  - API Client (REST calls)                           │  │
│  │  - Data Processing (Filtering, Sorting)              │  │
│  │  - Validation (Form, Input)                          │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────┬───────────────────────────────────┘
                          │
┌─────────────────────────┴───────────────────────────────────┐
│                     Integration Layer                        │
│  ┌──────────────┬──────────────┬──────────────┬─────────┐  │
│  │   REST API   │  OAuth 2.0   │   Payment    │ Storage │  │
│  │   Client     │   Service    │   Gateway    │   CDN   │  │
│  └──────────────┴──────────────┴──────────────┴─────────┘  │
└─────────────────────────────────────────────────────────────┘
                          │
┌─────────────────────────┴───────────────────────────────────┐
│                    Backend Services                          │
│  ┌──────────────┬──────────────┬──────────────┬─────────┐  │
│  │  API Server  │  Database    │   File       │ Message │  │
│  │  (Node.js)   │  (MongoDB)   │   Storage    │  Queue  │  │
│  └──────────────┴──────────────┴──────────────┴─────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Component Architecture

**Mobile Application Components**:

1. **Routing Layer** (`app/` directory)
   - File-based routing using Expo Router v6
   - Nested routes for authenticated screens
   - Tab navigation for main screens
   - Stack navigation for detail views

2. **Presentation Layer** (`components/` directory)
   - Reusable UI components
   - Screen-specific components
   - Modal components for overlays

3. **State Management** (`lib/` directory)
   - React Context for global state
   - Local state management with hooks
   - URL state for filters and search

4. **Business Logic** (`utils/` directory)
   - Helper functions
   - Data transformation utilities
   - Validation logic

5. **Configuration** (`constants/` directory)
   - Static data and mock data
   - Asset imports (icons, images)
   - App configuration

### 3.3 Technology Stack

**Frontend Framework**:

```javascript
{
  "react": "19.1.0",
  "react-native": "0.81.5",
  "expo": "~54.0.32",
  "typescript": "~5.9.2"
}
```

**Navigation**:

```javascript
{
  "expo-router": "~6.0.22",
  "@react-navigation/native": "^7.1.8",
  "@react-navigation/bottom-tabs": "^7.4.0"
}
```

**Styling**:

```javascript
{
  "nativewind": "^4.2.1",
  "tailwindcss": "^3.4.17"
}
```

**Utilities**:

```javascript
{
  "use-debounce": "^10.1.0",
  "expo-image-picker": "~17.0.10",
  "expo-clipboard": "~8.0.8",
  "expo-haptics": "~15.0.8"
}
```

### 3.4 Data Flow Architecture

```
User Interaction
      │
      ▼
React Component
      │
      ▼
Event Handler
      │
      ├──> Local State Update (useState)
      │
      ├──> Context State Update (useContext)
      │
      └──> API Call
            │
            ▼
      REST API Client
            │
            ▼
      Backend Server
            │
            ▼
      Database Query
            │
            ▼
      Response Processing
            │
            ▼
      State Update
            │
            ▼
      Component Re-render
            │
            ▼
      UI Update
```

### 3.5 File Structure

```
real-esitate/
├── app/                              # Expo Router pages
│   ├── _layout.tsx                  # Root layout
│   ├── sign-in.tsx                  # Auth screen
│   ├── global.css                   # Global styles
│   └── (root)/                      # Protected routes
│       ├── _layout.tsx              # Auth guard
│       ├── bookings.tsx
│       ├── payments.tsx
│       ├── watchlist.tsx
│       ├── (tabs)/                  # Tab navigation
│       │   ├── _layout.tsx
│       │   ├── index.tsx            # Home
│       │   ├── explore.tsx
│       │   └── profile.tsx
│       └── properties/
│           └── [id].tsx             # Dynamic route
│
├── components/                       # React components
│   ├── Home/
│   │   ├── Header.tsx
│   │   ├── Search.tsx
│   │   └── Sections/
│   │       ├── Featured.tsx
│   │       └── Recommendation.tsx
│   └── UI/
│       ├── BookedCard.tsx
│       ├── FeaturedCard.tsx
│       ├── RecommendedCard.tsx
│       ├── PaymentCard.tsx
│       ├── Filters.tsx
│       ├── SettingItem.tsx
│       ├── Comment.tsx
│       ├── MultiRangeSlider.tsx
│       ├── PaymentEditModal.tsx
│       ├── InviteFriendsModal.tsx
│       ├── HelpCenterModal.tsx
│       ├── LanguageModal.tsx
│       ├── ProfilePictureModal.tsx
│       └── FilterModal/
│           ├── ChipSelect.tsx
│           ├── CounterRow.tsx
│           ├── FilterModal.tsx
│           └── RangeSlider.tsx
│
├── constants/                        # Constants & data
│   ├── data.ts                      # Mock data
│   ├── icons.ts                     # Icon exports
│   └── images.ts                    # Image exports
│
├── lib/                              # Core libraries
│   ├── AuthContext.tsx              # Auth state
│   └── WatchlistContext.tsx         # Favorites state
│
├── utils/                            # Utilities
│   ├── helpers/
│   │   ├── helpers.ts               # General helpers
│   │   └── notifications.ts         # Notification utils
│   └── Types/
│       ├── appartments.ts           # Property types
│       └── notifications.ts         # Notification types
│
├── assets/                           # Static assets
│   ├── fonts/                       # Rubik font family
│   ├── icons/                       # PNG icons
│   └── images/                      # App images
│
└── config files                      # Configuration
    ├── app.json
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.js
    ├── metro.config.js
    └── babel.config.js
```

---

## 4. Functional Requirements

### 4.1 Authentication Module

#### FR-AUTH-001: Google OAuth Sign-In

- **ID**: FR-AUTH-001
- **Priority**: P0 (Critical)
- **Description**: Users authenticate using Google OAuth 2.0
- **Inputs**: User initiates Google sign-in
- **Processing**:
  1. Open Google OAuth consent screen
  2. User grants permissions
  3. Receive authorization code
  4. Exchange code for access token
  5. Validate token with backend
  6. Create user session
- **Outputs**:
  - Authentication token (JWT)
  - User profile data
  - Session cookie
- **Dependencies**: Google OAuth API, Backend authentication service
- **Error Handling**:
  - Network failure: Display retry option
  - OAuth rejection: Return to sign-in screen
  - Invalid credentials: Show error message

#### FR-AUTH-002: Session Management

- **ID**: FR-AUTH-002
- **Priority**: P0 (Critical)
- **Description**: Maintain user session across app launches
- **Inputs**: Stored authentication token
- **Processing**:
  1. Check for valid token on app launch
  2. Validate token expiration
  3. Refresh token if expiring soon
  4. Restore user session
- **Outputs**: Authenticated user state
- **Dependencies**: Secure storage, Backend token validation
- **Persistence**: AsyncStorage with encryption

#### FR-AUTH-003: Logout

- **ID**: FR-AUTH-003
- **Priority**: P0 (Critical)
- **Description**: User can securely logout
- **Inputs**: Logout button press
- **Processing**:
  1. Clear authentication tokens
  2. Clear user data from context
  3. Clear cached data
  4. Revoke OAuth tokens
  5. Navigate to sign-in screen
- **Outputs**: Unauthenticated state
- **Dependencies**: AuthContext

### 4.2 Property Discovery Module

#### FR-PROP-001: Property List Display

- **ID**: FR-PROP-001
- **Priority**: P0 (Critical)
- **Description**: Display properties in grid and list formats
- **Inputs**: Property data from API
- **Processing**:
  1. Fetch property list from backend
  2. Parse JSON response
  3. Transform data for display
  4. Render in FlatList component
- **Outputs**:
  - Featured properties (horizontal scroll)
  - Recommended properties (2-column grid)
- **Performance**: Load 20 items initially, lazy load on scroll
- **Caching**: Cache images, 1-hour data freshness

#### FR-PROP-002: Real-Time Search

- **ID**: FR-PROP-002
- **Priority**: P0 (Critical)
- **Description**: Search properties by title or location
- **Inputs**: Search query text
- **Processing**:
  1. Capture input with onChange
  2. Apply 500ms debounce
  3. Update URL params with query
  4. Filter properties client-side
  5. Update results display
- **Outputs**: Filtered property list
- **Dependencies**: use-debounce library
- **Algorithm**:

```javascript
filteredProperties = properties.filter(
  (property) =>
    property.title.toLowerCase().includes(query.toLowerCase()) ||
    property.location.toLowerCase().includes(query.toLowerCase()),
);
```

#### FR-PROP-003: Category Filtering

- **ID**: FR-PROP-003
- **Priority**: P0 (Critical)
- **Description**: Filter properties by category
- **Inputs**: Selected category ("All", "Houses", "Condos", etc.)
- **Processing**:
  1. User selects category chip
  2. Update URL params with filter
  3. Filter properties by category
  4. Re-render property list
- **Outputs**: Category-filtered property list
- **Categories**: All, Houses, Condos, Duplexes, Villas, Apartments, Studios
- **State Management**: URL parameters via useLocalSearchParams

#### FR-PROP-004: Advanced Filters

- **ID**: FR-PROP-004
- **Priority**: P1 (High)
- **Description**: Apply multiple filters simultaneously
- **Inputs**:
  - Price range (min/max)
  - Property types (multi-select)
  - Bedrooms count (0-5+)
  - Bathrooms count (0-3+)
  - Building size range
- **Processing**:
  1. Open filter modal
  2. User adjusts filter values
  3. Apply button pressed
  4. Filter logic executes
  5. Results updated
- **Outputs**: Multi-criteria filtered properties
- **State**: Local component state, applied to URL params
- **Reset**: Clear all filters button

#### FR-PROP-005: Property Details View

- **ID**: FR-PROP-005
- **Priority**: P0 (Critical)
- **Description**: Display comprehensive property information
- **Inputs**: Property ID from route params
- **Processing**:
  1. Extract ID from URL: `/properties/[id]`
  2. Fetch property details from data source
  3. Load property gallery images
  4. Load reviews and ratings
  5. Display agent information
- **Outputs**:
  - Property images (gallery)
  - Title, location, price
  - Bedrooms, bathrooms, area
  - Description text
  - Facilities list
  - Agent contact info
  - Reviews section
- **Navigation**: Dynamic route with property ID
- **Image Handling**: Progressive loading, 5MB max size

### 4.3 Watchlist Module

#### FR-WATCH-001: Add to Watchlist

- **ID**: FR-WATCH-001
- **Priority**: P1 (High)
- **Description**: Save properties to favorites list
- **Inputs**: Property ID, heart icon tap
- **Processing**:
  1. User taps heart icon
  2. Check current watchlist state
  3. Add property ID to Set
  4. Update WatchlistContext
  5. Persist to AsyncStorage
  6. Visual feedback (filled heart)
- **Outputs**: Updated watchlist Set
- **Dependencies**: WatchlistContext, AsyncStorage
- **State Management**: React Context API

#### FR-WATCH-002: Remove from Watchlist

- **ID**: FR-WATCH-002
- **Priority**: P1 (High)
- **Description**: Remove saved properties
- **Inputs**: Property ID, heart icon tap
- **Processing**:
  1. User taps filled heart icon
  2. Remove property ID from Set
  3. Update WatchlistContext
  4. Update AsyncStorage
  5. Visual feedback (empty heart)
- **Outputs**: Updated watchlist Set

#### FR-WATCH-003: View Watchlist

- **ID**: FR-WATCH-003
- **Priority**: P1 (High)
- **Description**: Display all watchlisted properties
- **Inputs**: Navigation to /watchlist
- **Processing**:
  1. Retrieve watchlist Set from context
  2. Filter allProperties array
  3. Display matching properties
  4. Show empty state if none
- **Outputs**: List of watchlisted properties
- **Empty State**: Message + browse button

### 4.4 Booking Module

#### FR-BOOK-001: View Bookings

- **ID**: FR-BOOK-001
- **Priority**: P0 (Critical)
- **Description**: Display user's active bookings
- **Inputs**: User authentication token
- **Processing**:
  1. Fetch bookings from API
  2. Parse booking data
  3. Render BookedCard components
  4. Display count badge
- **Outputs**: List of booking cards
- **Data Display**:
  - Property image
  - Property title
  - Location
  - Price
  - Booking dates

#### FR-BOOK-002: Navigate to Booking Details

- **ID**: FR-BOOK-002
- **Priority**: P1 (High)
- **Description**: Access property details from booking
- **Inputs**: Booking card tap
- **Processing**:
  1. Extract property ID from booking
  2. Navigate to `/properties/[id]`
- **Outputs**: Property details screen
- **Navigation**: Programmatic route push

### 4.5 Payment Module

#### FR-PAY-001: View Payment Methods

- **ID**: FR-PAY-001
- **Priority**: P0 (Critical)
- **Description**: Display saved payment methods
- **Inputs**: User ID
- **Processing**:
  1. Fetch payment methods from API
  2. Render PaymentCard for each method
  3. Mask sensitive information
  4. Show default indicator
- **Outputs**: List of payment cards
- **Security**:
  - Display last 4 digits only
  - Mask card numbers: "\***\* \*\*** \*\*\*\* 4532"
  - No CVV storage or display

#### FR-PAY-002: Add Payment Method

- **ID**: FR-PAY-002
- **Priority**: P0 (Critical)
- **Description**: Add new payment method
- **Inputs**:
  - Card number
  - Card holder name
  - Expiry date (MM/YY)
  - CVV
  - Default checkbox
- **Processing**:
  1. Open add payment modal
  2. Validate card number (Luhn algorithm)
  3. Validate expiry date (not past)
  4. Submit to payment gateway
  5. Tokenize card data
  6. Store token in backend
  7. Update payment list
- **Outputs**: New payment method record
- **Validation**:
  - Card number: 13-19 digits, Luhn valid
  - Expiry: MM/YY format, future date
  - CVV: 3-4 digits
- **Security**: PCI DSS compliant tokenization

#### FR-PAY-003: Edit Payment Method

- **ID**: FR-PAY-003
- **Priority**: P1 (High)
- **Description**: Modify existing payment method
- **Inputs**:
  - Payment method ID
  - Updated card details
  - Default status
- **Processing**:
  1. Open PaymentEditModal
  2. Pre-populate existing data
  3. Allow editing specific fields
  4. Validate changes
  5. Submit update
  6. Refresh payment list
- **Outputs**: Updated payment method
- **Editable Fields**:
  - Card holder name
  - Expiry date
  - Default status
- **Non-Editable**: Card number (security)

#### FR-PAY-004: Set Default Payment

- **ID**: FR-PAY-004
- **Priority**: P1 (High)
- **Description**: Designate primary payment method
- **Inputs**: Payment method ID
- **Processing**:
  1. Unset previous default
  2. Set new default flag
  3. Update backend
  4. Refresh UI
- **Outputs**: Updated default indicator
- **Business Rule**: Only one default at a time

### 4.6 Profile Module

#### FR-PROF-001: View Profile

- **ID**: FR-PROF-001
- **Priority**: P1 (High)
- **Description**: Display user profile information
- **Inputs**: User ID from auth context
- **Processing**:
  1. Load user data
  2. Display profile picture
  3. Display name
  4. Render settings menu
- **Outputs**: Profile screen with settings
- **Data Display**:
  - Profile image
  - User full name
  - Settings list

#### FR-PROF-002: Update Profile Picture

- **ID**: FR-PROF-002
- **Priority**: P2 (Medium)
- **Description**: Change profile photo
- **Inputs**:
  - Camera capture OR
  - Photo library selection
- **Processing**:
  1. Open ProfilePictureModal
  2. Request camera/library permission
  3. User selects image source
  4. Pick/capture image
  5. Crop/resize image (max 1024x1024)
  6. Upload to cloud storage
  7. Update profile with image URL
  8. Update local state
- **Outputs**: Updated profile picture
- **Dependencies**: expo-image-picker
- **Constraints**:
  - Max file size: 5MB
  - Supported formats: JPG, PNG
  - Dimensions: 1024x1024 recommended

#### FR-PROF-003: Access Settings

- **ID**: FR-PROF-003
- **Priority**: P1 (High)
- **Description**: Navigate to various settings screens
- **Inputs**: Settings item tap
- **Processing**:
  1. Render SettingsItem components
  2. Attach navigation handlers
  3. Route to appropriate screen
- **Outputs**: Navigation to:
  - My Bookings
  - My Watchlist
  - Payments
  - Language
  - Help Center
  - Invite Friends
- **UI**: Icon + Title + Arrow

### 4.7 Communication Module

#### FR-COMM-001: Phone Agent

- **ID**: FR-COMM-001
- **Priority**: P1 (High)
- **Description**: Initiate phone call to agent
- **Inputs**: Phone number from agent data
- **Processing**:
  1. Extract phone number
  2. Format tel: URL
  3. Check Linking.canOpenURL
  4. Open native phone dialer
- **Outputs**: Native phone app opened
- **Dependencies**: React Native Linking API
- **Error Handling**: Alert if phone unavailable

#### FR-COMM-002: WhatsApp Agent

- **ID**: FR-COMM-002
- **Priority**: P1 (High)
- **Description**: Open WhatsApp conversation with agent
- **Inputs**:
  - Agent phone number
  - Property details
- **Processing**:
  1. Format phone number (remove non-digits)
  2. Create pre-filled message
  3. Encode message for URL
  4. Create whatsapp:// URL
  5. Check app availability
  6. Open WhatsApp
- **Outputs**: WhatsApp chat opened
- **Message Template**:

```
Hi {agent_name}, I'm interested in the property
"{property_title}" listed at {price}.
```

- **Error Handling**: Alert if WhatsApp not installed

#### FR-COMM-003: Share Property

- **ID**: FR-COMM-003
- **Priority**: P2 (Medium)
- **Description**: Share property via native share sheet
- **Inputs**: Property data
- **Processing**:
  1. Create share content
  2. Invoke Share.share()
  3. Display native share sheet
  4. User selects share method
- **Outputs**: Share content via chosen method
- **Share Content**:
  - Title: Property title
  - Message: Property details + link
- **Platforms**: iOS: UIActivityViewController, Android: Intent

### 4.8 Support Module

#### FR-SUPP-001: Help Center Modal

- **ID**: FR-SUPP-001
- **Priority**: P1 (High)
- **Description**: Display support options
- **Inputs**: Help Center menu item tap
- **Processing**:
  1. Open HelpCenterModal
  2. Display support categories
  3. Show contact options
- **Outputs**: Modal with support info
- **Contact Options**:
  - Live Chat (24/7)
  - Email: support@restate.com
  - Phone: +1-800-RESTATE

#### FR-SUPP-002: Invite Friends

- **ID**: FR-SUPP-002
- **Priority**: P2 (Medium)
- **Description**: Referral link generation and sharing
- **Inputs**: User ID (for referral tracking)
- **Processing**:
  1. Open InviteFriendsModal
  2. Generate unique referral link
  3. Display referral benefits
  4. Copy or share link
- **Outputs**: Referral link
- **Functionality**:
  - Copy to clipboard (with confirmation)
  - Share via native share
- **Link Format**: `https://restate.app/r/{userId}`

#### FR-SUPP-003: Language Selection

- **ID**: FR-SUPP-003
- **Priority**: P2 (Medium)
- **Description**: Change app language
- **Inputs**: Language preference
- **Processing**:
  1. Open LanguageModal
  2. Display language options (English, Arabic)
  3. User selects language
  4. Update i18n configuration
  5. Persist preference
  6. Reload UI with new language
- **Outputs**: Updated app language
- **Supported Languages**: English (default), Arabic
- **RTL Support**: Auto-detect for Arabic

### 4.9 Review Module

#### FR-REV-001: Display Reviews

- **ID**: FR-REV-001
- **Priority**: P1 (High)
- **Description**: Show property reviews
- **Inputs**: Property ID
- **Processing**:
  1. Fetch reviews from API
  2. Calculate average rating
  3. Render Comment components
  4. Display star ratings
- **Outputs**: List of reviews with ratings
- **Data Display**:
  - User avatar
  - User name
  - Star rating (1-5)
  - Review text
  - Date posted

#### FR-REV-002: Submit Review

- **ID**: FR-REV-002
- **Priority**: P1 (High)
- **Description**: Users submit property reviews
- **Inputs**:
  - Star rating (1-5)
  - Review text
- **Processing**:
  1. Open review modal
  2. Select star rating
  3. Enter review text
  4. Validate input
  5. Submit to API
  6. Update reviews list
- **Outputs**: New review record
- **Validation**:
  - Rating required (1-5 stars)
  - Text optional, max 500 characters
  - User must have booking for property

---

## 5. Non-Functional Requirements

### 5.1 Performance Requirements

#### NFR-PERF-001: Response Time

- **ID**: NFR-PERF-001
- **Priority**: P0 (Critical)
- **Requirement**: User interactions respond within 300ms
- **Measurement**:
  - Button tap to visual feedback: < 100ms
  - Navigation transition: < 200ms
  - Form submission feedback: < 300ms
- **Testing**: Automated performance testing with detox
- **Acceptance**: 95th percentile < 300ms

#### NFR-PERF-002: Search Performance

- **ID**: NFR-PERF-002
- **Priority**: P0 (Critical)
- **Requirement**: Search results update within 500ms of input
- **Implementation**:
  - Debounce input: 500ms
  - Client-side filtering for < 1000 items
  - Server-side search for larger datasets
- **Measurement**: Time from input complete to results render
- **Acceptance**: Average < 500ms

#### NFR-PERF-003: Image Loading

- **ID**: NFR-PERF-003
- **Priority**: P1 (High)
- **Requirement**: Images load progressively without blocking UI
- **Implementation**:
  - Use expo-image with blurhash placeholders
  - Lazy load images below fold
  - Cache images with 7-day expiration
- **Measurement**: Time to first contentful paint
- **Acceptance**: < 1s on 4G network

#### NFR-PERF-004: App Launch Time

- **ID**: NFR-PERF-004
- **Priority**: P1 (High)
- **Requirement**: App launches and displays content within 2 seconds
- **Measurement**: Time from app icon tap to interactive screen
- **Optimization**:
  - Code splitting
  - Deferred font loading
  - Minimal splash screen duration
- **Acceptance**: Cold start < 2s, warm start < 0.5s

#### NFR-PERF-005: Memory Usage

- **ID**: NFR-PERF-005
- **Priority**: P1 (High)
- **Requirement**: Memory footprint remains under 200MB
- **Monitoring**: Memory profiling in development
- **Mitigation**:
  - Unload images not in viewport
  - Clear cached data periodically
  - Proper cleanup in useEffect hooks
- **Acceptance**: Peak memory < 200MB on standard devices

### 5.2 Scalability Requirements

#### NFR-SCALE-001: Concurrent Users

- **ID**: NFR-SCALE-001
- **Priority**: P1 (High)
- **Requirement**: Support 100,000 concurrent users
- **Architecture**:
  - Stateless frontend (mobile app)
  - Backend load balancing
  - CDN for static assets
- **Testing**: Load testing with 100K simulated users

#### NFR-SCALE-002: Data Volume

- **ID**: NFR-SCALE-002
- **Priority**: P1 (High)
- **Requirement**: Handle 1M+ property listings
- **Implementation**:
  - Pagination (20 items per page)
  - Virtual scrolling for large lists
  - Indexed search
- **Performance**: Query response < 1s at 1M records

#### NFR-SCALE-003: Geographic Distribution

- **ID**: NFR-SCALE-003
- **Priority**: P2 (Medium)
- **Requirement**: Support users across multiple regions
- **Implementation**:
  - Multi-region CDN
  - Regional API endpoints
  - Edge caching
- **Target**: < 200ms latency worldwide

### 5.3 Reliability Requirements

#### NFR-REL-001: Availability

- **ID**: NFR-REL-001
- **Priority**: P0 (Critical)
- **Requirement**: 99.9% uptime (< 8.76 hours downtime/year)
- **Monitoring**:
  - Uptime monitoring (Pingdom/UptimeRobot)
  - Real-time alerting
- **SLA**: 99.9% monthly uptime

#### NFR-REL-002: Error Rate

- **ID**: NFR-REL-002
- **Priority**: P0 (Critical)
- **Requirement**: < 0.1% crash rate
- **Monitoring**: Sentry error tracking
- **Target**: 99.9% crash-free users
- **Response**: Critical bugs fixed within 24 hours

#### NFR-REL-003: Data Consistency

- **ID**: NFR-REL-003
- **Priority**: P0 (Critical)
- **Requirement**: Watchlist and booking data consistency across sessions
- **Implementation**:
  - Optimistic UI updates
  - Background sync
  - Conflict resolution
- **Recovery**: Auto-sync on app resume

#### NFR-REL-004: Offline Functionality

- **ID**: NFR-REL-004
- **Priority**: P2 (Medium)
- **Requirement**: Basic functionality available offline
- **Offline Features**:
  - View cached properties
  - View watchlist
  - View bookings
- **Sync**: Auto-sync when connection restored

### 5.4 Usability Requirements

#### NFR-USE-001: Learnability

- **ID**: NFR-USE-001
- **Priority**: P0 (Critical)
- **Requirement**: New users complete first property view within 2 minutes
- **Measurement**: User testing with 20+ participants
- **Target**: 90% success rate

#### NFR-USE-002: Accessibility

- **ID**: NFR-USE-002
- **Priority**: P1 (High)
- **Requirement**: WCAG 2.1 Level AA compliance
- **Implementation**:
  - Minimum touch target: 44x44 points
  - Color contrast ratio: 4.5:1 for text
  - Screen reader support
  - Dynamic text sizing
- **Testing**: Automated accessibility scanner

#### NFR-USE-003: Internationalization

- **ID**: NFR-USE-003
- **Priority**: P2 (Medium)
- **Requirement**: Support multiple languages
- **Phase 1**: English
- **Phase 2**: Arabic with RTL support
- **Implementation**: i18next or react-i18next

#### NFR-USE-004: Error Messages

- **ID**: NFR-USE-004
- **Priority**: P1 (High)
- **Requirement**: User-friendly, actionable error messages
- **Guidelines**:
  - Avoid technical jargon
  - Provide clear next steps
  - Include support contact for critical errors
- **Examples**:
  - "Unable to load properties. Please check your connection and try again."
  - "Invalid card number. Please check and re-enter."

### 5.5 Maintainability Requirements

#### NFR-MAINT-001: Code Quality

- **ID**: NFR-MAINT-001
- **Priority**: P1 (High)
- **Requirement**: Maintain code quality standards
- **Metrics**:
  - TypeScript strict mode: 100% compliance
  - ESLint warnings: < 10
  - Code duplication: < 3%
- **Tools**: ESLint, TypeScript compiler, SonarQube

#### NFR-MAINT-002: Documentation

- **ID**: NFR-MAINT-002
- **Priority**: P1 (High)
- **Requirement**: Comprehensive documentation
- **Content**:
  - Component prop documentation
  - API integration guides
  - Setup and deployment instructions
  - Architecture diagrams
- **Format**: Markdown files in repository

#### NFR-MAINT-003: Testability

- **ID**: NFR-MAINT-003
- **Priority**: P1 (High)
- **Requirement**: High test coverage
- **Targets**:
  - Unit test coverage: > 80%
  - Integration test coverage: > 60%
  - E2E critical paths: 100%
- **Frameworks**: Jest, React Native Testing Library, Detox

#### NFR-MAINT-004: Modularity

- **ID**: NFR-MAINT-004
- **Priority**: P1 (High)
- **Requirement**: Modular, reusable component architecture
- **Principles**:
  - Single Responsibility Principle
  - DRY (Don't Repeat Yourself)
  - Clear component interfaces
- **Structure**: Atomic design pattern

### 5.6 Portability Requirements

#### NFR-PORT-001: Platform Independence

- **ID**: NFR-PORT-001
- **Priority**: P0 (Critical)
- **Requirement**: Single codebase for iOS and Android
- **Implementation**: React Native with platform-specific code < 5%
- **Testing**: Parallel testing on both platforms

#### NFR-PORT-002: OS Version Support

- **ID**: NFR-PORT-002
- **Priority**: P0 (Critical)
- **Requirement**:
  - iOS: 13.0 and above (covers 95%+ devices)
  - Android: API 26+ / Android 8.0 (covers 90%+ devices)
- **Monitoring**: Crash analytics by OS version

#### NFR-PORT-003: Device Compatibility

- **ID**: NFR-PORT-003
- **Priority**: P1 (High)
- **Requirement**: Responsive design for all screen sizes
- **Testing Devices**:
  - Small: iPhone SE (4.7"), Pixel 4a (5.8")
  - Medium: iPhone 13 (6.1"), Pixel 6 (6.4")
  - Large: iPhone 13 Pro Max (6.7"), Pixel 6 Pro (6.7")
  - Tablet: iPad (9.7"), Samsung Tab S7 (11")
- **Implementation**: Flexible layouts with Tailwind utilities

---

## 6. External Interface Requirements

### 6.1 User Interfaces

#### UI-001: Screen Specifications

**Sign-In Screen**:

- **Layout**: Centered logo, Google sign-in button, terms link
- **Components**: Image, TouchableOpacity, Text, ActivityIndicator
- **Styling**: Full-screen background, rounded button, loading overlay
- **Interactions**: Button press → loading → navigation

**Home Screen (Tab)**:

- **Layout**: Header, search bar, featured carousel, recommended grid
- **Components**: ScrollView, FlatList, FeaturedCard, RecommendedCard
- **Scrolling**: Vertical scroll, nested horizontal scroll for featured
- **Refresh**: Pull-to-refresh functionality

**Explore Screen (Tab)**:

- **Layout**: Header with back button, search bar, category filters, property grid
- **Components**: FlatList with 2 columns, Filters chip row
- **Filtering**: Real-time filter updates, URL state sync
- **Pagination**: Load more on scroll

**Profile Screen (Tab)**:

- **Layout**: Header, profile section, settings list, logout button
- **Components**: ScrollView, SettingsItem list, Image (profile)
- **Sections**: Profile info, quick actions, general settings, logout
- **Modals**: Various modals for settings

**Property Detail Screen**:

- **Layout**: Full-screen image, back button, property info, agent card, reviews
- **Components**: ScrollView, image gallery, spec icons, facilities list
- **Actions**: Watchlist toggle, share, contact agent
- **Gallery**: Swipeable image carousel

**Bookings Screen**:

- **Layout**: Header with back button, booking count, booking list
- **Components**: ScrollView, BookedCard list
- **Navigation**: Tap card → property details
- **Empty State**: Message when no bookings

**Payments Screen**:

- **Layout**: Header, payment cards list, add button, security info
- **Components**: ScrollView, PaymentCard list, info card
- **Actions**: Edit payment, set default, add new
- **Modal**: PaymentEditModal overlay

**Watchlist Screen**:

- **Layout**: Header, property list
- **Components**: FlatList, property cards
- **Actions**: Remove from watchlist, navigate to property
- **Empty State**: Icon, message, browse button

#### UI-002: Design System

**Color Palette**:

```javascript
colors: {
  primary: {
    100: "#0061FF0A",  // 10% opacity
    200: "#0061FF1A",  // 26% opacity
    300: "#0061FF",    // Primary blue
  },
  accent: {
    100: "#FBFBFD",
  },
  black: {
    DEFAULT: "#000000",
    100: "#8C8E98",
    200: "#666876",
    300: "#191D31",
  },
  danger: "#F75555",
  white: "#FFFFFF",
}
```

**Typography**:

- **Font Family**: Rubik
- **Weights**: Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800)
- **Sizes**:
  - xs: 12px
  - sm: 14px
  - base: 16px
  - lg: 18px
  - xl: 20px
  - 2xl: 24px

**Spacing**:

- Scale: 4px base unit
- Common: 2 (8px), 3 (12px), 4 (16px), 5 (20px), 7 (28px)

**Border Radius**:

- md: 8px
- lg: 12px
- xl: 16px
- 2xl: 20px
- 3xl: 24px
- full: 9999px

**Shadows**:

```javascript
shadow-md: {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 3,
}
```

#### UI-003: Responsive Behavior

**Phone Portrait** (default):

- Single column layouts
- Full-width components
- Stacked navigation

**Phone Landscape**:

- Adjusted padding for safe areas
- Horizontal scrolling maintained
- Optimized for wider screens

**Tablet**:

- Multi-column for property grids (3-4 columns)
- Wider modals (max 600px)
- Side-by-side layouts where appropriate

### 6.2 Hardware Interfaces

#### HW-001: Camera

- **Purpose**: Profile picture capture
- **API**: expo-image-picker
- **Permissions**: Camera access (iOS: NSCameraUsageDescription)
- **Usage**: Capture photo for profile update
- **Fallback**: Photo library selection

#### HW-002: Photo Library

- **Purpose**: Profile picture selection
- **API**: expo-image-picker
- **Permissions**: Photo library access
- **Usage**: Select existing photo
- **Format Support**: JPEG, PNG

#### HW-003: Haptic Feedback

- **Purpose**: Touch feedback for interactions
- **API**: expo-haptics
- **Usage**: Button presses, toggle actions
- **Types**: Light, Medium, Heavy impact

#### HW-004: Clipboard

- **Purpose**: Copy referral links
- **API**: expo-clipboard
- **Usage**: Copy to clipboard with confirmation
- **Feedback**: Toast message on copy

### 6.3 Software Interfaces

#### SW-001: Backend REST API

**Base URL**: `https://api.restate.app/v1`

**Authentication**:

- Method: JWT Bearer token
- Header: `Authorization: Bearer {token}`
- Token expiry: 7 days
- Refresh token: 30 days

**Endpoints**:

```
POST /auth/google
  Request: { idToken: string }
  Response: { accessToken: string, refreshToken: string, user: User }

GET /properties
  Query: { page, limit, category, search, minPrice, maxPrice }
  Response: { properties: Property[], total: number, page: number }

GET /properties/:id
  Response: { property: Property, gallery: Image[], reviews: Review[] }

GET /bookings
  Response: { bookings: Booking[] }

POST /bookings
  Request: { propertyId, checkIn, checkOut, guests, paymentMethodId }
  Response: { booking: Booking, confirmation: string }

GET /payments
  Response: { paymentMethods: PaymentMethod[] }

POST /payments
  Request: { cardToken, cardHolder, expiryDate, isDefault }
  Response: { paymentMethod: PaymentMethod }

PUT /payments/:id
  Request: { isDefault, cardHolder, expiryDate }
  Response: { paymentMethod: PaymentMethod }

GET /profile
  Response: { user: User }

PUT /profile
  Request: { name, profileImage }
  Response: { user: User }

POST /reviews
  Request: { propertyId, rating, comment }
  Response: { review: Review }

GET /watchlist
  Response: { propertyIds: string[] }

POST /watchlist
  Request: { propertyId }
  Response: { success: boolean }

DELETE /watchlist/:propertyId
  Response: { success: boolean }
```

**Error Format**:

```javascript
{
  error: {
    code: string,
    message: string,
    details?: any
  }
}
```

**Status Codes**:

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

#### SW-002: Google OAuth 2.0

**Provider**: Google Identity Platform
**Flow**: Authorization Code with PKCE
**Scopes**: `openid email profile`
**Client ID**: Configured in app.json
**Redirect URI**: Expo AuthSession callback

**Implementation**:

```javascript
import * as Google from "expo-auth-session/providers/google";

const [request, response, promptAsync] = Google.useAuthRequest({
  expoClientId: "YOUR_EXPO_CLIENT_ID",
  iosClientId: "YOUR_IOS_CLIENT_ID",
  androidClientId: "YOUR_ANDROID_CLIENT_ID",
  webClientId: "YOUR_WEB_CLIENT_ID",
});
```

#### SW-003: Payment Gateway (Stripe)

**API Version**: 2023-10-16
**SDK**: @stripe/stripe-react-native
**Publishable Key**: Environment variable
**Features Used**:

- Card tokenization (no raw card data stored)
- Payment Intents
- 3D Secure (SCA compliance)

**Integration**:

```javascript
import { CardField, createToken } from '@stripe/stripe-react-native';

// Tokenize card
const { token } = await createToken({
  type: 'Card',
  ...
});

// Send token to backend
```

#### SW-004: Cloud Storage (AWS S3/Cloudinary)

**Purpose**: Property images, user uploads
**API**: RESTful HTTP
**Upload Flow**:

1. Request signed URL from backend
2. Upload directly to S3/Cloudinary
3. Return URL to backend
4. Backend stores URL in database

**Image Transformations**:

- Thumbnails: 400x400
- Property cards: 800x600
- Full size: 1920x1080
- Format: WebP with JPEG fallback

#### SW-005: Push Notifications (Firebase)

**Service**: Firebase Cloud Messaging (FCM)
**Implementation**: expo-notifications
**Message Types**:

- Booking confirmations
- Payment receipts
- Property updates
- Promotional messages

**Permissions**:

- iOS: Request on first booking
- Android: Granted by default

### 6.4 Communications Interfaces

#### COM-001: HTTP/HTTPS

- **Protocol**: HTTPS (TLS 1.3)
- **Port**: 443
- **Format**: JSON
- **Timeout**: 30 seconds
- **Retry**: 3 attempts with exponential backoff

#### COM-002: WebSocket (Future)

- **Purpose**: Real-time chat, notifications
- **Protocol**: WSS (WebSocket Secure)
- **Library**: socket.io-client
- **Fallback**: Long polling

#### COM-003: Deep Links

- **Scheme**: `restate://`
- **Universal Links**: `https://restate.app/*`
- **Patterns**:
  - `restate://property/{id}` → Property detail
  - `restate://booking/{id}` → Booking detail
  - `restate://r/{userId}` → Referral landing

---

## 7. System Features

### 7.1 Authentication System

**Feature ID**: SF-AUTH
**Priority**: P0 (Critical)
**Description**: Complete user authentication and session management

**Functional Requirements**:

- FR-AUTH-001: Google OAuth Sign-In
- FR-AUTH-002: Session Management
- FR-AUTH-003: Logout

**Dependencies**:

- Google OAuth API
- Backend authentication service
- Secure storage (expo-secure-store)

**Error Handling**:

- Network errors: Display retry dialog
- OAuth failures: Return to sign-in with error message
- Token expiry: Automatic silent refresh
- Refresh failure: Force logout with message

**Security**:

- Tokens stored in secure storage (Keychain/Keystore)
- HTTPS only communication
- Token expiration: 7 days
- Refresh token rotation

### 7.2 Property Discovery System

**Feature ID**: SF-PROP
**Priority**: P0 (Critical)
**Description**: Property search, filter, and browse functionality

**Functional Requirements**:

- FR-PROP-001: Property List Display
- FR-PROP-002: Real-Time Search
- FR-PROP-003: Category Filtering
- FR-PROP-004: Advanced Filters
- FR-PROP-005: Property Details View

**Performance**:

- Initial load: < 1s
- Search debounce: 500ms
- Pagination: 20 items per page
- Image loading: Progressive with placeholders

**Caching Strategy**:

- Property list: 1 hour TTL
- Property details: 5 minutes TTL
- Images: 7 days TTL
- Cache invalidation on data change

### 7.3 Wishlist System

**Feature ID**: SF-WATCH
**Priority**: P1 (High)
**Description**: Save and manage favorite properties

**Functional Requirements**:

- FR-WATCH-001: Add to Watchlist
- FR-WATCH-002: Remove from Watchlist
- FR-WATCH-003: View Watchlist

**State Management**:

- Context API for global state
- AsyncStorage for persistence
- Sync with backend on change
- Optimistic UI updates

**Data Structure**:

```typescript
interface WatchlistState {
  propertyIds: Set<string>;
  lastSynced: number;
}
```

### 7.4 Booking System

**Feature ID**: SF-BOOK
**Priority**: P0 (Critical)
**Description**: Property booking and reservation management

**Functional Requirements**:

- FR-BOOK-001: View Bookings
- FR-BOOK-002: Navigate to Booking Details

**Future Enhancement**:

- FR-BOOK-003: Create Booking (Phase 2)
- FR-BOOK-004: Cancel Booking (Phase 2)
- FR-BOOK-005: Modify Booking (Phase 3)

**Business Rules**:

- Minimum booking: 1 night
- Maximum advance booking: 365 days
- Cancellation policy: 24 hours before check-in
- Payment required at booking

### 7.5 Payment System

**Feature ID**: SF-PAY
**Priority**: P0 (Critical)
**Description**: Payment method and transaction management

**Functional Requirements**:

- FR-PAY-001: View Payment Methods
- FR-PAY-002: Add Payment Method
- FR-PAY-003: Edit Payment Method
- FR-PAY-004: Set Default Payment

**Security Compliance**:

- PCI DSS Level 1
- Tokenization (no raw card storage)
- 3D Secure / SCA support
- Encrypted transmission (TLS 1.3)

**Supported Payment Types**:

- Visa
- Mastercard
- PayPal
- Apple Pay (iOS)
- Google Pay (Android)

---

## 8. Data Requirements

### 8.1 Data Models

#### User

```typescript
interface User {
  id: string;
  email: string;
  name: string;
  profileImage?: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
  preferences: {
    language: "en" | "ar";
    notifications: boolean;
  };
}
```

#### Property

```typescript
interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  address: string;
  price: string; // e.g., "$250/night"
  category: "Houses" | "Condos" | "Duplexes" | "Villas" | "Apartments" | "Studios";
  rating: number; // 0-5
  image: string; // Primary image URL
  gallery: Image[];
  bedrooms: number;
  bathrooms: number;
  area: number; // square feet
  facilities: string[];
  agent: Agent;
  createdAt: Date;
  updatedAt: Date;
}
```

#### Booking

```typescript
interface Booking {
  id: string;
  userId: string;
  propertyId: string;
  property: Property; // Denormalized
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  paymentMethodId: string;
  confirmationCode: string;
  createdAt: Date;
  updatedAt: Date;
}
```

#### PaymentMethod

```typescript
interface PaymentMethod {
  id: string;
  userId: string;
  type: "visa" | "mastercard" | "paypal" | "apple-pay" | "google-pay";
  cardNumber?: string; // Masked, last 4 digits
  cardHolder?: string;
  expiryDate?: string; // MM/YY
  token: string; // Payment provider token
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

#### Review

```typescript
interface Review {
  id: string;
  propertyId: string;
  userId: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number; // 1-5
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}
```

#### Watchlist

```typescript
interface Watchlist {
  userId: string;
  propertyIds: string[];
  updatedAt: Date;
}
```

### 8.2 Data Storage

**Mobile App (Client)**:

- **AsyncStorage**:
  - Authentication tokens
  - User preferences
  - Watchlist data
  - Cached property list
- **Secure Storage**:
  - OAuth tokens
  - Sensitive user data
- **In-Memory**:
  - Current session state
  - Form data
  - Filter state

**Backend (Server)**:

- **Database**: MongoDB
  - Collections: users, properties, bookings, reviews, watchlist
  - Indexes: propertyId, userId, category, location
- **Cache**: Redis
  - Session data
  - Popular property lists
  - Search results
- **File Storage**: AWS S3 / Cloudinary
  - Property images
  - User uploads

### 8.3 Data Flow

**Property Search Flow**:

```
User Input → Debounce (500ms) → Update URL Params →
Filter Local Data → Render Results
                ↓
          (if not in cache)
                ↓
      API Request → Backend → Database Query →
      Response → Cache → Update Local State → Render
```

**Booking Creation Flow**:

```
User Selects Property → Input Dates/Guests →
Select Payment Method → Review Summary → Confirm →
Process Payment (Stripe) → Create Booking Record →
Send Confirmation → Update Bookings List → Navigate
```

**Watchlist Sync Flow**:

```
User Toggles Heart → Optimistic UI Update →
Update Local State → Persist to AsyncStorage →
API Call to Backend → Sync Confirmation →
(on failure: Rollback + Error Message)
```

### 8.4 Data Validation

**Input Validation Rules**:

| **Field**      | **Validation**                          |
| -------------- | --------------------------------------- |
| Email          | RFC 5322 compliant email format         |
| Phone          | E.164 format, optional                  |
| Card Number    | 13-19 digits, Luhn algorithm            |
| Expiry Date    | MM/YY, must be future date              |
| CVV            | 3-4 digits                              |
| Name           | 2-100 characters, letters and spaces    |
| Review Comment | 0-500 characters                        |
| Rating         | Integer 1-5                             |
| Price Range    | Non-negative numbers, min <= max        |
| Date Range     | Check-in < Check-out, future dates only |

**Server-Side Validation**:

- All inputs validated on backend
- Sanitization for XSS prevention
- SQL injection prevention (parameterized queries)
- Rate limiting per user

---

## 9. Design Constraints

### 9.1 Technology Constraints

**TC-001: React Native Framework**

- Must use React Native 0.81.5
- Must use Expo SDK 54
- Cannot use native modules requiring ejection (in Expo Go)
- Limited to Expo-compatible libraries

**TC-002: Cross-Platform Compatibility**

- Single codebase for iOS and Android
- Platform-specific code limited to < 5%
- Must use React Native's platform-agnostic APIs

**TC-003: TypeScript Strict Mode**

- TypeScript strict mode enforced
- No `any` types except for third-party integrations
- All components must have typed props

**TC-004: File Size Constraints**

- APK/IPA size < 50MB
- Individual images < 5MB
- Bundle size optimized with code splitting

### 9.2 Developer Standards

**DS-001: Code Style**

- ESLint configuration enforced
- Prettier for code formatting
- Naming conventions:
  - Components: PascalCase
  - Files: PascalCase for components, camelCase for utilities
  - Variables: camelCase
  - Constants: UPPER_SNAKE_CASE

**DS-002: Component Structure**

- Functional components only (hooks)
- Props interface at top of file
- Exported component at bottom
- Helper functions above component

**DS-003: Git Workflow**

- Feature branches: `feature/description`
- Commit messages: Conventional Commits format
- Pull requests required for main branch
- Code review by at least one developer

**DS-004: Documentation**

- JSDoc comments for complex functions
- README for each major directory
- Inline comments for non-obvious logic

### 9.3 UI/UX Constraints

**UX-001: Design System Adherence**

- Must use defined color palette
- Must use Rubik font family
- Consistent spacing (4px grid)
- Consistent border radius values

**UX-002: Touch Targets**

- Minimum touch target: 44x44 points (iOS HIG, Android Material)
- Spacing between targets: 8px minimum

**UX-003: Loading States**

- Show loading indicator for operations > 300ms
- Skeleton screens for content loading
- Optimistic UI updates where appropriate

**UX-004: Error Handling UI**

- User-friendly error messages
- Actionable error states (retry button)
- Toast notifications for non-critical errors
- Modal dialogs for critical errors

### 9.4 Performance Constraints

**PC-001: Bundle Size**

- JavaScript bundle < 5MB
- Asset bundle < 45MB
- Total app size < 50MB

**PC-002: Memory**

- Peak memory usage < 200MB
- Image memory properly released
- No memory leaks in navigation

**PC-003: Battery**

- Background activity minimized
- Location services only when needed
- Efficient image loading (progressive, lazy)

**PC-004: Network**

- Graceful degradation on slow networks
- Request timeouts: 30 seconds
- Retry logic with exponential backoff

### 9.5 Regulatory Constraints

**RC-001: Data Privacy**

- GDPR compliance (EU)
- CCPA compliance (California)
- Privacy policy required
- User consent for data collection

**RC-002: Payment Security**

- PCI DSS Level 1 compliance
- No storage of full card numbers
- Tokenization required
- Secure transmission (TLS 1.3)

**RC-003: App Store Requirements**

- Apple App Store Review Guidelines
- Google Play Developer Policy
- Age rating: 4+ (iOS), Everyone (Android)
- Content policy compliance

---

## 10. Quality Attributes

### 10.1 Reliability

**Availability**: 99.9% uptime
**Mean Time Between Failures (MTBF)**: > 720 hours
**Mean Time To Recovery (MTTR)**: < 1 hour
**Error Handling**: Graceful degradation with user feedback
**Data Integrity**: ACID compliance for critical transactions

**Measures**:

- Automated health checks
- Redundant backend services
- Database backups (hourly incremental, daily full)
- Disaster recovery plan
- Rollback procedures

### 10.2 Security

**Authentication**: OAuth 2.0 with JWT
**Authorization**: Role-based access control (RBAC)
**Data Encryption**:

- At rest: AES-256
- In transit: TLS 1.3
  **Payment Security**: PCI DSS Level 1
  **API Security**: Rate limiting, CORS, input validation

**Threat Mitigation**:

- SQL Injection: Parameterized queries
- XSS: Input sanitization, output encoding
- CSRF: Token-based protection
- Man-in-the-Middle: Certificate pinning
- Brute Force: Account lockout after 5 attempts

**Compliance**:

- GDPR: Right to access, right to deletion
- CCPA: Data portability, opt-out
- COPPA: Age verification (though 13+ only)

### 10.3 Performance

**Response Time**:

- P95: < 300ms
- P99: < 500ms

**Throughput**:

- 10,000 requests/second (backend)
- 100,000 concurrent users

**Resource Utilization**:

- CPU: < 25% average
- Memory: < 200MB app footprint
- Network: Optimized with compression, caching

**Scalability**:

- Horizontal scaling for backend
- CDN for static assets
- Database sharding capability

### 10.4 Usability

**Learnability**:

- First property view: < 2 minutes
- First booking: < 5 minutes

**Efficiency**:

- Property search: < 10 seconds
- Booking completion: < 3 minutes

**Memorability**:

- User can complete tasks after 1 week gap without relearning

**Error Tolerance**:

- Clear error messages
- Undo capability where possible
- Confirmation for destructive actions

**Satisfaction**:

- Target NPS: > 50
- App store rating: > 4.5
- User satisfaction surveys: > 80% satisfied

### 10.5 Maintainability

**Modularity**:

- Component coupling: Loose
- Component cohesion: High
- Clear separation of concerns

**Reusability**:

- 80%+ components reusable
- Shared component library

**Analyzability**:

- Code commented for complex logic
- Clear naming conventions
- Architecture documentation

**Modifiability**:

- New feature addition: < 1 week average
- Bug fix turnaround: < 24 hours critical, < 1 week minor

**Testability**:

- Unit test coverage: > 80%
- Integration test coverage: > 60%
- E2E test coverage: 100% critical paths

---

## 11. Security Requirements

### 11.1 Authentication & Authorization

**SEC-AUTH-001: Strong Authentication**

- OAuth 2.0 with Google
- JWT tokens with RS256 signing
- Token expiration: 7 days
- Refresh token: 30 days with rotation
- Secure storage (Keychain/Keystore)

**SEC-AUTH-002: Session Management**

- Stateless sessions (JWT)
- Token refresh 1 hour before expiry
- Force logout after 30 days
- Concurrent session limit: 5 devices

**SEC-AUTH-003: Authorization**

- Role-based access control
- Principle of least privilege
- API endpoint authorization checks
- Resource-level permissions

### 11.2 Data Security

**SEC-DATA-001: Encryption at Rest**

- Database: AES-256 encryption
- Sensitive fields: Additional field-level encryption
- Secure storage for tokens (hardware-backed on supported devices)

**SEC-DATA-002: Encryption in Transit**

- TLS 1.3 for all API calls
- Certificate pinning for critical endpoints
- HTTPS only (no HTTP fallback)

**SEC-DATA-003: Data Minimization**

- Collect only necessary data
- Retention policy:
  - User data: Until account deletion + 30 days
  - Transaction logs: 7 years (regulatory)
  - Analytics: 2 years

**SEC-DATA-004: Secure Storage on Device**

- Authentication tokens: Secure storage
- User preferences: AsyncStorage (non-sensitive)
- No sensitive data in plain text

### 11.3 Payment Security

**SEC-PAY-001: PCI DSS Compliance**

- Level 1 compliance
- Annual security audit
- Quarterly network scans
- Penetration testing

**SEC-PAY-002: Tokenization**

- Never store full card numbers
- Use payment provider tokens
- CVV never stored (even temporarily)

**SEC-PAY-003: 3D Secure / SCA**

- Support for 3D Secure 2.0
- Strong Customer Authentication for EU
- Frictionless flow when possible

**SEC-PAY-004: Transaction Security**

- Idempotency keys for transactions
- Transaction logging
- Fraud detection integration
- Chargeback monitoring

### 11.4 API Security

**SEC-API-001: Input Validation**

- Server-side validation for all inputs
- Sanitization to prevent XSS
- Parameterized queries (no SQL injection)
- File upload validation (type, size)

**SEC-API-002: Rate Limiting**

- Per user: 1000 requests/hour
- Per IP: 5000 requests/hour
- Login attempts: 5 per 15 minutes
- Exponential backoff for repeated failures

**SEC-API-003: CORS Configuration**

- Whitelist of allowed origins
- Credentials included only for same-origin
- Preflight caching

**SEC-API-004: API Keys & Secrets**

- Environment variables for all secrets
- No secrets in code repository
- Key rotation every 90 days
- Separate keys per environment

### 11.5 Mobile App Security

**SEC-APP-001: Code Obfuscation**

- JavaScript minification
- ProGuard/R8 for Android
- Bitcode for iOS

**SEC-APP-002: Jailbreak/Root Detection**

- Warning for rooted devices
- Disable payment on compromised devices
- Security alert to backend

**SEC-APP-003: Certificate Pinning**

- Pin SSL certificates for API endpoints
- Prevent MITM attacks
- Graceful fallback if pinning fails

**SEC-APP-004: Secure Communication**

- No sensitive data in logs
- No sensitive data in URLs (use POST body)
- Clear sensitive data from memory after use

### 11.6 Privacy & Compliance

**SEC-PRIV-001: Privacy by Design**

- User consent for data collection
- Opt-in for analytics
- Opt-in for marketing communications
- Clear privacy policy

**SEC-PRIV-002: GDPR Compliance**

- Right to access: Export user data
- Right to deletion: Account deletion flow
- Right to portability: Data export in JSON
- Data breach notification: < 72 hours

**SEC-PRIV-003: CCPA Compliance**

- Data disclosure: What data is collected
- Opt-out of data sale (we don't sell)
- Data portability
- Non-discrimination for opting out

**SEC-PRIV-004: Age Verification**

- Minimum age: 13 years (COPPA)
- Age gate on sign-up
- Terms of Service acceptance

### 11.7 Incident Response

**SEC-INC-001: Monitoring**

- Real-time security monitoring (SIEM)
- Anomaly detection
- Alert system for suspicious activity
- Automated response for common threats

**SEC-INC-002: Incident Response Plan**

- Defined roles and responsibilities
- Communication protocols
- Escalation procedures
- Post-incident review

**SEC-INC-003: Breach Notification**

- User notification: < 72 hours
- Regulatory notification: As required
- Public disclosure: If > 500 users affected
- Remediation plan communication

---

## 12. Testing Requirements

### 12.1 Unit Testing

**UT-001: Component Testing**

- **Framework**: Jest, React Native Testing Library
- **Coverage Target**: > 80%
- **Scope**:
  - All React components
  - Custom hooks
  - Utility functions
  - Business logic

**Testing Strategy**:

```javascript
// Example: Component test
describe("FeaturedCard", () => {
  it("renders property information correctly", () => {
    const property = { title: "Test Property", price: "$100" };
    const { getByText } = render(<FeaturedCard data={property} />);
    expect(getByText("Test Property")).toBeTruthy();
    expect(getByText("$100")).toBeTruthy();
  });

  it("handles press events", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<FeaturedCard onPress={onPress} />);
    fireEvent.press(getByTestId("featured-card"));
    expect(onPress).toHaveBeenCalled();
  });
});
```

**UT-002: Hook Testing**

- Test custom hooks in isolation
- Mock dependencies
- Test all hook states and effects

**UT-003: Utility Testing**

- Test helper functions
- Edge cases and error conditions
- Input validation functions

### 12.2 Integration Testing

**IT-001: API Integration**

- **Framework**: Jest with MSW (Mock Service Worker)
- **Coverage Target**: > 60%
- **Scope**:
  - API client functions
  - Data transformation
  - Error handling
  - State updates after API calls

**IT-002: Navigation Integration**

- Test navigation flows
- Route parameter passing
- Back button behavior
- Deep linking

**IT-003: Context Integration**

- Test Context providers
- State updates across components
- Context consumer behavior

### 12.3 End-to-End Testing

**E2E-001: Critical Path Testing**

- **Framework**: Detox
- **Coverage**: 100% of critical paths
- **Critical Paths**:
  1. Sign-in flow
  2. Property search and view
  3. Add to watchlist
  4. View bookings
  5. Payment method management
  6. Profile update
  7. Logout

**E2E Test Example**:

```javascript
describe("Property Discovery", () => {
  it("should search and view property details", async () => {
    await element(by.id("search-input")).typeText("Villa");
    await element(by.id("search-input")).tapReturnKey();
    await waitFor(element(by.id("property-list")))
      .toBeVisible()
      .withTimeout(2000);
    await element(by.id("property-card-1")).tap();
    await expect(element(by.id("property-detail"))).toBeVisible();
  });
});
```

**E2E-002: Platform-Specific Testing**

- Run tests on both iOS and Android
- Test platform-specific features
- Verify consistent behavior

### 12.4 Performance Testing

**PT-001: Load Time Testing**

- **Tool**: React Native Performance Monitor
- **Metrics**:
  - Screen transition time
  - Initial render time
  - Time to interactive
- **Targets**:
  - Cold start: < 2s
  - Navigation: < 300ms
  - Search results: < 500ms

**PT-002: Memory Testing**

- Monitor memory usage during testing
- Check for memory leaks
- Profile component re-renders
- **Target**: Peak memory < 200MB

**PT-003: Network Performance**

- Simulate slow networks (3G, 4G)
- Test with high latency
- Verify timeout handling
- **Target**: Functional on 3G

### 12.5 Security Testing

**ST-001: Penetration Testing**

- Annual penetration test by third party
- API security testing
- Authentication/authorization testing
- Payment flow security

**ST-002: Vulnerability Scanning**

- Weekly dependency scanning (npm audit)
- OWASP Top 10 testing
- Static code analysis
- **Tools**: Snyk, SonarQube

**ST-003: Security Code Review**

- Manual code review for security issues
- Focus on authentication, payment, data handling
- Peer review requirement

### 12.6 Usability Testing

**UT-001: User Acceptance Testing (UAT)**

- **Participants**: 20+ target users
- **Scenarios**:
  - First-time user onboarding
  - Property search and booking
  - Payment management
  - Profile customization
- **Metrics**:
  - Task completion rate
  - Time to complete tasks
  - Error rate
  - User satisfaction (SUS score)

**UT-002: A/B Testing**

- Test UI variations
- Measure conversion rates
- Optimize user flows
- **Tool**: Firebase Remote Config

### 12.7 Accessibility Testing

**AT-001: WCAG Compliance**

- **Tool**: Axe DevTools
- **Level**: AA compliance
- **Tests**:
  - Color contrast ratios
  - Touch target sizes
  - Screen reader compatibility
  - Keyboard navigation (Android)

**AT-002: Device Testing**

- Test on various screen sizes
- Test with OS-level accessibility features:
  - VoiceOver (iOS)
  - TalkBack (Android)
  - Dynamic text sizing
  - Reduced motion

### 12.8 Test Automation

**TA-001: Continuous Integration**

- **Platform**: GitHub Actions
- **Triggers**: Pull requests, merges to main
- **Pipeline**:
  1. Lint and type check
  2. Unit tests
  3. Integration tests
  4. Build APK/IPA
  5. E2E tests on simulators/emulators

**TA-002: Automated Regression Testing**

- Run full test suite nightly
- Critical path tests on every commit
- Performance benchmarks weekly

**TA-003: Test Reporting**

- Coverage reports (Istanbul/nyc)
- Test results dashboard
- Failure notifications (Slack/Email)

---

## 13. Appendices

### Appendix A: Acronyms and Abbreviations

| **Acronym** | **Full Form**                                |
| ----------- | -------------------------------------------- |
| API         | Application Programming Interface            |
| APK         | Android Package Kit                          |
| AWS         | Amazon Web Services                          |
| CDN         | Content Delivery Network                     |
| CORS        | Cross-Origin Resource Sharing                |
| CRUD        | Create, Read, Update, Delete                 |
| E2E         | End-to-End                                   |
| GDPR        | General Data Protection Regulation           |
| HTTP        | Hypertext Transfer Protocol                  |
| HTTPS       | HTTP Secure                                  |
| IPA         | iOS App Store Package                        |
| JSON        | JavaScript Object Notation                   |
| JWT         | JSON Web Token                               |
| OAuth       | Open Authorization                           |
| PCI DSS     | Payment Card Industry Data Security Standard |
| REST        | Representational State Transfer              |
| RTL         | Right-to-Left                                |
| SCA         | Strong Customer Authentication               |
| SDK         | Software Development Kit                     |
| SRS         | Software Requirements Specification          |
| SSL         | Secure Sockets Layer                         |
| TLS         | Transport Layer Security                     |
| UI          | User Interface                               |
| URI         | Uniform Resource Identifier                  |
| URL         | Uniform Resource Locator                     |
| UX          | User Experience                              |
| WCAG        | Web Content Accessibility Guidelines         |
| WSS         | WebSocket Secure                             |

### Appendix B: References

**Standards & Guidelines**:

- IEEE 830-1998: Software Requirements Specifications
- ISO/IEC 25010:2011: Systems and Software Quality Models
- WCAG 2.1: Web Content Accessibility Guidelines
- PCI DSS v4.0: Payment Card Industry Data Security Standard
- OWASP Mobile Top 10 2024

**Technology Documentation**:

- React Native: https://reactnative.dev/docs/getting-started
- Expo: https://docs.expo.dev/
- TypeScript: https://www.typescriptlang.org/docs/
- NativeWind: https://www.nativewind.dev/
- Expo Router: https://docs.expo.dev/router/introduction/

**API Documentation**:

- Google OAuth 2.0: https://developers.google.com/identity/protocols/oauth2
- Stripe API: https://stripe.com/docs/api
- Firebase: https://firebase.google.com/docs

### Appendix C: Tools & Libraries

**Development**:

```json
{
  "react": "19.1.0",
  "react-native": "0.81.5",
  "expo": "~54.0.32",
  "typescript": "~5.9.2",
  "expo-router": "~6.0.22",
  "nativewind": "^4.2.1"
}
```

**Testing**:

```json
{
  "jest": "^29.0.0",
  "@testing-library/react-native": "^12.0.0",
  "detox": "^20.0.0"
}
```

**Utilities**:

```json
{
  "use-debounce": "^10.1.0",
  "expo-image-picker": "~17.0.10",
  "expo-clipboard": "~8.0.8",
  "expo-haptics": "~15.0.8"
}
```

**Development Tools**:

- VS Code with React Native Tools extension
- Android Studio (Android development)
- Xcode (iOS development)
- Flipper (debugging)
- Postman (API testing)

### Appendix D: Change Log

| **Version** | **Date**   | **Changes**                   | **Author**       |
| ----------- | ---------- | ----------------------------- | ---------------- |
| 1.0         | 2026-02-18 | Initial SRS document creation | Engineering Team |

### Appendix E: Future Enhancements

**Short-term (6-12 months)**:

- In-app messaging system
- Calendar integration
- Advanced property comparison
- AR virtual tours
- Property recommendations ML
- Multi-language support (Phase 2)

**Mid-term (12-24 months)**:

- Host/owner mobile dashboard
- Dynamic pricing algorithms
- Social features (user profiles, followers)
- Integrated video tours
- Blockchain-based contracts
- IoT smart home integration

**Long-term (24+ months)**:

- AI-powered search and recommendations
- VR property tours
- Global expansion
- Corporate housing solutions
- Property investment platform
- Predictive maintenance for hosts

---

## Document Approval

| **Role**           | **Name**           | **Signature**      | **Date**     |
| ------------------ | ------------------ | ------------------ | ------------ |
| Engineering Lead   | **\*\***\_**\*\*** | **\*\***\_**\*\*** | **\_\_\_\_** |
| Software Architect | **\*\***\_**\*\*** | **\*\***\_**\*\*** | **\_\_\_\_** |
| QA Lead            | **\*\***\_**\*\*** | **\*\***\_**\*\*** | **\_\_\_\_** |
| Product Manager    | **\*\***\_**\*\*** | **\*\***\_**\*\*** | **\_\_\_\_** |
| Security Officer   | **\*\***\_**\*\*** | **\*\***\_**\*\*** | **\_\_\_\_** |

---

**Document End**

_This Software Requirements Specification is a living document and will be updated as technical requirements evolve. All changes must be reviewed and approved by the engineering team and relevant stakeholders._
