import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Header, HeaderProps } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  argTypes: {
    navLinks: { control: "object" },
    user: { control: "object" },
    onSearchClick: { action: "Search clicked" },
    onLogin: { action: "Login clicked" },
    onLogout: { action: "Logout clicked" },
    onCreateAccount: { action: "Create account clicked" },
  },
};

export default meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  navLinks: [
    { label: "رزرو خودرو", href: "#" },
    { label: "خدمات ما", href: "#" },
    { label: "بلاگ", href: "#" },
    { label: "درباره ما", href: "#" },
    { label: "تماس با ما", href: "#" },
  ],
  user: {
    name: "اولدوز بهاور",
    avatarUrl: "https://via.placeholder.com/32",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  navLinks: [
    { label: "رزرو خودرو", href: "#" },
    { label: "خدمات ما", href: "#" },
    { label: "بلاگ", href: "#" },
    { label: "درباره ما", href: "#" },
    { label: "تماس با ما", href: "#" },
  ],
};
