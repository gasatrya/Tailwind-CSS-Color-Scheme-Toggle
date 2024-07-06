import { h, render } from "https://esm.sh/preact";
import { useState } from "https://esm.sh/preact/hooks";
import htm from "https://esm.sh/htm";

const html = htm.bind(h);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return html`
    <button id="theme-toggle" onClick=${toggleTheme}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="${theme === "light" ? "light-icon" : "dark-icon"} size-6"
        width="24"
        height="24"
      >
        <path
          d=${theme === "light"
            ? "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            : "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"}
        ></path>
      </svg>
      <span>${theme === "light" ? "Light" : "Dark"}</span>
    </button>
  `;
}

render(html`<${App} />`, document.body);

// Add CSS to the page
const style = document.createElement("style");
style.textContent = `
  #theme-toggle { position: fixed; bottom: 20px; right: 20px; display: flex; align-items: center; border-radius: 9999px; padding: 10px 15px; cursor: pointer; font-size: 14px; }
  #theme-toggle svg { margin-right: 5px; width: 24px; height: 24px; }
  .light #theme-toggle { border: 1px solid rgb(0 0 0 / 0.2); }
  .dark #theme-toggle { border: 1px solid rgb(255 255 255 / 0.2); }
`;
document.head.appendChild(style);

// Set the initial mode to light
document.documentElement.classList.add("light");
