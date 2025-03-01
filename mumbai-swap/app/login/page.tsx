"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, LogIn, Wallet } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSendOTP = () => {
    setIsLoading(true)

    // Simulate API call to send OTP
    setTimeout(() => {
      setIsLoading(false)
      setOtpSent(true)
      toast({
        title: "OTP Sent!",
        description: "A verification code has been sent to your mobile number.",
      })
    }, 1500)
  }

  const handleVerifyOTP = () => {
    setIsLoading(true)

    // Simulate API call to verify OTP
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Login successful!",
        description: "Welcome back to SwapSeva.",
      })
      router.push("/dashboard")
    }, 1500)
  }

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Login successful!",
        description: "Welcome back to SwapSeva.",
      })
      router.push("/dashboard")
    }, 1500)
  }

  const handleMetamaskConnect = async () => {
    setIsLoading(true)

    // Simulate Metamask connection
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Wallet connected!",
        description: "You've successfully logged in with Metamask.",
      })
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8">
        <Button variant="ghost" className="gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </Link>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="SwapSeva Logo"
              width={48}
              height={48}
              className="rounded-md"
            />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Sign in to your SwapSeva account</p>
        </div>

        <Tabs defaultValue="mobile" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
          </TabsList>
          <TabsContent value="mobile">
            <Card>
              <CardHeader>
                <CardTitle>Mobile Login</CardTitle>
                <CardDescription>Sign in with your mobile number</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Mobile Number</Label>
                  <div className="flex gap-2">
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" disabled={otpSent} />
                    {!otpSent ? (
                      <Button onClick={handleSendOTP} disabled={isLoading}>
                        {isLoading ? "Sending..." : "Send OTP"}
                      </Button>
                    ) : (
                      <Button variant="outline" onClick={() => setOtpSent(false)}>
                        Change
                      </Button>
                    )}
                  </div>
                </div>

                {otpSent && (
                  <div className="space-y-2">
                    <Label htmlFor="otp">Enter OTP</Label>
                    <div className="flex gap-2">
                      <Input id="otp" placeholder="6-digit code" />
                      <Button onClick={handleVerifyOTP} disabled={isLoading}>
                        {isLoading ? "Verifying..." : "Verify"}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Didn't receive the code?{" "}
                      <Button variant="link" className="h-auto p-0 text-xs">
                        Resend OTP
                      </Button>
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="email">
            <Card>
              <CardHeader>
                <CardTitle>Email Login</CardTitle>
                <CardDescription>Sign in with your email and password</CardDescription>
              </CardHeader>
              <form onSubmit={handleEmailLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        href="/forgot-password"
                        className="text-xs text-muted-foreground underline-offset-4 hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full gap-2" type="submit" disabled={isLoading}>
                    {isLoading ? "Signing In..." : "Sign In"}
                    <LogIn className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="wallet">
            <Card>
              <CardHeader>
                <CardTitle>Connect Wallet</CardTitle>
                <CardDescription>Sign in using your Web3 wallet</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full gap-2" onClick={handleMetamaskConnect} disabled={isLoading}>
                  {isLoading ? "Connecting..." : "Connect Metamask"}
                  <Wallet className="h-4 w-4" />
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  Make sure your wallet is connected to the Ethereum or Polygon network.
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/signup" className="underline underline-offset-4 hover:text-primary">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

