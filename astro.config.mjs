// @ts-check
import { defineConfig, passthroughImageService } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
    site: "https://craigoshima.github.io",

    vite: {
        plugins: [tailwindcss()],
    },

    i18n: {
        locales: ["en", "es", "fr"],
        defaultLocale: "en",
    },

    image: {
        service: passthroughImageService(),
    },

    redirects: {
        "/session": "https://professionalsplatform.org/sessions/2026-10",
        "/es/session": "https://professionalsplatform.org/es/sessions/2026-10",
        "/fr/session": "https://professionalsplatform.org/fr/sessions/2026-10",

        "/announcement":
            "https://professionalsplatform.org/media/2026-10-22/PP-22-October-2026-Announcement-English.jpg",
        "/en/announcement":
            "https://professionalsplatform.org/media/2026-10-22/PP-22-October-2026-Announcement-English.jpg",
        "/es/announcement":
            "https://professionalsplatform.org/media/2026-10-22/PP-22-de-octubre-de-2026-Anuncio-Espanol.jpg",
        "/fr/announcement":
            "https://professionalsplatform.org/media/2026-10-22/PP-22-octobre-2026-Annonce-Francais.jpg",
        "/faq": "https://professionalsplatform.org/media/faq/Professionals_Platform_FAQ-en.docx",
        "/en/faq":
            "https://professionalsplatform.org/media/faq/Professionals_Platform_FAQ-en.docx",
        "/es/faq":
            "https://professionalsplatform.org/media/faq/Professionals_Platform_FAQ-es.docx",
        "/fr/faq":
            "https://professionalsplatform.org/media/faq/Professionals_Platform_FAQ-fr.docx",
        "/letter":
            "https://professionalsplatform.org/media/2026-07-23/English23JulyLTR.pdf",
        "/en/letter":
            "https://professionalsplatform.org/media/2026-07-23/Professionals_Platform_23_July_Reminder_Letter_ENGLISH.pdf",
        "/es/letter":
            "https://professionalsplatform.org/media/2026-07-23/Professionals_Platform_23_July_Reminder_Letter_SPANISH.pdf",
        "/fr/letter":
            "https://professionalsplatform.org/media/2026-07-23/Professionals_Platform_23_July_Reminder_Letter_FRENCH.pdf",
    },
})
