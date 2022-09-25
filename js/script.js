window.addEventListener("DOMContentLoaded", () => {
    let e = document.querySelector(".select__header"),
        t = document.querySelector(".select__body"),
        l = document.querySelectorAll(".select__item"),
        o = document.querySelector(".select__title"),
        r = document.querySelector(".select__header img");
    e.addEventListener("click", () => {
        t.classList.contains("select__body--active") ? (t.classList.remove("select__body--active"), t.style.maxHeight = null, r.style.transform = "rotate(0deg)") : (t.classList.add("select__body--active"), t.style.maxHeight = t.scrollHeight + "px", r.style.transform = "rotate(180deg)")
    }), l.forEach((e, l) => {
        e.addEventListener("click", () => {
            o.textContent = e.textContent, t.classList.remove("select__body--active"), t.style.maxHeight = null, r.style.transform = "rotate(0deg)"
        })
    });
    let s = 0;
    window.addEventListener("scroll", function () {
        if (window.scrollY >= document.querySelector(".map").offsetTop - 500 && 0 == s) {
            let e = [59.949873623587585, 30.316037580080657];
            s = 1, 
            ymaps.ready(function () {
                let t = new ymaps.Map("map-element", {
                    center: e,
                    zoom: 15
                });
                t.controls.remove("geolocationControl"),
                    t.controls.remove("searchControl"), t.controls.remove("trafficControl"), t.controls.remove("typeSelector"), t.controls.remove("fullscreenControl"), t.controls.remove("zoomControl"), t.controls.remove("rulerControl"), t.behaviors.disable(["scrollZoom"]);
                let l = new ymaps.Placemark(e, {}, {
                    iconLayout: "default#image",
                    iconImageHref: "img/map/map.svg",
                    iconImageSize: [70, 100],
                    iconImageOffset: [-20, -120]
                });
                t.geoObjects.add(l)
            })
        }
    });
    let c = document.querySelector(".header"),
        a = document.querySelector(".header__mobile"),
        n = document.querySelector(".header__burger"),
        i = document.querySelector(".header__cross"),
        d = document.querySelector("body");
    n.addEventListener("click", () => {
        a.classList.toggle("active"), n.style.display = "none", i.style.display = "block", d.classList.add("noscroll"), c.classList.add("header--color")
    }), i.addEventListener("click", () => {
        a.classList.toggle("active"), n.style.display = "block", i.style.display = "none", d.classList.remove("noscroll"), c.classList.remove("header--color")
    });
    let m = document.querySelector(".modal");
    document.querySelectorAll(".button__modal").forEach(e => {
        e.addEventListener("click", () => {
            d.classList.add("noscroll"), m.classList.add("active")
        })
    }), m.addEventListener("click", e => {
        e.target.closest(".modal__inner") || (m.classList.remove("active"), d.classList.remove("noscroll"))
    });
    new Swiper(".slider", {
        loop: !0,
        pagination: {
            el: ".slider__pagination"
        },
        navigation: {
            nextEl: ".slider__arrow-right",
            prevEl: ".slider__arrow-left"
        }
    });
    let u = document.querySelector(".form__elements").querySelector('input[type="tel"]');
    new Inputmask("+7 (999) 999-99-99").mask(u), new JustValidate(".form__elements").addField("#name", [{
        rule: "minLength",
        value: 2,
        errorMessage: "Количество символов меньше 2!"
    }, {
        rule: "maxLength",
        value: 30,
        errorMessage: "Количество символов больше 30!"
    }, {
        rule: "required",
        value: !0,
        errorMessage: "Введите имя"
    }]).addField("#telephone", [{
        rule: "required",
        value: !0,
        errorMessage: "Введите номер телефона"
    }, {
        rule: "function",
        validator: function () {
            return 10 === u.inputmask.unmaskedvalue().length
        },
        errorMessage: "Введите корректный номер телефона"
    }]).onSuccess(e => {
        if (document.querySelector("#check").checked) {
            let t = e => fetch("mail.php", {
                    method: "POST",
                    body: JSON.stringify(e),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }).then(e => e.json()),
                l = new FormData(e.target),
                o = {};
            l.forEach((e, t) => {
                o[t] = e
            }), t(o).then(e => {
                console.log("Письмо отправилось")
            }), e.target.reset(), document.querySelector("#item").classList.remove("form__item--active")
        } else document.querySelector("#item").classList.add("form__item--active")
    });
    let y = document.querySelector(".facts__items"),
        _ = document.querySelectorAll(".facts__item"),
        v = document.querySelectorAll(".facts__answer"),
        g = document.querySelectorAll(".facts__plus"),
        f = document.querySelectorAll(".facts__minus"),
        p = document.querySelectorAll(".facts__open--style");
    y.addEventListener("click", e => {
        let t = e.target.closest(".facts__item");
        t && _.forEach((e, l) => {
            e === t ? (v[l].classList.add("active"), _[l].classList.add("facts__item--active"), f[l].style.display = "flex", g[l].style.display = "none", p[l].style.background = "#0074D4") : (v[l].classList.remove("active"), _[l].classList.remove("facts__item--active"), g[l].style.display = "flex", f[l].style.display = "none", p[l].style.background = "#37A5FF")
        })
    });
    let h = document.querySelectorAll(".slider__back img");
    console.log(h), document.documentElement.clientWidth < 768 && h.forEach((e, t) => {
        e.removeAttribute("src"), e.setAttribute("src", "img/slider/back-m.png")
    })
});