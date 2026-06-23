import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FaSearch } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import NotFoundContact from "./components/NotFoundContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) => {
        return contact.name.toLowerCase().includes(value.toLowerCase());
      });
      setContacts(filteredContacts);
      return filteredContacts;
    });
  }
  return (
    <>
      <div className="m-5 mx-auto min-h-[730px] max-w-[372px] bg-gray-900 p-3 px-4">
        <Navbar />

        <div className="flex gap-2">
          <div className="relative flex flex-grow items-center">
            <FaSearch className="absolute ml-1 text-2xl text-white" />
            <input
              type="text"
              className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white outline-none placeholder:text-white"
              placeholder="Search..."
              onChange={filterContacts}
            />
          </div>

          <CiCirclePlus
            onClick={onOpen}
            className="cursor-pointer text-5xl text-white"
          /> 
        </div>

        <div>
          {contacts.length <= 0 ? (
           <NotFoundContact />
           ) : (
           contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        )}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer 
        position="bottom-center"
      />
    </>
  );
};

export default App;
