from app.database.connection import engine, Base
from app.models import models

print("Creando tablas en la base de datos...")
Base.metadata.create_all(bind=engine)
print("¡Tablas creadas exitosamente!")
