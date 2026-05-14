import type { ReactNode } from "react";

export const tokens: {
  terracotta: string;
  navy: string;
  sand: string;
  grey: string;
  accentBlue: string;
};

export type NavItem = { href: string; label: string };
export type ContactDetails = {
  name: string;
  title: string;
  role: string;
  email: string;
  phone: string;
};
export type ThemeName = "farrer" | "adhd";

export function SiteShell(props: {
  brand: { name: string; detail: string };
  navItems: NavItem[];
  contact: ContactDetails;
  theme?: ThemeName;
  children: ReactNode;
}): JSX.Element;

export function Hero(props: {
  eyebrow: string;
  title: string;
  text: string;
  primary: NavItem;
  secondary?: NavItem;
  theme?: ThemeName;
  highlights?: Array<{ title: string; text: string }>;
}): JSX.Element;

export function PageHeader(props: {
  eyebrow?: string;
  title: string;
  text?: string;
  theme?: ThemeName;
}): JSX.Element;

export function Section(props: {
  title?: string;
  intro?: string;
  tone?: "plain" | "soft" | "white";
  children: ReactNode;
}): JSX.Element;

export function CardGrid(props: {
  items: Array<string | { title: string; text: string }>;
  columns?: 2 | 3;
}): JSX.Element;

export function FeatureBand(props: {
  eyebrow?: string;
  title: string;
  text: string;
  theme?: ThemeName;
  items?: Array<{ kicker?: string; title: string; text: string }>;
}): JSX.Element;

export function ProcessSteps(props: {
  steps: Array<{ title: string; text: string }>;
}): JSX.Element;

export function StatementPanel(props: {
  title: string;
  text: string;
  theme?: ThemeName;
}): JSX.Element;

export function TextBlock(props: { children: ReactNode }): JSX.Element;
export function ContactPanel(props: { contact: ContactDetails; theme?: ThemeName }): JSX.Element;
export function CrisisDisclaimer(): JSX.Element;
export function CTA(props: {
  title: string;
  text?: string;
  href?: string;
  label?: string;
  theme?: ThemeName;
}): JSX.Element;
