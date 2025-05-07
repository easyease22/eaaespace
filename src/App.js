
import React, { useState } from 'react';

function App() {
  const [stage, setStage] = useState("form");
  const [code, setCode] = useState("");
  const [content, setContent] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = () => {
    const id = Math.random().toString(36).substring(2, 10);
    localStorage.setItem(`soul_${id}`, content);
    setCode(id);
    setStage("submitted");
  };

  const handleQuery = () => {
    const stored = localStorage.getItem(`soul_${code}`);
    const reply = localStorage.getItem(`reply_${code}`);
    setContent(stored || "");
    setResponse(reply || "尚未收到回信，請稍後再查詢。");
    setStage("result");
  };

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: '0 auto' }}>
      {stage === "form" && (
        <>
          <h1>🌙 匿名煩惱投稿</h1>
          <textarea
            rows="6"
            style={{ width: '100%' }}
            placeholder="寫下你想傾訴的煩惱…"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button style={{ width: '100%', marginTop: 10 }} onClick={handleSubmit}>送出</button>
        </>
      )}
      {stage === "submitted" && (
        <div>
          <h2>✅ 投稿成功！</h2>
          <p>請記下你的查詢代碼：</p>
          <p style={{ fontFamily: 'monospace', fontSize: 18 }}>{code}</p>
          <p>你可以隨時用此代碼查閱回覆。</p>
          <button onClick={() => setStage("form")}>再寫一篇</button>
        </div>
      )}
      {stage === "result" && (
        <div>
          <p>你投稿的內容：</p>
          <p>{content}</p>
          <hr />
          <p>我的回信：</p>
          <p style={{ color: 'blue' }}>{response}</p>
          <button onClick={() => setStage("form")}>返回首頁</button>
        </div>
      )}
      {stage === "form" && (
        <div style={{ marginTop: 30, borderTop: '1px solid #ccc', paddingTop: 10 }}>
          <h3>🔍 查詢回信</h3>
          <input
            style={{ width: '100%' }}
            placeholder="輸入你的查詢代碼"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button style={{ width: '100%', marginTop: 10 }} onClick={handleQuery}>查詢</button>
        </div>
      )}
    </div>
  );
}

export default App;
