import { ClassAttributes, InputHTMLAttributes } from 'react';
import styles from './MyInput.module.css';
import { FieldHookConfig, useField } from 'formik';
type TextFieldProps = {
  label?: string;
  disableVerify?: boolean;
};

const MyInput = ({
  label,
  disableVerify,
  ...props
}: TextFieldProps &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  const inputClasses = [styles.myInput];
  if (!disableVerify) {
    if (meta.touched && meta.error) {
      inputClasses.push(styles.error);
    } else if (meta.touched) {
      inputClasses.push(styles.valid);
    }
  }

  return (
    <div className={styles.inputGroup}>
      {label && <label htmlFor={props.name}>{label}</label>}
      <input className={`${inputClasses.join(' ')}`} {...field} {...props} />
      <div className={styles.wrapperSvg}>
        {meta.touched && meta.error && !disableVerify ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="#c03221"
          >
            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z"></path>
          </svg>
        ) : meta.touched && !disableVerify ? (
          <svg
            width="14"
            height="11"
            viewBox="0 0 14 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.92891 10.7919C4.58903 10.7919 4.24916 10.6573 3.98971 10.3864L0.389184 6.62708C-0.129728 6.08529 -0.129728 5.20765 0.389184 4.66745C0.908096 4.12565 1.74716 4.12407 2.26607 4.66586L4.92891 7.44611L11.1923 0.906588C11.7112 0.364796 12.5502 0.364796 13.0691 0.906588C13.5881 1.44838 13.5881 2.32602 13.0691 2.86781L5.86811 10.3864C5.60865 10.6573 5.26878 10.7919 4.92891 10.7919Z"
              fill="#1AA053"
            />
          </svg>
        ) : null}
      </div>
      {meta.touched && meta.error ? (
        <div className={styles.errorMsg}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyInput;
