'use server';

import { Product, products } from '@/lib/products';
import { randomBytes } from 'crypto';

export async function createCheckoutSession(product: Product) {
  if (!process.env.KASHIER_API_KEY || !process.env.KASHIER_MERCHANT_ID) {
    throw new Error('Kashier API Key or Merchant ID is not configured.');
  }

  const selectedProduct = products.find((p) => p.id === product.id);
  if (!selectedProduct) {
    throw new Error('Product not found.');
  }

  const merchantId = process.env.KASHIER_MERCHANT_ID;
  const apiKey = process.env.KASHIER_API_KEY;
  const orderId = `order-${randomBytes(8).toString('hex')}`;
  const amount = selectedProduct.price.toFixed(2);
  const currency = selectedProduct.currency;
  const hash = `${merchantId}${orderId}${amount}${currency}${apiKey}`;
  
  const crypto = await import('crypto');
  const signature = crypto.createHash('sha256').update(hash).digest('hex');

  // Construct the redirect URL with query parameters
  const baseUrl = 'https://checkout.kashier.io';
  const queryParams = new URLSearchParams({
    merchantId: merchantId,
    orderId: orderId,
    amount: amount,
    currency: currency,
    hash: signature,
    // These URLs should be the absolute URLs of your deployed application
    successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
    failureUrl: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
    redirect: 'true',
    display: 'ar', // To display the payment page in Arabic
    merchantRedirect: 'false', // Keep user on Kashier's success page
    store: selectedProduct.name,
  });

  const redirectUrl = `${baseUrl}?${queryParams.toString()}`;

  return { redirectUrl };
}
