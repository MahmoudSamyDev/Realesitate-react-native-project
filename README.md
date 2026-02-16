# 🏠 ReState - Real Estate Property Booking App

A modern, feature-rich mobile application for property rental and booking, built with React Native, Expo, and NativeWind.

![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android-blue)
![React Native](https://img.shields.io/badge/React%20Native-0.81.5-61dafb)
![Expo](https://img.shields.io/badge/Expo-SDK%2054-000020)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178c6)
![License](https://img.shields.io/badge/license-Private-red)

## ✨ Features

### 🏡 Property Discovery

- **Featured Properties**: Curated selection of premium listings
- **Smart Search**: Real-time search with debouncing
- **Category Filters**: Browse by property type (Houses, Condos, Villas, etc.)
- **Detailed Views**: Comprehensive property information with gallery

### 📅 Booking Management

- **My Bookings**: Track all your reservations
- **Quick Access**: Direct navigation to property details
- **Status Updates**: View booking information

### 💳 Payment Integration

- **Multiple Methods**: Visa, Mastercard, PayPal, Apple Pay
- **Secure Storage**: Payment method management
- **Default Selection**: Set preferred payment option
- **Easy Editing**: Modal-based payment updates

### 👤 User Profile

- **Account Settings**: Manage profile information
- **Quick Actions**: Bookings, Payments, Security
- **Support Access**: Help Center integration
- **Referral Program**: Invite friends and earn rewards

### 🌍 Additional Features

- **Multi-language Ready**: English & Arabic (placeholder)
- **24/7 Support**: Live chat, email, phone support
- **Secure Authentication**: Protected routes with auth context
- **Responsive Design**: Adapts to all screen sizes

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Studio

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd real-esitate
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Run on your preferred platform**

   ```bash
   # iOS
   npm run ios

   # Android
   npm run android

   # Web
   npm run web
   ```

## 📱 Platform Support

- ✅ iOS
- ✅ Android
- ✅ Web (limited)

## 🛠️ Tech Stack

### Core

- **React Native**: Cross-platform mobile framework
- **Expo**: Development platform and toolchain
- **TypeScript**: Type-safe JavaScript
- **Expo Router**: File-based navigation

### Styling

- **NativeWind**: TailwindCSS for React Native
- **Custom Fonts**: Rubik font family (6 weights)
- **Custom Icons**: PNG icon library

### State Management

- **React Context API**: Global authentication
- **React Hooks**: Local component state
- **URL Parameters**: Filter and search state

## 📂 Project Structure

```
real-esitate/
├── app/                      # Application screens (Expo Router)
│   ├── _layout.tsx          # Root layout
│   ├── sign-in.tsx          # Authentication
│   └── (root)/              # Protected routes
│       ├── (tabs)/          # Tab navigation
│       └── properties/      # Dynamic property routes
├── components/              # Reusable components
│   ├── Home/               # Home-specific components
│   └── UI/                 # Generic UI components
├── constants/              # Static data
├── lib/                    # Utilities and contexts
├── utils/                  # Helper functions
└── assets/                 # Images, fonts, icons
```

## 🎨 Design System

### Colors

```
Primary Blue:  #0061FF
Accent:        #FBFBFD
Dark Navy:     #191D31
Medium Gray:   #666876
Light Gray:    #8C8E98
Danger Red:    #F75555
```

### Typography

- **Font Family**: Rubik (Regular, Light, Medium, SemiBold, Bold, ExtraBold)
- **Scale**: 12px - 32px

### Components

- Rounded corners (8px - 24px)
- Soft shadows for depth
- Consistent spacing (12px - 24px)
- Touch-friendly targets (44px minimum)

## 🔐 Authentication

Current implementation uses a simulated authentication flow for frontend development:

```typescript
// Sign in with loading state
login(); // Simulates 2-second authentication

// Check authentication status
isAuthenticated; // Boolean state

// Sign out
logout(); // Clears authentication state
```

**Note**: Ready for backend integration with OAuth/JWT.

## 📖 Available Scripts

```bash
# Development
npm start                 # Start Expo dev server
npm run android          # Run on Android
npm run ios              # Run on iOS
npm run web              # Run in web browser

# Code Quality
npm run lint             # Run ESLint
npm run reset-project    # Reset project to clean state
```

## 🗂️ Key Components

### Cards

- **FeaturedCard**: Large overlay card for premium properties
- **RecommendedCard**: Grid card for property listings
- **BookedCard**: Horizontal card for bookings

### Modals

- **PaymentEditModal**: Edit payment methods
- **InviteFriendsModal**: Referral program with copy link
- **HelpCenterModal**: Support categories and contact
- **LanguageModal**: Language selection

### Layout

- **Header**: User greeting and notifications
- **Search**: Real-time search with filters
- **TabBar**: Bottom navigation with icons

## 🎯 Roadmap

### Phase 1: MVP (Current)

- ✅ Property listing and browsing
- ✅ User authentication (frontend)
- ✅ Booking management UI
- ✅ Payment method management
- ✅ Profile and settings

### Phase 2: Backend Integration

- [ ] Real authentication (OAuth)
- [ ] API integration
- [ ] Real-time availability
- [ ] Payment processing (Stripe)
- [ ] Push notifications

### Phase 3: Advanced Features

- [ ] Live chat with hosts
- [ ] Map integration
- [ ] Review and rating system
- [ ] Booking calendar
- [ ] Multi-language support (i18n)

### Phase 4: Optimization

- [ ] Performance optimization
- [ ] Offline support
- [ ] Analytics integration
- [ ] A/B testing
- [ ] App Store deployment

## 📊 Data Flow

```
User Input → Component State → Context API → UI Update
              ↓
         URL Parameters (filters/search)
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration (when backend is ready)
API_BASE_URL=https://api.realestate.app
API_KEY=your_api_key

# OAuth (when implemented)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Payment (when implemented)
STRIPE_PUBLIC_KEY=your_stripe_public_key
```

### App Configuration

Edit `app.json` for app-specific settings:

- App name and slug
- Icons and splash screen
- Orientation and status bar
- Bundle identifiers

## 🧪 Testing

```bash
# Unit tests (to be implemented)
npm test

# E2E tests (to be implemented)
npm run test:e2e
```

## 📱 Screenshots

_Add screenshots of key screens here_

## 🤝 Contributing

This is a private project. Contributions are limited to authorized team members.

### Development Guidelines

1. Follow TypeScript strict mode
2. Use NativeWind for styling (no inline styles)
3. Keep components small and reusable
4. Add prop interfaces for all components
5. Use Expo Router for navigation
6. Follow the existing folder structure

## 📄 License

This project is private and proprietary.

## 👥 Team

- **Developer**: Mahmoud Samy
- **Design**: Based on modern mobile app patterns
- **Architecture**: React Native + Expo best practices

## 📞 Support

For issues or questions:

- Email: support@realestate.app
- Phone: +1 (555) 123-4567
- Live Chat: Available 24/7

## 🙏 Acknowledgments

- Expo team for the excellent development platform
- NativeWind for bringing TailwindCSS to React Native
- React Navigation team for routing patterns
- Icons8 for payment provider icons

## 📝 Changelog

### Version 1.0.0 (February 2026)

- Initial release
- Property listing and search
- User authentication flow
- Booking management
- Payment method management
- Profile and settings
- Multiple modal interactions
- Modern UI with NativeWind

---

**Built with ❤️ using React Native and Expo**

For detailed documentation, see [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md)
