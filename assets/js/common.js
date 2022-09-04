// html 파일 인클루드
// window.addEventListener("load", function () {
//   var allElements = document.getElementsByTagName("*");

//   Array.prototype.forEach.call(allElements, function (el) {
//     var includePath = el.dataset.includePath;

//     if (includePath) {
//       var xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//           el.outerHTML = this.responseText;
//         }
//       };
//       xhttp.open("GET", includePath, true);
//       xhttp.send();

//       setTimeout(() => {
//         const headerTitleText = el.dataset.headerTitle;
//         const isBack = el.dataset.headerBack;
//         const isClose = el.dataset.headerClose;

//         const headerTitle = document.querySelector("#headerTitle");
//         const headerBack = document.querySelector("#headerBack");
//         const headerClose = document.querySelector("#headerClose");

//         console.log(headerTitle);
//         if (headerTitle && headerTitleText) {
//           headerTitle.innerHTML = headerTitleText;
//         }

//         if (headerBack && isBack === "false") {
//           headerBack.style.display = "none";
//         }

//         if (headerClose && isClose === "false") {
//           headerClose.style.display = "none";
//         }
//       }, 100);
//     }
//   });

// });

$(document).ready(function () {
  const openModal = (target) => {
    $("#" + target).toggleClass("show");
    $("#modal-bg").toggleClass("show");
  };

  $("[data-include-path]").each((index, e) => {
    $(e).load(e.dataset.includePath, () => {});
  });

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
