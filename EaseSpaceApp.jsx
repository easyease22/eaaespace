
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function SoulReplyMobile() {
  const [stage, setStage] = useState("form")
  const [code, setCode] = useState("")
  const [content, setContent] = useState("")
  const [response, setResponse] = useState("")

  const handleSubmit = () => {
    const id = Math.random().toString(36).substring(2, 10)
    localStorage.setItem(`soul_${id}`, content)
    setCode(id)
    setStage("submitted")
  }

  const handleQuery = () => {
    const stored = localStorage.getItem(`soul_${code}`)
    const reply = localStorage.getItem(`reply_${code}`)
    setContent(stored || "")
    setResponse(reply || "尚未收到回信，請稍後再查詢。")
    setStage("result")
  }

  return (
    <div className="p-4 max-w-md mx-auto space-y-6">
      {stage === "form" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-xl font-bold text-center">🌙 匿名煩惱投稿</h1>
          <Textarea
            placeholder="寫下你想傾訴的煩惱…"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-4"
          />
          <Button className="w-full mt-4" onClick={handleSubmit}>送出</Button>
        </motion.div>
      )}

      {stage === "submitted" && (
        <Card className="text-center">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold">✅ 投稿成功！</h2>
            <p className="mt-2">請記下你的查詢代碼：</p>
            <p className="font-mono text-lg mt-1 text-green-600">{code}</p>
            <p className="mt-2">你可以隨時用此代碼查閱回覆。</p>
            <Button className="mt-4" onClick={() => setStage("form")}>再寫一篇</Button>
          </CardContent>
        </Card>
      )}

      {stage === "result" && (
        <Card>
          <CardContent className="p-6 space-y-2">
            <p className="text-sm text-muted-foreground">你投稿的內容：</p>
            <p className="text-base whitespace-pre-wrap">{content}</p>
            <hr />
            <p className="text-sm text-muted-foreground">我的回信：</p>
            <p className="text-base whitespace-pre-wrap text-blue-700">{response}</p>
            <Button className="mt-4" onClick={() => setStage("form")}>返回首頁</Button>
          </CardContent>
        </Card>
      )}

      {stage === "form" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-6 border-t">
          <h2 className="text-center text-sm font-semibold">🔍 查詢回信</h2>
          <Input
            placeholder="輸入你的查詢代碼"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="mt-2"
          />
          <Button className="w-full mt-2" onClick={handleQuery}>查詢</Button>
        </motion.div>
      )}
    </div>
  )
}
