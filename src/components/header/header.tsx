"use client";

import { MobileHeader } from "./mobile-header";
import { DeskTopHeader } from "./desktop-header";

export function Header() {
  return (
    <header>
      <div className="block lg:hidden">
        <MobileHeader />
      </div>
      <div className="hidden lg:block">
        <DeskTopHeader />
      </div>
    </header>
  );
}
