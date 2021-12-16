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
 
  if (filteredDay) {
    interviewersArr = filteredDay.interviewers.map((id) => {
      
      return state.interviewers[id];
    });
    
  }
  
  return interviewersArr;
};