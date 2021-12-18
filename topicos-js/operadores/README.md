# ![DevSuperior logo](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/devsuperior-logo-small.png) Curso Nivelamento JavaScript
>  Aprenda de forma rápida os principais fundamentos de JavaScript para se preparar para trabalhar com frameworks front end

## Realização
[DevSuperior - Escola de programação](https://devsuperior.com.br)

[![DevSuperior no Instagram](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/ig-icon.png)](https://instagram.com/devsuperior.ig)
[![DevSuperior no Youtube](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/yt-icon.png)](https://youtube.com/devsuperior)

## JavaScript - Operadores

### Operadores aritméticos

```
+
-
*
/
%
** (exponenciação ES2016)
```

```javascript
console.log("Operadores aritméticos");
console.log(`3 + 4 = ${3 + 4}`);
console.log(`3 - 4 = ${3 - 4}`);
console.log(`3 * 4 = ${3 * 4}`);
console.log(`19 / 3 = ${19 / 5}`);
console.log(`19 % 3 = ${19 % 5}`);
console.log(`3 ** 4 = ${3 ** 4}`);
```

### Operadores comparativos

```
< 
> 
<= 
>=
```

```javascript
console.log("Operadores comparativos");
console.log(`10 > 5 = ${10 > 5}`);
console.log(`10 < 5 = ${10 < 5}`);
console.log(`10 >= 5 = ${10 >= 5}`);
console.log(`10 <= 5 = ${10 <= 5}`);
```

```
Converte para um tipo em comum, depois compara:
== 
!=

Compara levando em conta também o tipo:
=== 
!== 

object: compara referência
string, number, boolean: compara valor
```

```javascript
console.log("Operadores comparativos de igualdade");
console.log(`"" == false: ${"" == false}`);
console.log(`"" === false: ${"" === false}`);
console.log(`"17" == 17: ${"17" == 17}`);
console.log(`"17" === 17: ${"17" === 17}`);

console.log("Operadores comparativos de igualdade");
const x = "Maria";
const y = "Maria";
const a = new String("Maria");
const b = new String("Maria");
console.log(`const x = "Maria"`);
console.log(`const y = "Maria"`);
console.log(`const a = new String("Maria")`);
console.log(`const b = new String("Maria"`);
console.log(`x === y: ${x === y}`);
console.log(`a === b: ${a === b}`);
console.log(`typeof x: ${typeof x}`);
console.log(`typeof a: ${typeof a}`);
```

### Operadores lógicos

```
&& (E)
|| (OU)
! (NÃO)
```

```javascript
console.log("Operadores lógicos");
console.log(`"(10 > 5) && (10 > 20): " ${(10 > 5) && (10 > 20)}`);
console.log(`"(10 > 5) && (10 < 20): " ${(10 > 5) && (10 < 20)}`);
console.log(`"(10 > 5) || (10 > 20): " ${(10 > 5) || (10 > 20)}`);
console.log(`"(10 < 5) || (10 > 20): " ${(10 > 5) && (10 > 20)}`);
console.log(`"!(10 > 5): " ${!(10 > 5)}`);
```
