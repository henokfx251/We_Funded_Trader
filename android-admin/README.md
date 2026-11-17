# WFT Admin Android App

A lightweight Android WebView app for the existing WFT Admin Dashboard.

- Opens only the existing HTTPS Admin Dashboard: https://we-funded-trader.pages.dev/admin.html
- Keeps authentication and dashboard logic on the existing website.
- Does not change customer pages, Supabase data, terminal code, or admin dashboard source.
- External links open in the Android browser.
- File selection is enabled for existing dashboard upload controls.

Build:
`gradle --no-daemon :app:assembleRelease`

APK output:
`app/build/outputs/apk/release/app-release-unsigned.apk`
