# Portafolio de Angel Gómez

Este es mi portafolio personal, desarrollado con React + Vite + TailwindCSS en el frontend y FastAPI + PostgreSQL en el backend.

## Tecnologías principales

- **Frontend:** React, Vite, TailwindCSS, Docker
- **Backend:** FastAPI, PostgreSQL, Docker

## Estructura del proyecto

```
PORTAFOLIO/
├── frontend/   # React + Vite + TailwindCSS
├── backend/    # FastAPI + PostgreSQL
```

## Instalación y uso local

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
# Activa tu entorno virtual
pip install -r requirements.txt
uvicorn main:app --reload
```

## Docker

### Frontend

```bash
cd frontend
docker build -t portafolio-frontend .
docker run -p 8080:80 portafolio-frontend
```

### Backend

(Agrega aquí instrucciones si dockerizas el backend)

## Variables de entorno

- `.env` en backend para la base de datos PostgreSQL