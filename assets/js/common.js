$(document).ready(function () {
  $("[data-include-path]").each((index, e) => {
    let headerTitle = e.dataset.headerTitle;
    let headerIsClose = e.dataset.isClose;

    // 모바일 헤더 설정
    $(e).load(e.dataset.includePath, () => {
      if (e.dataset.includePath === "../../html/layout/_header-mobile.html") {
        $("#headerTitle").html(headerTitle);
        if (headerIsClose === "false") {
          $("#headerClose").css("display", "none");
        }
      }
    });
  });

  const openModal = (target) => {
    $("#" + target).toggleClass("show");
    $("#modal-bg").toggleClass("show");
  };

  $("[data-modal-target]").each((index, el) => {
    $(el).on("click", (e) => {
      e.preventDefault();
      openModal(el.dataset.modalTarget);
    });
  });

  $("[data-toast]").each((i, e) => {
    console.log(e);
  });
});
