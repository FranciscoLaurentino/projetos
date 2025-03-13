import pywhatkit
numero_de_telefone ='+55 84 9218-8413'
mensagem = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalisoooooooooooooooooooooooooooooooooooooooooooooooon'
hora = 10
minutos = 53
pywhatkit.sendwhatmsg(numero_de_telefone, mensagem, hora, minutos)
print('mensagem enviada!')
