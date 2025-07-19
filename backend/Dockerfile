# Utiliza una imagen oficial de Python
FROM python:3.11-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de requerimientos
COPY requirements.txt .

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto del código
COPY . .

# Expone el puerto de FastAPI
EXPOSE 8000

# Comando para crear tablas y luego arrancar el servidor
CMD ["sh", "-c", "python create_tables.py && uvicorn main:app --host 0.0.0.0 --port 8000"]
