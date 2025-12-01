// Порядок языков: RU → SV → EN → снова RU
const order = ["ru", "sv", "en"];
let currentIndex = 0;

const translations = {
    ru: {
        code: "RU",
        languagesLine: "Русский · Шведский · Английский",
        description:
            "Наращивание ресниц — классика, 2D–6D, лисий/кукольный эффект.<br>" +
            "Аккуратная работа, комфортная процедура, премиум-материалы.<br>" +
            "Коррекция, снятие, ламинирование ресниц.",
        location: "Стокгольм / Уппландс-Бро",
        instagram: "Instagram • Записаться",
        whatsapp: "WhatsApp • Написать"
    },
    sv: {
        code: "SV",
        languagesLine: "Ryska · Svenska · Engelska",
        description:
            "Fransförlängning – klassisk, 2D–6D, fox/doll-effekt.<br>" +
            "Noggrant arbete, bekväm behandling, premium-material.<br>" +
            "Påfyllning, borttagning, lashlift.",
        location: "Stockholm / Upplands-Bro",
        instagram: "Instagram • Boka tid",
        whatsapp: "WhatsApp • Skriv"
    },
    en: {
        code: "EN",
        languagesLine: "Russian · Swedish · English",
        description:
            "Eyelash extensions – classic, 2D–6D, fox/doll effect.<br>" +
            "Precise work, comfortable treatment, premium materials.<br>" +
            "Refill, removal, lashlift.",
        location: "Stockholm / Upplands-Bro",
        instagram: "Instagram • Book now",
        whatsapp: "WhatsApp • Message"
    }
};

const langToggle = document.getElementById("langToggle");
const langCode = document.getElementById("langCode");
const languagesLine = document.getElementById("languagesLine");
const description = document.getElementById("description");
const locationText = document.getElementById("locationText");
const instagramBtn = document.getElementById("instagramBtn");
const whatsappBtn = document.getElementById("whatsappBtn");

function applyLanguage(langKey) {
    const t = translations[langKey];

    langCode.textContent = t.code;
    languagesLine.textContent = t.languagesLine;
    description.innerHTML = t.description;
    locationText.textContent = t.location;
    instagramBtn.textContent = t.instagram;
    whatsappBtn.textContent = t.whatsapp;
}

// Переключение языка по нажатию
langToggle.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % order.length;
    const langKey = order[currentIndex];
    applyLanguage(langKey);
});

// начальный язык – русский
applyLanguage("ru");
