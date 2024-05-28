const formatConfig = {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  currencyDisplay: "symbol",
};
export const CURRENCY_FORMATTER = new Intl.NumberFormat("de-DE", formatConfig);
