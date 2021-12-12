import React from 'react';
import cn from 'classnames';
import { Button } from 'components';
import { useDispatch } from 'react-redux';
import styles from './NewButton.module.css';
import { postTag } from 'redux/actionCreators/actions';

const NewButton: React.FC = () => {
  const dispatch = useDispatch();

  return <Button data-testid="btn-new"
    className={cn(styles.buttonAdd, "glyphicon glyphicon-edit")}
    onClick={() => {
      console.log('yes')
      dispatch(postTag({ description: "", name: "" }));
    }} />;
};

export default NewButton;