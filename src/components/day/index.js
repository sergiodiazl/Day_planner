import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../appContext';
import TaskList from '../tasklist';
import './day.css';
function Day(props) {
  const {
    day,
    day: { date, isCurrentMonth, isToday, number },
    select,
  } = props;
  const { tasks, setTasks, setShowEdit} = useContext(AppContext);
  const dayTitle = date.format('DD MM YYYY');
  const isWeekend = day.name === 'S';
  const deleteTasks = () => {
    let newTasks = { ...tasks };
    delete newTasks[dayTitle];
    setShowEdit(false);
    setTasks(newTasks);
  };
  useEffect(
    () => {
      if (tasks[dayTitle] === undefined) {
        setShowEdit(false);
      }
    },
    [tasks[dayTitle]],
    date
  );
  const renderTaksMessage = () => {
    if (tasks[dayTitle]) {
      let tasksOnDay = null;
      if (tasks[dayTitle].length === 1) {
        tasksOnDay = (
          <>
            <span>1 Task</span>{' '}
            <button class="delete-all-btn" onClick={deleteTasks}>
              Delete all
            </button>
          </>
        );
      }
      if (tasks[dayTitle].length > 1) {
        tasksOnDay = (
          <>
            <span>{tasks[dayTitle].length} Tasks </span>{' '}
            <button class="delete-all-btn" onClick={deleteTasks}>
              Delete all
            </button>
          </>
        );
      }
      return <div className="day-summary">{tasksOnDay}</div>;
    }
  };
  return (
    <div
      className={
        'day' +
        (isToday ? ' today' : '') +
        (isCurrentMonth ? '' : ' different-month')
      }
      onClick={() => select(day)}
    >
      <div className="day-summary-wrapper">
        <span className={`day-number ${isWeekend ? 'weekend' : ''}`}>
          {number}
        </span>

        {renderTaksMessage()}
      </div>
      <TaskList dayTitle={dayTitle} />
    </div>
  );
}

export default Day;
