/* eslint-disable no-useless-computed-key */
import React from 'react';
import cn from 'classnames';
import PropTypes from "prop-types";
import { Form, Field } from 'react-final-form'
import { useSubmit } from '../hooks';
import { useFetchProjectOptions } from 'hooks';
import TagMultiSelect from 'pages/tasks/TaskForm/tagMultiSelect/TagMultiSelect';
import Timer from 'pages/tasks/TaskForm/timer/Timer';
import DateTimeButton from './dateTimePage/DateTimeButton';
import { useFetchTags } from '../hooks';
import useFetchTaskByIdDispatch from '../hooks/useFetchTaskById/useFetchTaskByIdDispatch';
import useTaskByIdSelector from 'redux/selectors/useTaskByIdSelector';
import TextAreaAdapter from 'components/TextAreaAdapter';
import styles from './EditTaskForm.module.css';
import SaveButton from 'components/saveButton/SaveButton';
import TopBar from 'components/topBar/TopBar';
import Selector from 'components/Selector';
import Toggle from 'components/toggle/Toggle';

const EditTaskForm = ({ taskId, className }) => {
  useFetchTaskByIdDispatch(taskId);
  useFetchTags();
  const task = useTaskByIdSelector();
  const { tags } = task;
  const projectOptions = useFetchProjectOptions();
  const onSubmit = useSubmit();

  return (<div
    className={className}
    data-testid="addTaskForm">
    <TopBar>
      <SaveButton />
      <DateTimeButton taskId={taskId} />
      <Timer />
    </TopBar>
    <Form
      onSubmit={onSubmit}
      initialValues={task}
      render={({ handleSubmit }) => {
        return (
          <form
            id="editForm"
            data-testid="form"
            onSubmit={handleSubmit}
            className={styles.taskForm}
            method="PUT">
            <div className={styles.timeInfoContainer}>
              <div className={styles.innerLeft}>
                <Field
                  name="project"
                  component={() => <Selector options={projectOptions} />}
                />
              </div>
              <div className={cn({ [styles.innerRight]: true })}>
                <Field name="tags" tags={tags} component={TagMultiSelect} />
              </div>
            </div>

            <Field name="description" component={TextAreaAdapter} />
          </form>)
      }} />
  </div>);
};

EditTaskForm.propTypes = {
  taskId: PropTypes.string,
  className: PropTypes.string
}

export default EditTaskForm;
