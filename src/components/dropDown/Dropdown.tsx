import React from 'react';

import styles from './Dropdown.module.css';

interface props {
    options: [{
        label: string;
        value: string;
    }]
}

const Dropdown: React.FC<props> = ({ options }) => {
    return (<select className={styles.dropDown}>
        {options.map(project => (
            <option value={project.value} key={project.value}>
                {project.label}
            </option>
        ))}
    </select>);
};

export default Dropdown;