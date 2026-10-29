/* Elementos repetidos em todas as páginas (injetados no HTML) */
(function (DG) {
  const sprite = `
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-wa" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.6L3 21z"/><path fill="currentColor" d="M9 7.8c.2-.4.5-.4.8-.4.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c.8 1.5 1.9 2.4 3.3 3l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.2.6-.2.9-1 1.4-1.9 1.3-3-.4-5.6-3-6-5.8-.1-.7.1-1.4.2-1.9z"/></symbol>
  <symbol id="i-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></symbol>
  <symbol id="i-search" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></g></symbol>
  <symbol id="i-cart" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h3l2.4 12h10.2L20 7H6"/><circle cx="9" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/></g></symbol>
  <symbol id="i-sun" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></g></symbol>
  <symbol id="i-moon" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/></symbol>
  <symbol id="i-close" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M6 6l12 12M18 6L6 18"/></symbol>
  <symbol id="i-truck" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h25v22H4zM29 17h8l7 8v7H29"/><circle cx="14" cy="35" r="3.5"/><circle cx="36" cy="35" r="3.5"/><path d="M1 17h7M1 23h5"/></g></symbol>
  <symbol id="i-shield" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 4l16 6v12c0 10-7 17-16 21C15 39 8 32 8 22V10z"/><path d="M16 24l6 6 11-12"/></g></symbol>
  <symbol id="i-headset" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 28v-6a16 16 0 0 1 32 0v6"/><rect x="6" y="26" width="8" height="12" rx="3"/><rect x="34" y="26" width="8" height="12" rx="3"/><path d="M38 38c0 4-4 6-9 6"/></g></symbol>
  <symbol id="i-star" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M24 5l5.8 12 13.2 1.8-9.6 9.2 2.4 13L24 34.8 12.2 41l2.4-13L5 18.8 18.2 17z"/></symbol>
  <symbol id="i-code" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M16 14L6 24l10 10M32 14l10 10-10 10M28 8L20 40"/></g></symbol>
</svg>`;

  const header = `
<header class="header">
  <div class="container header__inner">
    <a href="index.html#inicio" class="logo" aria-label="DG Store - início">
      <img class="logo-img logo-img--dark" src="assets/img/logo.png" alt="DG Store" width="64" height="38">
      <img class="logo-img logo-img--light" src="assets/img/logo-light.png" alt="" width="64" height="38" aria-hidden="true">
    </a>
    <div class="header__menu" id="menu">
      <nav class="nav" aria-label="Principal">
        <a href="index.html#inicio" class="nav__link">Início</a>
        <a href="index.html#produtos" class="nav__link">Produtos</a>
        <a href="index.html#sobre" class="nav__link">Sobre a DG</a>
        <a href="index.html#contato" class="nav__link">Entrega e contato</a>
      </nav>
      <form class="search" id="searchForm" role="search">
        <svg class="icon"><use href="#i-search"/></svg>
        <input type="search" id="searchInput" placeholder="Buscar produtos..." aria-label="Buscar produtos">
      </form>
    </div>
    <div class="header__actions">
      <button type="button" class="icon-btn theme-toggle" data-theme-toggle aria-label="Alternar tema claro/escuro">
        <svg class="icon icon--lg icon-sun"><use href="#i-sun"/></svg>
        <svg class="icon icon--lg icon-moon"><use href="#i-moon"/></svg>
      </button>
      <a href="#" class="icon-btn" data-wa aria-label="WhatsApp"><svg class="icon icon--lg"><use href="#i-wa"/></svg></a>
      <button type="button" class="icon-btn cart" data-cart-open aria-label="Abrir carrinho">
        <svg class="icon icon--lg"><use href="#i-cart"/></svg>
        <span class="cart__badge" id="cartCount">0</span>
      </button>
      <button type="button" class="burger" id="burger" aria-label="Abrir menu" aria-expanded="false" aria-controls="menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;

  const footer = `
<footer class="footer" id="contato">
  <div class="container footer__grid">
    <div class="footer__brand">
      <img class="logo-img logo-img--dark" src="assets/img/logo.png" alt="DG Store" width="64" height="38">
      <img class="logo-img logo-img--light" src="assets/img/logo-light.png" alt="" width="64" height="38" aria-hidden="true">
      <p>Tecnologia ao seu alcance.</p>
    </div>
    <div class="footer__col">
      <h3>Links</h3>
      <a href="index.html#inicio">Início</a>
      <a href="index.html#produtos">Produtos</a>
      <a href="index.html#sobre">Sobre a DG</a>
      <a href="index.html#contato">Entrega e contato</a>
    </div>
    <div class="footer__col">
      <h3>Fale conosco</h3>
      <a href="#" class="footer__wa" data-wa>
        <svg class="icon icon--lg"><use href="#i-wa"/></svg>
        <span>WhatsApp<br><strong>${DG.phoneLabel}</strong></span>
      </a>
    </div>
    <div class="footer__dev">
      <svg class="icon icon--xl"><use href="#i-code"/></svg>
      <div>
        <h3>Quer ter o seu próprio site?</h3>
        <p>Desenvolvimento de sites personalizados para o seu negócio.</p>
        <small>Developer by<br><a href="#" data-wa-dev>${DG.dev.name}</a></small>
      </div>
      <a href="#" class="btn btn--primary" data-wa-dev>Fale conosco</a>
    </div>
  </div>
  <div class="footer__bottom">
    <div class="container">
      <span>© 2025 DG STORE. Todos os direitos reservados.</span>
      <span>Quixeramobim - CE</span>
    </div>
  </div>
</footer>`;

  const drawer = `
<div class="drawer-overlay" id="cartOverlay"></div>
<aside class="drawer" id="cartDrawer" aria-label="Carrinho de compras" aria-hidden="true">
  <div class="drawer__head">
    <h2>Seu carrinho</h2>
    <button type="button" class="icon-btn" data-cart-close aria-label="Fechar carrinho"><svg class="icon icon--lg"><use href="#i-close"/></svg></button>
  </div>
  <div class="drawer__body" id="cartItems"></div>
  <div class="drawer__foot">
    <label class="field">Seu nome (opcional)
      <input type="text" id="cartName" placeholder="Como podemos te chamar?" autocomplete="name" maxlength="60">
    </label>
    <div class="drawer__total"><span>Total</span><strong id="cartTotal">R$ 0,00</strong></div>
    <button type="button" class="btn btn--primary btn--block" id="cartCheckout"><svg class="icon"><use href="#i-wa"/></svg>Finalizar pedido no WhatsApp</button>
    <button type="button" class="drawer__clear" id="cartClear">Esvaziar carrinho</button>
  </div>
</aside>
<div class="toast" id="toast" role="status" aria-live="polite"></div>`;

  document.body.insertAdjacentHTML("afterbegin", sprite);
  document.body.insertAdjacentHTML("beforeend", drawer);
  const put = (id, html) => { const el = document.getElementById(id); if (el) el.outerHTML = html; };
  put("app-header", header);
  put("app-footer", footer);

  /* Links de WhatsApp: data-wa = loja, data-wa-dev = empresa que fez o site */
  const link = (el, href) => { el.href = href; el.target = "_blank"; el.rel = "noopener"; };
  DG.$$("[data-wa]").forEach((el) => link(el, DG.waLink()));
  DG.$$("[data-wa-dev]").forEach((el) => link(el, DG.waLink(DG.dev.message, DG.dev.phone)));
})(window.DG);
