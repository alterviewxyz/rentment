import { BaseWrapper } from "./components/BaseComponents/BaseWrapper";
import "./App.css";
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import { FaSignInAlt } from 'react-icons/fa';
// import { Button } from './components';

function App() {
  return (
    <BaseWrapper
      headerProps={{
        navLinks: [
          { label: "رزرو خودرو", href: "#" },
          { label: "خدمات ما", href: "#" },
          { label: "بلاگ", href: "#" },
          { label: "درباره ما", href: "#" },
          { label: "تماس با ما", href: "#" },
        ],
        user: {
          name: "اولدوز بهاور",
          avatarUrl: "https://via.placeholder.com/64",
        },
      }}
    >
      Hello!
    </BaseWrapper>
  );
}

export default App;
