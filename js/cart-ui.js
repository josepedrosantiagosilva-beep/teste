/* Gaveta do carrinho, contador, avisos e envio do pedido pelo WhatsApp */
(function (DG) {
  const { $, $$ } = DG;
  const drawer = $("#cartDrawer");
  const overlay = $("#cartOverlay");
  const list = $("#cartItems");
  const badge = $("#cartCount");
  const toast = $("#toast");
  const nameInput = $("#cartName");
  const checkout = $("#cartCheckout");
  const clearBtn = $("#cartClear");
  let toastTimer;

  /* Abrir e fechar */
  const setOpen = (open) => {
    drawer.classList.toggle("is-open", open);
    overlay.classList.toggle("is-open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("no-scroll", open);
  };
  $$("[data-cart-open]").forEach((b) => b.addEventListener("click", () => setOpen(true)));
  $$("[data-cart-close]").forEach((b) => b.addEventListener("click", () => setOpen(false)));
  overlay.addEventListener("click", () => setOpen(false));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setOpen(false));

  /* Aviso rápido */
  const showToast = (text) => {
    toast.textContent = text;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
  };

  /* Desenho da lista */
  const itemRow = ({ product: p, qty }) => `
    <div class="cart-item">
      <img src="assets/img/${p.img}" alt="${p.name}">
      <div class="cart-item__info">
        <span class="cart-item__name">${p.name}</span>
        <span class="cart-item__price">${DG.money(p.price * qty)}</span>
        <div class="qty">
          <button type="button" data-qty="${p.id}" data-step="-1" aria-label="Diminuir">−</button>
          <span>${qty}</span>
          <button type="button" data-qty="${p.id}" data-step="1" aria-label="Aumentar">+</button>
        </div>
      </div>
      <button type="button" class="icon-btn" data-qty="${p.id}" data-step="-99" aria-label="Remover ${p.name}">
        <svg class="icon"><use href="#i-close"/></svg>
      </button>
    </div>`;

  const render = () => {
    const lines = DG.cart.lines();
    const count = DG.cart.count();
    list.innerHTML = lines.length
      ? lines.map(itemRow).join("")
      : '<p class="cart-empty">Seu carrinho está vazio.<br>Adicione produtos para montar o seu pedido.</p>';
    $("#cartTotal").textContent = DG.money(DG.cart.total());
    badge.textContent = count;
    badge.hidden = count === 0;
    checkout.disabled = clearBtn.hidden = count === 0;
  };
  DG.cart.onChange(render);
  render();

  /* Cliques: adicionar (cards) e alterar quantidade (gaveta) */
  document.addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]");
    if (add) {
      DG.cart.add(add.dataset.add);
      const p = DG.products.find((x) => x.id === add.dataset.add);
      showToast(`${p.name} adicionado ao carrinho`);
      return;
    }
    const qtyBtn = e.target.closest("[data-qty]");
    if (qtyBtn) {
      const line = DG.cart.lines().find((l) => l.product.id === qtyBtn.dataset.qty);
      if (line) DG.cart.setQty(line.product.id, line.qty + Number(qtyBtn.dataset.step));
    }
  });

  clearBtn.addEventListener("click", () => DG.cart.clear());

  /* Finalizar: abre o WhatsApp com o pedido pronto */
  checkout.addEventListener("click", () => {
    if (!DG.cart.count()) return;
    const url = DG.waLink(DG.cart.message(nameInput.value.trim()));
    window.open(url, "_blank", "noopener");
  });
})(window.DG);
