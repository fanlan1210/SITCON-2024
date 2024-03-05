"use client";
import useMediaQuery from "@/hooks/use-media-query";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { createPortal } from "react-dom";
import { RemoveScroll } from "react-remove-scroll";

export default function Dialog({
  children,
  open,
  setOpen,
  isOpenByDefault,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenByDefault?: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
  useEffect(() => {
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [open]);

  function handleClose() {
    setOpen(false);
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
  

  return mounted
    ? createPortal(
        <div>
          <AnimatePresence>
            {open && (
              <RemoveScroll className="fixed inset-0 z-50 overflow-scroll">
                <motion.div
                  className="fixed inset-0 cursor-pointer bg-black/50 backdrop-blur"
                  onClick={handleClose}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <motion.div
                  className="fixed inset-0 m-auto flex w-screen flex-col overflow-y-scroll rounded-[10px] bg-transparent md:px-24"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <motion.button
                    onClick={handleClose}
                    className="fixed right-2 top-2 m-2 text-3xl outline-0 md:right-16 md:top-16"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    ref={closeButtonRef}
                  >
                    <IoCloseCircle className="text-3xl text-[#ffffff]" />
                  </motion.button>
                  <div className="max-md:p-4 max-md:pt-14 md:px-10 md:py-20">
                    {children}
                  </div>
                </motion.div>
              </RemoveScroll>
            )}
          </AnimatePresence>
        </div>,
        document.body,
      )
    : null;
}
