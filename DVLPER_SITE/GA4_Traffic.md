# Google Analytics 4 Integration Guide

This README provides a complete, step-by-step process for integrating Google Analytics 4 (GA4) into your Next.js application deployed on Vercel. It covers setup from start to finish, and includes examples for common features such as pageview tracking, SPA route change tracking, custom events, enhanced measurement, and more.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Create a GA4 Property](#create-a-ga4-property)
3. [Install & Configure GA4 in Next.js](#install--configure-ga4-in-nextjs)
   - Basic Pageview Tracking
   - SPA Route Change Tracking
4. [Custom Event Tracking](#custom-event-tracking)
5. [Enhanced Measurement Features](#enhanced-measurement-features)
6. [Debugging & Validation](#debugging--validation)
7. [Deploy to Vercel](#deploy-to-vercel)
8. [Verify Data in GA4](#verify-data-in-ga4)
9. [Advanced Topics](#advanced-topics)
   - Custom Dimensions & Metrics
   - User Properties
   - Conversion & E-commerce Tracking
10. [Troubleshooting](#troubleshooting)
11. [References & Resources](#references--resources)

---

## Prerequisites

- A Next.js project (v12+)
- Vercel account linked to your Git repository
- Node.js v14+ installed locally
- Basic familiarity with JavaScript and React

---

## Create a GA4 Property

1. Sign in to Google Analytics at https://analytics.google.com
2. In the **Admin** panel, under **Account**, select or create an account.
3. Under **Property**, click **Create Property** and choose **Web**.
4. Enter your site name and URL, select the correct time zone and currency.
5. After creation, note down the **Measurement ID** (format: `G-XXXXXXXXXX`).

---

## Install & Configure GA4 in Next.js

### 1. Install Dependencies

Install the `@next/third-parties` package:

```bash
npm install @next/third-parties
```

### 2. Set Environment Variable

In your project root, add to `.env.local`:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Add GA4 Script Snippet

Edit `app/layout.tsx`:

```tsx
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
        </html>
    );
}
```

#### Basic Pageview Tracking

- The `GoogleAnalytics` component automatically handles pageview tracking.

---

## Custom Event Tracking

Use `gtag('event', <action>, <params>)` to log interactions.

**Example: Button Click**

```js
const trackButtonClick = () => {
  window.gtag('event', 'download_resume', {
    event_category: 'engagement',
    event_label: 'Download Resume Button',
    value: 1,
  });
};

<button onClick={trackButtonClick}>Download Resume</button>
```

*(Add additional features here as needed.)*

---

## Enhanced Measurement Features

GA4 supports automatic events such as scroll, outbound clicks, file downloads, etc.
1. In GA4 Admin > Data Streams > Your Web Stream
2. Under **Enhanced measurement**, toggle on:
   - Page views
   - Scrolls
   - Outbound clicks
   - Site search
   - Video engagement
   - File downloads

---

## Debugging & Validation

1. Install [Tag Assistant (by Google)](https://tagassistant.google.com/) extension.
2. In GA4, go to **Realtime** > **DebugView**.
3. Append `?debug_mode=true` to your URL, or in console:

   ```js
   gtag('set', { 'debug_mode': true });
   ```
4. Interact with your site and verify events appear in DebugView.

---

## Deploy to Vercel

1. Commit your changes and push to GitHub (or connected repo).
2. Vercel will auto-deploy; environment variables from Vercel settings (NEXT_PUBLIC_GA_MEASUREMENT_ID) are applied.
3. Visit your live URL and verify with Tag Assistant.

---

## Verify Data in GA4

- **Realtime Active Users**: Go to **Realtime** to see currently active users, their location, traffic source, and user agents in real time.
- **Browser & Device**: Under **Tech > Browser & OS** and **Tech > Device category**, analyze user agent data (browser, OS, device type).
- **Geography**: Under **Demographics > Demographic details** to view user country, city.
- **Traffic Referrers**: In **Acquisition > User acquisition** and **Traffic acquisition**, see referrer sources (GitHub, LinkedIn, Google, Direct).
- **Pageviews & Pages Visited**: In **Engagement > Pages and screens**, track which pages/screens users visit and view counts.
- **Session Duration & Engagement**: Under **Engagement > Overview** see average session duration, engagement time per session, and scroll depth (if enabled in enhanced measurement).
- **Scroll Tracking**: Enabled via **Enhanced measurement** to capture scroll events beyond 90% depth.

---

---

## Advanced Topics

### Custom Dimensions & Metrics
1. In GA4 Admin > Custom definitions > Create custom dimension.
2. Send with events:
   ```js
   window.gtag('event', 'sign_up', {
     method: 'Google',
     user_type: 'guest',  // custom dimension
   });
   ```

### User Properties

```js
gtag('set', 'user_properties', {
  membership_level: 'premium',
});
```

### Conversion & E-commerce Tracking

- Configure conversions in GA4 Admin > Events > Mark as conversion.
- For e-commerce, send `purchase` event with required params.

---

## Troubleshooting

- No data? Check Measurement ID, environment variable, and Tag Assistant.
- Custom events not showing? Use DebugView and check event names.

---

## References & Resources

- [GA4 Developer Guide](https://developers.google.com/analytics/devguides/collection/ga4)  
- [Next.js Analytics Example](https://github.com/vercel/next.js/tree/canary/examples/analytics)
- [GA4 Enhanced Measurement](https://support.google.com/analytics/answer/9216061)

---

*You can add more feature-specific sections below as needed.*

