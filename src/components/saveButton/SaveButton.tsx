import Button from 'components/Button';
import cn from 'classnames';
import React from 'react';
import styles from './SaveButton.module.css';

const SaveButton: React.FC = () => <Button type="submit" className={cn(styles.submit, "glyphicon glyphicon-floppy-save")} />

export default SaveButton;