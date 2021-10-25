//gives date prior to current date
export const getDate = (duration: string) => {
  let dateObj = new Date();
  let requiredDate = dateObj.setMonth(dateObj.getMonth() - parseInt(duration));
  let ISO_date = new Date(requiredDate).toISOString();
  return ISO_date;
};
