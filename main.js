<script>
  let lastScrollTop = 0;
  const header = document.getElementById("header");

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down - hide header
      header.classList.add("hide");
    } else {
      // Scrolling up - show header
      header.classList.remove("hide");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
</script>