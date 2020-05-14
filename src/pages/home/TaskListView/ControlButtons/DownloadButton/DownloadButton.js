import React from 'react';
import { useTaskEditContext } from 'hooks';
import { writeJsonFile } from './writeJsonFile';
import useTaskAssembler from './useTaskAssembler';
import styles from './DownloadButton.module.css';
//@TODO: Write a test for this
const DownloadButton = () => {
    const assembleTask = useTaskAssembler();
    const { tasks } = useTaskEditContext();

    const handleDownload = () => {
        writeJsonFile(assembleTask());
    };

    return (
        <>
            {!tasks?.length || (
                <button
                    type="a"
                    className={styles.buttonDownload}
                    onClick={handleDownload}
                    data-test-id="btn-download">
                    <span className="glyphicon glyphicon-download-alt mr-5px"></span>
                    Download
                </button>)
            }
        </>);
};

export default DownloadButton;