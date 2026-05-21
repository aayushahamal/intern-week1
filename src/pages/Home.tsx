import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to task manager</CardTitle> 
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            A simple task manager by Aayusha.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}