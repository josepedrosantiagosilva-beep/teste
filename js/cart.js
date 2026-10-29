/* Estado do carrinho (salvo no navegador) e montagem da mensagem do pedido */
(function (DG) {
  const KEY = "dg-store-cart";
  const MAX_QTY = 99;
  const listeners = [];
  let items = {}; // { idDoProduto: quantidade }

  try { items = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { items = {}; }

  const commit = () => {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) { /* modo privado */ }
    listeners.forEach((fn) => fn());
  };

  DG.cart = {
    onChange: (fn) => listeners.push(fn),

    add(id) {
      items[id] = Math.min((items[id] || 0) + 1, MAX_QTY);
      commit();
    },
    setQty(id, qty) {
      if (qty <= 0) delete items[id];
      else items[id] = Math.min(qty, MAX_QTY);
      commit();
    },
    clear() { items = {}; commit(); },

    lines() {
      return Object.entries(items)
        .map(([id, qty]) => ({ product: DG.products.find((p) => p.id === id), qty }))
        .filter((line) => line.product);
    },
    count() { return this.lines().reduce((sum, l) => sum + l.qty, 0); },
    total() { return this.lines().reduce((sum, l) => sum + l.product.price * l.qty, 0); },

    message(name = "") {
      const intro = name
        ? `Olá! Meu nome é ${name} e gostaria de fazer este pedido:`
        : "Olá! Gostaria de fazer este pedido:";
      const rows = this.lines()
        .map(({ product: p, qty }) => `• ${qty}x ${p.name} - ${DG.money(p.price * qty)}`)
        .join("\n");
      return `${intro}\n\n${rows}\n\n*Total: ${DG.money(this.total())}*\n\nAguardo o retorno para combinar pagamento e entrega.`;
    }
  };
})(window.DG);
