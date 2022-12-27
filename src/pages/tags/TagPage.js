import React, { useState } from 'react';
import TagListView from './TagListView/TagListView';
import AddTagForm from './AddTagForm/AddTagForm';
import useFetchAllTags from './useFetchAllTags';
import styles from './TagPage.module.css'
import ControlButtons from './TagListView/ControlButtons/ControlButtons';

const TagPage = ({ match }) => {
  const tagId = match?.params?.id;
  const [tags, setTags] = useState([]);
  useFetchAllTags(setTags);

  return (<div className={styles.container}>
    {/* Need to make a leftInnerContainer */}
    <div className={styles.navBarInnerContainer}>
      <ControlButtons />
    </div>
    <div className={styles.mainInnerContainer}>
      <TagListView className={styles.listView} tagId={tagId} tags={tags} />
      {(tagId)
        ? <AddTagForm tagId={tagId} className={styles.form} />
        : <div className={styles.form}></div>}
    </div>
  </div>);
};

export default TagPage;
