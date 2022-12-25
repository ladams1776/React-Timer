import React from 'react';
import DownloadButton from './DownloadButton/DownloadButton';
import NewButton from './NewButton/NewButton';
import HomeButton from './HomeButton/HomeButton';
import UploadButton from './UploadButton/UploadButton';
import styles from './ControlButtons.module.css';
import { TaskInterface } from 'interfaces/pages/tasks/Task';
import Toggle from 'components/toggle/Toggle';
import { useIsDarkModeSelector } from 'redux/selectors/useIsDarkModeSelector';
import { toggleDarkMode } from 'redux/actionCreators/actions';

interface ControlButtonsProps {
  tasks: TaskInterface[];
}
const ControlButtons: React.FC<ControlButtonsProps> = (...tasks) => {
  const isDarkMode = useIsDarkModeSelector();
  return (
  <div className={styles.controlButtons} data-testid="control-buttons">
    <HomeButton />
    <DownloadButton tasks={tasks} />
    <UploadButton />
    <NewButton />
    <Toggle action={toggleDarkMode} isToggled={isDarkMode}/>
  </div>
)};

export default ControlButtons;
