"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Check, ChevronRight, Shield, Wallet } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [verificationMethod, setVerificationMethod] = useState<"otp" | "metamask">("otp")
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
      setStep(2)
      toast({
        title: "OTP Verified!",
        description: "Your mobile number has been verified successfully.",
      })
    }, 1500)
  }

  const handleMetamaskConnect = () => {
    setIsLoading(true)
    setVerificationMethod("metamask")

    // Simulate Metamask connection
    setTimeout(() => {
      setIsLoading(false)
      setStep(2)
      toast({
        title: "Wallet Connected!",
        description: "Your Metamask wallet has been successfully connected.",
      })
    }, 1500)
  }

  const handleCompleteProfile = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setStep(3)
      toast({
        title: "Profile Updated!",
        description: "Your profile information has been saved.",
      })
    }, 1500)
  }

  const handleVerifyIdentity = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Verification Submitted!",
        description: "Your identity verification is under review. This usually takes 24-48 hours.",
      })
      router.push("/onboarding")
    }, 1500)
  }

  const handleSkipVerification = () => {
    toast({
      title: "Verification Skipped",
      description: "You can complete verification later from your profile settings.",
    })
    router.push("/onboarding")
  }

  return (
    <div className="container flex min-h-screen w-screen flex-col items-center justify-center py-10">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8">
        <Button variant="ghost" className="gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </Link>

      <div className="mx-auto flex w-full max-w-md flex-col justify-center space-y-6">
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
          <h1 className="text-2xl font-semibold tracking-tight">Create your SwapSeva account</h1>
          <p className="text-sm text-muted-foreground">Join India's largest barter community</p>
        </div>

        <div className="flex justify-between px-2">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              step >= 1 ? "bg-primary text-primary-foreground" : "border border-muted-foreground text-muted-foreground"
            }`}
          >
            {step > 1 ? <Check className="h-4 w-4" /> : 1}
          </div>
          <div className="flex-1 border-t border-muted my-4 mx-2"></div>
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              step >= 2 ? "bg-primary text-primary-foreground" : "border border-muted-foreground text-muted-foreground"
            }`}
          >
            {step > 2 ? <Check className="h-4 w-4" /> : 2}
          </div>
          <div className="flex-1 border-t border-muted my-4 mx-2"></div>
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              step >= 3 ? "bg-primary text-primary-foreground" : "border border-muted-foreground text-muted-foreground"
            }`}
          >
            {step > 3 ? <Check className="h-4 w-4" /> : 3}
          </div>
        </div>

        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Verify Your Identity</CardTitle>
              <CardDescription>Choose a verification method to get started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="mobile" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="mobile" onClick={() => setVerificationMethod("otp")}>
                    Mobile OTP
                  </TabsTrigger>
                  <TabsTrigger value="wallet" onClick={() => setVerificationMethod("metamask")}>
                    Web3 Wallet
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="mobile">
                  <div className="space-y-4 pt-4">
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
                  </div>
                </TabsContent>
                <TabsContent value="wallet">
                  <div className="space-y-4 pt-4">
                    <Button className="w-full gap-2" onClick={handleMetamaskConnect} disabled={isLoading}>
                      {isLoading ? "Connecting..." : "Connect Metamask"}
                      <Wallet className="h-4 w-4" />
                    </Button>
                    <div className="text-center text-sm text-muted-foreground">
                      By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Complete Your Profile</CardTitle>
              <CardDescription>Tell us a bit about yourself</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">City</Label>
                <Input id="location" placeholder="Mumbai" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Create Password</Label>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleCompleteProfile} disabled={isLoading}>
                {isLoading ? "Saving..." : "Continue"}
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Verify Government ID</CardTitle>
              <CardDescription>Boost your trust score with ID verification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border border-dashed p-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Shield className="h-8 w-8 text-muted-foreground" />
                  <h3 className="font-medium">Upload ID Proof</h3>
                  <p className="text-sm text-muted-foreground">Aadhar Card, PAN Card, Voter ID, or Driving License</p>
                  <Button variant="outline" className="mt-2">
                    Select File
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Trust Score</Label>
                  <span className="text-sm font-medium">Basic (50/100)</span>
                </div>
                <Progress value={50} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Verified users get a higher trust score and more barter opportunities.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full gap-1" onClick={handleVerifyIdentity} disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit for Verification"}
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="link" onClick={handleSkipVerification}>
                Skip for now
              </Button>
            </CardFooter>
          </Card>
        )}

        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="underline underline-offset-4 hover:text-primary">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

