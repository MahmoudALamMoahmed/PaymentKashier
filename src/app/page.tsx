"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Loader2 } from "lucide-react";
import { products, Product } from "@/lib/products";
import { useState } from "react";
import { createCheckoutSession } from "@/app/actions";

export default function Home() {
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);

  const handleCheckout = async (product: Product) => {
    setLoadingProductId(product.id);
    try {
      const { redirectUrl } = await createCheckoutSession(product);
      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        // Handle error case, maybe show a toast notification
        console.error("Failed to create checkout session.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      setLoadingProductId(null);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8 md:p-12 lg:p-24 font-body">
      <div className="w-full max-w-6xl text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
          عرضض منتجات كاشير
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          استكشف مجموعتنا الحصرية من المنتجات. انقر على "اشترِ الآن" لإتمام عملية الشراء بسهولة وأمان عبر صفحة دفع كاشير.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl bg-card">
            <div className="relative w-full h-60">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    data-ai-hint={product.dataAiHint}
                />
            </div>
            <CardHeader className="text-start">
              <CardTitle className="font-headline text-2xl">{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow text-start">
                <p className="text-2xl font-bold text-primary">{product.price} {product.currency}</p>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg" 
                size="lg"
                onClick={() => handleCheckout(product)}
                disabled={loadingProductId === product.id}
              >
                {loadingProductId === product.id ? (
                  <Loader2 className="ms-2 h-5 w-5 animate-spin" />
                ) : (
                  <ShoppingCart className="ms-2 h-5 w-5" />
                )}
                اشترِ الآن
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
