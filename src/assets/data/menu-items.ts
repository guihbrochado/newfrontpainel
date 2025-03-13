import type { MenuItemType } from '@/types/menu'

export const MENU_ITEMS: MenuItemType[] = [
  {
    key: "main",
    label: "Main Menu",
    isTitle: true,
  },
  {
    key: "dashboards",
    icon: "iconoir:home-simple",
    label: "Dashboards",
    children: [
      {
        key: "dashboard-analytics",
        label: "Analytics",
        url: "/dashboard/analytics",
        parentKey: "dashboards",
      },
      {
        key: "dashboard-banners-analytics",
        label: "Banners Analytics",
        url: "/dashboard/banners-analytics",
        parentKey: "dashboards",
      },
    ],
  },
  {
    key: "gestao-usuarios",
    icon: "iconoir:user-square",
    label: "Gestão de Usuários",
    children: [
      {
        key: "usuarios-lista",
        label: "Todos os Usuários",
        url: "/admin/usuarios",
        parentKey: "gestao-usuarios",
      },
      {
        key: "usuarios-criar",
        label: "Criar Usuário",
        url: "/admin/usuarios/criar",
        parentKey: "gestao-usuarios",
      },
    ],
  },
  {
    key: "gestao-posts",
    icon: "iconoir:send-diagonal",
    label: "Gestão de Posts",
    children: [
      {
        key: "posts-todos",
        label: "Todos os Posts",
        url: "/admin/posts",
        parentKey: "gestao-posts",
      },
      {
        key: "posts-criar",
        label: "Criar Post",
        url: "/admin/posts/criar",
        parentKey: "gestao-posts",
      },
      {
        key: "posts-categorias",
        label: "Categorias",
        url: "/admin/categories",
        parentKey: "gestao-posts",
      },
    ],
  },
  {
    key: "gestao-banners",
    icon: "iconoir:media-image-plus",
    label: "Gestão de Banners",
    children: [
      {
        key: "banners-todos",
        label: "Todos os Banners",
        url: "/admin/banners",
        parentKey: "gestao-banners",
      },
      {
        key: "banners-criar",
        label: "Criar Banner",
        url: "/admin/banners/criar",
        parentKey: "gestao-banners",
      },
    ],
  },
];

