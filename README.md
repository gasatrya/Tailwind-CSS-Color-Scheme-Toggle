# Tailwind CSS Color Scheme Toggle

Floating button to toggle dark mode for Tailwind CSS

## How to use

Enable `selector` for the dark mode.

```js
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'selector',
  // ...
}
```

**Optional**: Add the `data-theme` attribute to the `html` tag.

```html
<html lang="en" class="dark:[color-scheme:dark]">
  <!-- ... -->
</html>
```
