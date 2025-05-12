// document.addEventListener("DOMContentLoaded", function () {
//     const toggleBtn = document.getElementById("menu-toggle");
//     const closeBtn = document.querySelector(".close-sidebar");
//     const sidebar = document.getElementById("sidebar");

//     toggleBtn.addEventListener("click", function () {
//       sidebar.classList.add("show");
//     });

//     closeBtn.addEventListener("click", function () {
//       sidebar.classList.remove("show");
//     });
//   });

//   const waInput = document.getElementById('waInput');
//   const waLink = document.getElementById('waLink');

//   waInput.addEventListener('input', function () {
//     const phone = waInput.value.replace(/\D/g, '');
//     waLink.textContent = `https://wa.me/${phone}`;
//   });

  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    // Tampilkan sidebar di mobile
    toggleBtn.addEventListener("click", function () {
      sidebar.classList.add("show");
    });

    // Deteksi klik di luar sidebar untuk close (khusus mobile)
    document.addEventListener("click", function (e) {
      if (window.innerWidth < 768) {
        const isClickInsideSidebar = sidebar.contains(e.target);
        const isClickToggleBtn = toggleBtn.contains(e.target);

        if (!isClickInsideSidebar && !isClickToggleBtn && sidebar.classList.contains("show")) {
          sidebar.classList.remove("show");
        }
      }
    });
  });

  // Optional: Untuk input WA jika ada
  const waInput = document.getElementById('waInput');
  const waLink = document.getElementById('waLink');

  if (waInput && waLink) {
    waInput.addEventListener('input', function () {
      const phone = waInput.value.replace(/\D/g, '');
      waLink.textContent = `https://wa.me/${phone}`;
    });
  }