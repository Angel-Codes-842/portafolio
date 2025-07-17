from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import projects, contact, about

app = FastAPI(
    title="Portfolio API", 
    version="1.0.0",
    description="API para mi portafolio personal"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router, prefix="/api/projects", tags=["projects"])
app.include_router(contact.router, prefix="/api/contact", tags=["contact"])
app.include_router(about.router, prefix="/api/about", tags=["about"])

@app.get("/")
def read_root():
    return {"message": "¡Portfolio API está funcionando!"}

@app.get("/health")
def health_check():
    return {"status": "healthy", "message": "API funcionando correctamente"}