# What’s the Hazard?

A portable static website for [jollyonair/whatsthehazard](https://github.com/jollyonair/whatsthehazard), published through GitHub Pages. It includes the September 2026 evidence report (16 pages, 27 linked references), a Q&A, Australian air-quality resources, a research directory and practical ways to request an independent review.

## Apply this update

The `whatsthehazard-domain-update.zip` archive contains nine changed/new files at repository-relative paths, with no enclosing website folder. Open a terminal inside your existing Git repository and run:

```sh
git pull --ff-only
unzip -o ~/Downloads/whatsthehazard-domain-update.zip -d .
git add index.html air-quality.html questions.html research.html act.html updates.html site.js README.md CNAME
git commit -m "Use whatsthehazard.org as the website domain"
git push
```

Pull first to include any CNAME commit created through GitHub Pages settings. The download contains the six pages, sharing script, this README and CNAME. Existing assets, styles and the report are retained. This download has not been pushed to GitHub.

The full `whatsthehazard-website.zip` archive includes all assets and the report, also at repository-relative paths. Keep `index.html` at the repository root.

GitHub Pages should remain configured to deploy from `main` and `/(root)`. Check the Actions tab if its build fails. [Official publishing-source guidance](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Files

- `index.html`: summary, evidence, commissioning and the short request banner.
- `act.html`: seven practical requests, official MP resources and an editable email draft.
- `research.html`: all 27 report references, seven additional readings and researcher records.
- `questions.html`: strong objections, responses and limitations.
- `air-quality.html`: official monitoring and fire information for all states and territories, plus independent services.
- `updates.html`: report date, website changes and resource-review dates.
- `site.js`: optional native sharing, clipboard and email-draft enhancements.
- `CNAME`: GitHub Pages custom domain, `whatsthehazard.org`.
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

Native sharing is used where available; otherwise the page link can be copied. If clipboard access is unavailable or rejected, the link or draft is selected for manual copying. Email sharing and a visible link remain available without JavaScript. Cancellation does not claim that a message was sent. Shared URLs omit query strings and fragments. Shared page links and MP drafts use `https://whatsthehazard.org/`, including during local preview or visits through an older address. Each page has its own canonical address and Open Graph URL. Relative asset and navigation paths continue to work locally.

Relevant API documentation: [native sharing](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share), [clipboard writing](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText).

## Dates and editorial scope

Change the website date only after making an update. Record substantive changes in `updates.html`; record resource checks separately from evidence changes. A new website date does not assert that all external links or papers have been checked again. Provider timestamps remain authoritative for readings and warnings.

The report is a targeted evidence review, not a systematic review or a national calculation of net benefit or harm. The directory includes supporting findings, critical evidence and published disagreement. Sources are labelled by type and geographic scope. Researcher and organisation links imply no endorsement or affiliation. Additional readings do not change the report’s bibliography.

Commissioned economic reports and academic funding disclosures are distinguished. CBA in Deloitte’s study means cost–benefit analysis. Documented assumptions, omissions and commissioning warrant public scrutiny; this website does not claim that hidden campaigning or a Commonwealth Bank funding connection has been established. The public report contains no identifying personal example.

## Custom domain

The purchased domain is `whatsthehazard.org`. The root CNAME file contains this name. In GitHub Settings → Pages → Custom domain, save the same domain. VentraIP DNS Hosting should have four root A records (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and a `www` CNAME pointing to `jollyonair.github.io`.

GitHub handles TLS certificate issuance and renewal. Enable Enforce HTTPS when the DNS check and certificate provisioning finish. Website file changes do not make DNS propagation or certificate issuance complete. See [GitHub’s custom-domain guidance](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
