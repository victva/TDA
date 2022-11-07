# Enviromental variables

import os 

db_user = os.environ.get('db_user')
db_pass = os.environ.get('db_pass')

print(db_user)
print(db_pass)