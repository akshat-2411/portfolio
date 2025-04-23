$(document).ready(() => {
    let config = document.querySelector(".mymixcont");
    let mixer = mixitup(config, {
        selectors: {
            target: ".mix",
        },
        animation: {
            effects: "fade rotateY(90deg) stagger(100ms)",
            duration: 750,
            reverseOut: true,
        },
        controls: {
            live: false,
        },
    });

    $(".closeButton").click(() => {
        document.querySelector(".closeButton .icon").classList.toggle("active");
        $(".description").slideToggle(500);
    });

    $(".exitButton").click(() => {
        document.querySelector(".tip").classList.remove("view");
    });

    function portfolioView(object) {
        document.querySelector(".nameplate h1").textContent = object.namePlate;
        document.querySelector(".nameplate span span").textContent = object.category;
        document.querySelector(".pro_brief").textContent = object.project_brief;
        document.querySelector(".Date span").textContent = object.project_date;
        document.querySelector(".client span").textContent = object.project_client;
        document.querySelector(".link a").textContent = object.project_link;
        document.querySelector(".link a").href = `https://${object.project_link}`;

        let swiper_wrapper = document.querySelector(".swiper-container-2 .swiper-wrapper");
        let images = swiper_wrapper.querySelectorAll("img");

        for (let i = 0; i < images.length; i++) {
            images[i].src = object.image[i] || "#";
        }
    }

    var swiper = new Swiper(".swiper-container-2", {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        effect: "cube",
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });

    document.querySelectorAll(".mix").forEach((card) => {
        card.addEventListener("click", () => {
            document.querySelector(".tip").classList.add("view");
            let title = card.querySelector(".title").textContent;
            let key = title.toLowerCase().replace(/\s+/g, "");

            let data = {
                namePlate: title,
                category: card.classList.contains("web") ? "Web Design" : "App Design",
                project_brief: "",
                project_date: "",
                project_client: "",
                project_link: "",
                image: [],
            };

            if (title === "Mentor Connect") {
                data.project_brief = "Mentor Connect is a web platform that helps students connect with mentors in various domains.";
                data.project_date = "2024";
                data.project_client = "EduLink Pvt. Ltd.";
                data.project_link = "https://mentor-connect-gamma.vercel.app/";
                data.image = [
                    "resources/img/portfolios/web/A1.png",
                    "resources/img/portfolios/web/A2.png",
                    "resources/img/portfolios/web/A3.png",
                    "resources/img/portfolios/web/A4.png",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg"
                ];
            } else if (title === "Priscripto") {
                data.project_brief = "Priscripto is a medical prescription management system for clinics and hospitals.";
                data.project_date = "2025";
                data.project_client = "HealthSoft Solutions";
                data.project_link = "https://prescripto.vercel.app/";
                data.image = [
                    "resources/img/portfolios/web/B1.png",
                    "resources/img/portfolios/web/B2.png",
                    "resources/img/portfolios/web/B3.png",
                    "resources/img/portfolios/web/B4.png",
                    "resources/img/portfolios/web/B5.png",
                    "resources/img/portfolios/web/B6.png",
                    "resources/img/portfolios/web/B7.png",
                    "resources/img/portfolios/web/B8.png",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg"
                ];
            } else if (title === "IPL Data Analysis") {
                data.project_brief = "This project analyzes IPL cricket match data using Python and visualizations.";
                data.project_date = "2024";
                data.project_client = "Sports Analytics Club";
                data.project_link = "www.ipldataanalysis.com";
                data.image = [
                    "resources/img/portfolios/web/C1.png",
                    "resources/img/portfolios/web/C2.png",
                    "resources/img/portfolios/web/C3.png",
                    "resources/img/portfolios/web/C4.png",
                    "resources/img/portfolios/web/C5.png",
                    "resources/img/portfolios/web/C6.png",
                    "resources/img/portfolios/web/C7.png",
                    "resources/img/portfolios/web/C8.png",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg"
                ];
            } else if (title === "Music App") {
                data.project_brief = "A mobile application to stream and download music in different genres.";
                data.project_date = "2024";
                data.project_client = "TuneWave Inc.";
                data.project_link = "www.musicapp.com";
                data.image = [
                    "resources/img/portfolios/app/A1.jpg",
                    "resources/img/portfolios/app/A2.jpg",
                    "resources/img/portfolios/app/A3.jpg",
                    "resources/img/portfolios/app/A4.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg",
                    "resources/img/web_design.jpg"
                ];
            }

            portfolioView(data);
        });
    });
});
