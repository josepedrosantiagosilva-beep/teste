/* Inicialização de cada página: início ou categoria */
(function (DG) {
  const { $, $$ } = DG;
  const isHome = document.body.classList.contains("home");
  const category = DG.categories.find((c) => c.slug === document.body.dataset.category);

  /* Lista base: mais procurados (início) ou produtos da categoria */
  const baseList = category
    ? DG.products.filter((p) => p.category === category.slug)
    : DG.products.filter((p) => p.featured);

  DG.renderProducts(baseList);
  DG.renderCategories(category ? DG.categories.filter((c) => c !== category) : DG.categories);
  DG.renderReviews();

  if (category) {
    document.title = `${category.name} | DG Store`;
    $("#catName").textContent = category.name;
    $("#catTitle").textContent = category.name;
    $("#catDesc").textContent = category.desc;
    const produtosLink = $('.nav__link[href$="#produtos"]');
    if (produtosLink) produtosLink.classList.add("is-active");
  }

  /* Menu mobile */
  const burger = $("#burger");
  const menu = $("#menu");
  const setMenu = (open) => {
    menu.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  };
  burger.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
  $$(".nav__link").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

  /* Busca: no início procura em todos os produtos; na categoria, só nela */
  const input = $("#searchInput");
  const filter = () => {
    const term = input.value.trim().toLowerCase();
    const pool = isHome && term ? DG.products : baseList;
    DG.renderProducts(term ? pool.filter((p) => p.name.toLowerCase().includes(term)) : baseList);
  };
  input.addEventListener("input", filter);
  $("#searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    filter();
    setMenu(false);
    $("#produtos").scrollIntoView();
  });

  /* Início: destaca no menu a seção visível */
  if (isHome) {
    const links = $$(".nav__link");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.classList.toggle("is-active", l.hash === `#${entry.target.id}`));
      }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.map((l) => $(l.hash)).filter(Boolean).forEach((s) => observer.observe(s));
  }
})(window.DG);
