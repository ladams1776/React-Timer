import { TagInterface } from 'interfaces/pages/tags/Tag';
import cn from 'classnames';
import React from 'react';
import Tag from './Tag/Tag';
import styles from './TagListView.module.css';

interface props {
  classNames: string;
  tagId: string;
  tags?: TagInterface[]
}
/**
 * @TODO: Move the className into here, why bother passing it in unless we want to reuse this ListView.
 * @param param0 
 * @returns 
 */
const TagsListView: React.FC<props> = ({ classNames, tagId, tags }) => {
  return (
    <div className={classNames}>
      {tags && (<ul className={cn(styles.tagList, {
        [styles.listViewOnly]: !tagId
      })}>
        {tags.map((tag) => (
          <li key={tag._id} className={styles.tag}>
            <Tag {...tag} key={tag._id} selectedId={tagId} />
          </li>
        ))}
      </ul>)}
    </div>
  );
};

export default TagsListView;
