
import React from 'react';

function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#4DB6AC', textShadow: '0 0 8px #4DB6AC' }}>EASE ✧ SPACE</h1>
      <p style={{ marginBottom: '20px' }}>無需姓名，靈魂會記得你。</p>
      <a href="https://tally.so/r/nrpLGo" target="_blank" rel="noreferrer">
        <button style={{ padding: '12px 24px', margin: '10px', backgroundColor: '#4DB6AC', color: '#fff', border: 'none', borderRadius: '8px' }}>📝 我要投稿</button>
      </a>
      <a href="/check">
        <button style={{ padding: '12px 24px', margin: '10px', backgroundColor: '#81d4cb', color: '#333', border: 'none', borderRadius: '8px' }}>🔍 查詢回信</button>
      </a>
    </div>
  );
}

export default Home;
