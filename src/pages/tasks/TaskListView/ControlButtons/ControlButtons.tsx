import React from 'react';
import DownloadButton from './DownloadButton/DownloadButton';
import NewButton from './NewButton/NewButton';
import HomeButton from './HomeButton/HomeButton';
import UploadButton from './UploadButton/UploadButton';
import styles from './ControlButtons.module.css';
import { TaskInterface } from 'interfaces/pages/tasks/Task';

interface ControlButtonsProps {
  tasks: TaskInterface[];
}
const ControlButtons: React.FC<ControlButtonsProps> = ({tasks}) => {
  return (
  <div className={styles.controlButtons} data-testid="control-buttons">
    <HomeButton />
    <DownloadButton tasks={tasks} />
    <UploadButton />
    <NewButton />
  </div>
)};

export default ControlButtons;
