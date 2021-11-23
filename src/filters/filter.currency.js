export default function currencyFilter(value, currency = 'KGS') {
  return new Intl.NumberFormat('kg-KG', {
    style: 'currency',
    currency
  }).format(value)
}