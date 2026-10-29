(function (DG) {
  DG.phone = "88994828085"; // Coloque o número com DDI 55 e DDD, sem espaços ou símbolos.

  DG.money = (value) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  DG.waLink = (message = "Olá! Vim pelo site da DG Store.") =>
    `https://wa.me/${DG.phone}?text=${encodeURIComponent(message)}`;

  DG.$ = (sel, root = document) => root.querySelector(sel);
  DG.$$ = (sel, root = document) => [...root.querySelectorAll(sel)];
})(window.DG);