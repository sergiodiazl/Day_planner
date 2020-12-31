import moment from 'moment';
export const validateTaskDate = (dateString) => {
  const newDate = moment(dateString, 'DD-MM-YYYY');
  return newDate.isValid();
};
export const validateTaskData = (
  description,
  city,
  hours,
  minutes,
  day,
  month,
  year
) => {

    
    
  if (
    description.length <= 0 || description.length>30||
    city.length <= 0 ||city.length>30||
    hours< 0 || hours>24||
    minutes < 0 ||minutes>60||
    city.length > 30 ||city.length<1||
    day<1||day>31 ||month<1 ||month>12 ||year <1900
  ) {
    return false;
  }
  return true;
};

export const generateDataErrorMsg = (description, city, hours, minutes) => {
  const errorMsg = `Please complete the following :${
    description === '' ? 'description ' : ''
  }${city === '' ? 'city' : ''} ${hours.length <= 0 ? 'hours' : ''} ${
    minutes.length <= 0 ? 'minutes' : ''
  }`;

  return errorMsg;
};
