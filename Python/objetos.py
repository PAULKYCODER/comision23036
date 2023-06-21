class Producto:
    # atributos id,nombre,precio, stock es un parametro opcional
    def __init__(self,id,nombre,precio,stock=1):
        self.id = id
        self.nombre = nombre
        self.precio = precio
        self.stock = stock
     
    def __str__(self):
        return (f'Producto - {self.id}: {self.nombre} - Precio: {self.precio:.2f} - Stock: {self.stock}')
    
    def __del__(self):
        # stock tiene que ser 0
        # Ir a la lista y borrar el elemento
        pass

    def modificar_precio(self, nuevo_precio):
        self.precio = nuevo_precio

    def agregar_stock(self):
        self.stock +=1

def agregar_producto(lista,producto):
    lista.append(producto)

def modificar_producto(lista,id_prod,nuevo_precio):
    for prod in lista:
        if prod.id == id_prod:
            prod.modificar_precio(nuevo_precio)
            break

# Crear lista de productos
lista_producto = []
        
#crear objetos y agregar a la lista
prod1 = Producto(100,'Camiseta de futbol',25456,10)
agregar_producto(lista_producto,prod1)

prod2 = Producto(101,'Pantalon',14256.25,10)
agregar_producto(lista_producto,prod2)

prod3 = Producto(102,'Zapatos',23256.12)
agregar_producto(lista_producto,prod3)

#mostrar producto
for prod in lista_producto:
    print(prod)
     # print('id', prod.id, prod.nombre, prod.precio....)
nuevo_precio = float(input('Ingrese el precio para el hot sale'))
codigo = int(input('Ingrese el codigo del producto a modificar'))
modificar_producto(lista_producto,codigo,nuevo_precio)
prod2.__del__()
print('Lista de precios en Hot Sale')

for prod in lista_producto:
    print(prod)

