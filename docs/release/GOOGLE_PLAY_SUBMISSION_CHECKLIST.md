# Google Play Submission Checklist (Current State)

## Done
- Expo Android config declares package `com.tixpy.poolsteward`, and adaptive icon (mobile/app.json).
- Pool Steward should be registered as its own EAS project (new projectId) before attempting store builds.
- Local `android` folder generated via `npx expo prebuild --platform android` to mirror EAS native build layout (mobile/android/*), with a vendored `expo-module-gradle-plugin` wired in via `settings.gradle`.
- Launcher, Play Store, and feature graphic assets live in `mobile/assets/` and match Play size requirements.
- Privacy and support URLs are published at `https://tompinataro.github.io/Pool-Steward/privacy` and `/support`.
- App metadata draft (`docs/release/APP_STORE_METADATA.md`) covers descriptions, keywords, and review notes you can reuse in Play Console.
- Data safety answers prepared in `docs/release/APP_PRIVACY.md` and export compliance notes in `docs/release/COMPLIANCE_CHECKLIST.md`.

## Next Actions

### Credentials and Environment
- [ ] Create/locate a Google Play service account key with release manager access; download the JSON.
- [ ] Store the JSON securely and set `GOOGLE_SERVICE_ACCOUNT_JSON` (or `GOOGLE_SERVICE_ACCOUNT_JSON_PATH`) before running submission commands.
- [ ] Ensure `expo login` (or `EXPO_TOKEN`) is active on the machine/CI that will run the build.

### Build & Submit
- [ ] From `mobile/`, run `npm run build:android:prod` and confirm the build summary shows package `com.tixpy.poolsteward`.
- [ ] After the build finishes, run `npm run submit:android:latest` (or upload the `.aab` manually if preferred).

### Play Console Prep
- [ ] Create or verify the app record in Play Console with package `com.tixpy.poolsteward`.
- [ ] Populate store listing text, icons, feature graphic, and screenshots using the repo docs above.
- [ ] Complete App Content: data safety questionnaire (match `APP_PRIVACY`), privacy policy URL, content rating, ads (No), news declarations if applicable.
- [ ] Add an internal testing list (Google Groups or email list) and save an initial release.

### Testing and Rollout
- [ ] Install the internal build from the Play link; run the Route List → Visit → Submit smoke test.
- [ ] Promote the same build to Closed/Open testing or Production once validation passes, updating release notes and country availability.

## Reminders
- Keep versionCode in sync with `app.json` each release (increment per Play upload).
- Rotate the service account key periodically and update any CI secrets.
- Use `.env` or EAS profile env vars if you need staging vs production API targets per build.
- If a production build fails during Gradle, pull the `Run gradlew` log from the EAS build page to diagnose before retrying.
