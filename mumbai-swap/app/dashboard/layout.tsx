import type React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bell, Home, LogOut, Map, MessageSquare, Settings, Users, Wallet, Menu, UserCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <div className="flex h-full flex-col gap-4">
                  <div className="flex items-center gap-2 border-b pb-4">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="SwapSeva Logo"
                      width={32}
                      height={32}
                      className="rounded-md"
                    />
                    <span className="text-xl font-bold">SwapSeva</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Link href="/dashboard">
                      <Button variant="ghost" className="w-full justify-start gap-2">
                        <Home className="h-5 w-5" />
                        Dashboard
                      </Button>
                    </Link>
                    <Link href="/dashboard/matches">
                      <Button variant="ghost" className="w-full justify-start gap-2">
                        <UserCircle2 className="h-5 w-5" />
                        AI Matches
                      </Button>
                    </Link>
                    <Link href="/dashboard/map">
                      <Button variant="ghost" className="w-full justify-start gap-2">
                        <Map className="h-5 w-5" />
                        Map View
                      </Button>
                    </Link>
                    <Link href="/dashboard/messages">
                      <Button variant="ghost" className="w-full justify-start gap-2">
                        <MessageSquare className="h-5 w-5" />
                        Messages
                      </Button>
                    </Link>
                    <Link href="/dashboard/community">
                      <Button variant="ghost" className="w-full justify-start gap-2">
                        <Users className="h-5 w-5" />
                        Community
                      </Button>
                    </Link>
                    <Link href="/dashboard/wallet">
                      <Button variant="ghost" className="w-full justify-start gap-2">
                        <Wallet className="h-5 w-5" />
                        Wallet
                      </Button>
                    </Link>
                    <Link href="/dashboard/settings">
                      <Button variant="ghost" className="w-full justify-start gap-2">
                        <Settings className="h-5 w-5" />
                        Settings
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-auto">
                    <Link href="/logout">
                      <Button variant="ghost" className="w-full justify-start gap-2 text-destructive">
                        <LogOut className="h-5 w-5" />
                        Logout
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/dashboard">
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="SwapSeva Logo"
                  width={32}
                  height={32}
                  className="rounded-md"
                />
                <span className="text-xl font-bold hidden md:inline">SwapSeva</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link href="/dashboard/notifications">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">3</Badge>
                <span className="sr-only">Notifications</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard/messages">
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">Messages</span>
              </Link>
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/40 lg:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <div className="flex flex-col gap-1 py-2">
              <Link href="/dashboard">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Home className="h-5 w-5" />
                  Dashboard
                </Button>
              </Link>
              <Link href="/dashboard/matches">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <UserCircle2 className="h-5 w-5" />
                  AI Matches
                </Button>
              </Link>
              <Link href="/dashboard/map">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Map className="h-5 w-5" />
                  Map View
                </Button>
              </Link>
              <Link href="/dashboard/messages">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Messages
                </Button>
              </Link>
              <Link href="/dashboard/community">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Users className="h-5 w-5" />
                  Community
                </Button>
              </Link>
            </div>
            <div className="mt-auto flex flex-col gap-1 py-2">
              <Link href="/dashboard/wallet">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Wallet className="h-5 w-5" />
                  Wallet
                </Button>
              </Link>
              <Link href="/dashboard/settings">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Settings className="h-5 w-5" />
                  Settings
                </Button>
              </Link>
              <Link href="/logout">
                <Button variant="ghost" className="w-full justify-start gap-2 text-destructive">
                  <LogOut className="h-5 w-5" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

