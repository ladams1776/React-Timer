import { writeJsonFile } from './writeJsonFile';
import useTaskAssembler from './useTaskAssembler';
import { TaskInterface } from 'interfaces/pages/tasks/Task';

const useHandleDownload = (tasks: TaskInterface[]) => {
    const assembleTask = useTaskAssembler(tasks);
    console.log('assembledTasked', assembleTask)
    return () => {
        writeJsonFile(assembleTask);
    };
};

export default useHandleDownload;