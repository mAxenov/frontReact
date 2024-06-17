import { Form, Formik } from 'formik';
import MyInput from 'src/components/UI/Input/MyInput';
import MyButton from 'src/components/UI/button/MyButton';
import styles from './simpleSearch.module.css';
function SimpleSearch({
  placeholder,
  formHandler,
  name,
}: {
  placeholder: string;
  formHandler: (value: string) => void;
  name: string;
}) {
  return (
    <Formik
      initialValues={{
        value: '',
      }}
      onSubmit={async (values) => {
        formHandler(values.value);
      }}
    >
      {() => (
        <Form className={styles.form}>
          <MyInput
            name="value"
            type="text"
            placeholder={placeholder}
            disableVerify={true}
          />
          <MyButton type="submit">{name}</MyButton>
        </Form>
      )}
    </Formik>
  );
}

export default SimpleSearch;
