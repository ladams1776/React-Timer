import React from 'react';
import cn from 'classnames';
import { TaskInterface } from 'interfaces/pages/tasks/Task';
import { Button } from 'components';
import useHandleDownload from './useHandleDownload';
import styles from './DownloadButton.module.css';

interface DownloadButtonProps {
  tasks: TaskInterface[];
}

const DownloadButton: React.FC<DownloadButtonProps> = (...tasks) => {
  const handleDownload = useHandleDownload(tasks);

  return (
    <>
      {tasks?.length && (
        <Button data-testid="btn-download" title="Download Tasks" type="a" className={cn(styles.buttonDownload, 'glyphicon glyphicon-download-alt')} onClick={handleDownload} />
      )}
    </>
  );
};

export default DownloadButton;
