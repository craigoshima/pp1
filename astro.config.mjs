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
        "/en/announcement":
            "https://professionalsplatform.org/media/2026-07-23/English-PP-23-July-2026.pdf",
        "/es/announcement":
            "https://professionalsplatform.org/media/2026-07-23/Espanol-PP-23-julio-2026.pdf",
        "/fr/announcement":
            "https://professionalsplatform.org/media/2026-07-23/Francais-PP-23-juillet-2026.pdf",
        "/en/faq":
            "https://professionalsplatform.org/media/faq/Professionals_Platform_FAQ-en.docx",
        "/es/faq":
            "https://professionalsplatform.org/media/faq/Professionals_Platform_FAQ-es.docx",
        "/fr/faq":
            "https://professionalsplatform.org/media/faq/Professionals_Platform_FAQ-fr.docx",
        "/letter":
            "https://professionalsplatform.org/media/English%20Steering%20Committee-FNLetter.pdf",
        "/en/letter":
            "https://professionalsplatform.org/media/English%20Steering%20Committee-FNLetter.pdf",
        "/es/letter":
            "https://professionalsplatform.org/media/Spanish%20Steering%20Committee-FNLetter.pdf",
        "/fr/letter":
            "https://professionalsplatform.org/media/French%20Steering%20Committee-FNLetter.pdf",
        "/flyer":
            "https://professionalsplatform.org/media/2026-27%20PP%20Launch%20English-FN.pdf",
        "/en/flyer":
            "https://professionalsplatform.org/media/2026-27%20PP%20Launch%20English-FN.pdf",
        "/es/flyer":
            "https://professionalsplatform.org/media/2026-27%20PP%20Launch%20Spanish-FN.pdf",
        "/fr/flyer":
            "https://professionalsplatform.org/media/2026-27%20PP%20Launch%20French-FN.pdf",
    },
})
