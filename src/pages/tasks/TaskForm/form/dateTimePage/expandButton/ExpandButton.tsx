/* eslint-disable no-useless-computed-key */
import React from 'react';
import cn from 'classnames';
import { Button } from 'components';
import useFullMode from 'contexts/hooks/useFullMode';
import styles from './ExpandButton.module.css';

//@TODO: Figure out why Projects and tags still shows, or write a UT for this, but I don't believe we will be keeping this.
const ExpandButton: React.FC = () => {
  const { isFullMode, setIsFullMode } = useFullMode();

  return (
    <Button
      onClick={() => setIsFullMode(!isFullMode)}
      className={cn({ ['hide']: styles.fullMode, ['glyphicon glyphicon-resize-full']: !isFullMode, ['glyphicon glyphicon-resize-small']: isFullMode })}
    />
  );
};
export default ExpandButton;
