import React,{useState} from 'react'

import moment from'moment'

import Calendar from './components/calendar'
import { AppContextProvider } from './appContext';
import EditTask from './components/editTask';
import NewTask from './components/newTask';
function App() {
const[month,setMonth]=useState(moment())
const[selectedDay,setSelectedDay]=useState(moment().startOf('day'))
const[selectedTask,setSelectedTask]=useState(null)
const[tasks,setTasks]=useState({})
const[showEdit,setShowEdit]=useState(false)
  return (
    <AppContextProvider value={{month,setMonth,selectedDay,setSelectedDay,tasks,setTasks,selectedTask,setSelectedTask,showEdit,setShowEdit}}>
    <Calendar/>
    {showEdit?<EditTask/>:<NewTask/>}
</AppContextProvider>
  );
}

export default App;
