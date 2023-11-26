import moment from 'moment';

export const formatDateTitle = (dateString: string) => {
  const formattedDate = moment(dateString)
    .format('dddd. MMM D. YYYY')
    .toUpperCase();
  return formattedDate;
};
