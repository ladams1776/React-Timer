import React from 'react';
import cn from 'classnames';
import { Form, Field } from 'react-final-form'
import { Button, TextAreaAdapter } from 'components';
import { useSetCurrentLocation } from 'hooks'
import useFormSetup from './useFormSetup';
import useFetchTagByIdDispatch from './useFetchTagByIdDispatch';
import styles from './AddTagForm.module.css';
import useTagByIdSelector from 'redux/selectors/useTagById';
import SaveButton from 'components/saveButton/SaveButton';
import TopBar from 'components/topBar/TopBar';

const AddTagePage = ({ tagId }) => {
    useSetCurrentLocation(`/tag/${tagId}`);
    useFetchTagByIdDispatch(tagId);
    const tag = useTagByIdSelector();
    const { onSubmit } = useFormSetup(tagId);

    return (
        <div className={styles.container}>
            <TopBar>
                <SaveButton />
            </TopBar>
            <Form
                onSubmit={onSubmit}
                initialValues={tag}
                render={({ handleSubmit }) => {
                    return (
                        <form
                            data-test-id="form"
                            className={styles.form}
                            onSubmit={handleSubmit}>
                            <Field
                                name="name"
                                component="input"
                                className={styles.name}
                            />
                            <Field name="description" component={TextAreaAdapter} />

                            <div className={styles.submitContainer}>
                                <Button type="submit"
                                    className={cn("btn", "btn-primary", styles.submit)}
                                    data-test-id="addTagPageSubmit"
                                    value="Submit Form" />
                            </div>
                        </form>
                    );
                }}
            />
        </div>
    );
}

export default AddTagePage;