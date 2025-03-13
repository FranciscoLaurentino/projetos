import pywhatkit
numero_de_telefone ='+55 11 123456789'
mensagem = 'mensagem'
hora = 10
minutos = 53
pywhatkit.sendwhatmsg(numero_de_telefone, mensagem, hora, minutos)
print('mensagem enviada!')
