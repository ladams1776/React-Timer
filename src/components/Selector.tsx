import React from 'react';

interface props {
    options: [{
        label: string;
        value: string;
    }]
}

const Selector: React.FC<props> = ({ options }) => {
    return (<select>
        {options.map(project => (
            <option value={project.value} key={project.value}>
                {project.label}
            </option>
        ))}
    </select>);
};

export default Selector;