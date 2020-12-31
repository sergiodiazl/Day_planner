import React from 'react';
import {  validateTaskData ,validateTaskDate } from './helpers/formValidation';

describe('Validate form creation', () => {
  test('valid input', () => {
    const city="Buenos Aires"
    const description="Testing"
    const hours=19
    const minutes=20
    const day=2
    const month=12
    const year=2020
    expect(validateTaskData(description,city,hours,minutes,day,month,year)).toBe(true)
  });
  test(' no city', () => {
    const city=""
    const description="Testing"
    const hours=19
    const minutes=20
    const day=2
    const month=12
    const year=2020
    expect(validateTaskData(description,city,hours,minutes,day,month,year)).toBe(false)

  });
  test(' no description', () => {
    const city="Buenos Aires"
    const description=""
    const hours=19
    const minutes=20
    const day=2
    const month=12
    const year=2020
    expect(validateTaskData(description,city,hours,minutes,day,month,year)).toBe(false)

  });
  test(' incomplete day', () => {
    const city="Buenos Aires"
    const description="Testing"
    const hours=19
    const minutes=20
    const day=""
    const month=12
    const year=""
    expect(validateTaskData(description,city,hours,minutes,day,month,year)).toBe(false)

  });
  test(' incomplete hour', () => {
    const city="Buenos Aires"
    const description="Testing"
    const hours=19
    const minutes=""
    const day=2
    const month=12
    const year=2020
    expect(validateTaskData(description,city,hours,minutes,day,month,year)).toBe(true)

  });
  test(' invalid date', () => {
    const day=30
    const month=2
    const year=2020
    const dateString = `${day}-${month}-${year}`;
    expect(validateTaskDate(dateString)).toBe(false)
  });

});
