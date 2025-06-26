"use client";

import { FC, useEffect } from "react";

// components
import { storageTypeEnum } from "@/core/enums/storage-type.enum";
import { clearAllCookies } from "@/core/services/common/cookies.service";
// core
import { clearStorage } from "@/core/services/common/storage.service";
import { FullPageLoading } from "@/components/commonComponents/Loading/FullPageLoading/FullPageLoading";

const LogoutContainer: FC = () => {
  useEffect(() => {
    clearStorage(storageTypeEnum.localStorage);
    clearStorage(storageTypeEnum.sessionStorage);
    clearAllCookies();
    window.location.href = "/";
  }, []);

  return <FullPageLoading />;
};

export { LogoutContainer };
