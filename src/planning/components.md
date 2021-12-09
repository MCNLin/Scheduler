# Scheduler project breakdown

## Components

- Button--
- DayList
- DayListItem---
- InterviewerList
- InterviewerListItem
- Appointment
- Appointment/Header
- Appointment/Empty
- Appointment/Show
- Appointment/Form
- Appointment/Status
- Appointment/Error
- Appointment/Confirm

### Button

- State:
- Props:
- Used by:

### DayList

- State:
- Props: 
  * days:Array an array of objects (each object represents a day and includes an id, name, and spots)
  * day:String the currently selected day
  * setDay:Function sets the currently selected day and accepts the name of the day eg. "Monday", "Tuesday"
- Used by:

### DayListItem

- State:
- Props: 
  * name:String the name of the day
  * spots:Number the number of spots remaining
  * selected:Boolean true or false declaring that this day is selected
  * setDay:Function accepts the name of the day eg. "Monday", "Tuesday"
- Used by:

### InterviewerList

- State: 
  * selected:boolean - determines if an interviewer is selected or not and displays the name and applies appropriate styles if selected.
- Props:
  * interviewers:array - an array of objects as seen above
  * setInterviewer:function - a function that accepts an interviewer id.  This function will simply be passed down to the InterviewerListItem
  * interviewer:number - a number that represents the id of the currently selected interviewer


- Used by:

### InterviewerListItem

- State:
- Props:
  * id:number - the id of the interviewer
  * name:string - the name of the interviewer
  * avatar:url - a url to an image of the interviewer
- Used by:

### Appointment

- State:
- Props:
- Used by:

### Appointment/Header

- State:
- Props:
- Used by:

### Appointment/Empty

- State:
- Props:
- Used by:

### Appointment/Show

- State:
- Props:
  * student:String eg. "Lydia Miller-Jones"
  * interviewer:Object we can use the interview object that already exists in stories/index.js for this
  * onEdit:Function to be called when the user clicks the Edit button
  * onDelete:Function to be called when the user clicks the Delete button
- Used by:

### Appointment/Form

- State:
- Props:
- Used by:

### Appointment/Status

- State:
- Props:
- Used by:

### Appointment/Error

- State:
- Props:
- Used by:

### Appointment/Confirm

- State:
- Props:
- Used by: