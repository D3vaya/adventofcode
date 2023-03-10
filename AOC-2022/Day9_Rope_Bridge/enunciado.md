# Día 9: Puente de Cuerdas
[volver a listado de retos](./../../README.md)

## Enunciado

Este puente de cuerda cruje al caminar por él. No está seguro de cuántos años tiene o si puede soportar su peso.

Sin embargo, parece apoyar a los Elfos muy bien. El puente cruza un desfiladero que fue excavado por el enorme río muy por debajo de ti.

Pisas con cuidado; mientras lo hace, las cuerdas se estiran y giran. Decides distraerte modelando la física de las cuerdas; tal vez incluso puedas averiguar dónde **no** pisar.

Considere una cuerda con un nudo en cada extremo; estos nudos marcan la **cabeza** y la **cola** de la cuerda. Si la cabeza se aleja lo suficiente de la cola, la cola es atraída hacia la cabeza.

Debido al razonamiento nebuloso que involucra las **longitudes de Planck** , debería poder modelar las posiciones de los nudos en una cuadrícula bidimensional. Luego, siguiendo una **serie hipotética de movimientos** (su entrada de rompecabezas) para la cabeza, puede determinar cómo se moverá la cola.

Debido a las longitudes de Planck antes mencionadas , la cuerda debe ser bastante corta; de hecho, la cabeza (**H**) y la cola (**T**) **siempre deben tocarse** (en diagonal adyacentes e incluso superpuestas ambas cuentan como tocando):

```
....
.TH.
....

....
.H..
..T.
....

...
.H. (H covers T)
...
```

Si la cabeza alguna vez está dos pasos directamente hacia arriba, hacia abajo, a la izquierda o a la derecha de la cola, la cola también debe moverse un paso en esa dirección para que permanezca lo suficientemente cerca:

.....    .....    .....
.TH.. -> .T.H. -> ..TH.
.....    .....    .....

...    ...    ...
.T.    .T.    ...
.H. -> ... -> .T.
...    .H.    .H.
...    ...    ...
```

De lo contrario, si la cabeza y la cola no se tocan y no están en la misma fila o columna, la cola siempre se mueve un paso en diagonal para mantenerse al día:

```
.....    .....    .....
.....    ..H..    ..H..
..H.. -> ..... -> ..T..
.T...    .T...    .....
.....    .....    .....

.....    .....    .....
.....    .....    .....
..H.. -> ...H. -> ..TH.
.T...    .T...    .....
.....    .....    .....
```

Solo necesita averiguar dónde va la cola mientras la cabeza sigue una serie de movimientos. Suponga que la cabeza y la cola comienzan en la misma posición, superpuestas.

Por ejemplo:

```
R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2
```

Esta serie de movimientos mueve la cabeza cuatro pasos **hacia la derecha** , luego hacia arriba cuatro pasos, luego **hacia la izquierda** tres pasos, luego **hacia abajo** un paso, y así sucesivamente. Después de cada paso, deberá actualizar la posición de la cola si el paso significa que la cabeza ya no está adyacente a la cola. Visualmente, estos movimientos ocurren de la siguiente manera ( smarca la posición inicial como punto de referencia):

```
== Initial State ==

......
......
......
......
H.....  (H covers T, s)

== R 4 ==

......
......
......
......
TH....  (T covers s)

......
......
......
......
sTH...

......
......
......
......
s.TH..

......
......
......
......
s..TH.

== U 4 ==

......
......
......
....H.
s..T..

......
......
....H.
....T.
s.....

......
....H.
....T.
......
s.....

....H.
....T.
......
......
s.....

== L 3 ==

...H..
....T.
......
......
s.....

..HT..
......
......
......
s.....

.HT...
......
......
......
s.....

== D 1 ==

..T...
.H....
......
......
s.....

== R 4 ==

..T...
..H...
......
......
s.....

..T...
...H..
......
......
s.....

......
...TH.
......
......
s.....

......
....TH
......
......
s.....

== D 1 ==

......
....T.
.....H
......
s.....

== L 5 ==

......
....T.
....H.
......
s.....

......
....T.
...H..
......
s.....

......
......
..HT..
......
s.....

......
......
.HT...
......
s.....

......
......
HT....
......
s.....

== R 2 ==

......
......
.H....  (H covers T)
......
s.....

......
......
.TH...
......
s.....
```

Después de simular la cuerda, puede contar todas las posiciones que **visitó la cola al menos una vez**. En este diagrama, snuevamente marca la posición inicial (que también visitó la cola) y #marca otras posiciones que visitó la cola:

```
..##..
...##.
.####.
....#.
s###..
```

Entonces, hay 13posiciones que la cola visitó al menos una vez.

Simule su serie hipotética completa de movimientos.**¿Cuántas posiciones visita la cola de la cuerda al menos una vez?**

[Para comenzar, obtenga la entrada de el desafío.](./input.txt)