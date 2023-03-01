const longDateFormatter = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  return date.toLocaleDateString("en-NG", options);
};

export default longDateFormatter;
