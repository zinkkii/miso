$(document).ready(function () {
  $("[data-include-path]").each((index, e) => {
    let headerTitle = e.dataset.headerTitle;
    let headerDesc = e.dataset.headerDesc;
    let headerIsClose = e.dataset.isClose;

    // 모바일 헤더 설정
    $(e).load(e.dataset.includePath, () => {
      if (e.dataset.includePath === "../../html/layout/_header-mobile.html") {
        $("#headerTitle").html(headerTitle);
        $("#headerDesc").html(headerDesc);
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

  const readImage = (input) => {
    console.log(input);
    // 인풋 태그에 파일이 있는 경우
    if (input.files && input.files[0]) {
      // 이미지 파일인지 검사 (생략)
      // FileReader 인스턴스 생성
      const reader = new FileReader();
      // 이미지가 로드가 된 경우
      reader.onload = (e) => {
        const previewImage = document.getElementById("preview-image");
        previewImage.src = e.target.result;
      };
      // reader가 이미지 읽도록 하기
      reader.readAsDataURL(input.files[0]);
    }
  };
});
