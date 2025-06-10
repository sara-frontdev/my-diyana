import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";

const UserToolbar = () => {
  return (
    <div className="absolute left-[15px] sm:left-[62px] md:left-[70px] lg:left-[78px] top-[45px] 2xl:left-[95px] flex ">
      <div>
        <CiUser size={25} />
      </div>

      <div className="mx-2 sm:mx-4">
        <CiHeart size={25} className="" />
      </div>

      <div>
        <CiShoppingCart size={25} />
      </div>
    </div>
  );
};

export default UserToolbar;
