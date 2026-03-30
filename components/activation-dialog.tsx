"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Lock, Unlock, Key } from "lucide-react"
import { useActivation } from "@/hooks/use-activation"

export function ActivationDialog() {
  const { isActivated, activate, deactivate } = useActivation()
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const [open, setOpen] = useState(false)

  const handleActivate = () => {
    if (!code.trim()) {
      setError("请输入激活码")
      return
    }
    
    const success = activate(code)
    if (success) {
      setError("")
      setCode("")
      setOpen(false)
    } else {
      setError("激活码无效，请检查后重试")
    }
  }

  if (isActivated) {
    return (
      <Button
        onClick={deactivate}
        className="bg-green-500 hover:bg-green-600 text-white rounded-xl border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] gap-2"
      >
        <Unlock className="h-4 w-4" />
        已激活
      </Button>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] gap-2">
          <Lock className="h-4 w-4" />
          激活下载
        </Button>
      </DialogTrigger>
      <DialogContent className="border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black flex items-center gap-2">
            <Key className="h-6 w-6" />
            输入激活码
          </DialogTitle>
          <DialogDescription className="text-base">
            输入有效的激活码后，即可查看所有资源的下载链接。激活后永久有效。
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <Input
            value={code}
            onChange={(e) => {
              setCode(e.target.value)
              setError("")
            }}
            placeholder="请输入激活码"
            className="border-2 border-black rounded-xl h-12 text-lg font-mono"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleActivate()
              }
            }}
          />
          {error && (
            <p className="text-red-500 font-bold text-sm">{error}</p>
          )}
          <Button
            onClick={handleActivate}
            className="w-full bg-black hover:bg-black/80 text-white rounded-xl border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-12 text-lg"
          >
            立即激活
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
