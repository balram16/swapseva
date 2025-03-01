"use client"

import { useState } from "react"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("forum")
  const [newPost, setNewPost] = useState("")
  const [chatMessage, setChatMessage] = useState("")
  const {\

