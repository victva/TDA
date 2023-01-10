// creamos una function para hacer el split and merge de los datos
const splitAndMerge = () => {
   // referenciamos el textarea por el id del elemento
   const textarea = document.getElementById("textarea");

   // obtenemos el texto del textarea y le eliminamos los espacios en blanco del inicio y final
   const textareaValue = textarea.value.trim();

   // si no se introduce ningun texto
   if (textareaValue.length < 1) {
      // mostramos una alerta
      alert("Por favor introduce un texto");

      // colocamos el foco en el textarea
      textarea.focus();
      
      // retornamos falso para que la función no se siga ejecutando
      return false;
   }

   // creamos un objecto para guardar las palabras separadas y categorizarlas
   const objList = {};

   // quitamos las tildes del texto para fines de comparación
   const textValue = textareaValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

   // unimos todas las listas de palabras del diccionario que vamos a usar para separar y categorizar el texto
   const wordsList = [...carBrands, ...countryNames, ...drinkTypes, ...fruitNames, ...menNames, ...womenNames];

   // iteramos sobre la lista de palabras del diccionario
   wordsList.forEach((el) => {
      // guardamos la palabra que vamos a separar del texto 
      const splitWord = el.word;

      // quitamos las tildes de la palabra para fines de comparación
      const wordToSplit = el.word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      // creamos una expresión regular para hacer el match exacto y case insensitive de las palabras del diccionario con las palabras del texto que vamos a separar
      const regex = new RegExp("\\b(?:" + wordToSplit + ")\\b", "i");

      // hacemos un split y separamos la palabra del texto
      const splitText = textValue.split(regex);

      // si el length del array creado por el split anterior es mayor a 1, quiere decir que la palabra buscada existía en el texto y fue separada
      if(splitText.length > 1) {
         //  verificamos si no hemos agregado la categoría de la palabra separada en el objList
         if (typeof objList[el.category] === "undefined") {
            // si no se agregó, la agremos, y creamos un array vacio para guardar las palabras correspodientes a esa categoría
            objList[el.category] = [];
         }

         // verificamos si en el array de la categoría ya hemos agregado o no la palabra separada, para evitar repetición
         if (!objList[el.category].includes(splitWord)) {
            // si no existe, la agregamos
            objList[el.category].push(splitWord); 
         }
      }      
   });

   // referenciamos el div html donde colocaremos los resultados del split and merge
   const results = document.getElementById("results");

   // limpiamos el div de results para evitar repeteción de datos cada vez que se llame la función
   results.innerHTML = "";

   // si el length de objList es mayor a 0, quiere decir que contiene categorías porque se encontrarón palabras que coinciden con las del diccionario
   if (Object.keys(objList).length > 0) {
      // imprimimos en el div results un titulo y una línea horizonal debajo del título para separar el título de los resultados
      results.innerHTML += "<h3>Resultados</h3>";
      results.innerHTML += "<hr>";

      // iteramos sobre el objList para obtener las categorías y palabras guardadas en ese objeto
      for (const key in objList) {
         // guardamos la categoría
         const category = key;
         // hacemos el merge de las palabras separadas, las unimos con comas y la guardamos en una constante
         const mergedWords = objList[key].join(", ");
         
         // imprimimos cada categoría con sus palabras correspondientes en el div de results
         results.innerHTML += "<b>" + category + ":</b> " + mergedWords + "<br />";
      }
   
   //  si el length del objList es 0, quiere decir que no contiene categorías porque no se encontraron palabras que coincidan con el diccionario
   } else {
      // imprimos un mensaje para dejarle saber al usuario que el texto no contiene palabras que coincidan con las del diccionario o base de datos
      results.innerHTML += "El texto indoducito no contiene palabras que coincidan con las categorías de la base de datos.";
   }
};