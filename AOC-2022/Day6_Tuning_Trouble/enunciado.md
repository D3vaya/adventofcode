# ⭐️ Día 6: Problema de afinación
[volver a listado de retos](./../../README.md)

## Enunciado

Los preparativos finalmente están completos; tú y los Elfos abandonan el campamento a pie y comienzan a dirigirse hacia el bosque de **carambolas** .

Mientras te mueves a través de la densa maleza, uno de los Elfos te da un **dispositivo** de mano . Él dice que tiene muchas características sofisticadas, pero la más importante para configurar en este momento es el **sistema de comunicación** .

Sin embargo, debido a que escuchó que tienes [una experiencia significativa](https://adventofcode.com/2016/day/25) [en el manejo](https://adventofcode.com/2019/day/7) [de sistemas](https://adventofcode.com/2021/day/25) [basados en señales](https://adventofcode.com/2019/day/16) , convenció a los otros Elfos de que estaría bien darte su único dispositivo que funciona mal; seguramente no tendrás problemas para arreglarlo.

Como si estuviera inspirado en el momento cómico, el dispositivo emite algunas chispas de colores .

Para poder comunicarse con los Elfos, el dispositivo debe **conectarse a su señal** . La señal es una serie de caracteres aparentemente aleatorios que el dispositivo recibe uno a la vez.

Para reparar el sistema de comunicación, debe agregar una subrutina al dispositivo que detecta un **marcador de inicio de paquete** en el flujo de datos. En el protocolo que utilizan los Elfos, el inicio de un paquete se indica mediante una secuencia de **cuatro caracteres que son todos diferentes**.

El dispositivo enviará a su subrutina un búfer de flujo de datos (su entrada de rompecabezas); su subrutina necesita identificar la primera posición donde los cuatro caracteres recibidos más recientemente eran todos diferentes. Específicamente, necesita informar el número de caracteres desde el comienzo del búfer hasta el final del primer marcador de cuatro caracteres.

Por ejemplo, suponga que recibe el siguiente búfer de flujo de datos:

```
mjqjpqmgbljsphdztnvjfqwrcgsmlb
```

Después de que se hayan recibido los primeros tres caracteres (**mjq**), aún no se han recibido suficientes caracteres para encontrar el marcador. La primera vez que puede aparecer un marcador es después de recibir el cuarto carácter, lo que hace que los cuatro caracteres más recientes **mjqj**. Porque **j** se repite, esto no es un marcador.

La primera vez que aparece un marcador es después de que llega el **séptimo** carácter. Una vez que lo hace, los últimos cuatro caracteres recibidos son jpqm, que son todos diferentes. En este caso, su subrutina debe informar el valor **7**, porque el primer marcador de inicio de paquete se completa después de que se hayan procesado **7** caracteres.

Aqui hay algunos ejemplos mas:

  - `bvwbjplbgvbhsrlpgdmjqwftvncz`: primer marcador después del carácter **5**
  - `nppdvjthqldpwncqszvftbrmjlhg`: primer marcador después del carácter **6**
  - `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`: primer marcador después del carácter **10**
  - `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`: primer marcador después del carácter **11**

**¿Cuántos caracteres deben procesarse antes de que se detecte el primer marcador de inicio de paquete?**

## ⭐️⭐️ Parte Dos

El sistema de comunicación de su dispositivo detecta correctamente los paquetes, pero sigue sin funcionar. Parece que también necesita buscar **mensajes**.

Un **marcador de inicio de mensaje** es como un marcador de inicio de paquete, excepto que consta de **14 caracteres distintos** en lugar de 4.

Estas son las primeras posiciones de los marcadores de inicio de mensaje para todos los ejemplos anteriores:

  - `mjqjpqmgbljsphdztnvjfqwrcgsmlb`: primer marcador después del carácter **19**
  - `bvwbjplbgvbhsrlpgdmjqwftvncz`: primer marcador después del carácter **23**
  - `nppdvjthqldpwncqszvftbrmjlhg`: primer marcador después del carácter **23**
  - `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`: primer marcador después del carácter **29**
  - `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`: primer marcador después del carácter **26**
  - 
**¿Cuántos caracteres deben procesarse antes de que se detecte el primer marcador de inicio de mensaje?**

[Para comenzar, obtenga la entrada de el desafío.](./input.txt)