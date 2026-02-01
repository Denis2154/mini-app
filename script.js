const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.onclick = () => {
    modal.style.display = "flex";
};

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if(e.target == modal) {
        modal.style.display = "none";
    }
};

function openInstagram() {
    tg.openLink("https://www.instagram.com/aleksandrova.nails/?utm_source=qr&igsh=ZWIyZnVkOXd4ZHls#");
}

function openViber() {
    window.location.href = "viber://chat?number=%2B380636487522";
}
