import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function MachineDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [machine, setMachine] = useState<any | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) { router.replace('/login'); return; }
    if (!id) return;
    axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/machines/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setMachine(res.data))
      .catch(() => router.replace('/login'));
  }, [id]);

  if (!machine) return <div>Loading...</div>;

  const chartData = (machine.temperatureHistory || []).map((t: number, i: number) => ({ name: `T${i + 1}`, temp: t }));

  return (
    <div style={{ padding: 24 }}>
      <h1>{machine.name}</h1>
      <p>Status: {machine.status}</p>
      <p>Temperature: {machine.temperature} °C</p>
      <p>Energy: {machine.energyConsumption} kWh</p>

      <h3>Temperature trend</h3>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="temp" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
