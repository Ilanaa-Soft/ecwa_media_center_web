const currencyFormtter = (number: number) => {
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  });

  return formatter.format(number);
};

export default currencyFormtter;
