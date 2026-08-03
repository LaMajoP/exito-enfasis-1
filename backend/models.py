from pydantic import BaseModel


class Producto(BaseModel):

    nombre: str

    precio: str | None = None

    precio_lista: str | None = None

    url: str | None = None

    imagen: str | None = None