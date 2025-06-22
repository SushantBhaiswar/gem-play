import { useField } from "formik";

export const InputField = ({ name, ...props }) => {
  const [field, meta, helper] = useField(name);
  return (
    <div>
      <input
        onChange={(data) => {
          helper.setValue(data);
        }}
        {...field}
        {...props}
      />
      {meta.error && meta.touched && (
        <div className="text-red-700">{meta.error}</div>
      )}
    </div>
  );
};
