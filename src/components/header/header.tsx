"use client";

import MobileDetect from "mobile-detect";
import { MobileHeader } from "./mobile-header";
import { DeskTopHeader } from "./desktop-header";

export function Header() {
  const md = new MobileDetect(navigator.userAgent);

  return md.mobile() || md.tablet() ? <MobileHeader /> : <DeskTopHeader />;
}
