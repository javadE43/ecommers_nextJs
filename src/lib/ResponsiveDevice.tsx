"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";

const IsDesktop = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return isDesktop && <>{children}</>;
};
const IsTablet = ({ children }: { children: React.ReactNode }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet && <>{children}</>;
};
const IsMobile = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile && <>{children}</>;
};
const IsLabTop = ({ children }: { children: React.ReactNode }) => {
  const isNotMobile = useMediaQuery({ minWidth: 1024 });
  return isNotMobile && <>{children}</>;
};
const IsMobileOrIsTablet = ({ children }: { children: React.ReactNode }) => {
  const IsMobileOrIsTablet = useMediaQuery({ minWidth: 320, maxWidth: 1023 });
  return IsMobileOrIsTablet && <>{children}</>;
};

export { IsDesktop, IsTablet, IsMobile, IsLabTop, IsMobileOrIsTablet };
