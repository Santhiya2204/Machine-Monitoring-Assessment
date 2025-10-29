import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import MachineTable from '../components/MachineTable';

export default function Dashboard() {
  const [machines, setMachines] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) { router.replace('/login'); return; }
    axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/machines`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setMachines(res.data))
      .catch(() => router.replace('/login'));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Machine Dashboard</h1>
      <MachineTable machines={machines} />
    </div>
  );
}
