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
    <div>
      <h2>🔍 查詢靈魂回信</h2>
      <input value={code} onChange={e => setCode(e.target.value)} placeholder="請輸入查詢代碼" />
      <button onClick={handleCheck}>查詢</button>
      {status === 'success' && <p>{reply}</p>}
      {status === 'notfound' && <p>❌ 找不到回信</p>}
      {status === 'error' && <p>⚠️ 系統錯誤</p>}
    </div>
  );
}

export default CheckPage;
