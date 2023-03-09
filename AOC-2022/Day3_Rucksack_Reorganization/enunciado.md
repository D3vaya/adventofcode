# ⭐️ Día 3: Reorganización de Mochilas
[volver a listado de retos](./../../README.md)

## Enunciado

Un elfo tiene el importante trabajo de cargar todas las **mochilas** con suministros para el viaje a la jungla . Desafortunadamente, ese duende no siguió del todo las instrucciones de empaque, por lo que ahora es necesario reorganizar algunos artículos.

Cada mochila tiene dos grandes **compartimentos** . Todos los artículos de un tipo determinado deben ir exactamente en uno de los dos compartimentos. El duende que hizo el equipaje no siguió esta regla para exactamente un tipo de artículo por mochila.

Los Elfos han hecho una lista de todos los elementos que se encuentran actualmente en cada mochila (su entrada de rompecabezas), pero necesitan su ayuda para encontrar los errores. Cada tipo de artículo se identifica con una sola letra mayúscula o minúscula (es decir, ay Ase refiere a diferentes tipos de artículos).

La lista de artículos para cada mochila se da como caracteres en una sola línea. Una mochila determinada siempre tiene el mismo número de artículos en cada uno de sus dos compartimentos, por lo que la primera mitad de los caracteres representan artículos en el primer compartimento, mientras que la segunda mitad de los caracteres representan artículos en el segundo compartimento.

Por ejemplo, suponga que tiene la siguiente lista de contenidos de seis mochilas:

```
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
```

  - La primera mochila contiene los artículos vJrwpWtwJgWrhcsFMMfFFhFp, lo que significa que su primer compartimento contiene los artículos vJrwpWtwJgWr, mientras que el segundo compartimento contiene los artículos hcsFMMfFFhFp. El único tipo de elemento que aparece en ambos compartimentos es minúscula **p**.
  - Los compartimentos de la segunda mochila contienen jqHRNqRjqzjGDLGL y rsFMfFZSrLrFZsSL. El único tipo de elemento que aparece en ambos compartimentos es mayúscula **L**.
  - Los compartimentos de la tercera mochila contienen PmmdzqPrVy vPwwTWBwg; el único tipo de elemento común es mayúsculas **P**.
  - Los compartimentos de la cuarta mochila solo comparten el tipo de artículo **v**.
  - Los compartimentos de la quinta mochila solo comparten el tipo de artículo **t**.
  - Los compartimentos de la sexta mochila solo comparten el tipo de artículo **s**.

Para ayudar a priorizar la reorganización de elementos, cada tipo de elemento se puede convertir en una **prioridad** :

Los tipos de elementos aen minúsculas ztienen prioridades del 1 al 26.
Los tipos de elementos Aen mayúsculas Ztienen prioridades de 27 a 52.
En el ejemplo anterior, la prioridad del tipo de artículo que aparece en ambos compartimentos de cada mochila es 16 ( p), 38 ( L), 42 ( P), 22 ( v), 20 ( t) y 19 ( s); la suma de estos es **157**.

Encuentra el tipo de artículo que aparece en ambos compartimentos de cada mochila. **¿Cuál es la suma de las prioridades de esos tipos de elementos?**

[Para comenzar, obtenga la entrada de el desafío.](./input.txt)