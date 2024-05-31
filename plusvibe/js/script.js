window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    //Модальное окно
    const modal = document.getElementById("modal");
    const btn = document.getElementById("open-modal__btn");
    const closeBtn = document.querySelector(".modal__close");

    btn.addEventListener("click", function () {
        modal.classList.add("modal_active");

        closeBtn.addEventListener("click", closeModal);

        function closeModal() {
            modal.classList.remove("modal_active");

            closeBtn.removeEventListener("click", closeModal);

            modal.removeEventListener("click", hideModal);
        }

        modal.addEventListener("click", hideModal);

        function hideModal(event) {
            if (event.target === modal) {
                closeModal();
            }
        }
    });

    //Менюшка
    const popup = document.getElementById('popup');
    const menu = document.getElementById('menu');

    popup.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    //Аккордеон
    const accordion = () => {
        const btns = document.querySelectorAll(".accordion-head");
        const blocks = document.querySelectorAll(".accordion-content");

        btns.forEach((btn) => {
            btn.addEventListener("click", function () {
                if (!this.classList.contains("active-p")) {
                    btns.forEach((btn) => {
                        btn.classList.remove("active-p", "active-style");
                    });
                    this.classList.add("active-p", "active-style");
                } else
                    btns.forEach((btn) => {
                        btn.classList.remove("active-p", "active-style");
                    });
            });
        });
    };
    accordion();

    //Слайдер
    let slideIndex = 1,
        slides = document.querySelectorAll(".slider-item"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dotsWrap = document.querySelector(".slider-dots"),
        dots = document.querySelectorAll(".dot");

    const slidesToShow = 3;

    function showSlides(n) {
        if (n > slides.length - slidesToShow + 1) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = slides.length - slidesToShow + 1;
        }

        slides.forEach((item) => {
            item.style.display = "none";
            item.style.position = "static";
        });
        dots.forEach((item) => item.classList.remove("dot-active"));

        for (let i = 0; i < slidesToShow; i++) {
            slides[slideIndex - 1 + i].style.display = "block";
            dots[slideIndex - 1 + i].classList.add("dot-active");
            if (i > 0) {
                slides[slideIndex - 1 + i].style.position = "absolute";
                slides[slideIndex - 1 + i].style.left = `${i * 36}%`;
            }
        }
    }

    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    function currentSlide(n) {
        showSlides((slideIndex = n));
    }

    prev.addEventListener("click", function () {
        plusSlides(-1);
    });

    next.addEventListener("click", function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener("click", function (event) {
        for (let i = 0; i < dots.length; i++) {
            if (
                event.target.classList.contains("dot") &&
                event.target == dots[i]
            ) {
                currentSlide(i + 1);
            }
        }
    });

    showSlides(1);

    //Фильтры
    const filterBtns = document.querySelectorAll('.filter-btn');
    const filterItems = document.querySelectorAll('.filter-item');
    const filterContent = document.querySelector('.filter-content');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            filterItems.forEach(item => {
                if (filter === '1' && (item.dataset.item === '2' || item.dataset.item === '4' || item.dataset.item === '5')) {
                    item.classList.remove('hidden');
                } else if (filter === '2' && (item.dataset.item === '3' || item.dataset.item === '7')) {
                    item.classList.remove('hidden');
                } else if (filter === '3' && (item.dataset.item === '1' || item.dataset.item === '6' || item.dataset.item === '8')) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    filterContent.addEventListener('click', (event) => {
        if (event.target === filterContent) {
            filterItems.forEach(item => {
                item.classList.remove('hidden');
            });
        }
    });


    //Табы
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContect = document.querySelectorAll(".info-tabcontent");
    function hideTabContect(a) {
        for (let i = a; i < tabContect.length; i++) {
            tabContect[i].classList.remove("show");
            tabContect[i].classList.add("hide");
        }
    }
    hideTabContect(1);
    function ShowTabContect(b) {
        if (tabContect[b].classList.contains("hide")) {
            tabContect[b].classList.remove("hide");
            tabContect[b].classList.add("show");
        }
    }
    info.addEventListener("click", function (event) {
        let target = event.target;

        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContect(0);
                    tab.forEach((item) => {
                        item.classList.remove("active");
                    });
                    target.classList.add("active");

                    ShowTabContect(i);

                    break;
                }
            }
        }
    });
});