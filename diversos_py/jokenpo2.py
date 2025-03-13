from random import randint
from time import sleep
print("""\033[1;33mescolha:
[1] pedra
[2] papel
[3] tesoura
[4] lagarto
[5] spock""")

esconha = int(input("Qual é a sua escolha: "))
n = randint(1, 5)
lista = ["", "pedra", "papel", "tesoura", "lagarto", "spock"]

if esconha > 5:
    print("\033[1;31mEscolha invalida\033[1;m")
    exit()
sleep(0.25)
print("pedra")
sleep(0.25)
print("papel")
sleep(0.25)
print("tesoura")
sleep(0.25)
print("lagarto")
sleep(0.25)
print("spock")
sleep(0.5)

print("-=-" * 10)
print(f"Eu escolhi {lista[n]} e você {lista[esconha]}")
print("-=-" * 10)
if esconha == n:
    print("\033[1;34mempate")
elif esconha == 1 and n == 3:
    print("\033[1;32mVocê ganhou!!! A pedra quebrou a tesoura")
elif esconha == 1 and n == 4:
    print("\033[1;32mVocê ganhou!!! A pedra esmagou o lagarto")
elif esconha == 2 and n == 1:
    print("\033[1;32mVocê ganhou!!! O papel cobriu a pedra")
elif esconha == 2 and n == 5:
    print("\033[1;32mVocê ganhou!!! O papel refutou o spock ")
elif esconha == 3 and n == 2:
    print("\033[1;32mVocê ganhou!!! A tesoura cortou o papel")
elif esconha == 3 and n == 4:
    print("\033[1;32mVocê ganhou!!! A tesoura decapita o lagarto")
elif esconha == 4 and n == 5:
    print("\033[1;32mVocê ganhou!!! O lagarto envenenou o spock")
elif esconha == 4 and n == 2:
    print("\033[1;32mVocê ganhou!!! O lagarto comeu o papel ")
elif esconha == 5 and n == 3:
    print("\033[1;32mVocê ganhou!!! O spock quebrou a tesoura ")
elif esconha == 5 and n == 1:
    print("\033[1;32mVocê ganhou!!! O Spock vaporizou a pedra")

elif esconha == 3 and n == 1:
    print("\033[1;31mVocê perdeu!!! A pedra quebrou a tesoura")
elif esconha == 4 and n == 1:
    print("\033[1;31mVocê perdeu!!! A pedra esmagou o lagarto")
elif esconha == 1 and n == 2:
    print("\033[1;31mVocê perdeu!!! O papel cobriu a pedra")
elif esconha == 5 and n == 2:
    print("\033[1;31mVocê perdeu!!! O papel refutou o spock ")
elif esconha == 2 and n == 3:
    print("\033[1;31mVocê perdeu!!! A tesoura cortou o papel")
elif esconha == 4 and n == 3:
    print("\033[1;31mVocê perdeu!!! A tesoura decapita o lagarto")
elif esconha == 5 and n == 4:
    print("\033[1;31mVocê perdeu!!! O lagarto envenenou o spock")
elif esconha == 2 and n == 4:
    print("\033[1;31mVocê perdeu!!! O lagarto comeu o papel ")
elif esconha == 3 and n == 5:
    print("\033[1;31mVocê perdeu!!! O spock quebrou a tesoura ")
elif esconha == 1 and n == 5:
    print("\033[1;31mVocê perdeu!!! o Spock vaporizou a pedra")
