(function () {
 'use strict';
 var root = document.documentElement;
 var theme;
 try { theme = localStorage.getItem('so-theme'); } catch (_) {}
 if (theme !== 'light' && theme !== 'dark') theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
 root.dataset.soTheme = theme;
 var bar = document.createElement('div'); bar.className = 'so-toolbar';
 var home = document.createElement('a');
 var script = document.currentScript;
 home.href = new URL('../../index.html#trilha', script.src).href;
 home.textContent = 'Sistemas Operacionais · Todas as aulas';
 var button = document.createElement('button');button.type = 'button';button.className = 'so-theme-toggle';
 function update() {button.textContent = theme === 'dark' ? 'Tema claro' : 'Tema escuro';button.setAttribute('aria-label', 'Ativar ' + button.textContent.toLowerCase());button.setAttribute('aria-pressed', String(theme === 'dark'));}
 button.addEventListener('click', function() {theme = theme === 'dark' ? 'light' : 'dark';root.dataset.soTheme = theme;try {localStorage.setItem('so-theme',theme);} catch (_) {}update();});
 update();bar.append(home,button);document.body.prepend(bar);
})();
