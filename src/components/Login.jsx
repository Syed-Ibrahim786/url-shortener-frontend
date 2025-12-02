import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CardDemo() {
  return (
    <main className=" w-full h-screen  flex justify-center items-center">

    <Card className="w-[90%] max-w-sm border-light">
      <CardHeader>
        <CardTitle className="text-main">Login to your account</CardTitle>
        <CardDescription className="text-muted">
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-accent">Email</Label>
              <Input
              className="border-1 border-light text-main"
                id="newemail"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label className="text-accent" htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm text-primary underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input className="border-1 border-light text-main" id="newpassword" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
    </main>
  )
}

