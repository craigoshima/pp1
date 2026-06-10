/**
 * Changes the given pathname to the given locale. It assumes "en" is
 * the default locale and is removed from the localizedPath.
 * TODO: validate against locales and defaultLocale from Astro config
 *
 * @param pathname the path to localize
 * @param locale "en", "es", "fr"
 */
export function localizePath(pathname: string, locale: string) {
    const locales = ["es", "fr"]
    const parts = pathname.split("/").filter(Boolean)
    // console.log("LOCAALIZE")
    // console.log(pathname)
    // console.log(parts)

    // If the first part is one of the locales, change it to the new locale
    if (parts.length && locales.includes(parts[0])) {
        parts[0] = locale
    } else {
        parts.unshift(locale)
    }

    let localizedPath = `/${parts.join("/")}/`
    // If new location is "en", strip it from the path
    if (locale === "en") {
        // localizedPath = localizedPath.replace(`/${defaultLocale}`, "")
        localizedPath = localizedPath.replace("/en", "")
    }

    return localizedPath
}

/**
 * Strips a locale from the given pathname. Useful to facilitate comparisons
 * @param pathname the path to de-localize
 */
export function stripLocaleFromPath(pathname: string) {
    const locales = ["en", "es", "fr"]
    const parts = pathname.split("/").filter(Boolean)
console.log("path parts: ", parts)
}
