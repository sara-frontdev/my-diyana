import { FC } from "react";

import Link from "next/link";

// core
import {
  customerServiceLink,
  quickAccessLink,
} from "@/core/data/footer/quickAccessLink/quickAccessLink.data";

interface IQuickAccessPropType {
  titleQuickLink: string;
  type: "quick" | "customer";
  arialabel: string;
}

const renderLinks = (links: typeof quickAccessLink) => (
  <ul className="text-base list-none flex flex-col mt-4 space-y-2">
    {links.map((link) => (
      <li key={link.title} className="flex items-center">
        <div className={`w-4 h-4 rounded-[4px] ${link.color}`} />
        <Link
          href={link.href}
          className="text-customeBlack font-yekan-regular text-[0.8rem] sm:text-base pr-2"
        >
          {link.title}
        </Link>
      </li>
    ))}
  </ul>
);

const QuickAccess: FC<IQuickAccessPropType> = ({
  titleQuickLink,
  type,
  arialabel,
}) => {
  const linksData = type === "quick" ? quickAccessLink : customerServiceLink;

  return (
    <nav
      aria-label={arialabel}
      className="border border-solid border-customeblue p-4 bg-white rounded-lg w-[8rem] sm:w-[10rem] shadow-lg"
    >
      <h2 className=" text-base sm:text-xl text-customeBlack font-yekan-bold text-center">
        {titleQuickLink}
      </h2>

      {renderLinks(linksData)}
    </nav>
  );
};

export default QuickAccess;
