import React from 'react';
import cn from 'classnames';
import { Button } from 'components';
import styles from './DeleteTagButton.module.css';
import { useDispatch } from 'react-redux';
import { deleteTag, fetchAllTags } from 'redux/actionCreators/actions';

interface DeleteTagButtonProp {
  tagId: string;
  isSelected: boolean;
}

const DeleteTagButton: React.FC<DeleteTagButtonProp> = ({ tagId, isSelected }) => {
  const dispatch = useDispatch();

  const _deleteClick = async (e: any) => {
    e.preventDefault(); // stops us from bubbling up to the Tag.
    await dispatch(deleteTag(tagId));
    dispatch(fetchAllTags());
  };

  return <Button onClick={_deleteClick} className={cn(
    styles.deleteBtn,
    'glyphicon glyphicon-trash', {
    [styles.selected]: isSelected
  })}
    data-testid="delete-tag-button"
  />;
};

export default DeleteTagButton;
