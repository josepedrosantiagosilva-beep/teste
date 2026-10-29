(function (DG) {
  DG.money = (value) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  /* Link do WhatsApp. Sem o 2º argumento usa o número da loja. */
  DG.waLink = (message = "Olá! Vim pelo site da DG Store.", phone = DG.phone) =>
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  DG.$ = (sel, root = document) => root.querySelector(sel);
  DG.$$ = (sel, root = document) => [...root.querySelectorAll(sel)];
})(window.DG);