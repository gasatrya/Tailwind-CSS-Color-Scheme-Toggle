/**
 * Tailwind CSS Theme Toggle Script
 *
 * @author Ga Satrya - @gasatrya
 * @copyright 2024 Ga Satrya
 * @license MIT
 */

(function () {
  // Create the button element
  const toggleBtn = document.createElement("button");
  toggleBtn.id = "theme-toggle";

  // Create the SVG elements for light and dark mode
  // icons: https://heroicons.com
  const lightSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  lightSvg.setAttribute("viewBox", "0 0 24 24");
  lightSvg.setAttribute("fill", "none");
  lightSvg.setAttribute("stroke", "currentColor");
  lightSvg.setAttribute("stroke-width", "1.5");
  lightSvg.setAttribute("stroke-linecap", "round");
  lightSvg.setAttribute("stroke-linejoin", "round");
  lightSvg.setAttribute("class", "size-6");
  lightSvg.setAttribute("width", "24");
  lightSvg.setAttribute("height", "24");
  const lightPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  lightPath.setAttribute(
    "d",
    "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
  );
  lightSvg.appendChild(lightPath);

  const darkSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  darkSvg.setAttribute("viewBox", "0 0 24 24");
  darkSvg.setAttribute("fill", "none");
  darkSvg.setAttribute("stroke", "currentColor");
  darkSvg.setAttribute("stroke-width", "1.5");
  darkSvg.setAttribute("stroke-linecap", "round");
  darkSvg.setAttribute("stroke-linejoin", "round");
  darkSvg.setAttribute("class", "size-6");
  darkSvg.setAttribute("width", "24");
  darkSvg.setAttribute("height", "24");
  const darkPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  darkPath.setAttribute(
    "d",
    "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
  );
  darkSvg.appendChild(darkPath);

  // Create the text elements for light and dark mode
  const lightText = document.createTextNode("Light");
  const darkText = document.createTextNode("Dark");

  // Append the SVG and text elements to the button
  toggleBtn.appendChild(lightSvg);
  toggleBtn.appendChild(lightText);

  // Append the button to the body
  document.body.appendChild(toggleBtn);

  // Add event listener to the button
  toggleBtn.addEventListener("click", () => {
    // Toggle the 'light' and 'dark' classes on the html element
    document.documentElement.classList.toggle("light");
    document.documentElement.classList.toggle("dark");

    // Toggle the SVG and text elements on the button
    if (toggleBtn.contains(lightSvg)) {
      toggleBtn.replaceChild(darkSvg, lightSvg);
      toggleBtn.replaceChild(darkText, lightText);
    } else {
      toggleBtn.replaceChild(lightSvg, darkSvg);
      toggleBtn.replaceChild(lightText, darkText);
    }
  });

  // Add CSS to the page
  const style = document.createElement("style");
  style.textContent = `
    html.light { background-color: #ffffff; color: #000000; }
    html.dark { background-color: #000000; color: #ffffff; }
    #theme-toggle { position: fixed; bottom: 20px; right: 20px; display: flex; align-items: center; border-radius: 9999px; padding: 10px 15px; cursor: pointer; font-size: 14px; }
    #theme-toggle svg { margin-right: 5px; width: 24px; height: 24px; }
    .light #theme-toggle { border: 1px solid rgb(0 0 0 / 0.2); }
    .dark #theme-toggle { border: 1px solid rgb(255 255 255 / 0.2); }
  `;
  document.head.appendChild(style);

  // Set the initial mode to light
  document.documentElement.classList.add("light");
})();
