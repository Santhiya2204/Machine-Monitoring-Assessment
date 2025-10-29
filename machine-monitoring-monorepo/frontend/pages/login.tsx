import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/auth/login`, { email, password });
      if (res.data && res.data.access_token) {
        localStorage.setItem('token', res.data.access_token);
        router.push('/dashboard');
      } else {
        setError('Login failed');
      }
    } catch (err) {
      setError('Login failed');
    }
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ width: 360, padding: 24, boxShadow: '0 0 12px rgba(0,0,0,0.1)' }}>
        <h2>Login</h2>
        <label>Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%' }} />
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%' }} />
        <button style={{ marginTop: 12 }}>Login</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  );
}
