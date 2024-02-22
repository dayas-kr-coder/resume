function setTheme() {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (prefersDarkScheme.matches) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

document.addEventListener('DOMContentLoaded', setTheme);

// Listen for changes in system theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (e.matches) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});

