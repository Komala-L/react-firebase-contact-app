import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { FaSearch } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import ContactCard from "../components/ContactCard";
import Modal from "../components/Modal";
import AddAndUpdateContact from "../components/AddAndUpdateContact";

const useDisclouse = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return { onClose, onOpen, isOpen };
};

export default useDisclouse;
