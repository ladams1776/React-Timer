import React from 'react';
import cn from 'classnames';
import { Button } from 'components';
import { useDispatch } from 'react-redux';
import styles from './NewButton.module.css';
import { fetchAllTags, postTag } from 'redux/actionCreators/actions';

const NewButton: React.FC = () => {
  const dispatch = useDispatch();

  return <Button data-testid="btn-new"
    className={cn(styles.buttonAdd, "glyphicon glyphicon-edit")}
    onClick={async () => {
      await dispatch(postTag({ description: "", name: "" }));
      dispatch(fetchAllTags());
    }} />;
};

export default NewButton;