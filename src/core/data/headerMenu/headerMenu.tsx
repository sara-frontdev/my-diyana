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
  id: string;
  key: headerMenuKeyEnum;
  href: string;
  title: string;
  exact?: boolean;
  icon?: IconType;
}

export const mainHeaderMenu: IMainHeaderMenu[] = [
  {
    id: "1",
    key: headerMenuKeyEnum.landing,
    href: "/",
    title: "خانه",
    exact: true,
    icon: FiHome,
  },
  {
    id: "2",
    key: headerMenuKeyEnum.education,
    href: "/education",
    title: "آموزش",
    exact: true,
    icon: FiBook,
  },
  {
    id: "3",
    key: headerMenuKeyEnum.store,
    href: "/store",
    title: "فروشگاه",
    exact: true,
    icon: FiShoppingCart,
  },
  {
    id: "4",
    key: headerMenuKeyEnum.gallery,
    href: "/gallery",
    title: "گالری",
    exact: true,
    icon: FiImage,
  },
  {
    id: "5",
    key: headerMenuKeyEnum.landing,
    href: "",
    title: "",
    exact: true,
  },
  {
    id: "6",
    key: headerMenuKeyEnum.landing,
    href: "",
    title: "",
    exact: true,
  },
  {
    id: "7",
    key: headerMenuKeyEnum.landing,
    href: "",
    title: "",
    exact: true,
  },
  {
    id: "8",
    key: headerMenuKeyEnum.news,
    href: "/news",
    title: "اخبار",
    exact: true,
    icon: FiRadio,
  },
  {
    id: "9",
    key: headerMenuKeyEnum.aboutUS,
    href: "/about-us",
    title: "درباره ما",
    exact: true,
    icon: FiInfo,
  },
  {
    id: "10",
    key: headerMenuKeyEnum.contactUs,
    href: "/contact-us",
    title: "تماس",
    exact: true,
    icon: FiPhone,
  },
];
