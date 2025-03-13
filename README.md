# Branchly.ai

### React + Vite + Flask + SQLite

## How to setup project

node v22.13.1
npm install
npm install axios

### For Linux/Mac:

- python3 -m venv venv
- source venv/bin/activate
- pip install flask flask-cors flask-sqlalchemy
- python3 -m flask --app app run

### For Windows (Powershell):

- python -m venv venv
- venv\Scripts\Activate.ps1
- If you get a script execution error, run:
  - Set-ExecutionPolicy Unrestricted -Scope Process
- pip install flask flask-cors flask-sqlalchemy
- flask --app app run

## Running the Project

### React

- npm run dev

### Flask

- npm run api

or

- cd server
- python3 -m flask --app app run

#### AI Benchmarks
https://livebench.ai/#/

https://lmarena.ai/

https://web.lmarena.ai/leaderboard

### TO DO
- Finish Flask backend
- Host the website - Firebase is free but I want to look for an alternative if possible
- Add Docker files to make app runnable in docker
- Use PyTorch to create our own AI agent
- Add Electron to make a standalone version
- Could I somehow put this in Kubernetes?
