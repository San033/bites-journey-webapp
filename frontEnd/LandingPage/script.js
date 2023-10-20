document.querySelector("#phone-search-icon"),
  (onclick = () => {
    document.querySelector("#search-form").classList.toggle("active");
  });

document.querySelector("#close"),
  (onclick = () => {
    document.querySelector("#search-form").classList.remove("active");
  });
