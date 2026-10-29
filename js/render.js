/* Geração dos cards a partir de js/data.js */
(function (DG) {
  const IMG = "assets/img/";
  const ARROW = '<svg class="icon"><use href="#i-arrow"/></svg>';
  const CART = '<svg class="icon"><use href="#i-cart"/></svg>';

  const productCard = (p) => `
    <article class="card product">
      <div class="card__img">
        <picture>
          <source media="(max-width: 599px)" srcset="${IMG + p.img.replace(".jpg", "-sq.jpg")}">
          <img src="${IMG + p.img}" alt="${p.name}" loading="lazy">
        </picture>
      </div>
      <div class="product__body">
        <h3 class="product__name">${p.name}</h3>
        <p class="product__desc">${p.desc}</p>
        <p class="product__price">${DG.money(p.price)}</p>
        <button type="button" class="btn btn--primary btn--sm btn--block" data-add="${p.id}">
          ${CART}<span>Adicionar<span class="btn__extra"> ao carrinho</span></span>
        </button>
      </div>
    </article>`;

  const categoryCard = (c) => `
    <a href="${c.slug}.html" class="card category">
      <div class="card__img"><img src="${IMG + c.img}" alt="${c.name}" loading="lazy"></div>
      <div class="category__body">
        <span class="category__name">${c.name}</span>
        <span class="link-arrow">Ver produtos ${ARROW}</span>
      </div>
    </a>`;

  const reviewCard = (r) => `
    <article class="card review">
      <div class="review__head">
        <img src="${IMG + r.img}" alt="${r.name}" loading="lazy">
        <div>
          <span class="review__name">${r.name}</span>
          <span class="review__stars" aria-label="5 estrelas">★★★★★</span>
        </div>
      </div>
      <p>“${r.text}”</p>
    </article>`;

  const fill = (id, items, template) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = items.map(template).join("");
  };

  DG.renderProducts = (list) => {
    fill("productGrid", list, productCard);
    const empty = document.getElementById("emptyMsg");
    if (empty) empty.hidden = list.length > 0;
  };
  DG.renderCategories = (list) => fill("categoryGrid", list, categoryCard);
  DG.renderReviews = () => fill("reviewGrid", DG.reviews, reviewCard);
})(window.DG);
