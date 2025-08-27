import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CheckoutPage({ params }: { params: { productId: string } }) {
  const { productId } = params;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  // Success and Failure redirects for payment links are typically configured
  // within the Kashier merchant dashboard. The iframe will automatically
  // redirect to the configured URLs upon completion.
  const iframeSrc = product.paymentLink;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl flex flex-col items-start">
            <Button asChild variant="ghost" className="mb-4">
                <Link href="/" className="flex items-center">
                    <ArrowRight className="me-2 h-4 w-4" />
                    <span>العودة للمنتجات</span>
                </Link>
            </Button>
            <Card className="w-full shadow-2xl">
                <CardHeader className="text-start">
                    <CardTitle className="text-3xl font-headline">إتمام عملية الشراء</CardTitle>
                    <CardDescription>أنت على وشك شراء: {product.name}. أكمل الدفع أدناه.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video w-full rounded-lg overflow-hidden border border-border bg-white">
                        <iframe
                            src={iframeSrc}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="payment"
                            title={`Kashier Payment for ${product.name}`}
                        ></iframe>
                    </div>
                     <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-foreground/80 text-start">
                        <h4 className="font-bold mb-2">تعليمات للمطورين:</h4>
                        <p>يتم تضمين رابط الدفع مباشرة في I-frame. يجب تكوين عمليات إعادة التوجيه للنجاح/الفشل في لوحة تحكم Kashier الخاصة بك لرابط الدفع هذا.</p>
                        <p className="mt-2">لإعدادات أكثر تقدمًا (مثل تمرير المبلغ والعملة ديناميكيًا)، ستحتاج إلى استخدام Kashier JS SDK بدلاً من رابط دفع ثابت.</p>
                        <ul className="list-disc pe-5 mt-1 font-mono text-xs">
                            <li>Merchant ID: MID-37646-41</li>
                            <li>Allowed Methods: wallet, card</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
