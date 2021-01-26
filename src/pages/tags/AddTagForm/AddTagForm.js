import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { Form, Field } from 'react-final-form'
import { Button } from 'components';
import { useSetCurrentLocation } from 'hooks'
import useFormSetup from './useFormSetup';
import useFetchTagByIdDispatch from './useFetchTagByIdDispatch';
import styles from './AddTagForm.module.css';


const useD = () => {
    return useSelector(state => {
        return state?.tags?.tagById || {}
    });
};

const AddTagePage = ({ tagId }) => {
    useSetCurrentLocation(`/tag/${tagId}`);
    useFetchTagByIdDispatch(tagId);
    const tag = useD();
    const { onSubmit } = useFormSetup(tagId);

    return (
        <div className={styles.container}>
            <Form
                onSubmit={onSubmit}
                initialValues={tag}
                render={({ handleSubmit }) => {
                    return (
                        <form
                            data-test-id="form"
                            className={styles.form}
                            onSubmit={handleSubmit}>
                            <h3>Add a New Tag</h3>

                            <Field
                                name="name"
                                component="input"
                                className={styles.name}
                            />
                            <Field
                                name="description"
                                cols="80"
                                rows="10"
                                className={styles.description}
                                component="textarea"
                            />
                            <Button type="submit"
                                onClick={onSubmit}
                                className={cn("btn", "btn-primary", styles.submit)}
                                data-test-id="addTagPageSubmit"
                                value="Submit Form" />
                        </form>
                    );
                }}
            />
        </div>
    );
}

export default AddTagePage;