import React from 'react';
import { Form, Field } from 'react-final-form'
import { TextAreaAdapter } from 'components';
import useFormSetup from './hooks/useFormSetup';
import useFetchTagByIdDispatch from './hooks/useFetchTagByIdDispatch';
import useTagByIdSelector from 'redux/selectors/useTagById';
import SaveButton from 'components/saveButton/SaveButton';
import TopBar from 'components/topBar/TopBar';

//@TODO: Got to clean this stuff up
import './TagForm.module.css';
import styles from './TagForm.module.css';
import useSaveListener from 'hooks/useListenForSave';

interface props {
    tagId: string;
}
const FORM_ID = "tagForm";

const TagPage: React.FC<props> = ({ tagId }) => {
    useFetchTagByIdDispatch(tagId);
    const tag = useTagByIdSelector();
    const onSubmit = useFormSetup();
    useSaveListener(FORM_ID);

    return (
        <div className={styles.container}>
            <TopBar>
                <SaveButton name={FORM_ID}/>
            </TopBar>
            <Form
                onSubmit={onSubmit}
                initialValues={tag}
                render={({ handleSubmit }) => {
                    return (
                        <form
                            id={FORM_ID}
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

export default TagPage;