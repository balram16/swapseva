"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, ChevronsRight } from "lucide-react"
import Image from "next/image"

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handleComplete = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Profile completed!",
        description: "Welcome to SwapSeva. Let's find your first barter match.",
      })
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-10">
      <div className="mx-auto flex w-full max-w-md flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome to SwapSeva</h1>
          <p className="text-sm text-muted-foreground">Let's set up your profile to find the best barter matches</p>
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
              <CardTitle>Tell us about yourself</CardTitle>
              <CardDescription>This information helps others know who they're bartering with</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us a bit about yourself..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interests">Interests</Label>
                <Input id="interests" placeholder="e.g., Cooking, Photography, Coding" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profession">Profession</Label>
                <Input id="profession" placeholder="e.g., Teacher, Engineer, Artist" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="languages">Languages Spoken</Label>
                <Input id="languages" placeholder="e.g., Hindi, English, Tamil" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleNextStep}>
                Next Step
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>What can you offer?</CardTitle>
              <CardDescription>Tell us about your skills, goods, or services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="offerCategory">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="skills">Skills & Expertise</SelectItem>
                    <SelectItem value="goods">Physical Goods</SelectItem>
                    <SelectItem value="digital">Digital Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="offerTitle">Title</Label>
                <Input id="offerTitle" placeholder="e.g., Guitar Lessons, Web Development" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="offerDescription">Description</Label>
                <Textarea id="offerDescription" placeholder="Describe what you can offer in detail..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="offerImage">Image (Optional)</Label>
                <div className="flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-md p-4">
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Upload"
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                    <Button variant="outline" size="sm">
                      Upload Image
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button onClick={handleNextStep}>Next Step</Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>What do you need?</CardTitle>
              <CardDescription>Tell us what you're looking for in exchange</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="needCategory">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="skills">Skills & Expertise</SelectItem>
                    <SelectItem value="goods">Physical Goods</SelectItem>
                    <SelectItem value="digital">Digital Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="needTitle">Title</Label>
                <Input id="needTitle" placeholder="e.g., Coding Lessons, Furniture" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="needDescription">Description</Label>
                <Textarea id="needDescription" placeholder="Describe what you're looking for in detail..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredLocation">Preferred Location</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="local">Local Only (Within my city)</SelectItem>
                    <SelectItem value="anywhere">Anywhere in India</SelectItem>
                    <SelectItem value="remote">Remote/Digital Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button onClick={handleComplete} disabled={isLoading} className="gap-2">
                {isLoading ? "Completing..." : "Complete Setup"}
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}

