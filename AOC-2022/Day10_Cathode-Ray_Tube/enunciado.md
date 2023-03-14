# Día 10: Tubo de rayos catódicos
[volver a listado de retos](./../../README.md)

## Enunciado

Evitas las cuerdas, te sumerges en el río y nadas hasta la orilla.

Los Elfos gritan algo acerca de reunirse con ellos río arriba, pero el río es demasiado ruidoso para decir exactamente lo que están diciendo. Terminan de cruzar el puente y desaparecen de la vista.

Situaciones como esta deben ser la razón por la cual los Elfos priorizaron hacer funcionar el sistema de comunicación en su dispositivo portátil. Lo sacas de tu mochila, pero la cantidad de agua que se drena lentamente de una gran grieta en su pantalla te dice que probablemente no será de mucha utilidad inmediata.

¡ A menos que pueda diseñar un reemplazo para el sistema de video del dispositivo! Parece ser una especie de pantalla (de tubo de rayos catódicos)[https://en.wikipedia.org/wiki/Cathode-ray_tube] y una CPU simple que son impulsadas por un circuito de reloj preciso . El circuito del reloj marca a un ritmo constante; cada tic se llama un **ciclo**.

Comience por averiguar la señal que envía la CPU. La CPU tiene un único registro, X, que comienza con el valor 1. Solo admite dos instrucciones:

  - **addx V** tarda **dos ciclos** en completarse. **Después de dos ciclos**, el **X** registro aumenta en el valor **V**. ( V puede ser negativo)
  - **noop** tarda un ciclo en completarse. No tiene otro efecto.
  - 

La CPU usa estas instrucciones en un programa (su entrada de rompecabezas) para, de alguna manera, decirle a la pantalla qué dibujar.

Considere el siguiente pequeño programa:

```
noop
addx 3
addx -5
```

La ejecución de este programa se desarrolla de la siguiente manera:

  - Al comienzo del primer ciclo, la **noop** instrucción comienza a ejecutarse. Durante el primer ciclo, **X es 1**. Después del primer ciclo, la noopinstrucción termina de ejecutarse, sin hacer nada.
  - Al comienzo del segundo ciclo, la **addx 3** instrucción comienza a ejecutarse. Durante el segundo ciclo, **X sigue siendo 1**.
  - Durante el tercer ciclo, X sigue siendo 1. Después del tercer ciclo, la **addx 3** instrucción termina de ejecutarse y se establece **X en 4**.
  - Al comienzo del cuarto ciclo, la **addx -5** instrucción comienza a ejecutarse. Durante el cuarto ciclo, **X sigue siendo 4**.
  - Durante el quinto ciclo, **X** sigue siendo **4**. Después del quinto ciclo, la addx -5instrucción termina de ejecutarse y se establece **X en -1**.

Tal vez pueda aprender algo observando el valor del X registro durante la ejecución. Por ahora, considere la intensidad de la señal (el número de ciclo multiplicado por el valor del X registro) durante el ciclo 20 y cada 40 ciclos posteriores (es decir, durante los ciclos 20, 60, 100, 140, 180 y 220).

Por ejemplo, considere este programa más grande:

```
addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop
```

Las intensidades de señal interesantes se pueden determinar de la siguiente manera:

  - Durante el ciclo 20, el registro **X** tiene el valor **21**, por lo que la intensidad de la señal es **20 * 21 = 420 . (El vigésimo ciclo ocurre a la mitad del segundo addx -1, por lo que el valor de registro Xes el valor inicial, 1más todos los demás addxvalores hasta ese punto: 1 + 15 - 11 + 6 - 3 + 5 - 1 - 8 + 13 + 4 = 21.)**
  - Durante el ciclo 60, el registro **X** tiene el valor **19**, por lo que la intensidad de la señal es **60 * 19 = 1140.**
  - Durante el ciclo 100, el registro **X** tiene el valor **18**, por lo que la intensidad de la señal es **100 * 18 = 1800.**
  - Durante el ciclo 140, el registro **X** tiene el valor **21**, por lo que la intensidad de la señal es **140 * 21 = 2940.**
  - Durante el ciclo 180, el registro **X** tiene el valor **16**, por lo que la intensidad de la señal es **180 * 16 = 2880.**
  - Durante el ciclo 220, el registro **X** tiene el valor **18**, por lo que la intensidad de la señal es **220 * 18 = 3960.**

La suma de estas intensidades de señal es __13140__.

Encuentre la intensidad de la señal durante los ciclos 20, 60, 100, 140, 180 y 220. **¿Cuál es la suma de estas seis intensidades de señal?**

[Para comenzar, obtenga la entrada de el desafío.](./input.txt)