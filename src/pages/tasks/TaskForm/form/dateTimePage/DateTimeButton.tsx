/* eslint-disable no-useless-computed-key */
import React, { useState } from 'react';
import cn from 'classnames';
import { Modal, Button } from 'components';
import DateTimePage from './page/DateTimePage';
import useFullMode from 'contexts/hooks/useFullMode';
import styles from './DateTimeButton.module.css';

interface DateTimeButtonProp {
  taskId: string;
}

const DateTimeButton: React.FC<DateTimeButtonProp> = ({ taskId }) => {
  const [isShowing, setIsShowing] = useState(false);
  const { isFullMode } = useFullMode();

  return (
    <div className={cn({ ['hide']: isFullMode, [styles.outline]: true })}>
      <Button className={cn(styles.dateTimeButton, 'glyphicon glyphicon-time')} onClick={() => setIsShowing(!isShowing)} />

      {isShowing ? (
        <Modal setIsShowing={setIsShowing}>
          <DateTimePage taskId={taskId} setIsShowing={setIsShowing} />
        </Modal>
      ) : (
        []
      )}
    </div>
  );
};

export default DateTimeButton;
