import React from 'react';
import styles from './TopBar.module.css';

interface props {
    children: React.FC
}
const TopBar:React.FC<props> = ({ children }) =>
    <div className={styles.topButtonOutline}>
        {children}
    </div>

export default TopBar;