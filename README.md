# What’s the Hazard?

A portable static website for [jollyonair/whatsthehazard](https://github.com/jollyonair/whatsthehazard), published through GitHub Pages. It includes the September 2026 evidence report (16 pages, 27 linked references), a Q&A, Australian air-quality resources, a research directory and practical ways to request an independent review.

## Apply this update

The `whatsthehazard-action-update.zip` archive contains ten changed/new files directly at the correct repository paths. It has no enclosing website folder. Open a terminal inside your existing Git repository and run:

```sh
unzip -o ~/Downloads/whatsthehazard-action-update.zip -d .
git rm --ignore-unmatch reports/hazard-reduction-burning-v2.pdf
git add index.html air-quality.html questions.html research.html act.html updates.html styles.css site.js README.md reports/hazard-reduction-burning.pdf
git commit -m "Add review request, MP tools and sharing; clean report naming"
git push
```

Use ordinary extraction, without `-j`: the PDF belongs inside `reports`. The obsolete working-name PDF is removed by the `git rm` command. The report’s content and source links are unchanged. Matching website files are replaced; existing Git history, settings and any custom-domain configuration are retained. This download has not been pushed to GitHub.

The full `whatsthehazard-website.zip` archive also places files directly at repository paths and includes all assets. Use it for a fresh copy; use the smaller action-update archive for the published repository. Keep `index.html` at the repository root.

GitHub Pages should remain configured to deploy from `main` and `/(root)`. Check the Actions tab if its build fails. [Official publishing-source guidance](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Files

- `index.html`: summary, evidence, commissioning and the short request banner.
- `act.html`: seven practical requests, official MP resources and an editable email draft.
- `research.html`: all 27 report references, seven additional readings and researcher records.
- `questions.html`: strong objections, responses and limitations.
- `air-quality.html`: official monitoring and fire information for all states and territories, plus independent services.
- `updates.html`: report date, website changes and resource-review dates.
- `site.js`: optional native sharing, clipboard and email-draft enhancements.
- `styles.css`: responsive and print layouts.
- `reports/hazard-reduction-burning.pdf`: the report’s permanent filename.
- `assets`, icons and `ASSETS.md`: illustration, favicon assets and provenance.
- `.nojekyll`: enables direct static-file serving through GitHub Pages.

There is no installation or build step, external font service, backend, analytics or third-party script. Open `index.html` to preview the site locally. Relative paths work at the GitHub Pages project URL or a custom domain.

## Requests and email

The seven website requests unpack the five grouped recommendations in the report: its independent comparison separates strategy comparison from complete accounting, and its habitat/alternatives recommendation separates ecological recovery from trials and household support. No additional substantive recommendation is attributed to the PDF.

Readers choose an office through official electorate and member resources. The recipient email field is optional; a blank address opens a draft so the reader can add it in their email app. The editable subject and body are encoded into the mailto link. Sending is handled by the reader’s email app, not this website. The page does not transmit or store their message or recipient address. With JavaScript disabled, readers can copy the draft manually; the email link opens the original template.

The AEC finder warns about changing boundaries and overlapping postcodes. Readers should confirm the current representative. Queensland and WA Parliament pages and the federal member directory restricted automated retrieval during preparation; they remain linked as official resources. Confirm office contact details at the provider.

## Sharing

Native sharing is used where available; otherwise the page link can be copied. If clipboard access is unavailable or rejected, the link or draft is selected for manual copying. Email sharing and a visible link remain available without JavaScript. Cancellation does not claim that a message was sent. Shared URLs omit query strings and fragments. Live pages use their own host, so a later custom domain works automatically; local previews use the published GitHub Pages URL.

Relevant API documentation: [native sharing](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share), [clipboard writing](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText).

## Dates and editorial scope

Change the website date only after making an update. Record substantive changes in `updates.html`; record resource checks separately from evidence changes. A new website date does not assert that all external links or papers have been checked again. Provider timestamps remain authoritative for readings and warnings.

The report is a targeted evidence review, not a systematic review or a national calculation of net benefit or harm. The directory includes supporting findings, critical evidence and published disagreement. Sources are labelled by type and geographic scope. Researcher and organisation links imply no endorsement or affiliation. Additional readings do not change the report’s bibliography.

Commissioned economic reports and academic funding disclosures are distinguished. CBA in Deloitte’s study means cost–benefit analysis. Documented assumptions, omissions and commissioning warrant public scrutiny; this website does not claim that hidden campaigning or a Commonwealth Bank funding connection has been established. The public report contains no identifying personal example.

## Custom domain

The proposed domain is `whatsthehazard.com.au`. Once registered and under your control, configure it in Settings → Pages → Custom domain using [GitHub’s official DNS guidance](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). This update does not change domain settings.
