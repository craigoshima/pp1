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
        "/announcement":
            "https://professionalsplatform.org/media/2026-07-23/English-PP-23-July-2026.pdf",
        "/en/announcement":
            "https://professionalsplatform.org/media/2026-07-23/English-PP-23-July-2026.pdf",
        "/es/announcement":
            "https://professionalsplatform.org/media/2026-07-23/Espanol-PP-23-julio-2026.pdf",
        "/fr/announcement":
            "https://professionalsplatform.org/media/2026-07-23/Francais-PP-23-juillet-2026.pdf",
        "/faq":
            "https://professionalsplatform.org/media/faq/Professionals_Platform_FAQ-en.docx",
        "/en/faq":
            "https://professionalsplatform.org/media/faq/Professionals_Platform_FAQ-en.docx",
        "/es/faq":
            "https://professionalsplatform.org/media/faq/Professionals_Platform_FAQ-es.docx",
        "/fr/faq":
            "https://professionalsplatform.org/media/faq/Professionals_Platform_FAQ-fr.docx",
        "/letter":
            "https://professionalsplatform.org/media/2026-07-23/English23JulyLTR.pdf",
        "/en/letter":
            "https://professionalsplatform.org/media/2026-07-23/English23JulyLTR.pdf",
        "/es/letter":
            "https://professionalsplatform.org/media/2026-07-23/Espanol23dejulioLTR.pdf",
        "/fr/letter":
            "https://professionalsplatform.org/media/2026-07-23/Francais23juilletLTR.pdf"
    },
})
