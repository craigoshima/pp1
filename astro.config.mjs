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
        "/letter-en":
            "https://professionalsplatform.org/media/English%20Steering%20Committee-FNLetter.pdf",
        "/letter-es":
            "https://professionalsplatform.org/media/Spanish%20Steering%20Committee-FNLetter.pdf",
        "/letter-fr":
            "https://professionalsplatform.org/media/French%20Steering%20Committee-FNLetter.pdf",
        "/flyer-en":
            "https://professionalsplatform.org/media/2026-27%20PP%20Launch%20English-FN.pdf",
        "/flyer-es":
            "https://professionalsplatform.org/media/2026-27%20PP%20Launch%20Spanish-FN.pdf",
        "/flyer-fr":
            "https://professionalsplatform.org/media/2026-27%20PP%20Launch%20French-FN.pdf",
    },
})
