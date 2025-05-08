
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
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', color: '#4DB6AC' }}>🔍 查詢靈魂回信</h2>
      <input
        type="text"
        placeholder="請輸入你的查詢代碼"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{ padding: '10px', width: '80%', maxWidth: '400px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '16px' }}
      />
      <br />
      <button onClick={handleCheck} style={{ padding: '12px 24px', backgroundColor: '#4DB6AC', color: '#fff', border: 'none', borderRadius: '8px' }}>查詢</button>
      <div style={{ marginTop: '20px' }}>
        {status === 'success' && <p>{reply}</p>}
        {status === 'notfound' && <p style={{ color: 'gray' }}>❌ 找不到回信，請稍後再查或確認代碼正確。</p>}
        {status === 'error' && <p style={{ color: 'red' }}>⚠️ 系統錯誤，請稍後再試。</p>}
      </div>
    </div>
  );
}

export default CheckPage;
