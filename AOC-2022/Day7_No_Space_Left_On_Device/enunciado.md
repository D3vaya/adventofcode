# ⭐️ Día 7: No queda espacio en el dispositivo
[volver a listado de retos](./../../README.md)

## Enunciado

Puede escuchar el canto de los pájaros y las gotas de lluvia golpeando las hojas a medida que avanza la expedición. De vez en cuando, incluso puedes escuchar sonidos mucho más fuertes en la distancia; ¿Qué tamaño tienen los animales aquí, de todos modos?

El dispositivo que te dieron los Elfos tiene problemas con algo más que su sistema de comunicación. Intenta ejecutar una actualización del sistema:

```
$ system-update --please --pretty-please-with-sugar-on-top
Error: No space left on device
```

¿Quizás pueda eliminar algunos archivos para hacer espacio para la actualización?

Navega por el sistema de archivos para evaluar la situación y guardar la salida de terminal resultante (su entrada de rompecabezas). Por ejemplo:

```
$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k
```

El sistema de archivos consta de un árbol de archivos (datos sin formato) y directorios (que pueden contener otros directorios o archivos). El directorio más externo se llama __/__. Puede navegar por el sistema de archivos, entrar o salir de los directorios y enumerar el contenido del directorio en el que se encuentra actualmente.

Dentro de la salida de la terminal, las líneas que comienzan con **$** son **comandos que ejecutó** , muy parecido a algunas computadoras modernas:

  - **cd** significa **cambiar de directorio**. Esto cambia qué directorio es el directorio actual, pero el resultado específico depende del argumento:
    - **cd x** se mueve en un nivel: busca en el directorio actual el directorio nombrado x y lo convierte en el directorio actual.
    - **cd ..** se mueve hacia fuera un nivel: encuentra el directorio que contiene el directorio actual, luego convierte ese directorio en el directorio actual.
    - **cd** __/__ cambia el directorio actual al directorio más externo, __/__.
  - ls **lista** de medios . Imprime todos los archivos y directorios contenidos inmediatamente por el directorio actual:
    - **123 abc**  significa que el directorio actual contiene un archivo cuyo nombre **abc** es de tamaño **123**.
    - **dir xyz** significa que el directorio actual contiene un directorio llamado **xyz**.

Dados los comandos y la salida en el ejemplo anterior, puede determinar que el sistema de archivos se ve visualmente así:

```
- / (dir)
  - a (dir)
    - e (dir)
      - i (file, size=584)
    - f (file, size=29116)
    - g (file, size=2557)
    - h.lst (file, size=62596)
  - b.txt (file, size=14848514)
  - c.dat (file, size=8504156)
  - d (dir)
    - j (file, size=4060174)
    - d.log (file, size=8033020)
    - d.ext (file, size=5626152)
    - k (file, size=7214296)
```

Aquí hay cuatro directorios: __/__ (el directorio más externo), **a** y **d** (que están en __/__), y **e** (que están en **a**). Estos directorios también contienen archivos de varios tamaños.

Dado que el disco está lleno, su primer paso probablemente debería ser encontrar directorios que sean buenos candidatos para la eliminación. Para ello, debe determinar el **tamaño total** de cada directorio. El tamaño total de un directorio es la suma de los tamaños de los archivos que contiene, directa o indirectamente. (Los directorios en sí mismos no cuentan como si tuvieran un tamaño intrínseco).

Los tamaños totales de los directorios anteriores se pueden encontrar de la siguiente manera:

  - El tamaño total del directorio `e` es **584** porque contiene un solo archivo `i` de tamaño 584 y ningún otro directorio.
  - El directorio `a` tiene un tamaño total de **94853** porque contiene archivos **f** (tamaño 29116), **g** (tamaño 2557) y **h.lst** (tamaño 62596), además de archivos **i** indirectamente ( **a** contiene **e** que contiene **i**).
  - El directorio `d` tiene un tamaño total de **24933642** .
  - Como directorio más externo, __/__ contiene todos los archivos. Su tamaño total es **48381165** , la suma del tamaño de cada archivo.

Para comenzar, encuentre todos los directorios con un tamaño total de **100000 como máximo** y luego calcule la suma de sus tamaños totales. En el ejemplo anterior, estos directorios son a y e; la suma de sus tamaños totales es **95437** (94853 + 584). (Como en este ejemplo, ¡este proceso puede contar archivos más de una vez!)

Encuentre todos los directorios con un tamaño total de 100000 como máximo. **¿Cuál es la suma de los tamaños totales de esos directorios?**.

[Para comenzar, obtenga la entrada de el desafío.](./input.txt)