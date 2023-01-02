/* eslint-disable no-useless-computed-key */
import React from 'react';
import PropTypes from "prop-types";
import { Form, Field } from 'react-final-form'
import { useSubmit } from '../hooks';
import { useFetchProjectOptions, useListenForSave } from 'hooks';
import TagMultiSelect from 'pages/tasks/TaskForm/tagMultiSelect/TagMultiSelect';
import Timer from 'pages/tasks/TaskForm/timer/Timer';
import DateTimeButton from './dateTimePage/DateTimeButton';
import useFetchTaskByIdDispatch from '../hooks/useFetchTaskById/useFetchTaskByIdDispatch';
import useTaskByIdSelector from 'redux/selectors/useTaskByIdSelector';
import TextAreaAdapter from 'components/textAreaAdapter/TextAreaAdapter';
import { Dropdown, TopBar, SaveButton } from 'components';
import useTagsToOptions from 'pages/tasks/hooks/useTagsToOptions';

import styles from './TaskForm.module.css';

const FORM_ID = "taskForm";

const TaskForm = ({ taskId, className }) => {
  useFetchTaskByIdDispatch(taskId);
  const tags = useTagsToOptions();
  const task = useTaskByIdSelector();
  const projectOptions = useFetchProjectOptions();
  const onSubmit = useSubmit();
  useListenForSave(FORM_ID);

  return (<div
    className={className}
    data-testid="addTaskForm">
    <TopBar>
      <SaveButton name={FORM_ID} />
      <DateTimeButton taskId={taskId} />
      <Timer />
    </TopBar>
    <Form
      onSubmit={onSubmit}
      initialValues={task}
      render={({ handleSubmit }) => {
        return (
          <form
            id={FORM_ID}
            data-testid="form"
            onSubmit={handleSubmit}
            className={styles.taskForm}
            method="PUT">
            <Field name="project" component={() => <Dropdown options={projectOptions} />} />
            <Field name="description" component={TextAreaAdapter} />
            <Field name="tags" tags={tags} component={TagMultiSelect} />
          </form>)
      }} />
  </div>);
};

TaskForm.propTypes = {
  taskId: PropTypes.string,
  className: PropTypes.string
}

export default TaskForm;
