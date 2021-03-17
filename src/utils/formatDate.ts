const formatDate = (date: Date): string => {
  const data = new Date(date);
  return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
};

export default formatDate;
