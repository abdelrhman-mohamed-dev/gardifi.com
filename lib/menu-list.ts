// import {
//   Tag,
//   Users,
//   Settings,
//   Bookmark,
//   SquarePen,
//   LayoutGrid,
//   LucideIcon,
// } from "lucide-react";

import {
  IconBrandTabler,
  IconUserBolt,
  IconMouse,
  IconBan,
  IconListCheck,
  IconSettings,
  TablerIcon,
  IconAdCircle,
} from "@tabler/icons-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: TablerIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "لوحه التحكم",
          active: pathname === "/dashboard",
          icon: IconBrandTabler,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard/accounts",
          label: "الحسابات",
          active: pathname.includes("/dashboard/accounts"),
          icon: IconUserBolt,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard/campaigns",
          label: "الحملات",
          active: pathname.includes("/dashboard/campaigns"),
          icon: IconAdCircle,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard/clicks",
          label: "النقرات",
          active: pathname.includes("/dashboard/clicks"),
          icon: IconMouse,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard/blocked-ips",
          label: "عنوان ال (IP) المحظور",
          active: pathname.includes("/dashboard/blocked-ips"),
          icon: IconBan,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard/allowed-ips",
          label: "قائمه ال (IP) المسموحه",
          active: pathname.includes("/dashboard/allowed-ips"),
          icon: IconListCheck,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard/blocking-settings",
          label: "اعدادات الحظر",
          active: pathname.includes("/dashboard/blocking-settings"),
          icon: IconSettings,
          submenus: [],
        },
      ],
    },
    // {
    //   groupLabel: "Contents",
    //   menus: [
    //     {
    //       href: "",
    //       label: "Posts",
    //       active: pathname.includes("/posts"),
    //       icon: SquarePen,
    //       submenus: [
    //         {
    //           href: "/posts",
    //           label: "All Posts",
    //           active: pathname === "/posts",
    //         },
    //         {
    //           href: "/posts/new",
    //           label: "New Post",
    //           active: pathname === "/posts/new",
    //         },
    //       ],
    //     },
    //     {
    //       href: "/categories",
    //       label: "Categories",
    //       active: pathname.includes("/categories"),
    //       icon: Bookmark,
    //       submenus: [],
    //     },
    //     {
    //       href: "/tags",
    //       label: "Tags",
    //       active: pathname.includes("/tags"),
    //       icon: Tag,
    //       submenus: [],
    //     },
    //   ],
    // },
    // {
    //   groupLabel: "Settings",
    //   menus: [
    //     {
    //       href: "/users",
    //       label: "Users",
    //       active: pathname.includes("/users"),
    //       icon: Users,
    //       submenus: [],
    //     },
    //     {
    //       href: "/account",
    //       label: "Account",
    //       active: pathname.includes("/account"),
    //       icon: Settings,
    //       submenus: [],
    //     },
    //   ],
    // },
  ];
}
