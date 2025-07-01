import React, { HTMLProps } from "react";

interface HasId {
  id: string;
}

interface HasLabel {
  label: string;
}

interface HasIcon {
  icon?: React.ReactNode;
}

interface HasClassName {
  className?: HTMLProps<HTMLElement>["className"];
}

export interface MenuAction extends HasId, HasLabel, HasIcon, HasClassName {
  type: "action";
  shortcut?: string;
}

export interface Menu extends HasId, HasLabel, HasIcon, HasClassName {
  type: "menu";
  sections: MenuSection[];
}

export interface MenuSection extends HasId, HasLabel, HasClassName {
  items: MenuItem[];
}

export type MenuItem = MenuAction | Menu;
