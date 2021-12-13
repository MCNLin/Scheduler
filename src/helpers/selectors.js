//*******************************************************************************/
export function getAppointmentsForDay(state,day) {
  
  const filteredDays = state.days.find(days => days.name === day);
  
  let appointments = [];
  
  if (filteredDays) {
      appointments = filteredDays.appointments.map((id) => {
        return state.appointments[id];
      });
  
    }
  
    return appointments;
};
  
/****************************************************************************/

export function getInterview(state, interview) {
  
  if(!interview){
    return null;
  }

  const interviews = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]

  }
  return interviews
}

/*****************************************************************************/

export function getInterviewersForDay(state, day) {

  const filteredDay = state.days.find(days => days.name === day);

  let interviewersArr = [];

  // console.log("filterDay------------->", filteredDay)  
  if (filteredDay) {
    interviewersArr = filteredDay.interviewers.map((id) => {
      // console.log('interviewers on line 45' , interviewersArr)
      return state.interviewers[id];
    });
    
  }
  
  // console.log('interviewers,', interviewersArr)
  return interviewersArr;
};