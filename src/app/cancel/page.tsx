import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, RefreshCw } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-2xl animate-in fade-in-50 zoom-in-90 duration-500">
        <CardHeader>
          <div className="mx-auto bg-red-100 rounded-full h-20 w-20 flex items-center justify-center">
            <XCircle className="h-12 w-12 text-red-600" />
          </div>
          <CardTitle className="text-3xl font-headline mt-4">تم إلغاء الدفع</CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            يبدو أنك ألغيت عملية الدفع أو حدث خطأ ما. إذا كنت ترغب في المتابعة، يمكنك المحاولة مرة أخرى.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full" size="lg" variant="secondary">
            <Link href="/">
              <RefreshCw className="ms-2 h-5 w-5" />
              العودة والمحاولة مرة أخرى
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
