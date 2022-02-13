import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TaskListView from '../TaskListView';

// import essentials for target
import useTaskByIdSelector from 'redux/selectors/useTaskByIdSelector';
import useTaskEditContext from '../../hooks/useTaskEditContext';
import useSmoothScrolling from '../hooks/useSmoothScrolling';

// mock essentials for target
jest.mock('redux/selectors/useTaskByIdSelector');
jest.mock('../../hooks/useTaskEditContext');
jest.mock('../hooks/useSmoothScrolling');

// mock components
jest.mock('../Task/Task', () => {
  return () => <div className="task">Task</div>
});

describe('TaskListView', () => {
  it('should render', () => {
    // Arrange
    const className = 'className';
    const tasks = [{ _id: 'taskId', id: 'taskId', projectId: 'projectId', description: 'description', key: 'unique' }];
    const setTasksSpy = jest.fn();
    const refs = tasks;
    const state = { id: 'taskId', description: 'description' };
    useTaskEditContext.mockReturnValue({ state });
    useTaskByIdSelector.mockReturnValue(tasks[0]);

    // Act
    const target = render(<TaskListView className={className} tasks={tasks} setTasks={setTasksSpy} refs={refs} />);

    // Assert
    expect(useSmoothScrolling).toBeCalledWith(refs, tasks[0].id, tasks[0].description);
    expect(target.queryByTestId('list-view')).toBeInTheDocument();
  });
});
