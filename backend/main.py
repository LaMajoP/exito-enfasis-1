from fastapi import FastAPI

from database import supabase
from models import Producto
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5500",
        "http://127.0.0.1:5500",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/productos")
def obtener_productos():

    respuesta = (
        supabase
        .table("productos")
        .select("*")
        .execute()
    )

    return respuesta.data


@app.post("/productos")
def crear_producto(producto: Producto):

    respuesta = (
        supabase
        .table("productos")
        .insert(producto.model_dump())
        .execute()
    )

    return respuesta.data