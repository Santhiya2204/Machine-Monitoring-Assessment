# Machine Monitoring Dashboard — Monorepo

## Overview
This monorepo contains:
- `apps/backend` — NestJS backend with JWT auth and machine APIs
- `apps/frontend` — Next.js frontend with login, dashboard, and machine details

## Run (two terminals)

### 1) Backend
```bash
cd apps/backend
npm install
# create .env (copy .env.example) if needed
npm run start:dev
