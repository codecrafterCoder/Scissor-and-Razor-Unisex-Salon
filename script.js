
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("bookingForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.querySelector('input[type="text"]').value;
            const phone = document.querySelector('input[type="tel"]').value;
            const service = document.querySelector('select').value;
            const date = document.querySelector('input[type="date"]').value;
            const time = document.querySelector('input[type="time"]').value;

            const message = `Hello Scissor & Razor Unisex Salon,

Name: ${name}
Phone: ${phone}
Service: ${service}
Date: ${date}
Time: ${time}

I would like to book an appointment.`;

            const whatsappURL = `https://wa.me/919156910999?text=${encodeURIComponent(message)}`;

            window.open(whatsappURL, "_blank");

        });

    }

    // Video Control
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        video.addEventListener("play", () => {
            videos.forEach(v => {
                if (v !== video) {
                    v.pause();
                }
                window.addEventListener("load", () => {
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        video.addEventListener("play", () => {
            videos.forEach(v => {
                if (v !== video) {
                    v.pause();
                    v.currentTime = 0;
                }
            });
        });
    });
});
            });
        });
    });

});

