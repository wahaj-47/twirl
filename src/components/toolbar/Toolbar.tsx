"use client";

import { menus } from "./data";
import { Dropdown } from "./Dropdown";

export function Toolbar() {
  return menus.map((menu) => <Dropdown key={menu.id} menu={menu}></Dropdown>);
}
