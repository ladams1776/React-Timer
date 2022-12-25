import Button from 'components/Button';
import cn from 'classnames';
import React from 'react';
import styles from './SaveButton.module.css';

const SaveButton: React.FC = () => <Button
    type="submit"
    className={cn(styles.submit, "glyphicon glyphicon-floppy-save")}
    onClick={() => {
        document.getElementById('editForm')
            ?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
    }}
/>

export default SaveButton;