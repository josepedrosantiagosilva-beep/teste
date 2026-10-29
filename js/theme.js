/* Tema claro/escuro: padrão escuro, escolha salva no navegador.
   Carregado no <head> para aplicar o tema antes da página aparecer. */
(function () {
  const KEY = "dg-store-theme";
  const root = document.documentElement;
  const COLORS = { dark: "#07070d", light: "#f4f4fa" };

  const read = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  const apply = (theme) => {
    root.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = COLORS[theme];
  };

  apply(read() === "light" ? "light" : "dark");

  document.addEventListener("click", (e) => {
    if (!e.target.closest("[data-theme-toggle]")) return;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    apply(next);
    try { localStorage.setItem(KEY, next); } catch (err) { /* modo privado */ }
  });
})();
