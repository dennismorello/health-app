import { useState } from "react";

const useDisclosure = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const onClose = () => setIsOpen(false);

  const onOpen = () => setIsOpen(true);

  const onToggle = () => setIsOpen((isOpen) => !isOpen);

  return { isOpen, onClose, onOpen, onToggle };
};

export default useDisclosure;
