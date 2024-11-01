import { Header } from "@rentment/ui/header";
import "./style.css";
import typescriptLogo from "/typescript.svg";
import { Counter } from "@rentment/ui/counter";
import { setupCounter } from "@rentment/ui/setup-counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    ${Header({ title: "Docs" })}
    <div class="card">
      ${Counter()}
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
