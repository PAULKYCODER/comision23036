# cadena = '  hola, Mundo!   '
# print(len(cadena))
# print(cadena[1])
# print(cadena.capitalize())
# print(cadena.upper())
# print(cadena.lower())
# print(cadena.split(','))
# print(cadena.strip())
# cadena = '-'.join(cadena)
# # print(cadena)

# # nombre = 'Luciano'
# # edad = 30
# # print(f'Mi nombre es: {nombre} y tengo {edad} años' )

# lista = [1,8,4,7,5,0,2]

# print(len(lista))

# lista.append(9)
# lista.sort()
# print(lista)
# print(len(lista))
# lista.insert(4,3)
# print(lista)
# lista.remove(8)
# print(lista)
# elem = lista.pop()
# print(elem)
# print(lista)
# lista.reverse()
# print(lista)

dic = {'nombre': 'Luciano', 'edad': 38, 'nombre':'Pedro','edad':35}
# claves = dic.keys()
# print(claves)
# valores = []
# valores = dic.values()
# print(valores)

# item= dic.items()
# print(item)

for clave,valor in dic.items():
    print(clave,valor)

tupla = ('Luciano',25,4665989)
cont = tupla.count('Luciano')
nombre, edad, dni = tupla
print(cont)
print(nombre)
print(edad)
print(dni)

conjunto = {1,2,3}
conjunto1 = {1,2,3}
conjunto2 = {3,4,5}
# a = set(conjunto)
# b = set(conjunto1)
# c = set(conjunto2)

# union = a.union(c)
# print(union)

# inters = a.intersection(c)
# print(inters)

diff = conjunto.difference(conjunto2)
print(diff)