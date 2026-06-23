import Modal from "./Modal";
import { ErrorMessage, Form, Formik } from "formik";
import { Field } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

   const updateContact = async (contact, contactId) => {
    try {
      const contactRef = doc(db, "contacts", contactId);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik 
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate ? {
            name: contact.name,
            email: contact.email,
            } : {
            name: "",
            email: "",
            }
          }
          onSubmit={(values) => {
            isUpdate ? updateContact(values, contact.id) : addContact(values);
            onClose();
          }}
        >
          <Form type="submit" className="flex flex-col gap-5 text-black">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border" />
              <div className="text-sm text-red-500">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="h-10 border" />
              <div className="text-sm text-red-500">
                <ErrorMessage name="email" />
              </div>
            </div>

            <button className="self-end border bg-orange-500 px-3 py-1.5 text-white">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
