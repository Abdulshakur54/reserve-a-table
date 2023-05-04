import Header3 from "../components/Header3";
import { useFormik } from "formik";
import * as Yup from "yup";
import SubmitButton from "../components/SubmitButton";
import SelectInput from "../components/SelectInput";
import SelectInputWithoutFormik from "../components/SelectInputWithoutFormik";
import TextInput from "../components/TextInput";
import BackIcon from "../components/BackIcon";
import menuData from "../data/menu.json";
import { useContext } from "react";
import { menuContext } from "../contexts/menuContext";
import MenuRect from "../components/MenuRect";
import { useNavigate } from "react-router-dom";
import { orderContext } from "../contexts/orderContext";

export default function Reserve() {
  const dishesContext = useContext(menuContext);
  const detailContext = useContext(orderContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      noOfDinners: detailContext.order.noOfDinners,
      date: detailContext.order.date,
      time: detailContext.order.time,
    },
    validationSchema: Yup.object({
      noOfDinners: Yup.number()
        .required("No of Dinners is required")
        .integer("Only numbers are allowed"),
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
    }),
    onSubmit: (data) => {
      
      navigate('/user-details')
    },
  });
  return (
    <div>
      <div className="flex justify-center">
        <BackIcon />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Header3 text="Table Details" />

        <div className="flex flex-col gap-5 lg:flex-row">
          <SelectInput
            label="Number of Dinners"
            name="noOfDinners"
            formik={formik}
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
            <option value="7">Seven</option>
          </SelectInput>
          <TextInput
            label="Select date"
            name="date"
            formik={formik}
            type="date"
          />
          <TextInput
            label="Select time"
            name="time"
            formik={formik}
            type="time"
          />
          <SelectInputWithoutFormik
            label="Dishes"
            handleChange={dishesContext.setMenus}
            menus={menuData}
          >
            <option value="">::: Add Dishes :::</option>
            {menuData.map((mD) => {
              return (
                <option value={mD.id} key={mD.id}>
                  {mD.name}
                </option>
              );
            })}
          </SelectInputWithoutFormik>
        </div>
        <div className="my-5">
          {dishesContext.menus.length > 0 ? (
            <div className="flex justify-start gap-3 flex-wrap p-3 border-orange-600 border rounded-md ">
              {dishesContext.menus.map((dish) => (
                <MenuRect dish={dish} key={dish.id} />
              ))}
            </div>
          ) : null}
        </div>
        <SubmitButton text="Proceed" />
      </form>
    </div>
  );
}
