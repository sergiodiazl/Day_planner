import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../appContext';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import {
  validateTaskData,
  validateTaskDate,generateDataErrorMsg
} from '../../helpers/formValidation';
import './newTask.css';
function NewTask() {
  const { selectedDay, tasks, setTasks } = useContext(AppContext);

  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [year, setYear] = useState(selectedDay.format('Y'));
  const [month, setMonth] = useState(selectedDay.format('M'));
  const [day, setDay] = useState(selectedDay.format('D'));
  const [hours, setHours] = useState(8);
  const [minutes, setMinutes] = useState(0);
  const [color, setColor] = useState('black');
  const [showDataError, setShowDataError] = useState(false);
  const [dataErrorMessage, setDataErrorMessage] = useState('');
  const [showDateError, setShowDateError] = useState(false);
  useEffect(() => {
    setCity('');
    setDescription('');
    setHours(8);
    setMinutes(0);
    setColor('black');
  }, [selectedDay, tasks]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateTaskData(description,city,hours,minutes,day,month,year)) {
      setShowDataError(false);
      setDataErrorMessage('');
      const dateString = `${day}-${month}-${year}`;
      if (validateTaskDate(dateString)) {
        console.log(validateTaskDate(dateString));
        setShowDateError(false);
        const newDate = moment(dateString, 'DD-MM-YYYY').format('DD MM YYYY');
        const timeNumber = hours * 100 + minutes;
        const newTask = { id: uuidv4(), timeNumber, description, city, color };
        const dayTasks = tasks[newDate]
          ? [...tasks[newDate], newTask]
          : [newTask];
        console.log(tasks);
        console.log(dayTasks);
        setTasks({ ...tasks, [newDate]: dayTasks });
      } else {
        setShowDateError(true);
      }
    } else {
      const newDataErrorMsg = generateDataErrorMsg(description, city, hours, minutes);
      setDataErrorMessage(newDataErrorMsg);
      setShowDataError(true);
    }
  };
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    switch (inputName) {
      case 'description':
        setDescription(inputValue);
        break;
      case 'city':
        setCity(inputValue);
        break;
      case 'hours':
        setHours(inputValue);
        break;
      case 'minutes':
        setMinutes(inputValue);
        break;
      case 'day':
        setDay(inputValue);
        break;
      case 'month':
        setMonth(inputValue);
        break;
      case 'year':
        setYear(inputValue);
        break;
      default:
        break;
    }
  };

  const changeColor = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
  };
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <h3>New Task </h3>
      <div className="new-task-fields">
       
        <div>
          <div className="input-group">
            <div className="single-input">
              <label htmlFor="day">Day</label>
              <input
                type="number"
                id="day"
                name="day"
                min="1"
                max="31"
                step="1"
                value={day}
                onChange={handleChange}
              />
            </div>
            <div className="single-input">
              <label htmlFor="month">Month</label>
              <input
                type="number"
                id="month"
                name="month"
                min="1"
                max="12"
                step="1"
                value={month}
                onChange={handleChange}
              />
            </div>
            <div className="single-input">
              <label htmlFor="year">Year</label>
              <input
                type="number"
                id="year"
                name="year"
                min="2010"
                max="2030"
                step="1"
                value={year}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="single-input">
              <label htmlFor="hours">Hours</label>
              <input
                type="number"
                id="hours"
                name="hours"
                min="0"
                max="24"
                step="1"
                value={hours}
                onChange={handleChange}
              />
            </div>
            <div className="single-input">
              <label htmlFor="minutes">Minutes</label>
              <input
                type="number"
                id="minutes"
                name="minutes"
                min="0"
                max="60"
                step="1"
                value={minutes}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="single-input city">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            maxLength="30"
            value={description}
            onChange={handleChange}
            placeholder="description"
          />
        </div>
          <div className="single-input city">
            <label for="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="city name"
              value={city}
              onChange={handleChange}
              maxLength="30"
            />
          </div>
          <div className="color-wrapper">
            <label for="color"> Color </label>
            <div className="radio-group">
              <div>
                <label htmlFor="black">Black</label>
                <input
                  id="black"
                  type="radio"
                  value="black"
                  checked={color === 'black'}
                  onChange={changeColor}
                />
              </div>
              <div>
                <label htmlFor="red">Red</label>
                <input
                  id="red"
                  type="radio"
                  value="red"
                  checked={color === 'red'}
                  onChange={changeColor}
                />
              </div>
              <div>
                <label htmlFor="green">Green</label>
                <input
                  id="green"
                  type="radio"
                  value="green"
                  checked={color === 'green'}
                  onChange={changeColor}
                />
              </div>
            </div>
          </div>
        </div>
        <input className="new-task-btn"  type="Submit" value="Create new Task" />
      </div>

      <div>{showDataError && <span>{dataErrorMessage}</span>}</div>
      <div>{showDateError && <span>Choose a valid date</span>}</div>
    </form>
  );
}

export default NewTask;
