import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Components() {
  return (
    <div className="min-h-screen bg-fuchsia-100 p-10 flex flex-col gap-10">

      {/* Section 1 — Buttons */}
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-700">ButtonsTypes</h2>
        <div className="flex gap-4">
          <Button variant="default">Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      {/* Section 2 — Cards */}
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-700">Cards</h2>
        <div className="flex flex-col md:flex-row gap-6">

          <Card className="w-full md:w-72">
            <CardHeader>
              <CardTitle>Card One</CardTitle>
              <CardDescription>Card one is type of card.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">The card is how life card plays.</p>
            </CardContent>
            <CardFooter>
              <Button variant="default">Action</Button>
            </CardFooter>
          </Card>

          <Card className="w-full md:w-72">
            <CardHeader>
              <CardTitle>Card Two</CardTitle>
              <CardDescription>Second card shows your future.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Card two is sweet. Second life hopefully beautiful. Let it be sweet memory.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Learn More</Button>
            </CardFooter>
          </Card>

        </div>
      </div>

    </div>
  );
}