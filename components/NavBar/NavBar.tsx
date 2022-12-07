import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { NavItem } from "../NavItem/NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];

export const NavBar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeID, setActiveID] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={'/'}>
          <div className="logo flex items-center">
            <span className="text-base font-bold">&lt;</span>
            <h1 className="text-base font-bold">Blaise</h1>
            <span className="text-base font-bold">&gt;</span>
          </div>
          <div className="logo flex items-center">
            <span className="text-base font-bold">&lt;&#47;</span>
            <h1 className="text-base font-bold">Florendo</h1>
            <span className="text-base font-bold">&gt;</span>
          </div>
        </Link>
        <div onClick={() => setNavActive(!navActive)} className={`nav__menu-bar`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? 'active' : ''} nav__menu-list`} >
          {MENU_LIST.map((menu, id) => (
            <div onClick={() => {
              setActiveID(id);
              setNavActive(false);
            }}
              key={menu.text}
            >
              <NavItem active={activeID === id} {...menu} />

            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}