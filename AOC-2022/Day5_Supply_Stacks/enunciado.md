# ⭐️ Día 5: Pilas de suministros
[volver a listado de retos](./../../README.md)

## Enunciado

La expedición puede partir tan pronto como se hayan descargado los suministros finales de los barcos. Los suministros se almacenan en pilas de **cajas** marcadas , pero debido a que los suministros necesarios están enterrados debajo de muchas otras cajas, es necesario reorganizar las cajas.

El barco tiene una **grúa de carga gigante** capaz de mover cajas entre pilas. Para asegurarse de que ninguna de las cajas se aplaste o se caiga, el operador de la grúa las reacomodará en una serie de pasos cuidadosamente planificados. Después de reorganizar las cajas, las cajas deseadas estarán en la parte superior de cada pila.

Los Elfos no quieren interrumpir a la operadora de la grúa durante este delicado procedimiento, pero se olvidaron de preguntarle **qué** caja terminará dónde, y quieren estar listos para descargarlas lo antes posible para poder embarcar.

Sin embargo, tienen un dibujo de las pilas iniciales de cajas y el procedimiento de reorganización (su entrada de rompecabezas). Por ejemplo:

```
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
```

En este ejemplo, hay tres pilas de cajas. La pila 1 contiene dos cajas: la caja `Z` está en la parte inferior y la caja `N` está en la parte superior. La pila 2 contiene tres cajas; de abajo hacia arriba, son cajas `M, C y D`. Finalmente, la pila 3 contiene una sola caja, **P**.

Luego, se da el procedimiento de reordenamiento. En cada paso del procedimiento, se mueve una cantidad de cajas de una pila a otra pila diferente. En el primer paso del procedimiento de reorganización anterior, se mueve una caja de la pila 2 a la pila 1, lo que da como resultado esta configuración:

```
[D]        
[N] [C]    
[Z] [M] [P]
 1   2   3 
 ```

En el segundo paso, se mueven tres cajas de la pila 1 a la pila 3. Las cajas se mueven de una en una , de modo que la primera caja que se mueve ( D) termina debajo de la segunda y la tercera caja:

```
        [Z]
        [N]
    [C] [D]
    [M] [P]
 1   2   3
```

Luego, ambas cajas se mueven de la pila 2 a la pila 1. Nuevamente, debido a que las cajas se mueven **una a la vez** , la caja Ctermina debajo de la caja **M**:

```
        [Z]
        [N]
[M]     [D]
[C]     [P]
 1   2   3
```

Finalmente, se mueve una caja de la pila 1 a la pila 2:

```
        [Z]
        [N]
        [D]
[C] [M] [P]
 1   2   3
```

Los Elfos solo necesitan saber **qué caja terminará en la parte superior de cada pila** ; en este ejemplo, las cajas superiores están **C** en la pila 1, **M** en la pila 2 y **Z** en la pila 3, por lo que debes combinarlas y darles el mensaje a los Elfos **CMZ**.

**Después de que se completa el procedimiento de reordenamiento, ¿qué caja termina en la parte superior de cada pila?**

[Para comenzar, obtenga la entrada de el desafío.](./input.txt)