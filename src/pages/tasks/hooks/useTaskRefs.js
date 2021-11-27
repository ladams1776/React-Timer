import React from 'react';

const useTaskRefs = (tasks) => {
    return React.useMemo(() => tasks?.length > 0 && tasks.reduce((acc, value) => {
        acc[value._id] = React.createRef();
        return acc;
    }, {}), [tasks]);
};

export default useTaskRefs;