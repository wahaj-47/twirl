"use client";

import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { Menu, MenuAction, MenuItem, MenuSection } from "./types";
import {
  DropdownAncestryContextProvider,
  useDropdownAncestryContext,
} from "./DropdownAncestryContext";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import classNames from "classnames";
import { useCallback, useRef } from "react";

export function Dropdown({ menu }: { menu: Menu }) {
  const { label, sections } = menu;
  const hasDropdownParent = useDropdownAncestryContext();

  const timeoutDuration = 100;
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  const btnEnter = useCallback(() => {
    const button = btnRef.current;
    if (!button || !hasDropdownParent) return;
    setTimeout(() => {
      if ("open" in button.dataset) return;
      if ("hover" in button.dataset) {
        button.click();
      }
    }, timeoutDuration);
  }, []);

  const btnLeave = useCallback(() => {
    const button = btnRef.current;
    const panel = panelRef.current;
    if (!button || !panel || !hasDropdownParent) return;
    setTimeout(() => {
      if ("hover" in button.dataset) return;
      if (!("hover" in panel.dataset)) button.click();
    }, timeoutDuration);
  }, []);

  const panelEnter = useCallback(() => {
    const panel = panelRef.current;
    if (!panel || !hasDropdownParent) return;
    panel.setAttribute("data-hover", "");
  }, []);

  const panelLeave = useCallback(() => {
    const button = btnRef.current;
    const panel = panelRef.current;
    if (!button || !panel || !hasDropdownParent) return;
    panel.removeAttribute("data-hover");
    setTimeout(() => {
      if (!("hover" in button.dataset)) button.click();
    }, timeoutDuration);
  }, []);

  const btnClass = classNames(
    "flex capitalize items-center justify-between text-xs w-full px-4 py-[2px] data-hover:bg-gray-51 data-open:bg-blue-51 focus:outline-none",
    {
      "pl-6 pr-2": hasDropdownParent,
    }
  );

  return (
    <DropdownAncestryContextProvider>
      <Popover className="h-min">
        <PopoverButton
          ref={btnRef}
          className={btnClass}
          onMouseEnter={btnEnter}
          onMouseLeave={btnLeave}
        >
          {label}
          {hasDropdownParent && (
            <ChevronRightIcon className="size-4"></ChevronRightIcon>
          )}
        </PopoverButton>
        {!hasDropdownParent && (
          <PopoverBackdrop className="fixed inset-0 top-[24px]" />
        )}
        <PopoverPanel
          ref={panelRef}
          anchor={hasDropdownParent ? "right start" : "bottom start"}
          className="w-80 bg-gray-301 py-1"
          onMouseEnter={panelEnter}
          onMouseLeave={panelLeave}
        >
          {sections.map((section) => (
            <Section key={section.id} section={section}></Section>
          ))}
        </PopoverPanel>
      </Popover>
    </DropdownAncestryContextProvider>
  );
}

function Section({ section }: { section: MenuSection }) {
  const { label, items } = section;

  return (
    <div>
      <div className="flex items-center px-2 py-[2px] text-gray-51">
        {label && <p className="uppercase text-[9px] mr-2">{label}</p>}
        <hr className="grow"></hr>
      </div>
      {items.map((item) => (
        <Item key={item.id} item={item}></Item>
      ))}
    </div>
  );
}

function Item({ item }: { item: MenuItem }) {
  switch (item.type) {
    case "action":
      return <Action action={item}></Action>;

    case "menu":
      return <Dropdown menu={item}></Dropdown>;
  }
}

function Action({ action }: { action: MenuAction }) {
  const { label, shortcut } = action;
  return (
    <button className="flex justify-between capitalize text-xs w-full h-min pl-6 pr-2 py-[2px] hover:bg-gray-51">
      <p>{label}</p>
      <p>{shortcut}</p>
    </button>
  );
}
