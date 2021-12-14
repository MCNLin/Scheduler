import React from "react";
import Header from './Header'
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";





import 'components/Appointment/styles.scss'
import Status from "./Status";
import Confirm from "./Confirm";

const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const CREATE = 'CREATE';
const SAVING = 'SAVING';
const DELETING = 'DELETING'
const CONFIRM = 'CONFIRM'
const EDIT = 'EDIT'
const ERROR_SAVE = 'ERROR_SAVE'
const ERROR_DELETE = 'ERROR_DELETE'



export default function Appointment(props) {
// console.log("props.interview in INDEX---->", props.message)
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  )
  const confirm = () => {
    transition(CONFIRM)
  };

  const edit = () => {
    transition(EDIT)
  }

  //saving an appointment
  function save(name, interviewer) {
    
    transition(SAVING);

    const interview = {
      student: name,
      interviewer
    };

    props.bookInterview(props.id, interview)
    .then(()=>{transition(SHOW)})
    .catch(() => transition(ERROR_SAVE));
};
  //deleting an appointment
  function deleteApp(name, interviewer) {
    transition(DELETING)
    props.cancelInterview(props.id)
    .then(() => {
      transition(EMPTY)
    })
    .catch(() => transition(ERROR_DELETE))
  }


  return (

    <article className="appointment">
      <Header time={props.time} />
      
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        onDelete={confirm}
        onEdit={edit}
        />
        )}
        {mode === CREATE && <Form 
        interviewers={props.interviewers} 
        onCancel={() => back(EMPTY)}
        onSave={save} />}

        {mode === EDIT && <Form 
        interviewers={props.interviewers}
        student={props.interview.student} 
        onCancel={() => back(SHOW)}
        onSave={save} />}

        {mode === SAVING && <Status message={"Saving"}/>}
        
        {mode === DELETING && <Status message={"Deleting"}/>}
        
        {mode === CONFIRM && <Confirm
        onCancel={() => back()}
        message = {"Are you sure you would like to delete?"}
        onConfirm={deleteApp}/>}
    </article>

  )
}
