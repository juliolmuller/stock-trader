
/**
 * Outputs a formatted numeric value
 *
 * @param {any} value
 * @param {Number} fractionDigits
 * @return {String}
 */
export default function (value, fractionDigits = 1) {
  return Number.isNaN(value)
    ? value
    : Intl.NumberFormat('pt-BR', {
      maximumFractionDigits: fractionDigits,
      minimumFractionDigits: fractionDigits,
    }).format(value)
}
