Este es un juego simple de Amigo Secreto desarrollado en JavaScript, HTML y CSS. Permite a los usuarios agregar nombres a una lista, realizar un sorteo aleatorio para asignar amigos secretos y reiniciar el juego.

Descripción
El juego permite agregar amigos a una lista, realizar un sorteo para asignar a cada uno un amigo secreto y mostrar los resultados en la página. Una vez que todos los amigos hayan sido sorteados, el juego se puede reiniciar para empezar nuevamente.

![Captura de pantalla 2025-02-25 124949](https://github.com/user-attachments/assets/a8535a02-22ba-47b3-b733-465d334795a5)


Funcionalidades
Agregar Amigos: Los usuarios pueden ingresar nombres en un campo de texto. Al hacer clic en "Añadir", el nombre se agrega a la lista de amigos. Se verifica que no haya nombres duplicados y que el campo no esté vacío.

Sorteo Aleatorio: Al hacer clic en el botón "Sortear amigo", se asigna un amigo secreto a cada usuario de manera aleatoria. El sorteo garantiza que no se repita un amigo secreto para cada jugador.

Reiniciar Juego: El botón "Reiniciar sorteo" limpia la lista de amigos y reinicia el sorteo para comenzar de nuevo.

Requisitos
HTML: Para la estructura básica de la página y los elementos de la interfaz de usuario.
CSS: Para dar estilo a la página (puede personalizarse según sea necesario).
JavaScript: Para las funcionalidades interactivas, incluyendo el agregado de amigos, el sorteo aleatorio y la reinicialización del juego.

Instrucciones de Uso
1. Agregar Amigos
Ingrese un nombre en el campo de texto.
Presione el botón "Añadir" para agregar el nombre a la lista de amigos.
Si el nombre ya existe o el campo está vacío, se mostrará un mensaje de advertencia.
2. Realizar Sorteo
Después de agregar al menos un amigo, presione el botón "Sortear amigo" para asignar un amigo secreto de manera aleatoria.
Si todos los amigos ya han sido sorteados, el botón se deshabilitará.
3. Reiniciar el Juego
Si desea comenzar de nuevo, presione el botón "Reiniciar sorteo". Esto borrará la lista de amigos y reiniciará el sorteo.

Estructura de Archivos
index.html: Contiene la estructura básica del juego (lista de amigos, botones, resultados).
styles.css: Contiene los estilos para la interfaz de usuario (opcional, personalizable).
script.js: Archivo con la lógica de JavaScript que implementa las funcionalidades del juego.

Funciones del Código JavaScript
agregarAmigo: Función para agregar amigos a la lista, con validación de nombres duplicados y vacíos.
actualizarLista: Actualiza la lista visual de amigos mostrada en la página.
sortearAmigo: Realiza el sorteo de un amigo secreto aleatorio, asegurando que no se repitan.
reiniciarSorteo: Reinicia la lista de amigos y el estado del juego.

Notas
El botón de sorteo se deshabilita automáticamente cuando todos los amigos han sido sorteados.
Puedes personalizar los estilos (CSS) y agregar más funcionalidades según sea necesario.
¡Disfruta jugando al Amigo Secreto!

Autor
Pierpaolo Zolezzi Seoane
