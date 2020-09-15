salario = int(input("Salario: "))
imposto = input("Imposto (Que eh roubo): ")

if not imposto:
    imposto = 27.5
else:
    imposto = float(imposto)

sal = salario - (salario * (imposto*0.01))

def jose():{
    print("testado")
}

jose()

print(sal)
