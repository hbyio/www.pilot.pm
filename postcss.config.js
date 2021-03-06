let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || "./tailwind.config.js"
const tailwindcss = require("tailwindcss")(tailwindConfig)
const autoprefixer = require("autoprefixer")

module.exports = {
    // eslint-disable-next-line no-process-env
    plugins: [
        tailwindcss,
        ...(process.env.HUGO_ENVIRONMENT === "production" ? [autoprefixer] : []),
    ],
}
