import Link from 'next/link';

type Machine = {
  id: number;
  name: string;
  status: string;
  temperature: number;
  energyConsumption: number;
};

export default function MachineTable({ machines }: { machines: Machine[] }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left' }}>Name</th>
          <th>Status</th>
          <th>Temperature (°C)</th>
          <th>Energy (kWh)</th>
        </tr>
      </thead>
      <tbody>
        {machines.map((m) => (
          <tr key={m.id} style={{ borderTop: '1px solid #eee' }}>
            <td><Link href={`/machines/${m.id}`}>{m.name}</Link></td>
            <td>{m.status}</td>
            <td>{m.temperature}</td>
            <td>{m.energyConsumption}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
