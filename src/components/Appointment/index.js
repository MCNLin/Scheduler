import React from "react";
import Header from './Header'
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

import 'components/Appointment/styles.scss'

//modes
const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const CREATE = 'CREATE';
const SAVING = 'SAVING';
const DELETING = 'DELETING';
const CONFIRM = 'CONFIRM';
const EDIT = 'EDIT';
const ERROR_SAVE = 'ERROR_SAVE';
const ERROR_DELETE = 'ERROR_DELETE';



export default function Appointment(props) {

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
  
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props.bookInterview(props.id, interview)
      .then(() => { transition(SHOW) })
      .catch(() => transition(ERROR_SAVE, true));
  };
  //deleting an appointment
  function deleteApp() {

    transition(DELETING, true);

    props.cancelInterview(props.id)
      .then(() => {
        transition(EMPTY)
      })
      .catch(() => transition(ERROR_DELETE, true));
  };


  return (

    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer ? props.interview.interviewer : ""}
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
        interviewer={props.interview.interviewer ? props.interview.interviewer.id : ""}
        student={props.interview.student}
        onCancel={() => back(SHOW)}
        onSave={save} />}

      {mode === SAVING && <Status
        message={"Saving"} />}

      {mode === DELETING && <Status
        message={"Deleting"} />}

      {mode === CONFIRM && <Confirm
        onCancel={() => back()}
        message={"Are you sure you would like to delete?"}
        onConfirm={deleteApp} />}

      {mode === ERROR_SAVE && <Error
        message={"Could not create appointment"}
        onClose={() => back()} />}

      {mode === ERROR_DELETE && <Error
        message={"Could not cancel appointment"}
        onClose={() => back()} />}

    </article>

  )
};
