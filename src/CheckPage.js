
import React, { useState } from 'react';

const MOCK_REPLIES = {
  "sam0922": "你唔需要為左迎合世界而壓抑自己，宇宙會記得你真正嘅樣子。",
  "moon888": "請相信，脆弱都係一種美。",
  "EA-001": "你值得被聽見，也值得被理解。"
};

function CheckPage() {
  const [code, setCode] = useState("");
  const [reply, setReply] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleCheck = () => {
    const trimmed = code.trim().toLowerCase();
    const response = MOCK_REPLIES[trimmed];
    if (response) {
      setReply(response);
      setNotFound(false);
    } else {
      setReply(null);
      setNotFound(true);
    }
  };

  return (
    <div style={{
      padding: 20,
      maxWidth: 600,
      margin: '0 auto',
      marginTop: 40,
      backgroundColor: '#ffffffcc',
      borderRadius: 16,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#4DB6AC', fontSize: '2rem', marginBottom: 20 }}>🔍 查詢靈魂回信</h2>
      <input
        type="text"
        placeholder="請輸入你的查詢代碼"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: '100%',
          padding: 12,
          borderRadius: 8,
          border: '1px solid #ccc',
          fontSize: '1rem',
          marginBottom: 16
        }}
      />
      <button
        onClick={handleCheck}
        style={{
          width: '100%',
          padding: 12,
          backgroundColor: '#4DB6AC',
          color: '#fff',
          fontSize: '1rem',
          border: 'none',
          borderRadius: 8,
          marginBottom: 20
        }}
      >
        查詢
      </button>
      {reply && (
        <div>
          <h3>📬 靈魂回信：</h3>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>{reply}</p>
        </div>
      )}
      {notFound && (
        <p style={{ color: 'gray', marginTop: 20 }}>❌ 找不到回信，請稍後再查或確認代碼正確。</p>
      )}
    </div>
  );
}

export default CheckPage;
