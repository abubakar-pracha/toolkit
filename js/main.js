function initTheme(){var s=localStorage.getItem('theme');if(s==='dark')document.documentElement.classList.add('dark');}
function toggleTheme(){document.documentElement.classList.toggle('dark');localStorage.setItem('theme',document.documentElement.classList.contains('dark')?'dark':'light');}
initTheme();
