import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../appContext';
import './taskList.css'
import Task from '../task';
function TaskList({ dayTitle }) {
  const context = useContext(AppContext);
  const {
    tasks,
    setSelectedTask,
    setShowEdit,
  } = context;
 // console.log('tasklist', selectedDay);

  useEffect(() => {
    setShowEdit(false);
    setSelectedTask(null);
  }, [tasks]);

  const sortedTasks = tasks[dayTitle]
    ? tasks[dayTitle].sort((a, b) => (a.timeNumber > b.timeNumber ? 1 : -1))
    : [];
  return (
    <section className="task-list">
     
        
          {sortedTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              setSelectedTask={setSelectedTask}
              setShowEdit={setShowEdit}
              dayTitle={dayTitle}
            />
          ))}
      
     
      
    </section>
  );
}

export default TaskList;
