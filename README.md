# Tailwind CSS Color Scheme Toggle

Floating button to toggle dark mode for Tailwind CSS

## How to use

1. Enable `selector` for the dark mode.

```js
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'selector',
  // ...
}
```

2. **Optional**: Add the `data-theme` attribute to the `html` tag.

```html
<html lang="en" class="dark:[color-scheme:dark]">
  <!-- ... -->
</html>
```

3. Load the script.

```html
<script src="https://cdn.jsdelivr.net/gh/gasatrya/tw-toggle@1.0.0/tw-theme-toggle.min.js"></script>
```
