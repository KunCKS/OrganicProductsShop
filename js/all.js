//index.html modal提示視窗
$("#cartModal").on("show.bs.modal", function(event) {
  var button = $(event.relatedTarget);
  var recipient = button
    .parent()
    .siblings()
    .find(".items-title .col");
  var product = $(recipient[0]).data("product");
  var price = $(recipient[1]).data("price");
  var modal = $(this);
  modal.find(".modal-title").text("將 " + product + " 加入購物車");
  modal
    .find(".modal-body")
    .text("確定將 " + product + " 價格 " + price + " 加入購物車嗎？");
});
$("#deleteItemsModal").on("show.bs.modal", function(event) {
  var button = $(event.relatedTarget);
  var recipient = button.siblings().find(".cart-items-name");
  var product = $(recipient).data("product");
  var modal = $(this);
  modal.find(".modal-title").text("將 " + product + " 從購物車中移除");
  modal.find(".modal-body").text("確定將 " + product + " 移除嗎？");
});
