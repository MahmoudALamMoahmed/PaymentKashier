# **App Name**: Kashier Product Showcase

## Core Features:

- Product Display: Display three different products on the home page with a "Buy Now" button for each.
- Checkout I-frame Integration: Each "Buy Now" button redirects to a checkout page with an embedded Kashier Payment UI I-frame. Data to be passed: merchantId = MID-37646-41, allowedMethods = wallet, card, with amount, currency, and orderId, pulled from the URL.
- Success Page: Route successful payments to a Success.jsx page.
- Cancel Page: Route canceled or failed payments to a Cancel.jsx page.
- Product 1 Payment Link: Payment Link 1: https://checkouts.kashier.io/en/paymentLinkPage?ppLink=PL-376464102,test
- Product 2 Payment Link: Payment Link 2: https://checkouts.kashier.io/en/paymentLinkPage?ppLink=PL-376464103,test
- Product 3 Payment Link: Payment Link 3: https://checkouts.kashier.io/en/paymentLinkPage?ppLink=PL-376464104,test

## Style Guidelines:

- Primary color: Soft blue (#64B5F6) for a calm and trustworthy feel.
- Background color: Light gray (#F0F4F7) for a clean, modern look.
- Accent color: Orange (#FFA726) to highlight key interactive elements.
- Font: 'PT Sans', a humanist sans-serif suitable for headlines and body text.
- Use simple, clear icons for navigation and payment methods.
- Clean and straightforward layout with clear sections for products and payment information.
- Subtle transitions and animations on button clicks and page loads for a smoother user experience.