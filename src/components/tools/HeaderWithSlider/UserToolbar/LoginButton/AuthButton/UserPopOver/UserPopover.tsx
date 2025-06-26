// base
import { Dispatch, FC, RefObject, SetStateAction, useEffect } from "react";

// lib
import { motion, AnimatePresence } from "framer-motion";

//
import { Content } from "./Content/Content";
import { usePanelLayoutUtils } from "@/core/hooks/usePanelLayoutUtils";

interface IPropType {
  dropdownRef: RefObject<HTMLDivElement>;
  setIsOpenMunu: Dispatch<SetStateAction<boolean>>;
  isOpenMenu: boolean;
}

const UserPopOver: FC<IPropType> = ({
  dropdownRef,
  setIsOpenMunu,
  isOpenMenu,
}) => {
  //hook
  const windowWidth = usePanelLayoutUtils();

  // بستن منو هنگام کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpenMunu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full left-0  sm:-translate-x-1/2 z-50 
                 bg-white shadow-lg rounded-b-[9px] 
                 py-1 sm:py-2 origin-top ${
                   windowWidth > 640 ? "w-[200px]" : "w-[120px]"
                 }`}
          >
            <Content />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { UserPopOver };
