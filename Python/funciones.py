# # # nombre parametro de la funcion
# # def saludar (nombre):
# #     print('Hola' + nombre + '!')


# # saludar('Luis')

# # #parametros de la funcin a b
# # def sumar(a,b):
# #     resultado = a + b
# #     return resultado

# # # 3 y 5 son los argumentos pasados a la funcion
# # resultado_suma = sumar(3,5)
# # print(resultado_suma)

# # ----Variable Global---
# # numero = 10

# # def multiplicar():
# #     global numero #se declara como global
# #     numero*2
# #     print(numero) 

# # multiplicar()
# # print(numero) # salida--> 20
# # ----------------------------



# #------------- Variables Locales   -------------

# # def saludarlocal():
# #     mensaje = 'Hola Bienvenido'  #var local
# #     print(mensaje)  #Hola Bienvenido
# # # ---------fin func
# # saludar()
# # print(mensaje) # ' '
# # -----------------------------

# # ------------- variables libres  ---------

# # def multiplicar_numero(num):
# #     def multiplicar(x):
# #         return x *num
# #     return multiplicar

# # multiplicar_por_dos = multiplicar_numero(2)
# # resultado = multiplicar_por_dos(5)
# # print('Variable Libre',resultado) #salida 10



# # por refencia y mutables
# # Una lista o un diccionario
# #Puntero a la posicion de memoria
# def modificar_listar(lista):
#     lista.append(10)

# mi_lista = [1,2,3]
# print(mi_lista)
# modificar_listar(mi_lista)
# print(mi_lista)


# #Pasaje por valor
# #Inmutables
# #num, cadena
# #Se crea una copia de la variable

# def modificar_valor(valor):
#     valor = 10

# def mod_valor(valor):
#     return 10

# valor = 5
# modificar_valor(valor)
# # valor = 10
# valor = mod_valor(valor)
# print('print de valor',valor)

# Funciones anonimas / lambda
# def alcuadrado(num):
#      return num ** 2
# cuad = alcuadrado(4)
# print(cuad)

cuadrado = lambda x: x ** 2
sumar = 2 + cuadrado(4)
print(sumar)


# Funcion con retorno de varias valores
def dividir(a,b):
    cociente = a // b
    resto = a % b
    return cociente,resto

resultado_division = dividir(10,3)
print(resultado_division) #(3,1)