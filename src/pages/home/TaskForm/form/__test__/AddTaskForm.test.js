import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// import target
import AddTaskForm from '../AddTaskForm';

// import essentials for target
import useTaskEditContext from 'pages/home/hooks/useTaskEditContext';
import useFetchTags from 'pages/home/TaskForm/hooks/useFetchTags';
import useFetchTaskById from '../../hooks/useFetchTaskById/useFetchTaskById';

// mock hooks
jest.mock('pages/home/hooks/useTaskEditContext');
jest.mock('pages/home/TaskForm/hooks/useFetchTags');
jest.mock('../../hooks/useFetchTaskById/useFetchTaskById');

// mock components
jest.mock('pages/home/TaskForm/timer/Timer', () => {
  return jest.fn(() => <></>)
});
jest.mock('../SubmitButton', () => {
  return jest.fn(() => <></>)
});
jest.mock('../dateTimePage/DateTimeButton', () => {
  return jest.fn(() => <></>);
});
jest.mock('pages/home/TaskForm/projectDropdown/ProjectDropdown', () => {
  return jest.fn(() => <></>);
});
jest.mock('pages/home/TaskForm/tagMultiSelect/TagMultiSelect', () => {
  return jest.fn(({ tags, onChange }) => <></>);
});

describe('AddTaskForm', () => {
  it('should render', () => {
    // Arrange
    const dispatchSpy = jest.fn();
    const onProjectDropDownChangeSpy = jest.fn();
    const onTextAreaChangeSpy = jest.fn();
    const onTagChangeSpy = jest.fn();

    useTaskEditContext.mockImplementation(() => {
      return {
        state: { tags: {} },
        dispatchTask: dispatchSpy,
        onProjectDropDownChange: onProjectDropDownChangeSpy,
        onTextAreaChange: onTextAreaChangeSpy,
        onTagChange: onTagChangeSpy,
      }
    });
    useFetchTags.mockImplementation();
    useFetchTaskById.mockImplementation();

    // Act
    const { queryByTestId } = render(<AddTaskForm taskId={"1"} />);

    // Assert
    expect(queryByTestId('addTaskForm')).toBeInTheDocument();
  });
});
