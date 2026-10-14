---
nombre: Análisis Matemático I
code: MAT-01
resumen: Derivadas, integrales, series y ecuaciones diferenciales.
---

## Series numéricas

Una serie es la suma de los términos de una sucesión. Converge si la sucesión de sumas parciales tiene límite finito.

```
Geométrica: Σ a·rⁿ  converge si |r| < 1  →  suma = a / (1 − r)
Serie p:    Σ 1/nᵖ     converge si p > 1
```

Criterio del cociente: calculá L = lím |aₙ₊₁ / aₙ|.

- L < 1: converge absolutamente.
- L > 1: diverge.
- L = 1: el criterio no decide, probá otro.

> **Ojo:** si aₙ no tiende a 0, la serie diverge. Que tienda a 0 no alcanza para que converja (ej: la serie armónica).

## Series de potencias

Una serie de potencias es Σ cₙ(x − a)ⁿ. Siempre hay un radio de convergencia R: adentro converge, afuera diverge.

```
R = 1 / L   con   L = lím |cₙ₊₁ / cₙ|
Intervalo: (a − R, a + R)  →  revisar los extremos aparte
```

> **Importante:** en los extremos el criterio del cociente no decide. Reemplazá x por cada extremo y analizá la serie numérica que queda.

## Integrales impropias

Se plantean con un límite cuando el intervalo es infinito o la función no está acotada en un punto.

```
∫₁^∞ 1/xᵖ dx  converge si p > 1, diverge si p ≤ 1
```

Para decidir sin calcular, compará con una integral conocida (criterio de comparación).

## Longitud de arco

Longitud de la curva y = f(x) entre a y b, con f' continua:

```
L = ∫ₐᵇ √(1 + (f'(x))²) dx
```

Casi siempre el trabajo está en simplificar lo de adentro de la raíz hasta que quede un cuadrado perfecto.

## Ecuaciones diferenciales

Las de variables separables se resuelven pasando todo lo de y de un lado y todo lo de x del otro, e integrando.

```
dy/dx = g(x)·h(y)  →  ∫ dy/h(y) = ∫ g(x) dx
```

> **Tip:** no te olvides la constante de integración y usá la condición inicial para fijarla.
