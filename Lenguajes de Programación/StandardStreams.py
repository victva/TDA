# 2. Standard streams: input, output, error

import sys

print("Escribe tu nombre")
x = sys.stdin.readline()


if len(x) > 1:
	sys.stdout.write(x)
else
	sys.stderr.write('Usted no escribió')