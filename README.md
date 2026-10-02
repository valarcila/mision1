# Misión 1
La idea es una "tabla" de la compra.

## Cómo probarlo
Abre index.html en el navegador. Introduce la cantidad y el producto que quieras añadir a la tabla y pulsa enter o "Agregar". Una vez esté en la tabla, si quisieras volver a incluir el mismo producto simplemente se incrementaría la cantidad. 

Si pulsas sobre un producto (ya sea en la columna cantidad o producto) este se tachará, lo que indica que ya ha sido comprado. Si pulsas "Eliminar comprados" se quitarán los productos tachados y quedarán solo los que no has comprado.

Pulsa "b" para activar o desactivar el modo oscuro.

## Uso de IA
Usé claude para refrescar conocimientos de html, css y js y como apoyo durante el desarrollo del código js.

Prompt 1. "considerar delegación de eventos en la tabla #tabla en vez de un listener de click por cada fila creada"

Incluí literalmente una de las correcciones que me proporcionó webi porque al principio no entendía qué se me estaba pidiendo. Después de la explicación, recordé que en clase se comentó que se puede poner un solo evento en un `<div>` y hacer que este indique qué elemento lo ha llamado (exactamente la idea que se aplica aquí).

Prompt 2. "cuál es la forma idiomática en js de recorrer los productos de la tabla?"

Estoy acostumbrada a utilizar bucles del tipo for(int i = n; condition; i++), por lo que quería comprobar cómo se suelen hacer este tipo de recorridos en js, puesto que tendremos que utilizarlos así en las próximas unidades.

## Autopsia
Decisión 1. Validar cantidad desde js en lugar de dejar la validación en html.

Al principio utilicé `type="number" min="1" required` como comprobación. Sin embargo, como la misión se centra en js, webi me sugirió hacer también la validación desde js. Desde mi punto de vista, mantener dos validaciones hacía redundante una de ellas, por lo que decidí eliminar la de html y controlar desde js que cantidad sea un número, mayor que cero y entero.

Decisión 2. Sumar cantidad cuando un producto ya existe.

Decidí que si se introducía un producto existente, se sumara la nueva cantidad en vez de crear un nuevo producto. La alternativa era permitir productos duplicados, pero la descarté porque es mucho más útil mostrar cada producto una sola vez con su cantidad total.
