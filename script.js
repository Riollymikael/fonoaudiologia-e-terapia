// =====================================================
// ELEMENTOS
// =====================================================

const header =
    document.getElementById("header");

const navbar =
    document.getElementById("navbar");

const menuToggle =
    document.getElementById("menuToggle");

const menuIcon =
    menuToggle.querySelector("i");


// =====================================================
// MENU MOBILE
// =====================================================

menuToggle.addEventListener(
    "click",
    () => {

        navbar.classList.toggle("active");

        const menuAberto =
            navbar.classList.contains("active");

        if (menuAberto) {

            menuIcon.classList.remove(
                "fa-bars"
            );

            menuIcon.classList.add(
                "fa-xmark"
            );

        } else {

            menuIcon.classList.remove(
                "fa-xmark"
            );

            menuIcon.classList.add(
                "fa-bars"
            );

        }

    }
);


// =====================================================
// FECHAR MENU AO CLICAR EM LINK
// =====================================================

const navLinks =
    document.querySelectorAll(
        ".navbar a"
    );


navLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                navbar.classList.remove(
                    "active"
                );

                menuIcon.classList.remove(
                    "fa-xmark"
                );

                menuIcon.classList.add(
                    "fa-bars"
                );

            }
        );

    }
);


// =====================================================
// SOMBRA NO HEADER AO ROLAR
// =====================================================

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 30) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);


// =====================================================
// FECHAR MENU CLICANDO FORA
// =====================================================

document.addEventListener(
    "click",
    (event) => {

        const clicouNavbar =
            navbar.contains(
                event.target
            );

        const clicouBotao =
            menuToggle.contains(
                event.target
            );


        if (
            !clicouNavbar &&
            !clicouBotao &&
            navbar.classList.contains(
                "active"
            )
        ) {

            navbar.classList.remove(
                "active"
            );

            menuIcon.classList.remove(
                "fa-xmark"
            );

            menuIcon.classList.add(
                "fa-bars"
            );

        }

    }
);


// =====================================================
// CORRIGIR MENU AO REDIMENSIONAR
// =====================================================

window.addEventListener(
    "resize",
    () => {

        if (window.innerWidth > 1050) {

            navbar.classList.remove(
                "active"
            );

            menuIcon.classList.remove(
                "fa-xmark"
            );

            menuIcon.classList.add(
                "fa-bars"
            );

        }

    }
);