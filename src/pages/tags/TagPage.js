import React from 'react';
import TagListView from './TagListView/TagListView';
import AddTagForm from './AddTagForm/AddTagForm';
import styles from './TagPage.module.css'
import ControlButtons from './TagListView/ControlButtons/ControlButtons';
import useAllTagSelectors from 'redux/selectors/useAllTagSelectors';
import useFetchAllTags from './useFetchAllTags';

const TagPage = ({ match }) => {
  const tagId = match?.params?.id;
  useFetchAllTags();
  const tags = useAllTagSelectors();
  return (<div className={styles.container}>
    {/* Need to make a leftInnerContainer */}
    <div className={styles.navBarInnerContainer}>
      <ControlButtons />
    </div>
    <div className={styles.mainInnerContainer}>
      <TagListView classNames={styles.listView} tagId={tagId} tags={tags} />
      {(tagId)
        ? <AddTagForm tagId={tagId} className={styles.form} />
        : <div className={styles.form}></div>}
    </div>
  </div>);
};

export default TagPage;
