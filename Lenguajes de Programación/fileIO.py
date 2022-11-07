# FILE I/O, w (write mode), r (read mode), a (append mode)

#read a file
with open(r"C:\Users\Victor\Desktop\Archivo.txt", 'r') as file:
	x = file.read()
	print(x)
	file.close()
	pass

# write to a file

with open(r"C:\Users\Victor\Desktop\Archivo.txt", 'a') as file:
	file.write('\nagregando linea 2 al archivo')
	file.close()
	pass


with open(r"C:\Users\Victor\Desktop\Archivo.txt", 'w') as file:
	file.write('\nagregando linea 1 al archivo')
	file.close()
	pass
