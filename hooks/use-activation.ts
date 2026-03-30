"use client"

import { useState, useEffect, useCallback } from "react"
import { activationCodes } from "@/data/resources"

const ACTIVATION_KEY = "ue_resource_activated"

export function useActivation() {
  const [isActivated, setIsActivated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 检查 localStorage 中的激活状态
    const activated = localStorage.getItem(ACTIVATION_KEY)
    if (activated === "true") {
      setIsActivated(true)
    }
    setIsLoading(false)
  }, [])

  const activate = useCallback((code: string): boolean => {
    const trimmedCode = code.trim().toUpperCase()
    const isValid = activationCodes.some(
      (validCode) => validCode.toUpperCase() === trimmedCode
    )
    
    if (isValid) {
      localStorage.setItem(ACTIVATION_KEY, "true")
      setIsActivated(true)
      return true
    }
    return false
  }, [])

  const deactivate = useCallback(() => {
    localStorage.removeItem(ACTIVATION_KEY)
    setIsActivated(false)
  }, [])

  return {
    isActivated,
    isLoading,
    activate,
    deactivate,
  }
}
