const bank={
    int:[
        [
            { "q": "∫ x dx", "wolfram": "[x, x]" },
            { "q": "∫ x² dx", "wolfram": "[x^2, x]" },
            { "q": "∫ 3x dx", "wolfram": "[3 x, x]" },
            { "q": "∫ 5 dx", "wolfram": "[5, x]" },
            { "q": "∫ 1/x dx", "wolfram": "[1/x, x]" },
            { "q": "∫ √x dx", "wolfram": "[Sqrt[x], x]" },
            { "q": "∫ 1/√x dx", "wolfram": "[1/Sqrt[x], x]" },
            { "q": "∫ x³ dx", "wolfram": "[x^3, x]" },
            { "q": "∫ eˣ dx", "wolfram": "[Exp[x], x]" },
            { "q": "∫ 2eˣ dx", "wolfram": "[2 Exp[x], x]" },
            { "q": "∫ sin(x) dx", "wolfram": "[Sin[x], x]" },
            { "q": "∫ cos(x) dx", "wolfram": "[Cos[x], x]" },
            { "q": "∫ 4x² dx", "wolfram": "[4 x^2, x]" },
            { "q": "∫ (x + 1) dx", "wolfram": "[x + 1, x]" },
            { "q": "∫ 7x⁴ dx", "wolfram": "[7 x^4, x]" },
            { "q": "∫ 1/(x + 1) dx", "wolfram": "Itegrate[1/(x+1), x]" },
            { "q": "∫ 2/x dx", "wolfram": "Integrte[2/x, x]" },
            { "q": "∫ (3x² + 2x) dx", "wolfram": "[3 x^2 + 2 x, x]" },
            { "q": "∫ x⁻² dx", "wolfram": "[x^-2, x]" },
            { "q": "∫ tan(x) dx", "wolfram": "[Tan[x], x]" },
            { "q": "∫ sec²(x) dx", "wolfram": "[Sec[x]^2, x]" },
            { "q": "∫ (5x + 3) dx", "wolfram": "[5 x + 3, x]" },
            { "q": "∫ x·cos(x) dx", "wolfram": "[x Cos[x], x]" },
            { "q": "∫ e^(2x) dx", "wolfram": "[Exp[2 x], x]" },
            { "q": "∫ 2/(x + 3) dx", "wolfram": "[2/(x+3), x]" },
            { "q": "∫ x/2 dx", "wolfram": "[x/2, x]" },
            { "q": "∫ 9x³ dx", "wolfram": "[9 x^3, x]" },
            { "q": "∫ sin(2x) dx", "wolfram": "[Sin[2 x], x]" },
            { "q": "∫ 4/x² dx", "wolfram": "[4/x^2, x]" },
            { "q": "∫ ln(x) dx", "wolfram": "[Log[x], x]" }
        ],
        [
  { "q": "∫ (2x³ + x) dx", "wolfram": "Integrate[2 x^3 + x, x]" },
  { "q": "∫ (3x / (x + 1)) dx", "wolfram": "Integrate[3 x/(x+1), x]" },
  { "q": "∫ x·eˣ dx", "wolfram": "Integrate[x Exp[x], x]" },
  { "q": "∫ x·sin(x) dx", "wolfram": "Integrate[x Sin[x], x]" },
  { "q": "∫ x·cos(x) dx", "wolfram": "Integrate[x Cos[x], x]" },
  { "q": "∫ (x² · eˣ) dx", "wolfram": "Integrate[x^2 Exp[x], x]" },
  { "q": "∫ (eˣ / x) dx", "wolfram": "Integrate[Exp[x]/x, x]" },
  { "q": "∫ (1 / (x² + 1)) dx", "wolfram": "Integrate[1/(x^2+1), x]" },
  { "q": "∫ (x / (x² + 1)) dx", "wolfram": "Integrate[x/(x^2+1), x]" },
  { "q": "∫ (3 / (x² + 4)) dx", "wolfram": "Integrate[3/(x^2+4), x]" },
  { "q": "∫ (5x / √(x² + 1)) dx", "wolfram": "Integrate[5 x/Sqrt[x^2+1], x]" },
  { "q": "∫ (4x³ − 2x) dx", "wolfram": "Integrate[4 x^3 - 2 x, x]" },
  { "q": "∫ (sin(2x)) dx", "wolfram": "Integrate[Sin[2 x], x]" },
  { "q": "∫ (cos(3x)) dx", "wolfram": "Integrate[Cos[3 x], x]" },
  { "q": "∫ (x·ln(x)) dx", "wolfram": "Integrate[x Log[x], x]" },
  { "q": "∫ (ln(x)) dx", "wolfram": "Integrate[Log[x], x]" },
  { "q": "∫ (1 / (x ln(x))) dx", "wolfram": "Integrate[1/(x Log[x]), x]" },
  { "q": "∫ (x²·ln(x)) dx", "wolfram": "Integrate[x^2 Log[x], x]" },
  { "q": "∫ (x / √x) dx", "wolfram": "Integrate[x/Sqrt[x], x]" },
  { "q": "∫ (5 / √(x+2)) dx", "wolfram": "Integrate[5/Sqrt[x+2], x]" },
  { "q": "∫ (7x / (x² + 9)) dx", "wolfram": "Integrate[7 x/(x^2+9), x]" },
  { "q": "∫ (1 / (x² − 4)) dx", "wolfram": "Integrate[1/(x^2-4), x]" },
  { "q": "∫ (3x²·cos(x)) dx", "wolfram": "Integrate[3 x^2 Cos[x], x]" },
  { "q": "∫ (x³·sin(x)) dx", "wolfram": "Integrate[x^3 Sin[x], x]" },
  { "q": "∫ (e^(2x) · x) dx", "wolfram": "Integrate[x Exp[2 x], x]" },
  { "q": "∫ (4x · cos(2x)) dx", "wolfram": "Integrate[4 x Cos[2 x], x]" },
  { "q": "∫ (x² / (x + 1)) dx", "wolfram": "Integrate[x^2/(x+1), x]" },
  { "q": "∫ (x⁴ + 3x² + 1) dx", "wolfram": "Integrate[x^4 + 3 x^2 + 1, x]" },
  { "q": "∫ (tan(x) · sec²(x)) dx", "wolfram": "Integrate[Tan[x] Sec[x]^2, x]" },
  { "q": "∫ (x² / √(x² + 4)) dx", "wolfram": "Integrate[x^2/Sqrt[x^2+4], x]" }
],
[
  { "q": "∫ (x² · e^(3x)) dx", "wolfram": "x^2 * Exp[3 x]" },
  { "q": "∫ (x · cos(2x)) dx", "wolfram": "x * Cos[2 x]" },
  { "q": "∫ ((x³ + 1) / (x + 2)) dx", "wolfram": "(x^3 + 1)/(x + 2)" },
  { "q": "∫ (ln(x) / x²) dx", "wolfram": "Log[x]/x^2" },
  { "q": "∫ (x² · ln(x)) dx", "wolfram": "x^2 * Log[x]" },
  { "q": "∫ (e^(x) · sin(x)) dx", "wolfram": "Exp[x] * Sin[x]" },
  { "q": "∫ (e^(x) · cos(x)) dx", "wolfram": "Exp[x] * Cos[x]" },
  { "q": "∫ (x / √(x² − 1)) dx", "wolfram": "x/Sqrt[x^2 - 1]" },
  { "q": "∫ (3x² / √(x³ + 1)) dx", "wolfram": "3 x^2 / Sqrt[x^3 + 1]" },
  { "q": "∫ (x⁴ · e^(−x)) dx", "wolfram": "x^4 * Exp[-x]" },
  { "q": "∫ (1 / (x² √(x))) dx", "wolfram": "1/(x^2 * Sqrt[x])" },
  { "q": "∫ (sin(x) / x) dx", "wolfram": "Sin[x]/x" },
  { "q": "∫ (x³ · cos(x²)) dx", "wolfram": "x^3 * Cos[x^2]" },
  { "q": "∫ (x² · sin(x²)) dx", "wolfram": "x^2 * Sin[x^2]" },
  { "q": "∫ (ln(x) · e^(2x)) dx", "wolfram": "Log[x] * Exp[2 x]" },
  { "q": "∫ ((2x + 1) / (x² + x + 1)) dx", "wolfram": "(2 x + 1)/(x^2 + x + 1)" },
  { "q": "∫ (x / (x³ + 2)) dx", "wolfram": "x/(x^3 + 2)" },
  { "q": "∫ (x² / (x⁴ + 1)) dx", "wolfram": "x^2/(x^4 + 1)" },
  { "q": "∫ (tan(x) · e^(x)) dx", "wolfram": "Tan[x] * Exp[x]" },
  { "q": "∫ (sec(x) · tan(x)) dx", "wolfram": "Sec[x] * Tan[x]" },
  { "q": "∫ (x³ · ln(x² + 1)) dx", "wolfram": "x^3 * Log[x^2 + 1]" },
  { "q": "∫ (1 / (x ln²(x))) dx", "wolfram": "1/(x * Log[x]^2)" },
  { "q": "∫ (cos(x) / (1 + sin²(x))) dx", "wolfram": "Cos[x]/(1 + Sin[x]^2)" },
  { "q": "∫ (x⁵ − 3x + 1) dx", "wolfram": "x^5 - 3 x + 1" },
  { "q": "∫ (x⁴ · ln(√x)) dx", "wolfram": "x^4 * Log[Sqrt[x]]" },
  { "q": "∫ (x² / √(x³ − 4)) dx", "wolfram": "x^2/Sqrt[x^3 - 4]" },
  { "q": "∫ (sin(3x) · cos(2x)) dx", "wolfram": "Sin[3 x] * Cos[2 x]" },
  { "q": "∫ (e^(−2x) · x³) dx", "wolfram": "x^3 * Exp[-2 x]" },
  { "q": "∫ (1 / √(4 − x²)) dx", "wolfram": "1/Sqrt[4 - x^2]" },
  { "q": "∫ (x² + √x + 1) dx", "wolfram": "x^2 + Sqrt[x] + 1" }
],
[
  { "q": "∫ (x³ · e^(x²)) dx", "wolfram": "x^3 * Exp[x^2]" },
  { "q": "∫ (x² · ln(x) · e^x) dx", "wolfram": "x^2 * Log[x] * Exp[x]" },
  { "q": "∫ (x·cos(x²)) dx", "wolfram": "x * Cos[x^2]" },
  { "q": "∫ (x² / (1 + x⁴)) dx", "wolfram": "x^2/(1 + x^4)" },
  { "q": "∫ (ln(x) / (x² + 1)) dx", "wolfram": "Log[x]/(x^2 + 1)" },
  { "q": "∫ (x⁵ · e^(x³)) dx", "wolfram": "x^5 * Exp[x^3]" },
  { "q": "∫ (x · sin(x) · e^(x)) dx", "wolfram": "x * Sin[x] * Exp[x]" },
  { "q": "∫ (e^(√x) / √x) dx", "wolfram": "Exp[Sqrt[x]]/Sqrt[x]" },
  { "q": "∫ (x² / √(x⁴ + 1)) dx", "wolfram": "x^2/Sqrt[x^4 + 1]" },
  { "q": "∫ (x³ · ln(1 + x²)) dx", "wolfram": "x^3 * Log[1 + x^2]" },
  { "q": "∫ (sin(x²)) dx", "wolfram": "Sin[x^2]" },
  { "q": "∫ (cos(ln(x))) dx", "wolfram": "Cos[Log[x]]" },
  { "q": "∫ (x / (√x + 1)) dx", "wolfram": "x/(Sqrt[x] + 1)" },
  { "q": "∫ (ln(x)·ln(ln(x))) dx", "wolfram": "Log[x] * Log[Log[x]]" },
  { "q": "∫ (x⁴ · cos(x³)) dx", "wolfram": "x^4 * Cos[x^3]" },
  { "q": "∫ (e^(1/x) / x²) dx", "wolfram": "Exp[1/x]/x^2" },
  { "q": "∫ (x / (1 + x + x²)) dx", "wolfram": "x/(1 + x + x^2)" },
  { "q": "∫ (x² · tan(x)) dx", "wolfram": "x^2 * Tan[x]" },
  { "q": "∫ (x³ / ln(x)) dx", "wolfram": "x^3/Log[x]" },
  { "q": "∫ (√x · e^(x²)) dx", "wolfram": "Sqrt[x] * Exp[x^2]" },
  { "q": "∫ (x·cos(x)·ln(x)) dx", "wolfram": "x * Cos[x] * Log[x]" },
  { "q": "∫ (x³ · ln(x² + 3)) dx", "wolfram": "x^3 * Log[x^2 + 3]" },
  { "q": "∫ (1 / (x · √(ln(x)))) dx", "wolfram": "1/(x * Sqrt[Log[x]])" },
  { "q": "∫ (x²·e^(x)·sin(x)) dx", "wolfram": "x^2 * Exp[x] * Sin[x]" },
  { "q": "∫ (sin(x) / (x² + 1)) dx", "wolfram": "Sin[x]/(x^2 + 1)" },
  { "q": "∫ (x⁴ / (x⁵ + 1)) dx", "wolfram": "x^4/(x^5 + 1)" },
  { "q": "∫ (x³·e^(x² + 1)) dx", "wolfram": "x^3 * Exp[x^2 + 1]" },
  { "q": "∫ (1 / ((x+1)·√(x²+2))) dx", "wolfram": "1/((x+1) * Sqrt[x^2 + 2])" },
  { "q": "∫ (x·ln(x) / √(1 + x²)) dx", "wolfram": "x * Log[x]/Sqrt[1 + x^2]" },
  { "q": "∫ (e^(x) · ln(x) · cos(x)) dx", "wolfram": "Exp[x] * Log[x] * Cos[x]" }
],
[
  { "q": "∫ (x² · e^(x²) · sin(x²)) dx", "wolfram": "x^2 * Exp[x^2] * Sin[x^2]" },
  { "q": "∫ (e^(−1/x) / x³) dx", "wolfram": "Exp[-1/x]/x^3" },
  { "q": "∫ (x⁴ · ln(x) · e^(x³)) dx", "wolfram": "x^4 * Log[x] * Exp[x^3]" },
  { "q": "∫ (cos(√x) / √x) dx", "wolfram": "Cos[Sqrt[x]]/Sqrt[x]" },
  { "q": "∫ (ln(x) · ln(ln(x))) / x dx", "wolfram": "Log[x] * Log[Log[x]]/x" },
  { "q": "∫ (x⁵ · sin(x³)) dx", "wolfram": "x^5 * Sin[x^3]" },
  { "q": "∫ (x² / (ln(x))²) dx", "wolfram": "x^2/Log[x]^2" },
  { "q": "∫ (e^(x² + e^x)) dx", "wolfram": "Exp[x^2 + Exp[x]]" },
  { "q": "∫ (x · tan(x²)) dx", "wolfram": "x * Tan[x^2]" },
  { "q": "∫ (sin(ln(x))) / x dx", "wolfram": "Sin[Log[x]]/x" },
  { "q": "∫ (x³ · e^(x·ln(x))) dx", "wolfram": "x^3 * Exp[x*Log[x]]" },
  { "q": "∫ (x² · cos(x) · e^(sin(x))) dx", "wolfram": "x^2 * Cos[x] * Exp[Sin[x]]" },
  { "q": "∫ (e^(√x) · sin(√x)) / √x dx", "wolfram": "Exp[Sqrt[x]] * Sin[Sqrt[x]]/Sqrt[x]" },
  { "q": "∫ 1 / (x² · √(ln(x))) dx", "wolfram": "1/(x^2 * Sqrt[Log[x]])" },
  { "q": "∫ (x³ · ln(x² + sin(x))) dx", "wolfram": "x^3 * Log[x^2 + Sin[x]]" },
  { "q": "∫ (e^(x) · sin(e^(x))) dx", "wolfram": "Exp[x] * Sin[Exp[x]]" },
  { "q": "∫ (cos(x² + 1) · x) dx", "wolfram": "Cos[x^2 + 1] * x" },
  { "q": "∫ (e^(x²) · ln(x) · x) dx", "wolfram": "Exp[x^2] * Log[x] * x" },
  { "q": "∫ (x⁴ / √(x⁶ + 1)) dx", "wolfram": "x^4/Sqrt[x^6 + 1]" },
  { "q": "∫ (sin(x) / √(1 − cos(x))) dx", "wolfram": "Sin[x]/Sqrt[1 - Cos[x]]" },
  { "q": "∫ (x² · e^(x²) · ln(x²)) dx", "wolfram": "x^2 * Exp[x^2] * Log[x^2]" },
  { "q": "∫ (cos(ln(x² + 1))) / (x² + 1) dx", "wolfram": "Cos[Log[x^2 + 1]]/(x^2 + 1)" },
  { "q": "∫ (e^(x) · cos(e^(x²))) · 2x dx", "wolfram": "2 x * Exp[x] * Cos[Exp[x^2]]" },
  { "q": "∫ (x³ + x) · e^(x² + x⁴) dx", "wolfram": " (x^3 + x) * Exp[x^2 + x^4]" },
  { "q": "∫ (sin(1/x)) / x² dx", "wolfram": "Sin[1/x]/x^2" },
  { "q": "∫ (x² · e^(x + e^x)) dx", "wolfram": "x^2 * Exp[x + Exp[x]]" },
  { "q": "∫ (x⁵ · ln(x) · sin(x²)) dx", "wolfram": "x^5 * Log[x] * Sin[x^2]" },
  { "q": "∫ (e^(tan(x)) · sec²(x)) dx", "wolfram": "Exp[Tan[x]] * Sec[x]^2" },
  { "q": "∫ (x · ln(x) · ln(ln(x))) dx", "wolfram": "x * Log[x] * Log[Log[x]]" },
  { "q": "∫ (x² / √(sin(x³) + 1)) dx", "wolfram": "x^2/Sqrt[Sin[x^3] + 1]" }
]
    ],
    dx:[
        [
  { "q": "d/dx (x²)", "wolfram": "x^2" },
  { "q": "d/dx (x³)", "wolfram": "x^3" },
  { "q": "d/dx (3x)", "wolfram": "3*x" },
  { "q": "d/dx (5)", "wolfram": "5" },
  { "q": "d/dx (√x)", "wolfram": "Sqrt[x]" },
  { "q": "d/dx (1/x)", "wolfram": "1/x" },
  { "q": "d/dx (x⁴ + 2x²)", "wolfram": "x^4 + 2*x^2" },
  { "q": "d/dx (eˣ)", "wolfram": "Exp[x]" },
  { "q": "d/dx (2eˣ)", "wolfram": "2*Exp[x]" },
  { "q": "d/dx (sin(x))", "wolfram": "Sin[x]" },
  { "q": "d/dx (cos(x))", "wolfram": "Cos[x]" },
  { "q": "d/dx (tan(x))", "wolfram": "Tan[x]" },
  { "q": "d/dx (x² + 3x)", "wolfram": "x^2 + 3*x" },
  { "q": "d/dx (x³ − x²)", "wolfram": "x^3 - x^2" },
  { "q": "d/dx (ln(x))", "wolfram": "Log[x]" },
  { "q": "d/dx (x·ln(x))", "wolfram": "x*Log[x]" },
  { "q": "d/dx (1/x²)", "wolfram": "1/x^2" },
  { "q": "d/dx (√(x² + 1))", "wolfram": "Sqrt[x^2 + 1]" },
  { "q": "d/dx (x⁵ − 2x³ + x)", "wolfram": "x^5 - 2*x^3 + x" },
  { "q": "d/dx (e^(2x))", "wolfram": "Exp[2*x]" },
  { "q": "d/dx (x·sin(x))", "wolfram": "x*Sin[x]" },
  { "q": "d/dx (x·cos(x))", "wolfram": "x*Cos[x]" },
  { "q": "d/dx (x²·eˣ)", "wolfram": "x^2*Exp[x]" },
  { "q": "d/dx (√(x³ + 1))", "wolfram": "Sqrt[x^3 + 1]" },
  { "q": "d/dx (1/√x)", "wolfram": "1/Sqrt[x]" },
  { "q": "d/dx (x² / (x + 1))", "wolfram": "x^2/(x+1)" },
  { "q": "d/dx (sin(2x))", "wolfram": "Sin[2*x]" },
  { "q": "d/dx (cos(3x))", "wolfram": "Cos[3*x]" },
  { "q": "d/dx (tan(2x))", "wolfram": "Tan[2*x]" },
  { "q": "d/dx (ln(x² + 1))", "wolfram": "Log[x^2 + 1]" },
  { "q": "d/dx (x·ln(x² + 1))", "wolfram": "x*Log[x^2 + 1]" }
],
[
  { "q": "d/dx (x²·sin(x))", "wolfram": "x^2*Sin[x]" },
  { "q": "d/dx (x³·cos(x))", "wolfram": "x^3*Cos[x]" },
  { "q": "d/dx (x·e^x)", "wolfram": "x*Exp[x]" },
  { "q": "d/dx (x²·ln(x))", "wolfram": "x^2*Log[x]" },
  { "q": "d/dx (e^(x²))", "wolfram": "Exp[x^2]" },
  { "q": "d/dx (ln(x² + 1))", "wolfram": "Log[x^2 + 1]" },
  { "q": "d/dx (√(x² + x))", "wolfram": "Sqrt[x^2 + x]" },
  { "q": "d/dx (x² / (x + 1))", "wolfram": "x^2/(x+1)" },
  { "q": "d/dx ((x² + 1) / (x + 2))", "wolfram": "(x^2 + 1)/(x + 2)" },
  { "q": "d/dx (x·tan(x))", "wolfram": "x*Tan[x]" },
  { "q": "d/dx (x²·sec(x))", "wolfram": "x^2*Sec[x]" },
  { "q": "d/dx (sin(x² + x))", "wolfram": "Sin[x^2 + x]" },
  { "q": "d/dx (cos(x² + 1))", "wolfram": "Cos[x^2 + 1]" },
  { "q": "d/dx (tan(x² + x))", "wolfram": "Tan[x^2 + x]" },
  { "q": "d/dx (e^(x)·sin(x))", "wolfram": "Exp[x]*Sin[x]" },
  { "q": "d/dx (e^(x)·cos(x))", "wolfram": "Exp[x]*Cos[x]" },
  { "q": "d/dx (x³ + x²·ln(x))", "wolfram": "x^3 + x^2*Log[x]" },
  { "q": "d/dx (ln(x) / x)", "wolfram": "Log[x]/x" },
  { "q": "d/dx (x / (x² + 1))", "wolfram": "x/(x^2 + 1)" },
  { "q": "d/dx (x·√(x² + 1))", "wolfram": "x*Sqrt[x^2 + 1]" },
  { "q": "d/dx (x²·√(x + 1))", "wolfram": "x^2*Sqrt[x + 1]" },
  { "q": "d/dx ((x² + 1)·e^x)", "wolfram": "(x^2 + 1)*Exp[x]" },
  { "q": "d/dx (√(x³ + x))", "wolfram": "Sqrt[x^3 + x]" },
  { "q": "d/dx (x·ln(x² + 1))", "wolfram": "x*Log[x^2 + 1]" },
  { "q": "d/dx (x² / √(x + 1))", "wolfram": "x^2/Sqrt[x + 1]" },
  { "q": "d/dx ((x³ + 1)/(x² + 1))", "wolfram": "(x^3 + 1)/(x^2 + 1)" },
  { "q": "d/dx (e^(x²)·x)", "wolfram": "Exp[x^2]*x" },
  { "q": "d/dx (sin(x)·cos(x))", "wolfram": "Sin[x]*Cos[x]" },
  { "q": "d/dx (tan(x) / x)", "wolfram": "Tan[x]/x" },
  { "q": "d/dx (ln(x² + x + 1))", "wolfram": "Log[x^2 + x + 1]" }
],
[
  { "q": "d/dx (x²·e^(x²))", "wolfram": "x^2*Exp[x^2]" },
  { "q": "d/dx (x·ln(x² + 1))", "wolfram": "x*Log[x^2 + 1]" },
  { "q": "d/dx ((x³ + 1)/(x² + 2))", "wolfram": "(x^3 + 1)/(x^2 + 2)" },
  { "q": "d/dx (e^(x²)·sin(x))", "wolfram": "Exp[x^2]*Sin[x]" },
  { "q": "d/dx (ln(x² + x)·cos(x))", "wolfram": "Log[x^2 + x]*Cos[x]" },
  { "q": "d/dx (x²·tan(x²))", "wolfram": "x^2*Tan[x^2]" },
  { "q": "d/dx (√(x³ + 1)·x)", "wolfram": "Sqrt[x^3 + 1]*x" },
  { "q": "d/dx (e^(x)·ln(x² + 1))", "wolfram": "Exp[x]*Log[x^2 + 1]" },
  { "q": "d/dx (x·cos(x² + 1))", "wolfram": "x*Cos[x^2 + 1]" },
  { "q": "d/dx (x²·sin(ln(x)))", "wolfram": "x^2*Sin[Log[x]]" },
  { "q": "d/dx ((x² + 1)·e^(x² + x))", "wolfram": "(x^2 + 1)*Exp[x^2 + x]" },
  { "q": "d/dx (ln(x² + 1)/x)", "wolfram": "Log[x^2 + 1]/x" },
  { "q": "d/dx (x·e^(x² + x))", "wolfram": "x*Exp[x^2 + x]" },
  { "q": "d/dx (√(x² + x + 1)·ln(x))", "wolfram": "Sqrt[x^2 + x + 1]*Log[x]" },
  { "q": "d/dx (x³·cos(x²))", "wolfram": "x^3*Cos[x^2]" },
  { "q": "d/dx (x² / (x³ + 1))", "wolfram": "x^2/(x^3 + 1)" },
  { "q": "d/dx (e^(√x)·x²)", "wolfram": "Exp[Sqrt[x]]*x^2" },
  { "q": "d/dx (x·ln(√(x² + 1)))", "wolfram": "x*Log[Sqrt[x^2 + 1]]" },
  { "q": "d/dx (x²·tan(x)/ln(x))", "wolfram": "x^2*Tan[x]/Log[x]" },
  { "q": "d/dx ((x² + x + 1)·sin(x²))", "wolfram": "(x^2 + x + 1)*Sin[x^2]" },
  { "q": "d/dx (ln(x)·cos(x²))", "wolfram": "Log[x]*Cos[x^2]" },
  { "q": "d/dx (x²·e^(x·ln(x)))", "wolfram": "x^2*Exp[x*Log[x]]" },
  { "q": "d/dx ((x³ + 1)/(√(x² + 1)))", "wolfram": "(x^3 + 1)/Sqrt[x^2 + 1]" },
  { "q": "d/dx (x²·ln(x² + 1)·cos(x))", "wolfram": "x^2*Log[x^2 + 1]*Cos[x]" },
  { "q": "d/dx (x·e^(x²)·sin(x))", "wolfram": "x*Exp[x^2]*Sin[x]" },
  { "q": "d/dx (√(x³ + x²)·tan(x))", "wolfram": "Sqrt[x^3 + x^2]*Tan[x]" },
  { "q": "d/dx (x²·cos(x² + x))", "wolfram": "x^2*Cos[x^2 + x]" },
  { "q": "d/dx (x³·ln(x² + x + 1))", "wolfram": "x^3*Log[x^2 + x + 1]" },
  { "q": "d/dx (x²·e^(x² + x²))", "wolfram": "x^2*Exp[x^2 + x^2]" },
  { "q": "d/dx (ln(x² + 1)·sin(x² + x))", "wolfram": "Log[x^2 + 1]*Sin[x^2 + x]" },
  { "q": "d/dx ((x² + 1)·√(x³ + x))", "wolfram": "(x^2 + 1)*Sqrt[x^3 + x]" }
],[
  { "q": "d/dx (x² · e^(x² + sin(x)))", "wolfram": "x^2 * Exp[x^2 + Sin[x]]" },
  { "q": "d/dx (ln(x² + 1) · e^(x·cos(x)))", "wolfram": "Log[x^2 + 1] * Exp[x*Cos[x]]" },
  { "q": "d/dx (x²·tan(x² + x))", "wolfram": "x^2 * Tan[x^2 + x]" },
  { "q": "d/dx ((x² + 1) / √(x^4 + x² + 1))", "wolfram": "(x^2 + 1)/Sqrt[x^4 + x^2 + 1]" },
  { "q": "d/dx (√(x² + x) · ln(x² + 1))", "wolfram": "Sqrt[x^2 + x] * Log[x^2 + 1]" },
  { "q": "d/dx (x · e^(√(x³ + 1)))", "wolfram": "x * Exp[Sqrt[x^3 + 1]]" },
  { "q": "d/dx (ln(x) · √(x² + x + 1))", "wolfram": "Log[x] * Sqrt[x^2 + x + 1]" },
  { "q": "d/dx ((x³ + x)·tan(x²))", "wolfram": "(x^3 + x) * Tan[x^2]" },
  { "q": "d/dx (x² · sin(e^x) · ln(x))", "wolfram": "x^2 * Sin[Exp[x]] * Log[x]" },
  { "q": "d/dx (√(x^5 + x²) · e^(x² + 1))", "wolfram": "Sqrt[x^5 + x^2] * Exp[x^2 + 1]" },
  { "q": "d/dx (e^(x²) · cos(x² + x))", "wolfram": "Exp[x^2] * Cos[x^2 + x]" },
  { "q": "d/dx ((x² + 1) · ln(x³ + x + 1))", "wolfram": "(x^2 + 1) * Log[x^3 + x + 1]" },
  { "q": "d/dx (x³ · √(x² + 1) · tan(x))", "wolfram": "x^3 * Sqrt[x^2 + 1] * Tan[x]" },
  { "q": "d/dx (ln(x² + x) · e^(x²) · cos(x))", "wolfram": "Log[x^2 + x] * Exp[x^2] * Cos[x]" },
  { "q": "d/dx (x² / (x^4 + 1))", "wolfram": "x^2/(x^4 + 1)" },
  { "q": "d/dx (e^(x) · ln(x² + 1) · sin(x²))", "wolfram": "Exp[x] * Log[x^2 + 1] * Sin[x^2]" },
  { "q": "d/dx ((x^3 + x) / √(x^4 + x² + 1))", "wolfram": "(x^3 + x)/Sqrt[x^4 + x^2 + 1]" },
  { "q": "d/dx (x² · ln(√(x³ + 1)) · cos(x²))", "wolfram": "x^2 * Log[Sqrt[x^3 + 1]] * Cos[x^2]" },
  { "q": "d/dx (√(x^4 + x²) · e^(x · ln(x)))", "wolfram": "Sqrt[x^4 + x^2] * Exp[x * Log[x]]" },
  { "q": "d/dx (x³ · e^(x² + sin(x²)))", "wolfram": "x^3 * Exp[x^2 + Sin[x^2]]" },
  { "q": "d/dx (ln(x² + x + 1) · tan(x² + 1))", "wolfram": "Log[x^2 + x + 1] * Tan[x^2 + 1]" },
  { "q": "d/dx (x · √(x³ + x² + 1) · e^(x²))", "wolfram": "x * Sqrt[x^3 + x^2 + 1] * Exp[x^2]" },
  { "q": "d/dx (e^(√(x² + 1)) · sin(x³ + x))", "wolfram": "Exp[Sqrt[x^2 + 1]] * Sin[x^3 + x]" },
  { "q": "d/dx ((x² + 1) · cos(x² + e^x))", "wolfram": "(x^2 + 1) * Cos[x^2 + Exp[x]]" },
  { "q": "d/dx (x³ · ln(x² + x² + 1) · sin(x²))", "wolfram": "x^3 * Log[x^2 + x^2 + 1] * Sin[x^2]" },
  { "q": "d/dx (√(x^5 + x^3 + 1) · e^(x + ln(x)))", "wolfram": "Sqrt[x^5 + x^3 + 1] * Exp[x + Log[x]]" },
  { "q": "d/dx (x² · ln(x) · cos(x² + x))", "wolfram": "x^2 * Log[x] * Cos[x^2 + x]" },
  { "q": "d/dx (e^(x² + x) · tan(x² + x²))", "wolfram": "Exp[x^2 + x] * Tan[x^2 + x^2]" },
  { "q": "d/dx (x³ · √(x² + 1) · ln(x² + x + 1))", "wolfram": "x^3 * Sqrt[x^2 + 1] * Log[x^2 + x + 1]" },
  { "q": "d/dx ((x² + 1) · e^(√(x³ + 1)) · cos(x))", "wolfram": "(x^2 + 1) * Exp[Sqrt[x^3 + 1]] * Cos[x]" }
],
[
  { "q": "d/dx (x² · e^(x² + sin(x²)) · ln(x))", "wolfram": "x^2 * Exp[x^2 + Sin[x^2]] * Log[x]" },
  { "q": "d/dx ((x³ + 1) / √(x^4 + x² + 1) · tan(x² + x))", "wolfram": "(x^3 + 1)/Sqrt[x^4 + x^2 + 1] * Tan[x^2 + x]" },
  { "q": "d/dx (√(x^5 + x³ + 1) · e^(x² + ln(x)) · sin(x³ + x))", "wolfram": "Sqrt[x^5 + x^3 + 1] * Exp[x^2 + Log[x]] * Sin[x^3 + x]" },
  { "q": "d/dx (ln(x² + x + 1) · cos(x² + e^(x³)))", "wolfram": "Log[x^2 + x + 1] * Cos[x^2 + Exp[x^3]]" },
  { "q": "d/dx ((x² + 1) · √(x³ + x² + 1) · e^(x²) · tan(x² + x²))", "wolfram": "(x^2 + 1) * Sqrt[x^3 + x^2 + 1] * Exp[x^2] * Tan[x^2 + x^2]" },
  { "q": "d/dx (x³ · ln(√(x^4 + 1)) · sin(e^(x² + x)))", "wolfram": "x^3 * Log[Sqrt[x^4 + 1]] * Sin[Exp[x^2 + x]]" },
  { "q": "d/dx (e^(x³ + x²) · cos(√(x² + 1)) · ln(x² + 1))", "wolfram": "Exp[x^3 + x^2] * Cos[Sqrt[x^2 + 1]] * Log[x^2 + 1]" },
  { "q": "d/dx (√(x^6 + x^4 + x²) · e^(x² + x) · tan(x³ + 1))", "wolfram": "Sqrt[x^6 + x^4 + x^2] * Exp[x^2 + x] * Tan[x^3 + 1]" },
  { "q": "d/dx ((x² + 1)³ · ln(x³ + x + 1) · sin(x² + x³))", "wolfram": "(x^2 + 1)^3 * Log[x^3 + x + 1] * Sin[x^2 + x^3]" },
  { "q": "d/dx (x² · e^(x² + sin(x² + x)) · ln(x² + 1))", "wolfram": "x^2 * Exp[x^2 + Sin[x^2 + x]] * Log[x^2 + 1]" },
  { "q": "d/dx (√(x³ + x² + x) · ln(x² + 1) · e^(x³ + x))", "wolfram": "Sqrt[x^3 + x^2 + x] * Log[x^2 + 1] * Exp[x^3 + x]" },
  { "q": "d/dx (x³ · sin(e^(x² + ln(x))) · cos(x³ + x²))", "wolfram": "x^3 * Sin[Exp[x^2 + Log[x]]] * Cos[x^3 + x^2]" },
  { "q": "d/dx ((x² + 1) · e^(√(x³ + x²)) · ln(x² + x + 1))", "wolfram": "(x^2 + 1) * Exp[Sqrt[x^3 + x^2]] * Log[x^2 + x + 1]" },
  { "q": "d/dx (√(x^4 + x² + 1) · ln(x³ + 1) · tan(x² + x² + 1))", "wolfram": "Sqrt[x^4 + x^2 + 1] * Log[x^3 + 1] * Tan[x^2 + x^2 + 1]" },
  { "q": "d/dx (x³ · e^(x² + sin(x²)) · ln(x² + x + 1) · cos(x³ + 1))", "wolfram": "x^3 * Exp[x^2 + Sin[x^2]] * Log[x^2 + x + 1] * Cos[x^3 + 1]" },
  { "q": "d/dx ((x² + 1) · √(x³ + 1) · e^(x² + x²) · sin(x³ + x² + 1))", "wolfram": "(x^2 + 1) * Sqrt[x^3 + 1] * Exp[x^2 + x^2] * Sin[x^3 + x^2 + 1]" },
  { "q": "d/dx (x² · ln(x² + 1) · e^(√(x³ + x)) · cos(x² + x³))", "wolfram": "x^2 * Log[x^2 + 1] * Exp[Sqrt[x^3 + x]] * Cos[x^2 + x^3]" },
  { "q": "d/dx (√(x^5 + x³ + x) · e^(x² + ln(x)) · tan(x³ + x²))", "wolfram": "Sqrt[x^5 + x^3 + x] * Exp[x^2 + Log[x]] * Tan[x^3 + x^2]" },
  { "q": "d/dx ((x³ + 1) · ln(√(x² + 1)) · e^(x³ + x² + x))", "wolfram": "(x^3 + 1) * Log[Sqrt[x^2 + 1]] * Exp[x^3 + x^2 + x]" },
  { "q": "d/dx (x² · e^(x³ + sin(x² + x)) · ln(x³ + 1) · sin(x² + x³))", "wolfram": "x^2 * Exp[x^3 + Sin[x^2 + x]] * Log[x^3 + 1] * Sin[x^2 + x^3]" },
  { "q": "d/dx (√(x³ + x² + 1) · ln(x² + x² + 1) · e^(x³ + x²) · cos(x³ + x² + x))", "wolfram": "Sqrt[x^3 + x^2 + 1] * Log[x^2 + x^2 + 1] * Exp[x^3 + x^2] * Cos[x^3 + x^2 + x]" },
  { "q": "d/dx (x³ · e^(√(x^4 + x² + 1)) · ln(x² + 1) · sin(x² + x³ + 1))", "wolfram": "x^3 * Exp[Sqrt[x^4 + x^2 + 1]] * Log[x^2 + 1] * Sin[x^2 + x^3 + 1]" },
  { "q": "d/dx ((x² + 1) · √(x³ + x² + x) · e^(x³ + ln(x² + 1)) · tan(x² + x³))", "wolfram": "(x^2 + 1) * Sqrt[x^3 + x^2 + x] * Exp[x^3 + Log[x^2 + 1]] * Tan[x^2 + x^3]" },
  { "q": "d/dx (x² · ln(x² + x + 1) · e^(√(x^5 + x³ + 1)) · cos(x³ + x² + 1))", "wolfram": "x^2 * Log[x^2 + x + 1] * Exp[Sqrt[x^5 + x^3 + 1]] * Cos[x^3 + x^2 + 1]" },
  { "q": "d/dx (√(x^4 + x² + 1) · e^(x³ + x² + ln(x² + 1)) · sin(x³ + x² + x))", "wolfram": "Sqrt[x^4 + x^2 + 1] * Exp[x^3 + x^2 + Log[x^2 + 1]] * Sin[x^3 + x^2 + x]" },
  { "q": "d/dx ((x² + 1) · x³ · e^(√(x^5 + x³ + 1)) · ln(x³ + 1) · tan(x² + x³ + x²))", "wolfram": "(x^2 + 1) * x^3 * Exp[Sqrt[x^5 + x^3 + 1]] * Log[x^3 + 1] * Tan[x^2 + x^3 + x^2]" },
  { "q": "d/dx (x³ · √(x^6 + x^4 + x²) · e^(x³ + x² + ln(x² + x + 1)))", "wolfram": "x^3 * Sqrt[x^6 + x^4 + x^2] * Exp[x^3 + x^2 + Log[x^2 + x + 1]]" }
]
    ],
    lim:[
        [
  { "q": "lim (x->0) x²", "wolfram": "x^2" },
  { "q": "lim (x->0) √x", "wolfram": "Sqrt[x]" },
  { "q": "lim (x->0^+) 1/x", "wolfram": "1/x" },
  { "q": "lim (x->0^-) 1/x", "wolfram": "1/x" },
  { "q": "lim (x->0) sin(x)/x", "wolfram": "Sin[x]/x" },
  { "q": "lim (x->0) (1 - cos(x))/x²", "wolfram": "(1 - Cos[x])/x^2" },
  { "q": "lim (x->0) (eˣ - 1)/x", "wolfram": "(Exp[x] - 1)/x" },
  { "q": "lim (x->1) (x³ - 1)/(x - 1)", "wolfram": "(x^3 - 1)/(x - 1)" },
  { "q": "lim (x->2) √(x - 1)", "wolfram": "Sqrt[x - 1]" },
  { "q": "lim (x->0) tan(x)/x", "wolfram": "Tan[x]/x" },
  { "q": "lim (x->1) (x² + x - 2)/(x - 1)", "wolfram": "(x^2 + x - 2)/(x - 1)" },
  { "q": "lim (x->0^+) ln(1 + x)/x", "wolfram": "Log[1 + x]/x" },
  { "q": "lim (x->0^-) ln(1 + x)/x", "wolfram": "Log[1 + x]/x" },
  { "q": "lim (x->0) (x² * sin(x))/x³", "wolfram": "(x^2 * Sin[x])/x^3" },
  { "q": "lim (x->0) (x² * cos(x) - x²)/x⁴", "wolfram": "(x^2 * Cos[x] - x^2)/x^4" },
  { "q": "lim (x->∞) (2x + 3)/(x + 1)", "wolfram": "(2*x + 3)/(x + 1)" },
  { "q": "lim (x->∞) (x² + 1)/(2x² + 3)", "wolfram": "(x^2 + 1)/(2*x^2 + 3)" },
  { "q": "lim (x->∞) (3x³ - 2x)/(x³ + x²)", "wolfram": "(3*x^3 - 2*x)/(x^3 + x^2)" },
  { "q": "lim (x->0) (e^(3x) - 1)/x", "wolfram": "(Exp[3*x] - 1)/x" },
  { "q": "lim (x->0) (1 + x²)/(2 + x)", "wolfram": "(1 + x^2)/(2 + x)" },
  { "q": "lim (x->0) (x³ + x² + x)/x", "wolfram": "(x^3 + x^2 + x)/x" },
  { "q": "lim (x->0) (x³ - x)/x²", "wolfram": "(x^3 - x)/x^2" },
  { "q": "lim (x->1) (x³ - 2x + 1)/(x - 1)", "wolfram": "(x^3 - 2*x + 1)/(x - 1)" },
  { "q": "lim (x->0) sin(5x)/x", "wolfram": "Sin[5*x]/x" },
  { "q": "lim (x->4) (x² - 16)/(x - 4)", "wolfram": "(x^2 - 16)/(x - 4)" },
  { "q": "lim (x->0^+) 1/x²", "wolfram": "1/x^2" },
  { "q": "lim (x->0^-) 1/x²", "wolfram": "1/x^2" },
  { "q": "lim (x->0) (e^(2x) - 1)/x", "wolfram": "(Exp[2*x] - 1)/x" },
  { "q": "lim (x->0) √(x² + 1) - 1)/x", "wolfram": "(Sqrt[x^2 + 1] - 1)/x" },
  { "q": "lim (x->0) (x² + 3x)/(x)", "wolfram": "(x^2 + 3*x)/x" }
],
[
  { "q": "lim (x->0) x", "wolfram": "x", "limit": "0" },
  { "q": "lim (x->0) x^2", "wolfram": "x^2", "limit": "0" },
  { "q": "lim (x->0) 1/x (from right)", "wolfram": "1/x", "limit": "0^+" },
  { "q": "lim (x->0) 1/x (from left)", "wolfram": "1/x", "limit": "0^-" },
  { "q": "lim (x->0) sin(x)/x", "wolfram": "Sin[x]/x", "limit": "1" },
  { "q": "lim (x->0) (1 - cos(x))/x^2", "wolfram": "(1 - Cos[x])/x^2", "limit": "1/2" },
  { "q": "lim (x->0) (e^x - 1)/x", "wolfram": "(Exp[x] - 1)/x", "limit": "1" },
  { "q": "lim (x->0) ln(1 + x)/x", "wolfram": "Log[1 + x]/x", "limit": "1" },
  { "q": "lim (x->0) (1 + x)^(1/x)", "wolfram": "(1 + x)^(1/x)", "limit": "E" },
  { "q": "lim (x->∞) 1/x", "wolfram": "1/x", "limit": "0" },
  { "q": "lim (x->∞) (1 - 1/x)^x", "wolfram": "(1 - 1/x)^x", "limit": "1/E" },
  { "q": "lim (x->0) (x^2 + 3*x)/(x + 1)", "wolfram": "(x^2 + 3*x)/(x + 1)", "limit": "0" },
  { "q": "lim (x->1) (x^2 - 1)/(x - 1)", "wolfram": "(x^2 - 1)/(x - 1)", "limit": "2" },
  { "q": "lim (x->2) (x^3 - 8)/(x - 2)", "wolfram": "(x^3 - 8)/(x - 2)", "limit": "12" },
  { "q": "lim (x->0) (sin(2*x)/x)", "wolfram": "Sin[2*x]/x", "limit": "2" },
  { "q": "lim (x->0) (1 - cos(3*x))/x^2", "wolfram": "(1 - Cos[3*x])/x^2", "limit": "9/2" },
  { "q": "lim (x->0) (e^(2*x) - 1)/x", "wolfram": "(Exp[2*x] - 1)/x", "limit": "2" },
  { "q": "lim (x->0) (ln(1+2*x))/x", "wolfram": "Log[1+2*x]/x", "limit": "2" },
  { "q": "lim (x->0) (x^2 * sin(x))/x^3", "wolfram": "(x^2 * Sin[x])/x^3", "limit": "1" },
  { "q": "lim (x->0) (x^2 * cos(x) - x^2)/x^4", "wolfram": "(x^2 * Cos[x] - x^2)/x^4", "limit": "-1/2" },
  { "q": "lim (x->∞) (2*x + 3)/(x + 1)", "wolfram": "(2*x + 3)/(x + 1)", "limit": "2" },
  { "q": "lim (x->∞) (x^2 + 1)/(2*x^2 + 3)", "wolfram": "(x^2 + 1)/(2*x^2 + 3)", "limit": "1/2" },
  { "q": "lim (x->∞) (3*x^3 - 2*x)/(x^3 + x^2)", "wolfram": "(3*x^3 - 2*x)/(x^3 + x^2)", "limit": "3" },
  { "q": "lim (x->0) tan(x)/x", "wolfram": "Tan[x]/x", "limit": "1" },
  { "q": "lim (x->0) (1 - cos(2*x))/x^2", "wolfram": "(1 - Cos[2*x])/x^2", "limit": "2" },
  { "q": "lim (x->0) (e^(3*x) - 1)/x", "wolfram": "(Exp[3*x] - 1)/x", "limit": "3" },
  { "q": "lim (x->0) (1 + x^2)/(2 + x)", "wolfram": "(1 + x^2)/(2 + x)", "limit": "1/2" },
  { "q": "lim (x->0) (x^3 + x^2 + x)/x", "wolfram": "(x^3 + x^2 + x)/x", "limit": "1" },
  { "q": "lim (x->0) ((x^3 - x)/x^2)", "wolfram": "(x^3 - x)/x^2", "limit": "-1" }
],
[
  { "q": "lim (x->0) (sin(5x)/x - 5)", "wolfram": "(Sin[5*x]/x - 5)" },
  { "q": "lim (x->0) (1 - cos(3x))/x²", "wolfram": "(1 - Cos[3*x])/x^2" },
  { "q": "lim (x->0) (tan(2x)/x - 2)", "wolfram": "(Tan[2*x]/x - 2)" },
  { "q": "lim (x->0^+) ln(1 + 4x)/x", "wolfram": "Log[1 + 4*x]/x" },
  { "q": "lim (x->0^-) ln(1 + 4x)/x", "wolfram": "Log[1 + 4*x]/x" },
  { "q": "lim (x->0) (e^(3x) - 1 - 3x)/x²", "wolfram": "(Exp[3*x] - 1 - 3*x)/x^2" },
  { "q": "lim (x->1) (x³ - 1)/(x - 1)", "wolfram": "(x^3 - 1)/(x - 1)" },
  { "q": "lim (x->2) (x³ - 8)/(x - 2)", "wolfram": "(x^3 - 8)/(x - 2)" },
  { "q": "lim (x->0) (√(1 + x) - 1)/x", "wolfram": "(Sqrt[1 + x] - 1)/x" },
  { "q": "lim (x->0) ((x² * sin(4x))/x³)", "wolfram": "(x^2 * Sin[4*x])/x^3" },
  { "q": "lim (x->0) ((x² * cos(3x) - x²)/x⁴)", "wolfram": "(x^2 * Cos[3*x] - x^2)/x^4" },
  { "q": "lim (x->∞) (x² + 3x)/(2x² - x)", "wolfram": "(x^2 + 3*x)/(2*x^2 - x)" },
  { "q": "lim (x->0) (sin²(x)/x²)", "wolfram": "(Sin[x]^2)/x^2" },
  { "q": "lim (x->0) ((1 - cos(2x))/x² - 2)", "wolfram": "((1 - Cos[2*x])/x^2 - 2)" },
  { "q": "lim (x->0) (tan(x) - x)/x³", "wolfram": "(Tan[x] - x)/x^3" },
  { "q": "lim (x->0) ((e^x - 1 - x)/x²)", "wolfram": "(Exp[x] - 1 - x)/x^2" },
  { "q": "lim (x->1) ((x⁴ - 1)/(x - 1))", "wolfram": "(x^4 - 1)/(x - 1)" },
  { "q": "lim (x->2) ((x³ - 8)/(x - 2))", "wolfram": "(x^3 - 8)/(x - 2)" },
  { "q": "lim (x->0) ((√(x² + 1) - 1)/x)", "wolfram": "(Sqrt[x^2 + 1] - 1)/x" },
  { "q": "lim (x->0) ((x² + 5x)/x)", "wolfram": "(x^2 + 5*x)/x" },
  { "q": "lim (x->0) ((1 - e^(-2x))/x)", "wolfram": "(1 - Exp[-2*x])/x" },
  { "q": "lim (x->0) ((x³ - 2x² + x)/x²)", "wolfram": "(x^3 - 2*x^2 + x)/x^2" },
  { "q": "lim (x->0) ((x² + 3x)/2x)", "wolfram": "(x^2 + 3*x)/(2*x)" },
  { "q": "lim (x->0) (sin(7x)/x - 7)", "wolfram": "(Sin[7*x]/x - 7)" },
  { "q": "lim (x->0) ((tan(4x)/x - 4))", "wolfram": "(Tan[4*x]/x - 4)" },
  { "q": "lim (x->0) ((1 - cos(4x))/x² - 8)", "wolfram": "((1 - Cos[4*x])/x^2 - 8)" },
  { "q": "lim (x->0^+) ln(1 + 2x)/x", "wolfram": "Log[1 + 2*x]/x" },
  { "q": "lim (x->0^-) ln(1 + 2x)/x", "wolfram": "Log[1 + 2*x]/x" },
  { "q": "lim (x->0) ((e^(5x) - 1 - 5x)/x²)", "wolfram": "(Exp[5*x] - 1 - 5*x)/x^2" },
  { "q": "lim (x->3) ((x³ - 27)/(x - 3))", "wolfram": "(x^3 - 27)/(x - 3)" }
],
[
  { "q": "lim (x->0) ((e^(sin(x)) - 1 - x)/x²)", "wolfram": "(Exp[Sin[x]] - 1 - x)/x^2" },
  { "q": "lim (x->0) ((ln(1 + x²) - sin²(x))/x⁴)", "wolfram": "(Log[1 + x^2] - Sin[x]^2)/x^4" },
  { "q": "lim (x->0) ((tan(x) - x)/x³ + (sin²(x)/x³))", "wolfram": "(Tan[x] - x)/x^3 + (Sin[x]^2)/x^3" },
  { "q": "lim (x->0^+) ((1/x) - (1/sin(x)))", "wolfram": "1/x - 1/Sin[x]" },
  { "q": "lim (x->0^-) ((1/√x) - (1/x))", "wolfram": "1/Sqrt[x] - 1/x" },
  { "q": "lim (x->∞) ((x² * e^(-x)) - ln(x)/x)", "wolfram": "(x^2 * Exp[-x]) - Log[x]/x" },
  { "q": "lim (x->0) ((1 - cos(x³))/x⁶)", "wolfram": "(1 - Cos[x^3])/x^6" },
  { "q": "lim (x->0) ((√(1 + x) - 1)/sin(x²))", "wolfram": "(Sqrt[1 + x] - 1)/Sin[x^2]" },
  { "q": "lim (x->0) ((e^(tan(x)) - 1 - x)/x²)", "wolfram": "(Exp[Tan[x]] - 1 - x)/x^2" },
  { "q": "lim (x->0) ((sin(x) - x + x³/6)/x⁵)", "wolfram": "(Sin[x] - x + x^3/6)/x^5" },
  { "q": "lim (x->0) ((1 - cos(x) - x²/2)/x⁴)", "wolfram": "(1 - Cos[x] - x^2/2)/x^4" },
  { "q": "lim (x->0^+) ((1/x²) - (1/tan²(x)))", "wolfram": "1/x^2 - 1/Tan[x]^2" },
  { "q": "lim (x->0) ((e^x - 1 - x - x²/2)/x³)", "wolfram": "(Exp[x] - 1 - x - x^2/2)/x^3" },
  { "q": "lim (x->0) ((ln(1 + x) - x + x²/2)/x³)", "wolfram": "(Log[1 + x] - x + x^2/2)/x^3" },
  { "q": "lim (x->0) ((tan(x) - x - x³/3)/x⁵)", "wolfram": "(Tan[x] - x - x^3/3)/x^5" },
  { "q": "lim (x->∞) ((x*sin(1/x)) - 1)", "wolfram": "x*Sin[1/x] - 1" },
  { "q": "lim (x->0) ((x - sin(x))/x³)", "wolfram": "(x - Sin[x])/x^3" },
  { "q": "lim (x->0) ((1 - cos(2x) - 2x²)/x⁴)", "wolfram": "(1 - Cos[2*x] - 2*x^2)/x^4" },
  { "q": "lim (x->0^+) (x*ln(x))", "wolfram": "x*Log[x]" },
  { "q": "lim (x->0^-) (x*ln(-x))", "wolfram": "x*Log[-x]" },
  { "q": "lim (x->0) ((√(1 + x³) - 1)/x³)", "wolfram": "(Sqrt[1 + x^3] - 1)/x^3" },
  { "q": "lim (x->0) ((x - sin(x)*cos(x))/x³)", "wolfram": "(x - Sin[x]*Cos[x])/x^3" },
  { "q": "lim (x->0) ((e^(x²) - 1 - x²)/x⁴)", "wolfram": "(Exp[x^2] - 1 - x^2)/x^4" },
  { "q": "lim (x->0) ((ln(1 + x²) - x²)/x⁴)", "wolfram": "(Log[1 + x^2] - x^2)/x^4" },
  { "q": "lim (x->0) ((x - tan(x))/x³)", "wolfram": "(x - Tan[x])/x^3" },
  { "q": "lim (x->0) ((sin²(x) - x²)/x⁴)", "wolfram": "(Sin[x]^2 - x^2)/x^4" },
  { "q": "lim (x->0) ((x - sin(x^2))/x³)", "wolfram": "(x - Sin[x^2])/x^3" },
  { "q": "lim (x->0^+) ((1/x - 1/tan(x)))", "wolfram": "1/x - 1/Tan[x]" },
  { "q": "lim (x->0^-) ((1/√x - 1/sin(x)))", "wolfram": "1/Sqrt[x] - 1/Sin[x]" },
  { "q": "lim (x->∞) ((x² * e^(-x²)) - ln(x)/x)", "wolfram": "(x^2 * Exp[-x^2]) - Log[x]/x" }
],
[
  { "q": "lim (x->0) ((e^x - 1 - x)/x^2)", "wolfram": "(Exp[x] - 1 - x)/x^2" },
  { "q": "lim (x->0) ((ln(1 + x) - x)/x^2)", "wolfram": "(Log[1 + x] - x)/x^2" },
  { "q": "lim (x->0) ((tan(x) - x)/x^3)", "wolfram": "(Tan[x] - x)/x^3" },
  { "q": "lim (x->0^+) ((1/x) - (1/sin(x)))", "wolfram": "1/x - 1/Sin[x]" },
  { "q": "lim (x->0^-) ((1/√x) - (1/x))", "wolfram": "1/Sqrt[x] - 1/x" },
  { "q": "lim (x->∞) ((x*e^(-x)))", "wolfram": "x*Exp[-x]" },
  { "q": "lim (x->0) ((1 - cos(x))/x^2)", "wolfram": "(1 - Cos[x])/x^2" },
  { "q": "lim (x->0) ((√(1 + x) - 1)/x)", "wolfram": "(Sqrt[1 + x] - 1)/x" },
  { "q": "lim (x->0) ((e^(tan(x)) - 1)/x)", "wolfram": "(Exp[Tan[x]] - 1)/x" },
  { "q": "lim (x->0) ((sin(x) - x + x^3/6)/x^5)", "wolfram": "(Sin[x] - x + x^3/6)/x^5" },
  { "q": "lim (x->0) ((1 - cos(2x) - 2x^2)/x^4)", "wolfram": "(1 - Cos[2*x] - 2*x^2)/x^4" },
  { "q": "lim (x->0) ((x - sin(x^2))/x^3)", "wolfram": "(x - Sin[x^2])/x^3" },
  { "q": "lim (x->0) ((ln(1 + x^2) - x^2)/x^4)", "wolfram": "(Log[1 + x^2] - x^2)/x^4" },
  { "q": "lim (x->0^+) (x*ln(x))", "wolfram": "x*Log[x]" },
  { "q": "lim (x->0^-) (x*ln(-x))", "wolfram": "x*Log[-x]" },
  { "q": "lim (x->0) ((tan(x^2) - x^2)/x^4)", "wolfram": "(Tan[x^2] - x^2)/x^4" },
  { "q": "lim (x->0) ((e^(x^2) - 1 - x^2)/x^4)", "wolfram": "(Exp[x^2] - 1 - x^2)/x^4" },
  { "q": "lim (x->0) ((sin^2(x) - x^2)/x^4)", "wolfram": "(Sin[x]^2 - x^2)/x^4" },
  { "q": "lim (x->0) ((1 - cos(x^3))/x^6)", "wolfram": "(1 - Cos[x^3])/x^6" },
  { "q": "lim (x->0) ((√(1 + x^2) - 1)/x^2)", "wolfram": "(Sqrt[1 + x^2] - 1)/x^2" },
  { "q": "lim (x->0) ((x - sin(x) + x^3/6)/x^5)", "wolfram": "(x - Sin[x] + x^3/6)/x^5" },
  { "q": "lim (x->0^+) ((1 - cos(x))/x)", "wolfram": "(1 - Cos[x])/x" },
  { "q": "lim (x->0^-) ((1 - cos(x))/x)", "wolfram": "(1 - Cos[x])/x" },
  { "q": "lim (x->0) ((e^(x^3) - 1 - x^3)/x^6)", "wolfram": "(Exp[x^3] - 1 - x^3)/x^6" },
  { "q": "lim (x->0) ((tan(x) - x)/x^3)", "wolfram": "(Tan[x] - x)/x^3" },
  { "q": "lim (x->0) ((ln(1 + x^3) - x^3)/x^6)", "wolfram": "(Log[1 + x^3] - x^3)/x^6" },
  { "q": "lim (x->0) ((sin(x^2) - x^2)/x^4)", "wolfram": "(Sin[x^2] - x^2)/x^4" },
  { "q": "lim (x->0) ((√(1 + x^3) - 1)/x^3)", "wolfram": "(Sqrt[1 + x^3] - 1)/x^3" },
  { "q": "lim (x->0^+) ((1/x - 1/tan(x)))", "wolfram": "1/x - 1/Tan[x]" },
  { "q": "lim (x->0^-) ((1/√x - 1/sin(x)))", "wolfram": "1/Sqrt[x] - 1/Sin[x]" }
]
    ]
}
























const mSection=document.querySelector("#m");
const tSection=document.querySelector("#t");
const antegral=document.querySelector("#antegral");
const moshtagh=document.querySelector("#moshtagh");
const had=document.querySelector("#had");
const mx=document.querySelector(".mx");
const my=document.querySelector(".my");
const mn=document.querySelector(".mn");
const ma=document.querySelector(".ma");
const mbtn=document.querySelector(".mbtn");
const limit=document.querySelector(".limit");
const icons=document.querySelectorAll(".icon");
const iconbody=document.querySelector(".icons");
const dinput=document.querySelector(".diraction");


const aa=document.querySelector(".aa");
const bb=document.querySelector(".bb");
const cc=document.querySelector(".cc");
const dd=document.querySelector(".dd");
const ee=document.querySelector(".ee");
const levelparent=document.querySelector(".d")


let oneFlag="m";
let twoFlag="antegral";
let lastfocus=mx;
let diraction=0;


const fetchData=async(test,limit,d)=>{
    let response="";
    if(oneFlag=="t"&& twoFlag=="had"){
        const dark=[...bank.lim[0],...bank.lim[1],...bank.lim[2],...bank.lim[3],...bank.lim[4]];
        const pedarsag=dark.find((x)=>{
            return x.q==test
        })
        if(pedarsag.q[10]=="+"){
            response = await fetch(`http://localhost:3001/wolfram?input=limit+${pedarsag.wolfram}+x->${pedarsag.q[8]}+Direction->-1`) 
         const data= await response.json()
         const value=data.queryresult.pods[0].subpods[0].plaintext;
        show(value)
        }else if(pedarsag.q[10]=="-"){
            response = await fetch(`http://localhost:3001/wolfram?input=limit+${pedarsag.wolfram}+x->${pedarsag.q[8]}+Direction->1`) 
         const data= await response.json()
         const value=data.queryresult.pods[0].subpods[0].plaintext;
        show(value)
        }
        else{
            response = await fetch(`http://localhost:3001/wolfram?input=limit+${pedarsag.wolfram}+x->${pedarsag.q[8]}`) 
         const data= await response.json()
         console.log(data);
         
         
         const value=data.queryresult.pods[0].subpods[0].plaintext;
        show(value)
        }
        console.log(pedarsag);
        
        
    }
    else if(twoFlag=="antegral"){
        response = await fetch(`http://localhost:3001/wolfram?input=integrate+${test}`) 
        const data= await response.json()
        const value=data.queryresult.pods[0].subpods[0].plaintext;
        show(value)
    }else if(twoFlag=="moshtagh"){
         response = await fetch(`http://localhost:3001/wolfram?input=derivative+of+${test}`) 
         const data= await response.json()
         const value=data.queryresult.pods[0].subpods[0].plaintext;
        show(value)
    }else if(d){
         response = await fetch(`http://localhost:3001/wolfram?input=limit+${test}+x->${limit}+Direction->${d}`) 
         const data= await response.json()
         const value=data.queryresult.pods[0].subpods[0].plaintext;
        show(value)
        
    }else{
        response = await fetch(`http://localhost:3001/wolfram?input=limit+${test}+x->${limit}`) 
         const data= await response.json()
         const value=data.queryresult?.pods[0]?.subpods[0]?.plaintext;
        show(value)
        
    }
}
const  show=(str)=> {  

    let latex = str;

    latex = latex.replace(/sin\^\(-1\)/g, '\\arcsin');
    latex = latex.replace(/cos\^\(-1\)/g, '\\arccos');
    latex = latex.replace(/tan\^\(-1\)/g, '\\arctan');
    latex = latex.replace(/cot\^\(-1\)/g, '\\arccot');
    latex = latex.replace(/sec\^\(-1\)/g, '\\arcsec');
    latex = latex.replace(/csc\^\(-1\)/g, '\\arccsc');
    latex = latex.replace(/\bsin\b/g, '\\sin');
    latex = latex.replace(/\bcos\b/g, '\\cos');
    latex = latex.replace(/\btan\b/g, '\\tan');
    latex = latex.replace(/\bcot\b/g, '\\cot');
    latex = latex.replace(/\bsec\b/g, '\\sec');
    latex = latex.replace(/\bcsc\b/g, '\\csc');
    latex = latex.replace(/\blog\b/g, '\\log');
    latex = latex.replace(/\be\^/g, 'e^')
    latex = latex.replace(/sqrt\(([^)]+)\)/g, '\\sqrt{$1}');        
    latex = latex.replace(/sqrt2\(([^)]+)\)/g, '\\sqrt{$1}');        
    latex = latex.replace(/sqrt3\(([^)]+)\)/g, '\\sqrt[3]{$1}');
    latex = latex.replace(/sqrt4\(([^)]+)\)/g, '\\sqrt[4]{$1}');
    latex = latex.replace(/sqrt\[(\d+)\]\(([^)]+)\)/g, '\\sqrt[$1]{$2}');
    latex = latex.replace(/\bSi\(/g, '\\operatorname{Si}(');
    latex = latex.replace(/\bCi\(/g, '\\operatorname{Ci}(');
    latex = latex.replace(/\bEi\(/g, '\\operatorname{Ei}(');
    latex = latex.replace(/\bintegral\b/g, '\\int');
    latex = latex.replace(/\bd\/dx\b/g, '\\frac{d}{dx}');
    latex = latex.replace(/\blim_\(([^)]+)\)/g, '\\lim_{$1}');
    latex = latex.replace(/\bconstant\b/g, 'C');
    latex = latex.replace(/(\S+)\s*\/\s*(\S+)/g, '\\frac{$1}{$2}');
    latex = latex.replace(/\*\*/g, '^');
    latex = latex.replace(/\bdx\b/g, ' \\, dx');

    const outputDiv = document.querySelector(".my");
    outputDiv.innerHTML = `$$${latex}$$`;
    MathJax.typesetPromise([outputDiv]).catch((err) => console.log(err.message));
}
const headerHandler=()=>{
    if(oneFlag=="m")
    {
        mSection.classList.add("opacity");
        tSection.classList.remove("opacity");
        iconbody.classList.remove("hidden")
        levelparent.classList.add("hidden")
    }else{
        {
        tSection.classList.add("opacity");
        mSection.classList.remove("opacity");
        iconbody.classList.add("hidden")
        levelparent.classList.remove("hidden")
    }
    }
    my.innerHTML=""; 
}
const navHandler=()=>{
    const mf=document.querySelectorAll(".mf");
    mf.forEach((x)=>{
        if(x.getAttribute("id")==twoFlag)
            x.classList.add("opacity")
        else
            x.classList.remove("opacity")
    })
    if(twoFlag=="had"){
         limit.classList.remove("hidden");
        dinput.classList.remove("hidden");
    }
       
    else{
        limit.classList.add("hidden");
        dinput.classList.add("hidden");
    }
        

    my.innerHTML=""; 
}
navHandler()
headerHandler();
mSection.addEventListener("click",()=>{
    oneFlag="m";
    headerHandler();
})
tSection.addEventListener("click",()=>{
    oneFlag="t";
    headerHandler();
})
antegral.addEventListener("click",()=>{twoFlag="antegral";navHandler()});
moshtagh.addEventListener("click",()=>{twoFlag="moshtagh";navHandler()});
had.addEventListener("click",()=>{twoFlag="had";navHandler()});
mbtn.addEventListener("click",()=>{
    fetchData(mx.value,limit.value,dinput.value*-1)
     
})
icons.forEach((i)=>{
    i.addEventListener("click",()=>{
        
        lastfocus.value=lastfocus.value.slice(0,lastfocus.selectionStart)+i.dataset.value+lastfocus.value.slice(lastfocus.selectionEnd)
    })
})
mx.addEventListener("click",()=>{lastfocus=mx})
limit.addEventListener("click",()=>{lastfocus=limit})
dinput.addEventListener("keyup",()=>{
    diraction=dinput.value
})


aa.addEventListener("click",()=>{
    
    if(twoFlag=="antegral"){
        mx.value=bank.int[0][Math.floor(Math.random()*30)].q
    }else if(twoFlag=="moshtagh"){
        mx.value=bank.dx[0][Math.floor(Math.random()*30)].q
    }else{
        mx.value=bank.lim[0][Math.floor(Math.random()*30)].q
        limit.value=bank.lim[0][Math.floor(Math.random()*30)].q[8]
        // if(bank.lim[0][Math.floor(Math.random()*30)].q[10]=="+")
            // dinput.value=-1;
        // else if(bank.lim[0][Math.floor(Math.random()*30)].q[10]=="-")
            // dinput.value=1
        // else
            // dinput.value=""
    }
})
bb.addEventListener("click",()=>{
    
    if(twoFlag=="antegral"){
        mx.value=bank.int[1][Math.floor(Math.random()*30)].q
    }else if(twoFlag=="moshtagh"){
        mx.value=bank.dx[1][Math.floor(Math.random()*30)].q
    }else{
        mx.value=bank.lim[1][Math.floor(Math.random()*30)].q
        limit.value=bank.lim[1][Math.floor(Math.random()*30)].q[8]
        // if(bank.lim[1][Math.floor(Math.random()*30)].q[10]=="+")
            // dinput.value=-1;
        // else if(bank.lim[1][Math.floor(Math.random()*30)].q[10]=="-")
            // dinput.value=1
        // else
            // dinput.value=""
    }
})
cc.addEventListener("click",()=>{
    
    if(twoFlag=="antegral"){
        mx.value=bank.int[2][Math.floor(Math.random()*30)].q
    }else if(twoFlag=="moshtagh"){
        mx.value=bank.dx[2][Math.floor(Math.random()*30)].q
    }else{
        mx.value=bank.lim[2][Math.floor(Math.random()*30)].q
        limit.value=bank.lim[2][Math.floor(Math.random()*30)].q[8]
        // if(bank.lim[2][Math.floor(Math.random()*30)].q[10]=="+")
            // dinput.value=-1;
        // else if(bank.lim[2][Math.floor(Math.random()*30)].q[10]=="-")
            // dinput.value=1
        // else
            // dinput.value=""
    }
})
dd.addEventListener("click",()=>{
    
    if(twoFlag=="antegral"){
        mx.value=bank.int[3][Math.floor(Math.random()*30)].q
    }else if(twoFlag=="moshtagh"){
        mx.value=bank.dx[3][Math.floor(Math.random()*30)].q
    }else{
        mx.value=bank.lim[3][Math.floor(Math.random()*30)].q
        limit.value=bank.lim[3][Math.floor(Math.random()*30)].q[8]
        // if(bank.lim[3][Math.floor(Math.random()*30)].q[10]=="+")
            // dinput.value=-1;
        // else if(bank.lim[3][Math.floor(Math.random()*30)].q[10]=="-")
            // dinput.value=1
        // else
            // dinput.value=""
    }
})
ee.addEventListener("click",()=>{
    
    if(twoFlag=="antegral"){
        mx.value=bank.int[4][Math.floor(Math.random()*30)].q
    }else if(twoFlag=="moshtagh"){
        mx.value=bank.dx[4][Math.floor(Math.random()*30)].q
    }else{
        mx.value=bank.lim[4][Math.floor(Math.random()*30)].q
        limit.value=bank.lim[4][Math.floor(Math.random()*30)].q[8]
        // if(bank.lim[4][Math.floor(Math.random()*30)].q[10]=="+")
            // dinput.value=-1;
        // else if(bank.lim[4][Math.floor(Math.random()*30)].q[10]=="-")
            // dinput.value=1
        // else
            // dinput.value=""
    }
})



