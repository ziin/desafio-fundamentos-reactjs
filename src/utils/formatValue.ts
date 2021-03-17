const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    currencyDisplay: 'symbol',
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(value);

export default formatValue;
