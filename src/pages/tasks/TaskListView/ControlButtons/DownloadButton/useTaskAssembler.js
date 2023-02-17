import { getCurrentDateTimeEstFormat } from 'utils';
import { useFetchProjectOptions } from 'hooks';
import formatTimeContractAndCustomer from './formatTimeContractAndCustomer';

//@TODO: Write a test for this
const useTaskAssembler = (...tasks) => {
    console.log('tasks', tasks)
    const projects = useFetchProjectOptions();

    const dateFormatted = getCurrentDateTimeEstFormat();

    const timeTask = {
        date: dateFormatted
    };

    timeTask.WorkUnit = tasks?.map(task =>
        formatTimeContractAndCustomer(task, projects)
    );

    console.log('timeTask', timeTask)

    return timeTask;
}

export default useTaskAssembler;