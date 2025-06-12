"use client";

// base
import { useEffect, useRef, useState } from "react";

// lib
import { motion, AnimatePresence } from "framer-motion";
import { Form, Input, InputRef } from "antd";
import { IoIosClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const SearchInMobile = () => {
  const [ShowSearchModal, setShowSearchModal] = useState<boolean>(false);

  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (ShowSearchModal) {
      inputRef.current?.focus();
    }
  }, [ShowSearchModal]);

  // کاربر بتونه با فشردن ESC هم modal رو ببنده:
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowSearchModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  //  اسکرول صفحه پشت پرده غیر فعال
  useEffect(() => {
    if (ShowSearchModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [ShowSearchModal]);

  return (
    <>
      <div
        className="flex md:hidden cursor-pointer"
        onClick={() => setShowSearchModal(true)}
      >
        <CiSearch className=" text-gray-500" size={20} />
      </div>

      <AnimatePresence>
        {ShowSearchModal && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-modal-label"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-black/80"
          >
            <h2 id="search-modal-label" className="sr-only">
              جستجو
            </h2>
            <IoIosClose
              size={40}
              className="text-white absolute left-[26px] top-[109px] md:left-[10px] md:top-[60px] lg:left-[26px] xl:left-[113px] cursor-pointer"
              onClick={() => setShowSearchModal(false)}
            />

            <Form>
              <Form.Item
                name="title"
                className="flex items-center justify-center !mt-60"
              >
                <Input
                  ref={inputRef}
                  className="!bg-transparent !outline-none !w-[300px] sm:!w-[600px] lg:!w-[800px] !rounded-none
                        !border-t-0 !border-r-0 !border-l-0 
                        !border-b-2 !border-solid !border-white 
                        hover:!border-white focus:!border-white !shadow-none !text-white !placeholder-white !text-lg"
                  placeholder="جستجو..."
                />
              </Form.Item>
            </Form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchInMobile;
