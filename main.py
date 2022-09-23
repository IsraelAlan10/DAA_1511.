
datos = [3, 9, 12, 90, 32, 65, 34, 2]
slots = 10
def cubeta (datos, slots, none=None):
    x = none
    contador = 0
    cubetas = []
    seleccion = 0

    for i in range (0, 10, 1):
        cubetas.append([])
    for index in range (len(datos)):
        num = datos[index]//slots
        cubetas[num].append(datos[index])
    for recorrido in range (len(cubetas)):
        x = seleccion(cubetas[recorrido])
        cubetas[recorrido] = x

print(cubeta(datos, slots))