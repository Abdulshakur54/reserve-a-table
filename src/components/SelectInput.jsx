import { useContext } from "react";
import { orderContext } from "../contexts/orderContext";
export default function SelectInput({ label, name, formik, children }) {
  const { order, setOrder } = useContext(orderContext);
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        <label>{label}</label>
        <select
          className="border border-slate-700 rounded-md px-3 py-2 w-full"
          {...formik.getFieldProps(name)}
          onChange={(event) => {
         
            setOrder({ ...order, [name]: event.target.value });
            formik.handleChange(event)
          }}
        >
          {children}
        </select>
      </div>
      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-red-700 mt-1">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
}
