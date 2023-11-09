function dateFormat(date) {
  const formatDate = new Date(date);
  const year = formatDate.getFullYear();
  const month =
    formatDate.getMonth() + 1 < 9
      ? '0' + formatDate.getMonth() + 1
      : formatDate.getMonth() + 1;
  const day =
    formatDate.getDay() < 9 ? '0' + formatDate.getDay() : formatDate.getDay();

  return [year, month, day].join('.');
}

export { dateFormat };
