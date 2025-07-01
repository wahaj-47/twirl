import { type Menu } from "./types";

export const menus: Menu[] = [
  {
    id: "button_file",
    label: "file",
    type: "menu",
    sections: [
      {
        id: "section_open",
        label: "open",
        items: [
          {
            id: "item_new",
            label: "new level...",
            shortcut: "ctrl+n",
            type: "action",
          },
          {
            id: "item_open",
            label: "open level...",
            shortcut: "ctrl+o",
            type: "action",
          },
          {
            id: "button_favourite_levels",
            label: "favourite levels",
            type: "menu",
            sections: [
              {
                id: "section_favourite_levels",
                label: "",
                items: [
                  {
                    id: "item_no_favourites",
                    label: "no favourite levels",
                    type: "action",
                  },
                ],
              },
            ],
          },
          {
            id: "button_recent_levels",
            label: "recent levels",
            type: "menu",
            sections: [
              {
                id: "section_recent_levels",
                label: "",
                items: [
                  {
                    id: "item_no_recent_levels",
                    label: "no recent levels",
                    type: "action",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "section_asset",
        label: "",
        items: [
          {
            id: "item_open_asset",
            label: "open asset...",
            shortcut: "ctrl+p",
            type: "action",
          },
          {
            id: "button_recent_assets",
            label: "recent assets",
            type: "menu",
            sections: [
              {
                id: "section_recent_assets",
                label: "",
                items: [
                  {
                    id: "item_no_assets",
                    label: "no recent assets",
                    type: "action",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "section_save",
        label: "save",
        items: [
          {
            id: "item_save_current_level",
            label: "save current level",
            shortcut: "ctrl+s",
            type: "action",
          },
          {
            id: "item_save_current_level_as",
            label: "save current level as..",
            shortcut: "ctrl+alt++s",
            type: "action",
          },
          {
            id: "item_save_all",
            label: "save all",
            shortcut: "ctrl+shift+s",
            type: "action",
          },
          {
            id: "item_save_choose_files",
            label: "choose files to save...",
            shortcut: "ctrl+alt+shift+s",
            type: "action",
          },
        ],
      },
      {
        id: "section_import_export",
        label: "import/export",

        items: [
          {
            id: "item_import_into_level",
            label: "import into level...",
            type: "action",
          },
          {
            id: "item_export_all",
            label: "export all",
            type: "action",
          },
          {
            id: "item_export_selected",
            label: "export selected",
            type: "action",
          },
        ],
      },
      {
        id: "section_project",
        label: "project",
        items: [
          {
            id: "item_new_project",
            label: "new project...",
            type: "action",
          },
          {
            id: "item_open_project",
            label: "open project...",
            type: "action",
          },
          {
            id: "item_zip_project",
            label: "zip project",
            type: "action",
          },
          {
            id: "button_recent_project",
            label: "recent projects",
            type: "menu",
            sections: [
              {
                id: "section_recent_projects",
                label: "",
                items: [
                  {
                    id: "action_no_recent_projects",
                    label: "no recent projects",
                    type: "action",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "section_exit",
        label: "exit",
        items: [
          {
            id: "item_exit",
            label: "exit",
            type: "action",
          },
        ],
      },
    ],
  },
  {
    id: "button_edit",
    label: "edit",
    type: "menu",
    sections: [
      {
        id: "section_open",
        label: "open",
        items: [
          {
            id: "item_new",
            label: "new level...",
            shortcut: "ctrl+n",
            type: "action",
          },
          {
            id: "item_open",
            label: "open level...",
            shortcut: "ctrl+o",
            type: "action",
          },
          {
            id: "button_favourite_levels",
            label: "favourite levels",
            type: "menu",
            sections: [
              {
                id: "section_favourite_levels",
                label: "",
                items: [
                  {
                    id: "item_no_favourites",
                    label: "no favourite levels",
                    type: "action",
                  },
                ],
              },
            ],
          },
          {
            id: "button_recent_levels",
            label: "recent levels",
            type: "menu",
            sections: [
              {
                id: "section_recent_levels",
                label: "",
                items: [
                  {
                    id: "item_no_recent_levels",
                    label: "no recent levels",
                    type: "action",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "section_asset",
        label: "",
        items: [
          {
            id: "item_open_asset",
            label: "open asset...",
            shortcut: "ctrl+p",
            type: "action",
          },
          {
            id: "button_recent_assets",
            label: "recent assets",
            type: "menu",
            sections: [
              {
                id: "section_recent_assets",
                label: "",
                items: [
                  {
                    id: "item_no_assets",
                    label: "no recent assets",
                    type: "action",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "section_save",
        label: "save",
        items: [
          {
            id: "item_save_current_level",
            label: "save current level",
            shortcut: "ctrl+s",
            type: "action",
          },
          {
            id: "item_save_current_level_as",
            label: "save current level as..",
            shortcut: "ctrl+alt++s",
            type: "action",
          },
          {
            id: "item_save_all",
            label: "save all",
            shortcut: "ctrl+shift+s",
            type: "action",
          },
          {
            id: "item_save_choose_files",
            label: "choose files to save...",
            shortcut: "ctrl+alt+shift+s",
            type: "action",
          },
        ],
      },
      {
        id: "section_import_export",
        label: "import/export",

        items: [
          {
            id: "item_import_into_level",
            label: "import into level...",
            type: "action",
          },
          {
            id: "item_export_all",
            label: "export all",
            type: "action",
          },
          {
            id: "item_export_selected",
            label: "export selected",
            type: "action",
          },
        ],
      },
      {
        id: "section_project",
        label: "project",
        items: [
          {
            id: "item_new_project",
            label: "new project...",
            type: "action",
          },
          {
            id: "item_open_project",
            label: "open project...",
            type: "action",
          },
          {
            id: "item_zip_project",
            label: "zip project",
            type: "action",
          },
          {
            id: "button_recent_project",
            label: "recent projects",
            type: "menu",
            sections: [
              {
                id: "section_recent_projects",
                label: "",
                items: [
                  {
                    id: "action_no_recent_projects",
                    label: "no recent projects",
                    type: "action",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "section_exit",
        label: "exit",
        items: [
          {
            id: "item_exit",
            label: "exit",
            type: "action",
          },
        ],
      },
    ],
  },
];
