import axios from 'axios';
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export function login(email: string, password: string) {
  return axios.post(`${API_BASE}/auth/login`, { email, password });
}

export function fetchMachines(token: string | null) {
  return axios.get(`${API_BASE}/machines`, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export function fetchMachine(token: string | null, id: number) {
  return axios.get(`${API_BASE}/machines/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
}
