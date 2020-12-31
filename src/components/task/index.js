import React ,{useContext,useEffect,useState}from 'react'
import { AppContext } from '../../appContext';
import './task.css'
function Task({task,setSelectedTask,setShowEdit,dayTitle,selectedTask}) {
    const{ description,city,color,timeNumber,id}=task
    
    const {tasks,setTasks}=useContext(AppContext)

    const hourString=(Math.floor(timeNumber/100)).toString().padStart(2,'0')
    const minuteString=(timeNumber%100).toString().padStart(2,'0')
    const [forecast,setForecast]=useState("loading...")
    const APIKEY = '05aed15670235acc953ccfcd7dc61442'
    useEffect(() => {
        
      if(selectedTask){
          if(selectedTask===id){
              setShowEdit(true)
          }
      }
    }, [selectedTask,id])
    async function fetchForecast(city) {
       const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`)
          .then( res => res.json())
          .then(data => data)
          setForecast( apiData.weather?apiData.weather[0].description:'NotAvailable'
          )
      }
    useEffect(() => {
        fetchForecast(city)
       
    }, [city])
    const prepareToEdit=()=>{
       // console.log(selectedTask)
        setSelectedTask(id)
        setShowEdit(true)
    }
    const deleteTask=()=>{
        let dayTasks=[...tasks[dayTitle]].filter(t=>t.id!==id)
        setTasks({...tasks,[dayTitle]:dayTasks})
    }
    return (
        <div className={`task ${color}`}>
          <div className="task-info">
          <div className="task-main">
                {hourString}:{minuteString} at  {city}
            </div>
            <div className="forecast">
                Forecast:{forecast}
            </div>
            <div className="task-description">
                {description}
            </div>   
            </div>  
            
            <div className="btn-wrapper">
                <button className="task-btn edit-btn"onClick ={()=>prepareToEdit()}>Edit</button>
                <button className="task-btn delete-btn" onClick={()=>deleteTask()}>Delete</button>
            </div>
        </div>
    )
}

export default Task
