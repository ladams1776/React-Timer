import React from 'react';
import cn from 'classnames';
import { Button } from 'components';
import { useBrowserHistory } from 'hooks';
import styles from './HomeButton.module.css';

const HomeButton = () => {
    const { push } = useBrowserHistory();
    return <Button className={cn(styles.buttonAdd, "glyphicon glyphicon-list-alt")}
        onClick={() => {
            sessionStorage.setItem('LOCATION', '/');
            push("/");
            window.location.reload();
        }} />
};

export default HomeButton;