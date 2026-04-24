// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
    site: "https://craigoshima.github.io",
    // base: "/pp1",

    vite: {
        plugins: [tailwindcss()],
    },

    redirects: {
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
