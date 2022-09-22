const item = document.querySelectorAll(".item");

item.forEach((item) => {
  const header = item.querySelector(".header");

  header.addEventListener("click", () => {
    const conteudo_item = item.querySelector(".conteudo");

    const item_actived = document.querySelector(".active");

    VerifyActive(item, conteudo_item, item_actived);
  });
});

function VerifyActive(item, content, content_actived) {
  const icon_item = item.querySelector(".open");
  const icon_item_active = document.querySelectorAll(".open");

  icon_item_active.forEach((item) => (item.innerHTML = "+"));

  if (content_actived) {
    content_actived.style.height = 0;
    content_actived.classList.remove("active");
  }

  if (content !== content_actived) {
    icon_item.innerHTML = "-";
    content.classList.add("active");
    content.style.height = content.scrollHeight + 10 + "px";
  }
}
document.getElementsById("").addEventListener("click", function(e){
  e.preventDefault();
});