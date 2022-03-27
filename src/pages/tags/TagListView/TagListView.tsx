import { TagInterface } from 'interfaces/pages/tags/Tag';
import cn from 'classnames';
import React from 'react';
import Tag from './Tag/Tag';
import styles from './TagListView.module.css';

interface TagListViewProp {
  className: string;
  tagId: string;
  tags: TagInterface[];
}

const TagsListView: React.FC<TagListViewProp> = ({ className, tagId, tags }) => (
  <div className={className}>
    <ul className={cn(styles.tagList, { [styles.listViewOnly]: !tagId })}>
      {tags?.map((tag) => (
        <li key={tag._id} className="tag">
          <Tag {...tag} key={tag._id} selectedId={tagId} />
        </li>
      ))}
    </ul>
  </div>
);

export default TagsListView;
