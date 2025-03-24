# Branchly.ai

### React + Vite + Flask + SQLite

## How to setup project

Dependencies and cmds:
node v22.13.1
`nvm install 22.13.1`
`npm install`
`npm install axios`
`npm install dotenv`
`npm install firebase`

`"axios": "^1.7.9",
"dotenv": "^16.4.7",
"firebase": "^11.4.0",
"react": "^18.3.1",
"react-dom": "^18.3.1",
"react-router-dom": "^7.1.3"`

### For Linux/Mac:

- `python3 -m venv venv`
- `source venv/bin/activate`
- `pip install flask flask-cors flask-sqlalchemy`
- `python3 -m flask --app app run`

### For Windows (Powershell):

- `python -m venv venv`
- `venv\Scripts\Activate.ps1`
- If you get a script execution error, run:
  - `Set-ExecutionPolicy Unrestricted -Scope Process`
- `pip install flask flask-cors flask-sqlalchemy`
- `python -m flask --app app run`

## Running Branchly.ai

### React

- `npm run dev`

### Flask

- `npm run api`

or

- `cd server`
- `python3 -m flask --app app run`

## Documention

### MkDocs
Used to document the development of branchly.ai

#### Running MkDocs
- `npm run docs`

or 

- `cd docs`
- `mkdocs serve`

#### Build
- `mkdocs build`

### Draw.io
Used to show a diagram of our database. 

How to open and make changes:
- Go to `draw.io`
- Click on Open Existing Project
- Click on Branchly.ai
- Click on "main"
- Click on the file Branchlyai.drawio
- The file should show correctly and you can make any changes and push directly to this repo

## AI Benchmarks
- https://livebench.ai/#/
- https://lmarena.ai/
- https://web.lmarena.ai/leaderboard

## TO DO
- Finish Flask backend
- Host the website - Firebase is free but I want to look for an alternative if possible
- Add Docker files to make app runnable in docker
 - https://www.youtube.com/watch?v=gAkwW2tuIqE&list=WL&index=1
 - https://www.youtube.com/watch?v=DQdB7wFEygo
- Use PyTorch to create our own AI agent
- Add Electron to make a standalone version
- Could I somehow put this in Kubernetes?
- Create Documention with Draw.io and mkdocs
