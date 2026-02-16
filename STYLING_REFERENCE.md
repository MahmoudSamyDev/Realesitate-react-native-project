# 🎨 ReState Styling Reference - AI Prompt Guide

> **Purpose**: This document serves as a comprehensive styling guide and AI prompt reference to replicate the modern design patterns used in this application. Use this as a reference when building similar mobile apps with AI assistance.

## 🌟 Why This Design is Modern

### 1. **Clean Minimalism**

The app embraces a clean, uncluttered aesthetic that prioritizes content and user actions over decorative elements:

- **White Space**: Generous padding and spacing create breathing room
- **Typography Hierarchy**: Clear size differences guide user attention
- **Limited Color Palette**: Primary color (blue) used sparingly for emphasis
- **Flat Design 2.0**: Subtle shadows for depth without skeuomorphism

### 2. **Native Feel with Cross-Platform Consistency**

- Uses React Native's platform-specific components while maintaining visual consistency
- Touch targets follow iOS Human Interface Guidelines (44px minimum)
- Animations are smooth and purposeful (not decorative)
- Respects platform conventions (e.g., modal presentations, navigation patterns)

### 3. **Modern UI Patterns**

- **Card-Based Layout**: Information grouped in digestible containers
- **Bottom Sheet Modals**: Less intrusive than full-screen overlays
- **Haptic Feedback Ready**: Touch interactions designed for tactile response
- **Thumb-Zone Optimization**: Primary actions within easy reach

### 4. **Utility-First CSS (NativeWind)**

- TailwindCSS approach for rapid, consistent styling
- No CSS-in-JS boilerplate
- Design tokens built into class names
- Easy to maintain and iterate

---

## 🎯 AI Prompt for Similar Styling

When asking AI to create components in this style, use this prompt template:

```
Create a [COMPONENT_TYPE] using React Native + NativeWind v4 with this styling pattern:

**Design System:**
- Primary Color: #0061FF (blue for CTAs and active states)
- Background: #FBFBFD (warm white)
- Text Colors: #191D31 (dark), #666876 (medium), #8C8E98 (light)
- Danger: #F75555 (red for errors/delete)
- Font: Rubik family (Regular, Medium, SemiBold, Bold)

**Layout Rules:**
- Use rounded-3xl (24px) for card corners
- Apply shadow-md with black/10 opacity for elevation
- Padding: p-5 (20px) for card interiors
- Gap: gap-4 (16px) between elements
- Minimum touch targets: 44px height

**Component Structure:**
- White background (bg-white) for cards
- Soft shadows for depth, not borders
- Icons at 24px with medium gray (#8C8E98)
- Primary button: bg-primary-300 (#0061FF) with white text
- Secondary actions as text-only in medium gray

**Typography:**
- Headings: font-rubik-bold at text-xl or text-2xl
- Body: font-rubik at text-base
- Labels: font-rubik-medium at text-sm in medium gray
- Never use default system fonts

**Interaction Patterns:**
- Active states: scale-95 on press
- Loading states: ActivityIndicator with color="#0061FF"
- Modals: TouchableWithoutFeedback backdrop with onPress to close
- Animations: duration-200 ease-in-out

**Example Code Structure:**
<View className="bg-white rounded-3xl shadow-md p-5">
  <Text className="text-xl font-rubik-bold text-black-300">
    [Heading]
  </Text>
  <Text className="text-sm font-rubik text-black-200 mt-2">
    [Body text]
  </Text>
  <TouchableOpacity className="bg-primary-300 rounded-full py-3 mt-4">
    <Text className="text-white font-rubik-semibold text-center">
      [Action]
    </Text>
  </TouchableOpacity>
</View>

Use TypeScript with strict typing. Avoid inline styles. No StyleSheet.create().
```

---

## 📐 Core Design Tokens

### Color System

```typescript
// TailwindCSS Custom Colors (tailwind.config.js)
colors: {
  primary: {
    100: '#B6D4FF',  // Lightest (backgrounds)
    200: '#4D9BFF',  // Medium (hover states)
    300: '#0061FF',  // Brand primary (buttons, links)
  },
  accent: {
    100: '#FBFBFD',  // Off-white background
  },
  black: {
    100: '#FFFFFF',  // Pure white (cards)
    200: '#8C8E98',  // Light gray (secondary text)
    300: '#191D31',  // Dark navy (primary text)
  },
  danger: '#F75555',  // Error/delete actions
}
```

**Usage in Code:**

```jsx
// Primary button
className = "bg-primary-300";

// Body text
className = "text-black-300";

// Secondary text
className = "text-black-200";

// Background
className = "bg-accent-100";

// Destructive action
className = "text-danger";
```

### Typography Scale

```typescript
// Font Families
Rubik-Regular      → font-rubik
Rubik-Light        → font-rubik-light
Rubik-Medium       → font-rubik-medium
Rubik-SemiBold     → font-rubik-semibold
Rubik-Bold         → font-rubik-bold
Rubik-ExtraBold    → font-rubik-extrabold

// Font Sizes
text-xs    → 12px  // Captions, labels
text-sm    → 14px  // Secondary text
text-base  → 16px  // Body text
text-lg    → 18px  // Subheadings
text-xl    → 20px  // Card titles
text-2xl   → 24px  // Screen titles
text-3xl   → 30px  // Hero text
```

**Hierarchy Example:**

```jsx
// Screen Title
<Text className="text-2xl font-rubik-bold text-black-300">

// Card Title
<Text className="text-xl font-rubik-bold text-black-300">

// Body Text
<Text className="text-base font-rubik text-black-300">

// Secondary Info
<Text className="text-sm font-rubik text-black-200">

// Labels
<Text className="text-xs font-rubik-medium text-black-200">
```

### Spacing System

```typescript
// Padding/Margin Scale (matches Tailwind default)
p-2  → 8px   // Tight spacing (chip padding)
p-3  → 12px  // Compact spacing (small cards)
p-4  → 16px  // Standard spacing (buttons)
p-5  → 20px  // Comfortable spacing (cards)
p-6  → 24px  // Generous spacing (modals)

// Gaps
gap-2  → 8px   // Between small elements
gap-3  → 12px  // Between list items
gap-4  → 16px  // Between sections
gap-5  → 20px  // Between major sections
```

**Layout Example:**

```jsx
// Standard Card
<View className="bg-white rounded-3xl p-5 gap-4">

// Compact List Item
<View className="flex-row items-center gap-3 p-3">

// Modal Content
<View className="bg-white rounded-t-3xl p-6">
```

### Border Radius

```typescript
rounded-lg    → 12px   // Small cards, inputs
rounded-xl    → 16px   // Medium cards
rounded-2xl   → 20px   // Large cards
rounded-3xl   → 24px   // Hero cards, modals
rounded-full  → 9999px // Buttons, avatars, badges
```

**Usage Pattern:**

- **Cards**: `rounded-3xl` for premium feel
- **Buttons**: `rounded-full` for modern touch
- **Inputs**: `rounded-xl` for accessibility
- **Images**: `rounded-xl` or `rounded-2xl`

### Shadows

```typescript
// Shadow Definitions (defined in NativeWind config)
shadow-sm  → Subtle shadow for raised elements
shadow-md  → Standard card shadow
shadow-lg  → Prominent shadow for modals

// Standard Card Shadow
className="shadow-md shadow-black/10"
```

**Shadow Hierarchy:**

```jsx
// Flat Elements (no shadow)
<View className="bg-accent-100">

// Cards (medium shadow)
<View className="bg-white rounded-3xl shadow-md shadow-black/10">

// Modals/Overlays (large shadow)
<View className="bg-white rounded-t-3xl shadow-lg shadow-black/20">
```

---

## 🧩 Component Patterns

### 1. Cards

#### Featured Card (Large Overlay)

```jsx
<View className="w-[260px] h-[320px] relative">
  <Image source={image} className="w-full h-full rounded-3xl" />
  <LinearGradient
    colors={["transparent", "rgba(0,0,0,0.8)"]}
    className="absolute bottom-0 w-full rounded-b-3xl p-4"
  >
    <Text className="text-xl font-rubik-bold text-white">{title}</Text>
    <Text className="text-sm font-rubik text-white/90 mt-1">{location}</Text>
  </LinearGradient>
  <TouchableOpacity className="absolute top-4 right-4 bg-white/30 rounded-full p-2">
    <Image source={icons.heart} className="w-6 h-6" />
  </TouchableOpacity>
</View>
```

**Key Features:**

- Gradient overlay for text readability
- Floating heart icon with frosted background
- Rounded corners match app style
- Fixed dimensions for horizontal scroll

#### Standard Card (Grid Item)

```jsx
<TouchableOpacity className="bg-white rounded-2xl shadow-md shadow-black/10 p-4 w-full">
  <Image source={image} className="w-full h-32 rounded-xl mb-3" />
  <Text className="text-lg font-rubik-bold text-black-300">{title}</Text>
  <Text className="text-sm font-rubik text-black-200 mt-1">{location}</Text>
  <View className="flex-row items-center justify-between mt-3">
    <Text className="text-xl font-rubik-bold text-primary-300">${price}</Text>
    <View className="flex-row items-center gap-1">
      <Image source={icons.star} className="w-4 h-4" />
      <Text className="text-sm font-rubik-medium text-black-300">{rating}</Text>
    </View>
  </View>
</TouchableOpacity>
```

**Key Features:**

- Price in primary blue for emphasis
- Rating with star icon
- Image with rounded corners (less than card)
- Clear information hierarchy

#### Horizontal Card (Bookings/Payments)

```jsx
<View className="bg-white rounded-2xl shadow-md shadow-black/10 p-4">
  <View className="flex-row gap-4">
    <Image source={image} className="w-20 h-20 rounded-xl" />
    <View className="flex-1">
      <Text className="text-base font-rubik-semibold text-black-300">{title}</Text>
      <Text className="text-sm font-rubik text-black-200 mt-1">{subtitle}</Text>
      <Text className="text-lg font-rubik-bold text-primary-300 mt-2">{price}</Text>
    </View>
    <TouchableOpacity className="self-start">
      <Image source={icons.edit} className="w-5 h-5" tintColor="#8C8E98" />
    </TouchableOpacity>
  </View>
</View>
```

**Key Features:**

- Image on left (square/portrait)
- Content fills space
- Action icon on right
- Maintains vertical alignment

### 2. Buttons

#### Primary Button

```jsx
<TouchableOpacity
  className="bg-primary-300 rounded-full py-4 active:scale-95"
  onPress={handlePress}
>
  <Text className="text-white font-rubik-semibold text-center text-base">{label}</Text>
</TouchableOpacity>
```

#### Secondary Button (Outline)

```jsx
<TouchableOpacity
  className="border-2 border-primary-300 rounded-full py-4 active:scale-95"
  onPress={handlePress}
>
  <Text className="text-primary-300 font-rubik-semibold text-center text-base">{label}</Text>
</TouchableOpacity>
```

#### Text Button

```jsx
<TouchableOpacity onPress={handlePress} className="active:opacity-70">
  <Text className="text-primary-300 font-rubik-semibold text-base">{label}</Text>
</TouchableOpacity>
```

#### Icon Button

```jsx
<TouchableOpacity
  className="w-11 h-11 bg-white rounded-full items-center justify-center shadow-sm"
  onPress={handlePress}
>
  <Image source={icon} className="w-6 h-6" tintColor="#8C8E98" />
</TouchableOpacity>
```

**Button Guidelines:**

- Use `rounded-full` for all buttons (modern aesthetic)
- Primary action = `bg-primary-300`
- Secondary action = outline or text-only
- Destructive action = `bg-danger` or `text-danger`
- Add `active:scale-95` for press feedback

### 3. Inputs

#### Text Input

```jsx
<View className="w-full">
  <Text className="text-sm font-rubik-medium text-black-200 mb-2">{label}</Text>
  <TextInput
    placeholder={placeholder}
    value={value}
    onChangeText={setValue}
    className="bg-white border border-black-200/20 rounded-xl px-4 py-3 text-base font-rubik text-black-300"
    placeholderTextColor="#8C8E98"
  />
</View>
```

#### Search Input (with Icon)

```jsx
<View className="flex-row items-center bg-white rounded-full px-5 py-3 shadow-sm">
  <Image source={icons.search} className="w-5 h-5" tintColor="#8C8E98" />
  <TextInput
    placeholder="Search..."
    value={query}
    onChangeText={setQuery}
    className="flex-1 ml-3 text-base font-rubik text-black-300"
    placeholderTextColor="#8C8E98"
  />
</View>
```

**Input Guidelines:**

- Label above input in medium gray
- Placeholder color: `#8C8E98`
- Subtle border (not heavy)
- `rounded-xl` for standalone, `rounded-full` for search
- Match font size with body text (16px)

### 4. Modals

#### Bottom Sheet Modal Pattern

```jsx
<Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
  <TouchableWithoutFeedback onPress={onClose}>
    <View className="flex-1 bg-black/50 justify-end">
      <TouchableWithoutFeedback>
        <View className="bg-white rounded-t-3xl p-6">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-2xl font-rubik-bold text-black-300">{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <Image source={icons.close} className="w-6 h-6" />
            </TouchableOpacity>
          </View>

          {/* Content */}
          <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>

          {/* Actions */}
          <View className="flex-row gap-3 mt-6">
            <TouchableOpacity
              className="flex-1 border-2 border-primary-300 rounded-full py-4"
              onPress={onClose}
            >
              <Text className="text-primary-300 font-rubik-semibold text-center">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-primary-300 rounded-full py-4" onPress={onSave}>
              <Text className="text-white font-rubik-semibold text-center">Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  </TouchableWithoutFeedback>
</Modal>
```

**Modal Guidelines:**

- Semi-transparent backdrop (`bg-black/50`)
- `TouchableWithoutFeedback` on backdrop to dismiss
- Nested `TouchableWithoutFeedback` prevents accidental close
- `rounded-t-3xl` for bottom sheet feel
- Header with title + close button
- ScrollView for content (safely scrollable)
- Action buttons at bottom (Cancel + Primary action)

### 5. Lists & Sections

#### Section Header

```jsx
<View className="flex-row items-center justify-between mb-4">
  <Text className="text-xl font-rubik-bold text-black-300">{title}</Text>
  <TouchableOpacity onPress={onSeeAll}>
    <Text className="text-base font-rubik-medium text-primary-300">See All</Text>
  </TouchableOpacity>
</View>
```

#### Horizontal Scroll List

```jsx
<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerClassName="gap-4 px-5"
>
  {items.map((item) => (
    <CardComponent key={item.id} {...item} />
  ))}
</ScrollView>
```

#### Vertical List (FlatList)

```jsx
<FlatList
  data={items}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => <CardComponent {...item} />}
  contentContainerClassName="gap-4 p-5"
  showsVerticalScrollIndicator={false}
/>
```

**List Guidelines:**

- Use `FlatList` for long lists (performance)
- Use `ScrollView` for short, horizontal lists
- `gap-4` between items (16px)
- Hide scroll indicators for cleaner look
- Content padding: `px-5` (20px horizontal)

### 6. Filter Chips

```jsx
<View className="flex-row gap-3">
  {categories.map((category) => (
    <TouchableOpacity
      key={category}
      onPress={() => setSelected(category)}
      className={`px-5 py-2.5 rounded-full ${
        selected === category ? "bg-primary-300" : "bg-white border border-black-200/20"
      }`}
    >
      <Text
        className={`text-sm font-rubik-medium ${
          selected === category ? "text-white" : "text-black-200"
        }`}
      >
        {category}
      </Text>
    </TouchableOpacity>
  ))}
</View>
```

**Chip Guidelines:**

- Rounded-full shape
- Active state: filled with primary color
- Inactive state: white with subtle border
- Horizontal scroll for many options
- Small padding to stay compact

### 7. Icon & Text Combos

```jsx
// Feature List Item
<View className="flex-row items-center gap-3 p-3">
  <View className="w-10 h-10 bg-primary-100 rounded-full items-center justify-center">
    <Image source={icon} className="w-5 h-5" tintColor="#0061FF" />
  </View>
  <View className="flex-1">
    <Text className="text-base font-rubik-semibold text-black-300">
      {title}
    </Text>
    <Text className="text-sm font-rubik text-black-200">
      {description}
    </Text>
  </View>
</View>

// Setting Item (Arrow)
<TouchableOpacity className="flex-row items-center justify-between p-4 bg-white rounded-xl">
  <View className="flex-row items-center gap-3">
    <Image source={icon} className="w-6 h-6" tintColor="#8C8E98" />
    <Text className="text-base font-rubik text-black-300">
      {label}
    </Text>
  </View>
  <Image source={icons.chevronRight} className="w-5 h-5" tintColor="#8C8E98" />
</TouchableOpacity>
```

---

## 🎭 Interaction States

### Touch States

```jsx
// Scale on Press
<TouchableOpacity className="active:scale-95">

// Opacity on Press
<TouchableOpacity className="active:opacity-70">

// Background Change on Press (custom)
<TouchableOpacity
  onPressIn={() => setPressed(true)}
  onPressOut={() => setPressed(false)}
  className={pressed ? 'bg-primary-200' : 'bg-primary-300'}
>
```

### Loading States

```jsx
// Inline Loading
{
  loading ? <ActivityIndicator size="small" color="#0061FF" /> : <Text>Content</Text>;
}

// Button Loading
<TouchableOpacity className="bg-primary-300 rounded-full py-4" disabled={loading}>
  {loading ? (
    <ActivityIndicator size="small" color="#FFFFFF" />
  ) : (
    <Text className="text-white font-rubik-semibold text-center">Submit</Text>
  )}
</TouchableOpacity>;
```

### Empty States

```jsx
<View className="flex-1 items-center justify-center p-10">
  <Image source={icons.empty} className="w-32 h-32 mb-4" />
  <Text className="text-xl font-rubik-bold text-black-300 text-center">{title}</Text>
  <Text className="text-base font-rubik text-black-200 text-center mt-2">{description}</Text>
  <TouchableOpacity className="bg-primary-300 rounded-full px-8 py-4 mt-6">
    <Text className="text-white font-rubik-semibold">{actionLabel}</Text>
  </TouchableOpacity>
</View>
```

---

## 📱 Screen Layout Patterns

### 1. Tab Screen Layout

```jsx
<SafeAreaView className="flex-1 bg-accent-100">
  {/* Fixed Header */}
  <View className="px-5 pt-5 pb-4 bg-accent-100">
    <HeaderComponent />
  </View>

  {/* Scrollable Content */}
  <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-20">
    <View className="gap-6">
      <SectionComponent />
      <SectionComponent />
    </View>
  </ScrollView>
</SafeAreaView>
```

### 2. Detail Screen Layout

```jsx
<SafeAreaView className="flex-1 bg-white">
  {/* Hero Image */}
  <View className="relative">
    <Image source={image} className="w-full h-80" />
    <TouchableOpacity
      className="absolute top-5 left-5 w-11 h-11 bg-white/90 rounded-full items-center justify-center"
      onPress={() => router.back()}
    >
      <Image source={icons.backArrow} className="w-6 h-6" />
    </TouchableOpacity>
  </View>

  {/* Content */}
  <ScrollView className="flex-1">
    <View className="p-5 gap-4">
      <ContentSections />
    </View>
  </ScrollView>

  {/* Fixed Bottom CTA */}
  <View className="p-5 border-t border-black-200/10">
    <TouchableOpacity className="bg-primary-300 rounded-full py-4">
      <Text className="text-white font-rubik-bold text-center text-lg">Book Now</Text>
    </TouchableOpacity>
  </View>
</SafeAreaView>
```

### 3. List Screen Layout

```jsx
<SafeAreaView className="flex-1 bg-accent-100">
  {/* Header with Back Button */}
  <View className="flex-row items-center px-5 py-4 bg-accent-100">
    <TouchableOpacity onPress={() => router.back()}>
      <Image source={icons.backArrow} className="w-6 h-6" />
    </TouchableOpacity>
    <Text className="text-2xl font-rubik-bold text-black-300 ml-4">{title}</Text>
  </View>

  {/* List */}
  <FlatList
    data={items}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => <ItemCard {...item} />}
    contentContainerClassName="gap-4 p-5"
  />
</SafeAreaView>
```

---

## 🚀 Performance Patterns

### Image Optimization

```jsx
// Use resizeMode for proper scaling
<Image
  source={image}
  className="w-full h-32"
  resizeMode="cover"  // or "contain"
/>

// Add loading placeholder
<Image
  source={image}
  className="w-full h-32 bg-black-200/10"
  defaultSource={placeholderImage}
/>
```

### List Optimization

```jsx
// Use getItemLayout for fixed-height items
<FlatList
  data={items}
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
  removeClippedSubviews
  maxToRenderPerBatch={10}
  windowSize={5}
/>
```

### Debounced Search

```jsx
const [query, setQuery] = useState("");
const [debouncedQuery, setDebouncedQuery] = useState("");

useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedQuery(query);
  }, 300);
  return () => clearTimeout(timer);
}, [query]);

// Use debouncedQuery for actual search/filter
```

---

## ✅ Accessibility Guidelines

1. **Touch Targets**: Minimum 44x44px for all interactive elements
2. **Color Contrast**: Text meets WCAG AA (4.5:1 for body, 3:1 for large text)
3. **Labels**: All icons have accessible labels (add to Image component)
4. **Keyboard Navigation**: All inputs navigable via keyboard (tab order)
5. **Screen Readers**: Use `accessibilityLabel` and `accessibilityHint`

```jsx
<TouchableOpacity
  accessibilityLabel="Like this property"
  accessibilityHint="Double tap to add to favorites"
  accessibilityRole="button"
>
  <Image source={icons.heart} className="w-6 h-6" />
</TouchableOpacity>
```

---

## 🔧 Common Pitfalls to Avoid

### ❌ Don't Do This:

```jsx
// Inline styles (defeats NativeWind purpose)
<View style={{ padding: 20, backgroundColor: '#fff' }}>

// StyleSheet.create (not needed with NativeWind)
const styles = StyleSheet.create({ ... })

// System fonts (use Rubik)
<Text style={{ fontFamily: 'System' }}>

// Heavy borders (outdated design)
<View style={{ borderWidth: 1, borderColor: '#000' }}>

// Absolute positioning for layouts (use flexbox)
<View style={{ position: 'absolute', top: 20, left: 20 }}>
```

### ✅ Do This Instead:

```jsx
// NativeWind classes
<View className="p-5 bg-white">

// Font family from config
<Text className="font-rubik-semibold">

// Subtle shadows instead of borders
<View className="shadow-md shadow-black/10">

// Flexbox layouts
<View className="flex-row items-center justify-between">
```

---

## 📋 Quick Copy-Paste Snippets

### Standard Screen Boilerplate

```jsx
import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { router } from "expo-router";
import { icons } from "@/constants/icons";

export default function ScreenName() {
  return (
    <SafeAreaView className="flex-1 bg-accent-100">
      {/* Header */}
      <View className="flex-row items-center px-5 py-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={icons.backArrow} className="w-6 h-6" />
        </TouchableOpacity>
        <Text className="text-2xl font-rubik-bold text-black-300 ml-4">Screen Title</Text>
      </View>

      {/* Content */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="p-5 gap-4">
        {/* Your content here */}
      </ScrollView>
    </SafeAreaView>
  );
}
```

### Standard Component Template

```typescript
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface ComponentNameProps {
  title: string;
  onPress: () => void;
}

export const ComponentName = ({ title, onPress }: ComponentNameProps) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-3xl shadow-md shadow-black/10 p-5"
      onPress={onPress}
    >
      <Text className="text-xl font-rubik-bold text-black-300">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
```

---

## 🎯 Summary for AI Prompts

When asking AI to generate code in this style, include:

1. **Framework**: React Native + NativeWind v4
2. **Colors**: Primary #0061FF, Background #FBFBFD, Text #191D31/#666876
3. **Typography**: Rubik font family (use className, not inline styles)
4. **Layout**: Flexbox + gap classes, no absolute positioning
5. **Cards**: `rounded-3xl`, `shadow-md shadow-black/10`, `p-5`
6. **Buttons**: `rounded-full`, `bg-primary-300`, `active:scale-95`
7. **Inputs**: `rounded-xl`, subtle border, proper placeholder color
8. **Modals**: Bottom sheet with backdrop, `TouchableWithoutFeedback`
9. **Spacing**: Use p-5/gap-4 as default, adjust as needed
10. **No inline styles or StyleSheet.create**

**Example Instruction:**

> "Create a property card component using NativeWind v4 with rounded-3xl corners, shadow-md, white background, Rubik-Bold title in text-xl, and a primary-300 blue price label. Include a heart icon in top-right. No inline styles."

---

**Last Updated**: February 2026  
**Version**: 1.0.0  
**Maintained by**: Development Team

Use this guide as a living document when building React Native apps with modern UI patterns. Copy patterns liberally, adapt to your needs, and maintain consistency.
