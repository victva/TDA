# Descripción
## Domain Driven Design - Grupo 4

**¿Qué es Domain Driven Design?**
Domain-Driven Design es un estilo de programación y un conjunto de recomendaciones que sugiere usar la terminología del dominio comercial en el código de la aplicación, es decir, organizar el código de una manera que corresponda a cómo se estructura y opera el negocio, para acercar a los desarrolladores a las personas de negocios para que finalmente comiencen a comunicarse de manera efectiva entre sí. 

**Lenguaje Ubicuo.**
El lenguaje ubicuo es una solución al problema de la comunicación.
Los empresarios conocen el dominio, ellos entienden los procesos comerciales y los flujos de trabajo, conocen el mercado, etcétera. Necesitan tecnología, pero no hablan el lenguaje de los “desarrolladores”, sino que cada dominio comercial tiene su propia terminología. Los desarrolladores, por otro lado, conocen mejor los aspectos tecnológicos.

**Entity.**
Es un objeto del dominio que tiene una identidad, y esa identidad se concentra en un subconjunto de atributos o también puede ser en un solo atributo. El ejemplo más utilizado de un solo atributo de identidad es Id. Los atributos de identidad sobreviven con el tiempo, mientras que otros atributos pueden cambiar en una entidad. 
- Los atributos que no son de identidad de un objeto Entity solo tienen un significado descriptivo. 
- Pertenecen al objeto Entidad, pero no forman su identidad.

**Value Object.**
Es una clase donde todas las propiedades identifican el objeto completo. 
- Dos objetos son iguales siempre que todos los atributos sean iguales.
- Los value objects no tienen ID y no son mutables.

**Aggregates.**
Los aggregates son una abstracciones que controlan el acceso para un grupo de Entidades y Value Objectes. 

Crear un Aggregate es similar a dibujar un límite alrededor de un grupo de Entidades y Objetos de valor y seleccionar una única Entidad que desempeñará el papel de una entidad principal o raíz.

**Domain Services.**
Son servicios que no tienen que ver con el dominio tal cual del proyecto ya que no contiene ningun dato, es transitorio y realiza funciones y devuelve resultados.

**Repositories.**
Se encargan de encapsular el código de acceso al almacenamiento y proporciona una interfaz con operaciones CRUD.