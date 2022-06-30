const getDate = () => {
  //const { DateTime } = luxon;
  const now = DateTime.now();
  return now.toLocaleString(DateTime.DATETIME_MED);
};

export default getDate;