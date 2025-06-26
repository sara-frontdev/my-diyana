"use client";
// base
import { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";

// lib
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

// common
import { CustomButton } from "@/components/commonComponents/Button/CustomeButton/CustomeButton";

// components
// مدال‌ها رو داینامیک ایمپورت کن
const UnitSelectModal = dynamic(
  () => import("./modal/UnitSelectModal/UnitSelectModal"),
  { ssr: false }
);
const ViewClassesModal = dynamic(
  () => import("./modal/ViewClassesModal/ViewClassesModal"),
  { ssr: false }
);
const LoginModal = dynamic(() => import("./modal/LoginModal/LoginModal"), {
  ssr: false,
});

// core
import { IGetCapacityCalenderCostLessonAttributeResult } from "@/core/types/response/CalenderCostLessonAttribute.res";
import { IGetCostLessonAttributesForCourseUnitSelectlist } from "@/core/types/response/CostLessonAttribute.res";
import { useRemoveCourseUnitSelect } from "@/core/services/api/clinet/CourseUnitSelect.api";
import { isUserLoggedIn } from "@/core/services/authentication/authentication.service";
import { toastTextCartTypeEnum } from "@/core/enums/toastTextCart-type.enum";
import { useShoppingCartContext } from "@/core/context/ShoppingCartContext";
import { toastTypes } from "@/core/enums/toast-types.enum";
import { ShowToast } from "@/core/hooks/Notifications";

interface IPropType {
  id: number;
  item: IGetCostLessonAttributesForCourseUnitSelectlist;
}

const CustomeButtonInEducation: FC<IPropType> = ({ id, item }) => {
  const [mounted, setMounted] = useState(false);

  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showUnitselectModal, setShowUnitSelectModal] =
    useState<boolean>(false);

  const [showViewClassesModal, setShowViewClassesModal] =
    useState<boolean>(false);

  const [selectedDates, setSelectedDates] = useState<
    IGetCapacityCalenderCostLessonAttributeResult[]
  >([]); //  روزهای انتخاب شده کاربر هست که سلکت میکنه

  useEffect(() => {
    setMounted(true);
  }, []);

  // isLogged
  const isLogged = isUserLoggedIn();

  // context
  const { cart, refetchActiveCourseUnitSelectsByStudent } =
    useShoppingCartContext();

  // hooks
  const pathname = usePathname();

  // var
  const selectedItem = (cart?.courseUnitSelects ?? []).find(
    (item) => item.costLessonAttribute.id === id
  );

  const isAlreadyInCart = !!selectedItem;
  const idInCart = selectedItem?.id;

  // api
  const removeCourseUnit = useRemoveCourseUnitSelect();

  //   handleAddCourse
  const handleAddCourse = async () => {
    if (isLogged) {
      try {
        // await addCourse.mutateAsync({
        //   costLessonAttributeId: id,
        // });

        // const res = await getActiveCarts.mutateAsync();
        // setCart(res.data.result);

        // ShowToast(
        //   [toastTextCartTypeEnum.add],
        //   toastTypes.success,
        //   undefined,
        //   "topRight"
        // );

        setShowUnitSelectModal(true);
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setShowLoginModal(true);
    }
  };

  // handleRemove

  const handleRemove = () => {
    const idToSend = pathname === "/cart" ? Number(id) : Number(idInCart);

    removeCourseUnit.mutate(idToSend, {
      onSuccess: () => {
        refetchActiveCourseUnitSelectsByStudent();

        ShowToast(
          [toastTextCartTypeEnum.delete],
          toastTypes.success,
          undefined,
          "topRight"
        );
      },
    });
  };

  if (!mounted) return null; // از نمایش اولیه جلوگیری می‌کنه

  return (
    <>
      <div className="">
        {!pathname.startsWith("/cart") && (
          <section className="mt-4">
            {isAlreadyInCart ? (
              <div className="flex justify-center">
                <CustomButton
                  isAlreadyInCart
                  handleViewClassesChange={() => setShowViewClassesModal(true)}
                />
              </div>
            ) : (
              <div className="flex">
                <CustomButton onClick={handleAddCourse} />
              </div>
            )}
          </section>
        )}

        {(pathname.startsWith("/cart") || isAlreadyInCart) && (
          <div className="flex  justify-between mt-4">
            <div
              className="border border-solid border-red-600 
                          hover:border-transparent hover:bg-red-600 
                        py-[0.2rem] px-[0.5rem]  rounded-lg cursor-pointer"
              onClick={handleRemove}
            >
              <p className="text-red-600 hover:text-white "> انصراف</p>
            </div>

            {!pathname.startsWith("/cart") && (
              <div title="نمایش سبد خرید">
                <Link href="/cart">
                  <MdOutlineShoppingCartCheckout
                    size={26}
                    className="text-customeBlue hover:text-customeOrangeHover"
                  />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      {/* modal */}
      {showLoginModal && (
        <LoginModal
          isOpen={showLoginModal}
          toggleModal={() => setShowLoginModal(false)}
        />
      )}

      {showUnitselectModal && (
        <UnitSelectModal
          isOpen={showUnitselectModal}
          toggleModal={() => setShowUnitSelectModal(false)}
          selectCLassId={id}
          item={item}
          setSelectedDates={setSelectedDates}
          selectedDates={selectedDates}
        />
      )}

      {showViewClassesModal && (
        <ViewClassesModal
          isOpen={showViewClassesModal}
          toggleModal={() => setShowViewClassesModal(false)}
          item={item}
          selectedDates={selectedDates}
        />
      )}
    </>
  );
};

export { CustomeButtonInEducation };
