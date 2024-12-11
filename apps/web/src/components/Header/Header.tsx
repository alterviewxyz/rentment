import React from "react";
import { Logo } from "../Logo/Logo";
import "./Header.css";

export interface HeaderProps {
  /** Navigation links */
  navLinks: { label: string; href: string }[];
  /** Logged-in user data */
  user?: {
    name: string;
    avatarUrl: string;
  };
  /** Search icon or search functionality */
  onSearchClick?: () => void;
  /** Callback when login button is clicked */
  onLogin?: () => void;
  /** Callback when logout button is clicked */
  onLogout?: () => void;
  /** Callback when create account button is clicked */
  onCreateAccount?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  navLinks,
  user,
  onSearchClick,
  onLogin,
  onLogout,
  onCreateAccount,
}) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo className="header__logo_svg" />
        <span> رنت‌منت!</span>
      </div>
      <nav className="header__nav">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="header__link">
            {link.label}
          </a>
        ))}
        <button
          className="header__search"
          onClick={onSearchClick}
          aria-label="Search"
        >
          🔍
        </button>
      </nav>
      <div className="header__actions">
        {user ? (
          <div className="header__user">
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="header__avatar"
            />
            <span className="header__username">{user.name}</span>
            {/* <button className="header__logout" onClick={onLogout}>
              خروج
            </button> */}
          </div>
        ) : (
          <div className="header__auth-buttons">
            <button className="header__login" onClick={onLogin}>
              ورود
            </button>
            <button
              className="header__create-account"
              onClick={onCreateAccount}
            >
              ثبت‌نام
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export { Header };
