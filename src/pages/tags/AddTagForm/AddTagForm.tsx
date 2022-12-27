import React from 'react';
import { Form, Field } from 'react-final-form'
import { TextAreaAdapter } from 'components';
import useFormSetup from './useFormSetup';
import useFetchTagByIdDispatch from './useFetchTagByIdDispatch';
import useTagByIdSelector from 'redux/selectors/useTagById';
import SaveButton from 'components/saveButton/SaveButton';
import TopBar from 'components/topBar/TopBar';

import './AddTagForm.module.css';
import styles from './AddTagForm.module.css';

interface props {
    tagId: string;
}
const formId = "tagForm";

const AddTagePage: React.FC<props> = ({ tagId }) => {
    useFetchTagByIdDispatch(tagId);
    const tag = useTagByIdSelector();
    const onSubmit = useFormSetup();

    return (
        <div className={styles.container}>
            <TopBar>
                <SaveButton name={formId} />
            </TopBar>
            <Form
                onSubmit={onSubmit}
                initialValues={tag}
                render={({ handleSubmit }) => {
                    return (
                        <form
                            id={formId}
                            data-test-id="form"
                            className={styles.form}
                            onSubmit={handleSubmit}>
                            <fieldset>
                                <label htmlFor="name">Name</label>
                                <Field
                                    name="name"
                                    component="input"
                                    className={styles.name}
                                />
                            </fieldset>
                            <fieldset>
                                <TextAreaAdapter />
                            </fieldset>
                        </form>
                    );
                }}
            />
        </div>
    );
}

export default AddTagePage;