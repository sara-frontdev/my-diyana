import { headerMenuKeyEnum } from "@/core/enums/headerMenu-key.enum";
import { IconType } from "react-icons";
import {
  FiHome,
  FiBook,
  FiShoppingCart,
  FiImage,
  FiRadio,
  FiInfo,
  FiPhone,
} from "react-icons/fi";

export interface IMainHeaderMenu {
  key: headerMenuKeyEnum;
  href: string;
  title: string;
  exact?: boolean;
  icon?: IconType;
}

export const mainHeaderMenu: IMainHeaderMenu[] = [
  {
    key: headerMenuKeyEnum.landing,
    href: "/",
    title: "خانه",
    exact: true,
    icon: FiHome,
  },
  {
    key: headerMenuKeyEnum.education,
    href: "/education",
    title: "آموزش",
    exact: true,
    icon: FiBook,
  },
  {
    key: headerMenuKeyEnum.store,
    href: "/store",
    title: "فروشگاه",
    exact: true,
    icon: FiShoppingCart,
  },
  {
    key: headerMenuKeyEnum.gallery,
    href: "/gallery",
    title: "گالری",
    exact: true,
    icon: FiImage,
  },
  {
    key: headerMenuKeyEnum.landing,
    href: "",
    title: "",
    exact: true,
  },
  {
    key: headerMenuKeyEnum.landing,
    href: "",
    title: "",
    exact: true,
  },
  {
    key: headerMenuKeyEnum.landing,
    href: "",
    title: "",
    exact: true,
  },
  {
    key: headerMenuKeyEnum.news,
    href: "/news",
    title: "اخبار",
    exact: true,
    icon: FiRadio,
  },
  {
    key: headerMenuKeyEnum.aboutUS,
    href: "/about-us",
    title: "درباره ما",
    exact: true,
    icon: FiInfo,
  },
  {
    key: headerMenuKeyEnum.contactUs,
    href: "/contact-us",
    title: "تماس",
    exact: true,
    icon: FiPhone,
  },
];
