import Image from "next/image";

import { socialLinks } from "@/core/data/footer/quickAccessLink/quickAccessLink.data";

const SocialLinks = () => {
  return (
    <div className="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-4 items-center">
      {socialLinks.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.alt}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={32}
            height={32}
            className="w-8 h-8 hover:opacity-80 transition-opacity"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
