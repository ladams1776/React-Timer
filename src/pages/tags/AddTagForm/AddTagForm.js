import React, { useEffect } from 'react';
import cn from 'classnames';
import { Form, Field } from 'react-final-form'
import { Button, TextAreaAdapter } from 'components';
import { useSetCurrentLocation } from 'hooks'
import useFormSetup from './useFormSetup';
import useFetchTagByIdDispatch from './useFetchTagByIdDispatch';
import useTagByIdSelector from 'redux/selectors/useTagById';
import SaveButton from 'components/saveButton/SaveButton';
import TopBar from 'components/topBar/TopBar';

import styles from './AddTagForm.module.css';

const AddTagePage = ({ tagId }) => {
    // useSetCurrentLocation(`/tag/${tagId}`);
    useFetchTagByIdDispatch(tagId);
    const tag = useTagByIdSelector();
    const onSubmit = useFormSetup();

    return (
        <div className={styles.container}>
            <Form
                onSubmit={onSubmit}
                initialValues={tag}
                render={({ handleSubmit }) => {
                    return (
                        <form
                            id="addForm"
                            data-test-id="form"
                            className={styles.form}
                            onSubmit={handleSubmit}>
                            <TopBar>
                                <SaveButton />
                            </TopBar>
                            <fieldset classname={styles.formField}>
                                <label htmlFor="name">Name</label>
                                <Field
                                    name="name"
                                    component="input"
                                    className={styles.name}
                                />
                            </fieldset>
                            <fieldset>
                                <Field
                                    name="description"
                                    id="description"
                                    component={TextAreaAdapter} />
                            </fieldset>
                        </form>
                    );
                }}
            />
        </div>
    );
}

export default AddTagePage;