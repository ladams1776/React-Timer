import React, { useState, useCallback, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import {
  useTaskEditContext,
  useBackButtonListener,
  useFetchTaskById,
  useFlashMessageContext
} from 'hooks';
import { getFormattedDate } from 'utils';
import ControlPanel from '../timer/controlPanel/ControlPanel';
import ProjectDropDown from '../projectDropdown/ProjectDropdown';
import TagDropdown from '../tagDropdown/TagDropdown';
import Timer from '../timer/Timer';
import styles from './TaskForm.module.css';

//@TODO:
// 1. use useEffect to fetch the data
// 2. make the endpoints / test it
// 3. abstract fetching into a function

const selectTags = (event) => {
  return tags.filter(tag => event?.tags?.includes(tag._id))
}

const AddTaskForm = ({ history }) => {
  const { task } = useTaskEditContext();
  const { setSuccessFlashMessage, setErrorFlashMessage } = useFlashMessageContext();
  const [time, setTime] = useState(0);
  const setTimeCallback = useCallback((time) => setTime(time), [setTime]);

  /**
   * These really can live in the Timer comp, but to be able to Unit test the Timer
   * and not try to figure out how to mock what useState returns... this seems to be
   * an easy compromise. Or at least a late night, tired one.
   */
  const [isActive, setIsActive] = useState(false);


  // useEffect(() => {
  //   fetch('/api/tags');
  // }, []);



  const onSubmit = event => {
    const date = new Date();
    const dateFormatted = getFormattedDate(date);
    const selectedTags = tags.filter(tag => event?.tags?.includes(tag._id));

    const timeTask = {
      date: dateFormatted,
      WorkUnit: [
        {
          time,
          contractId: event?.projects || 0,
          description: event?.description || '',
          tags: selectedTags
        },
      ],
    };

    timeTask._id = task?._id || '-1';

    fetch('/api/task', {
      method: 'POST',
      body: JSON.stringify(timeTask),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        if (res.status === 200) {
          setSuccessFlashMessage('Successfully created a Task');
          return res.json();
          // setIsLoading(false);
        } else {
          setErrorFlashMessage(`Problem saving task, status: ${event.status}`);
          return res.json();
        }
      })
      .then(data => {
        history.push(`/task/${data._id}`);
      })
      .catch(error => setErrorFlashMessage(`Problem saving task, status: ${error}`));
  };

  return (
    <Form
      initialValues={{
        description: '',
        projects: 0,
      }}
      onSubmit={onSubmit}
      render={({ handleSubmit, pristine }) => (
        <div className={styles.taskFormContainer}>
          <div className={styles.form}>
            <form className={styles.taskForm} onSubmit={handleSubmit}>
              <ControlPanel
                setTime={setTimeCallback}
                time={time}
                isActive={isActive}
                setIsActive={setIsActive}
              >
                <ProjectDropDown />
                <Timer time={time} />
                <TagDropdown />
              </ControlPanel>

              <div className={styles.textArea}>
                <Field
                  name="description"
                  component="textarea"
                  cols="80"
                  rows="10"
                />
              </div>

              <button type="submit" className={styles.submit} disabled={pristine}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    />
  );
};

//@TODO: Come back and use pipeline operator
export default withRouter(AddTaskForm);
