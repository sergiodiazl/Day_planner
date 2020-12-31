import React, {  useEffect, useContext } from 'react';

import './calendar.css';
import Week from '../week';
import { AppContext } from '../../appContext';

function Calendar() {
  const { selectedDay, setSelectedDay, month, setMonth } = useContext(
    AppContext
  );
  let monthTitle = month.format('MMMM YYYY');

  useEffect(() => {
    monthTitle = month.format('MMMM YYYY');
  }, [month, selectedDay]);

  const selectDay = (day) => {
    setSelectedDay(day.date);
    setMonth(day.date.clone());
  };

  const renderWeeks = () => {
    let weeks = [];
    let done = false;
    let date = month
      .clone()
      .startOf('month')
      .add('w' - 1)
      .day('Sunday');
    let count = 0;
    let monthIndex = date.month();

    while (!done) {
      weeks.push(
        <Week
          key={date}
          date={date.clone()}
          month={month}
          select={(day) => selectDay(day)}
          selectedDay={selectedDay}
        />
      );

      date.add(1, 'w');

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };

  const DayNames = () => {
    return (
      <div className="row day-names">
        <span className="day">Sun</span>
        <span className="day">Mon</span>
        <span className="day">Tue</span>
        <span className="day">Wed</span>
        <span className="day">Thu</span>
        <span className="day">Fri</span>
        <span className="day">Sat</span>
      </div>
    );
  };
  return (
    <>
      <section className="calendar">
        <header className="header">
          <div className="month-display row">
     

            <span className="month-label">{monthTitle}</span>
          </div>
          <DayNames />
        </header>
        {renderWeeks()}
      </section>
    </>
  );
}

export default Calendar;
