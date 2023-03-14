# ⭐️ Día 8: Treetop Tree House
[volver a listado de retos](./../../README.md)

## Enunciado

La expedición se encuentra con un parche peculiar de árboles altos, todos plantados cuidadosamente en una cuadrícula. Los Elfos explican que una expedición anterior plantó estos árboles como un esfuerzo de reforestación. Ahora, sienten curiosidad por saber si este sería un buen lugar para una **casa en el árbol**.

Primero, determine si hay suficiente cobertura de árboles aquí para mantener **oculta** una casa en el árbol . Para hacer esto, debe contar la cantidad de árboles que son **visibles desde fuera de la cuadrícula** cuando mira directamente a lo largo de una fila o columna.

Los Elfos ya lanzaron un **cuadricóptero** para generar un mapa con la altura de cada árbol ( su entrada de rompecabezas ). Por ejemplo:

```
30373
25512
65332
33549
35390
```

Cada árbol se representa como un solo dígito cuyo valor es su altura, donde 0 es el más bajo y 9 es el más alto.

Un árbol es **visible** si todos los demás árboles entre él y un borde de la cuadrícula son **más bajos** que él. Solo considere árboles en la misma fila o columna; es decir, solo mire hacia arriba, hacia abajo, hacia la izquierda o hacia la derecha desde cualquier árbol determinado.

Todos los árboles alrededor del borde de la cuadrícula son **visibles** ; dado que ya están en el borde, no hay árboles que bloqueen la vista. En este ejemplo, eso solo deja **nueve árboles interiores** para considerar:

  - La parte superior izquierda **5** es visible desde la izquierda y la parte superior. (No es visible desde la derecha o la parte inferior ya que otros árboles de gran altura 5se interponen en el camino).
  - El medio superior 5 es **visible** desde la parte superior y derecha.
  - La parte superior derecha **1** no es visible desde ninguna dirección; para que sea visible, solo tendría que haber árboles de altura **0** entre él y un borde.
  - El centro izquierdo 5es visible , pero solo desde la derecha.
  - El centro **3** no es visible desde ninguna dirección; para que sea visible, solo tendría que haber árboles de una altura máxima **2** entre él y un borde.
  - El centro derecho **3** es visible desde la derecha.
  - En la fila inferior, el medio **5** es visible , pero el **3** y **4** no lo son.

Con 16 árboles visibles en el borde y otros 5 visibles en el interior, un total de **21** árboles son visibles en este arreglo.

Considere su mapa; **¿Cuántos árboles son visibles desde fuera de la cuadrícula?**

[Para comenzar, obtenga la entrada de el desafío.](./input.txt)