
import React, { useState } from 'react';

function CheckPage() {
  const [code, setCode] = useState('');
  const [reply, setReply] = useState('');
  const [status, setStatus] = useState('');

  const handleCheck = async () => {
    setStatus('loading');
    try {
      const res = await fetch(`/api/check?code=${code}`);
      const data = await res.json();
      if (res.ok) {
        setReply(data.reply);
        setStatus('success');
      } else {
        setStatus('notfound');
      }
    } catch (err) {
      setStatus('error');
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

      {status === 'success' && <p style={{ fontSize: '1.1rem', color: '#555' }}>{reply}</p>}
      {status === 'notfound' && <p style={{ color: 'gray' }}>❌ 找不到回信，請稍後再查或確認代碼正確。</p>}
      {status === 'error' && <p style={{ color: 'red' }}>⚠️ 系統錯誤，請稍後再試。</p>}
    </div>
  );
}

export default CheckPage;
