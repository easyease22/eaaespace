
import React from 'react';

function Home() {
  return (
    <div style={{
      padding: 20,
      maxWidth: 600,
      margin: '0 auto',
      backgroundColor: '#ffffffcc',
      borderRadius: 16,
      marginTop: 40,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#4DB6AC',
        textShadow: '0 0 8px #4DB6AC, 0 0 12px #81d4cb',
        fontWeight: 600
      }}>EASE ✧ SPACE</h1>
      <p style={{ fontSize: '1rem', marginBottom: 30 }}>
        無需姓名，靈魂會記得你。
      </p>

      <a href="https://tally.so/r/nrpLGo" target="_blank" rel="noreferrer">
        <button style={{
          width: '100%',
          padding: 12,
          borderRadius: 8,
          backgroundColor: '#4DB6AC',
          color: '#fff',
          fontSize: '1rem',
          border: 'none',
          marginBottom: 16
        }}>📝 我要投稿</button>
      </a>

      <a href="/check">
        <button style={{
          width: '100%',
          padding: 12,
          borderRadius: 8,
          backgroundColor: '#81d4cb',
          color: '#333',
          fontSize: '1rem',
          border: 'none'
        }}>🔍 查詢回信</button>
      </a>
    </div>
  );
}

export default Home;
