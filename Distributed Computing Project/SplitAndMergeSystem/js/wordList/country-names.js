const countryNames = [
   { word: "Albania", category: "Paises" },
   { word: "Alemania", category: "Paises" },
   { word: "Andorra", category: "Paises" },
   { word: "Angola", category: "Paises" },
   { word: "Antigua y Barbuda", category: "Paises" },
   { word: "Arabia Saudita", category: "Paises" },
   { word: "Arabia Saudí", category: "Paises" },
   { word: "Argelia", category: "Paises" },
   { word: "Argentina", category: "Paises" },
   { word: "Armenia", category: "Paises" },
   { word: "Australia", category: "Paises" },
   { word: "Austria", category: "Paises" },
   { word: "Azerbaiyán", category: "Paises" },
   { word: "Bahamas", category: "Paises" },
   { word: "Bangladés", category: "Paises" },
   { word: "Barbados", category: "Paises" },
   { word: "Baréin", category: "Paises" },
   { word: "Bélgica", category: "Paises" },
   { word: "Belice", category: "Paises" },
   { word: "Bielorrusia", category: "Paises" },
   { word: "Benín", category: "Paises" },
   { word: "Birmania / Myanmar", category: "Paises" },
   { word: "Bolivia", category: "Paises" },
   { word: "Bosnia y Herzegovina", category: "Paises" },
   { word: "Botsuana", category: "Paises" },
   { word: "Brasil", category: "Paises" },
   { word: "Brunei", category: "Paises" },
   { word: "Bulgaria", category: "Paises" },
   { word: "Burkina Faso", category: "Paises" },
   { word: "Burundi", category: "Paises" },
   { word: "Bután", category: "Paises" },
   { word: "Cabo Verde", category: "Paises" },
   { word: "Camboya", category: "Paises" },
   { word: "Camerún", category: "Paises" },
   { word: "Canadá", category: "Paises" },
   { word: "Catar", category: "Paises" },
   { word: "República Centroafricana", category: "Paises" },
   { word: "Chad", category: "Paises" },
   { word: "República Checa", category: "Paises" },
   { word: "Chile", category: "Paises" },
   { word: "China", category: "Paises" },
   { word: "Chipre", category: "Paises" },
   { word: "Colombia", category: "Paises" },
   { word: "Comoras", category: "Paises" },
   { word: "República del Congo", category: "Paises" },
   { word: "República Democrática del Congo", category: "Paises" },
   { word: "Corea del Norte", category: "Paises" },
   { word: "Corea del Sur", category: "Paises" },
   { word: "Costa de Marfil", category: "Paises" },
   { word: "Costa Rica", category: "Paises" },
   { word: "Croacia", category: "Paises" },
   { word: "Cuba", category: "Paises" },
   { word: "Dinamarca", category: "Paises" },
   { word: "Dominica", category: "Paises" },
   { word: "República Dominicana", category: "Paises" },
   { word: "Ecuador", category: "Paises" },
   { word: "Egipto", category: "Paises" },
   { word: "El Salvador", category: "Paises" },
   { word: "Emiratos Árabes Unidos", category: "Paises" },
   { word: "Eritrea", category: "Paises" },
   { word: "Eslovaquia", category: "Paises" },
   { word: "Eslovenia", category: "Paises" },
   { word: "España", category: "Paises" },
   { word: "Estados Unidos", category: "Paises" },
   { word: "Estonia", category: "Paises" },
   { word: "Etiopía", category: "Paises" },
   { word: "Filipinas", category: "Paises" },
   { word: "Finlandia", category: "Paises" },
   { word: "Fiyi", category: "Paises" },
   { word: "Francia", category: "Paises" },
   { word: "Gabón", category: "Paises" },
   { word: "Gambia", category: "Paises" },
   { word: "Georgia", category: "Paises" },
   { word: "Ghana", category: "Paises" },
   { word: "Granada", category: "Paises" },
   { word: "Grecia", category: "Paises" },
   { word: "Guatemala", category: "Paises" },
   { word: "Guinea", category: "Paises" },
   { word: "Guinea-Bisáu", category: "Paises" },
   { word: "Guinea Ecuatorial", category: "Paises" },
   { word: "Guyana", category: "Paises" },
   { word: "Haití", category: "Paises" },
   { word: "Honduras", category: "Paises" },
   { word: "Hungría", category: "Paises" },
   { word: "India", category: "Paises" },
   { word: "Indonesia", category: "Paises" },
   { word: "Irak", category: "Paises" },
   { word: "Irán", category: "Paises" },
   { word: "Irlanda", category: "Paises" },
   { word: "Islandia", category: "Paises" },
   { word: "Israel", category: "Paises" },
   { word: "Italia", category: "Paises" },
   { word: "Jamaica", category: "Paises" },
   { word: "Japón", category: "Paises" },
   { word: "Jordania", category: "Paises" },
   { word: "Kazajistán", category: "Paises" },
   { word: "Kenia", category: "Paises" },
   { word: "Kirguistán", category: "Paises" },
   { word: "Kiribati", category: "Paises" },
   { word: "Kuwait", category: "Paises" },
   { word: "Laos", category: "Paises" },
   { word: "Lesoto", category: "Paises" },
   { word: "Letonia", category: "Paises" },
   { word: "Líbano", category: "Paises" },
   { word: "Liberia", category: "Paises" },
   { word: "Libia", category: "Paises" },
   { word: "Liechtenstein", category: "Paises" },
   { word: "Lituania", category: "Paises" },
   { word: "Luxemburgo", category: "Paises" },
   { word: "Macedonia del Norte", category: "Paises" },
   { word: "Madagascar", category: "Paises" },
   { word: "Malasia", category: "Paises" },
   { word: "Malaui", category: "Paises" },
   { word: "Maldivas", category: "Paises" },
   { word: "Mali / Malí", category: "Paises" },
   { word: "Malta", category: "Paises" },
   { word: "Marruecos", category: "Paises" },
   { word: "Islas Marshall", category: "Paises" },
   { word: "Mauricio", category: "Paises" },
   { word: "Mauritania", category: "Paises" },
   { word: "México", category: "Paises" },
   { word: "Micronesia", category: "Paises" },
   { word: "Moldavia", category: "Paises" },
   { word: "Mónaco", category: "Paises" },
   { word: "Mongolia", category: "Paises" },
   { word: "Montenegro", category: "Paises" },
   { word: "Mozambique", category: "Paises" },
   { word: "Namibia", category: "Paises" },
   { word: "Nauru", category: "Paises" },
   { word: "Nepal", category: "Paises" },
   { word: "Nicaragua", category: "Paises" },
   { word: "Níger", category: "Paises" },
   { word: "Nigeria", category: "Paises" },
   { word: "Noruega", category: "Paises" },
   { word: "Nueva Zelanda", category: "Paises" },
   { word: "Omán", category: "Paises" },
   { word: "Países Bajos", category: "Paises" },
   { word: "Pakistán", category: "Paises" },
   { word: "Palaos", category: "Paises" },
   { word: "Palestina", category: "Paises" },
   { word: "Panamá", category: "Paises" },
   { word: "Papúa Nueva Guinea", category: "Paises" },
   { word: "Paraguay", category: "Paises" },
   { word: "Perú", category: "Paises" },
   { word: "Polonia", category: "Paises" },
   { word: "Portugal", category: "Paises" },
   { word: "Reino Unido", category: "Paises" },
   { word: "Ruanda", category: "Paises" },
   { word: "Rumania / Rumanía", category: "Paises" },
   { word: "Rusia", category: "Paises" },
   { word: "Islas Salomón", category: "Paises" },
   { word: "Samoa", category: "Paises" },
   { word: "San Cristóbal y Nieves", category: "Paises" },
   { word: "San Marino", category: "Paises" },
   { word: "San Vicente y las Granadinas", category: "Paises" },
   { word: "Santa Lucía", category: "Paises" },
   { word: "Santo Tomé y Príncipe", category: "Paises" },
   { word: "Senegal", category: "Paises" },
   { word: "Serbia", category: "Paises" },
   { word: "Seychelles", category: "Paises" },
   { word: "Sierra Leona", category: "Paises" },
   { word: "Singapur", category: "Paises" },
   { word: "Siria", category: "Paises" },
   { word: "Somalia", category: "Paises" },
   { word: "Sri Lanka", category: "Paises" },
   { word: "Suazilandia / Esuatini", category: "Paises" },
   { word: "Sudáfrica", category: "Paises" },
   { word: "Sudán", category: "Paises" },
   { word: "Sudán del Sur", category: "Paises" },
   { word: "Suecia", category: "Paises" },
   { word: "Suiza", category: "Paises" },
   { word: "Surinam", category: "Paises" },
   { word: "Tailandia", category: "Paises" },
   { word: "Tanzania", category: "Paises" },
   { word: "Tayikistán", category: "Paises" },
   { word: "Timor Oriental", category: "Paises" },
   { word: "Togo", category: "Paises" },
   { word: "Tonga", category: "Paises" },
   { word: "Trinidad y Tobago", category: "Paises" },
   { word: "Túnez", category: "Paises" },
   { word: "Turkmenistán", category: "Paises" },
   { word: "Turquía", category: "Paises" },
   { word: "Tuvalu", category: "Paises" },
   { word: "Ucrania", category: "Paises" },
   { word: "Uganda", category: "Paises" },
   { word: "Uruguay", category: "Paises" },
   { word: "Uzbekistán", category: "Paises" },
   { word: "Vanuatu", category: "Paises" },
   { word: "Ciudad del Vaticano", category: "Paises" },
   { word: "Venezuela", category: "Paises" },
   { word: "Vietnam", category: "Paises" },
   { word: "Yemen", category: "Paises" },
   { word: "Yibuti", category: "Paises" },
   { word: "Zambia", category: "Paises" },
   { word: "Zimbabue", category: "Paises" },
];
