import {useState, useEffect} from "react";
import axios from "axios";

export default function useApplicationData () {

  
  
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments:{},
    interviewers: {}
    
  });

  const fetchFreeSpace = (appointments) => { 
    const appIDs = state.days.filter(day => day.name === state.day);
    const todayApp = appIDs[0].appointments;
    const freeSpace = todayApp.filter(app => !appointments[app].interview).length
    return freeSpace 
  }
  
  function bookInterview(id, interview) {
    console.log(id, interview);
    
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };


    const days = [...state.days,  
    ]

    const dayIndex = state.days.findIndex((day) => 
      day.appointments.includes(id)
    )
    
    days[dayIndex].spots = fetchFreeSpace(appointments)

    return axios.put(`/api/appointments/${id}`, appointment)
    .then(()=> {
      setState({...state, appointments, days})
    }) 
  }
  
  function cancelInterview(id) {
    const appointment = {...state.appointments[id],
      interview: null
    };
    const appointments = {...state.appointments,
      [id]: appointment
    };

    const days = [...state.days,  
    ]

    const dayIndex = state.days.findIndex((day) => 
      day.appointments.includes(id)
    )
    
    days[dayIndex].spots = fetchFreeSpace(appointments)
    return axios.delete(`api/appointments/${id}`)
    .then(() => {
      setState({...state, appointments, days})
    }) 


  }
  
  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`)
    ])
    .then((all)=> {
      setState(prev => ({...prev, 
        days: all[0].data, 
        appointments: all[1].data,
        interviewers: all[2].data
      }))
      // console.log('RESULTS',all)
    })
  },[]);
  return { state, setDay, bookInterview, cancelInterview }
}