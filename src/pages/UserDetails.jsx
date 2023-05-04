import { useFormik } from "formik";
import * as Yup from 'yup';
import BackIcon from "../components/BackIcon";
import SubmitButton from "../components/SubmitButton";
import Header3 from "../components/Header3";
import TextInput from "../components/TextInput";
import { useContext } from "react";
import { orderContext } from "../contexts/orderContext";
import { useNavigate } from "react-router-dom";

export default function UserDetails() {
    const {order} = useContext(orderContext);
    const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: order.firstName,
      lastName: order.lastName,
      contact: order.contact,
    },
    validationSchema: Yup.object({
        firstName: Yup.string().required('First Name is required').matches(/^[a-zA-Z]{3,}$/,'Invalid First Name'),
        lastName: Yup.string().required('Last Name is required').matches(/^[a-zA-Z]{3,}$/,'Invalid Last Name'),
        contact: Yup.string().required('Phone Contact is required').matches(/^0[0-9]{10}$/,'Invalid Phone Contact'),
    }),
    onSubmit:(data)=>{
       
        navigate('/success')
    }
  });
  return (
    <div>
      <div className="flex justify-center">
        <BackIcon />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Header3 text="User Details" />

        <div className="flex flex-col gap-5 lg:flex-row">
          <TextInput
            label="First Name"
            name="firstName"
            formik={formik}
            type="text"
          />
          
          <TextInput
            label="Last Name"
            name="lastName"
            formik={formik}
            type="text"
          />
          <TextInput
            label="Phone Contact"
            name="contact"
            formik={formik}
            type="text"
          />
        </div>

        <SubmitButton text="Reserve" />
      </form>
    </div>
  );
}
