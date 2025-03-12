"use client";

import { currency } from "@/context/constants";
import type { CountrySellingType, IncomeStatType, RecentOrderType, StatType } from "./types";

import avatar1 from "@/assets/images/users/avatar-1.jpg";
import avatar2 from "@/assets/images/users/avatar-2.jpg";
import avatar3 from "@/assets/images/users/avatar-3.jpg";
import avatar4 from "@/assets/images/users/avatar-4.jpg";
import avatar5 from "@/assets/images/users/avatar-5.jpg";

export const statData: StatType[] = [
  {
    title: "Total Revenue",
    icon: "icofont-money-bag",
    stat: `${currency}8365.00`,
    change: 8.5,
    subTitle: "New Sessions Today",
    buttonVariant: "primary",
  },
  {
    title: "New Order",
    icon: "icofont-opencart",
    stat: "722",
    change: 8.5,
    subTitle: "New Sessions Today",
    buttonVariant: "outline-secondary",
  },
];

export const incomeStatData: IncomeStatType[] = [
  { title: "Total", stat: `2.340` },
  { title: "Neste mês", stat: "27" },
  { title: "Nessa semana", stat: "5" },
  { title: "Total Hoje", stat: "2" },
];

export const topCountriesSellingData: CountrySellingType[] = [
  {
    flagImage: avatar1,
    name: "Como encontrar opotunidades de negócios?",
    categories: ["Negócios"],
    progress: 88.0,
    amount: 100.271,
  },
  {
    flagImage: avatar2,
    name: "Entendo os conceitos musicais de Michael Repper",
    categories: ["Música", "Cultura"],
    progress: 85.0,
    amount: 100.031,
  },
  {
    flagImage: avatar3,
    name: "Como governar o Brasil?",
    categories: ["Política", "Economia"],
    progress: 80.0,
    amount: 90.032,
  },
  {
    flagImage: avatar4,
    name: "Temos que conversar sobre IAs",
    categories: ["Tecnologia", "Mercado de Trabalho"],
    progress: 74.0,
    amount: 84.224,
  },
  {
    flagImage: avatar4,
    name: "Aprenda a trabalhar online",
    categories: ["Tecnologia", "Mercado de Trabalho"],
    progress: 70.0,
    amount: 79.312,
  },
];

export const recentOrders: RecentOrderType[] = [
  { id: "#3652", name: "José Silva", image: avatar1, amount: 17 },
  { id: "#4789", name: "Amanda Albuquerque", image: avatar2, amount: 15 },
  { id: "#4521", name: "José Agostino", image: avatar3, amount: 11 },
  { id: "#3269", name: "Fernanda Luiza", image: avatar4, amount: 9 },
  { id: "#4521", name: "Rafael Alexandro", image: avatar5, amount: 8 },
];