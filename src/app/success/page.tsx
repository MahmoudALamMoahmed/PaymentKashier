import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Home } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-2xl animate-in fade-in-50 zoom-in-90 duration-500">
        <CardHeader>
            <div className="mx-auto bg-green-100 rounded-full h-20 w-20 flex items-center justify-center">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
          <CardTitle className="text-3xl font-headline mt-4">تم الدفع بنجاح!</CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            شكرًا لك على عملية الشراء. لقد استلمنا دفعتك وسنقوم بمعالجة طلبك قريبًا.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full" size="lg">
            <Link href="/">
              <Home className="ms-2 h-5 w-5" />
              العودة إلى الصفحة الرئيسية
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
