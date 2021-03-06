import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}

  });
  //shows availablility of free spots
  const fetchFreeSpace = (state, appointments) => {

    const daysObjArr = state.days.filter(day => day.name === state.day);
    const todayApp = daysObjArr[0].appointments;
    const freeSpace = todayApp.filter(app => !appointments[app].interview).length;
    return freeSpace;
  }

  // book appointment & updates spots available
  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };


    const days = [...state.days,
    ];

    const dayIndex = state.days.findIndex((day) =>
      day.appointments.includes(id)
    );

    const spots = fetchFreeSpace(state, appointments)

    const newDay = {
      ...days[dayIndex], spots
    };

    days[dayIndex] = newDay;

    return axios.put(`/api/appointments/${id}`, appointment)
      .then(() => {
        setState(prev => ({ ...prev, appointments, days }));
      });
  };

  //deletes/cancels interview and updates spots accordingly
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = [...state.days,
    ];

    const dayIndex = state.days.findIndex((day) =>
      day.appointments.includes(id)
    );

    const spots = fetchFreeSpace(state, appointments);

    const newDay = {
      ...days[dayIndex], spots
    };

    days[dayIndex] = newDay;

    return axios.delete(`api/appointments/${id}`)
      .then(() => {
        setState(prev => ({ ...prev, appointments, days }));
      });
  }

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`)
    ])
      .then((all) => {
        setState(prev => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        }));
      });
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
};