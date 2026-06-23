import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import useDisclouse from "../hooks/useDisclouse";
import Modal from "./Modal";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { ToastContainer, toast } from 'react-toastify';

const ContactCard = ({ contact }) => {
  const { isOpen, onOpen, onClose } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="mt-4 flex items-center justify-between rounded-lg bg-yellow-200 p-2">
        <div className="flex gap-2">
          <HiOutlineUserCircle className="text-4xl text-orange-600" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={onOpen}
            className="cursir-pointer text-orange-600"
            onClick={() => deleteContact(contact.id)}
          />
        </div>
      </div>
      <AddAndUpdateContact isUpdate contact={contact} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactCard;
