# What’s the Hazard?

A portable, static website for GitHub Pages. The site name is **What’s the Hazard?**, with proposed domain `whatsthehazard.com.au`. It includes the September 2026 v2 report (16 pages, 27 linked references), a Q&A page addressing 13 strong objections, a practical Australian air-quality and fire-information directory, an editorial illustration and browser icons.

There is no installation, build command, JavaScript, external font service or analytics service. Open `index.html` in a browser to preview it. All local assets use relative paths, so the same files work at `https://jollyonair.github.io/whatsthehazard/` or a custom domain.

## Publish on GitHub Pages

1. Unzip the download and open a terminal **inside the `whatsthehazard-site` folder**, where `index.html` is located.
2. Your repository is [jollyonair/whatsthehazard](https://github.com/jollyonair/whatsthehazard). It was confirmed empty during preparation. This ZIP contains source files ready for that repository; it contains no Git history.
3. Run these commands inside the extracted folder (the folder containing `index.html`):

```sh
git init
git add .
git commit -m "Publish website, Q&A and v2 report"
git branch -M main
git remote add origin https://github.com/jollyonair/whatsthehazard.git
git push -u origin main
```

GitHub may ask you to authenticate. Use your normal Git credential manager, GitHub CLI login, or SSH setup; do not put a token or password inside this folder. If Git asks for your author name and email, configure them before committing. GitHub provides a private no-reply email address in account Settings → Emails if you prefer to use that in public commits.

4. In the repository, choose **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select **main** and **/(root)**, then click **Save**.
7. Wait for the Pages deployment to finish. The expected address is `https://jollyonair.github.io/whatsthehazard/`; the Pages settings screen will show the published URL. The site has not been pushed or published from this download.
8. Visit the live site. Check the navigation, Q&A expansion, state/territory directory, one evidence source and the PDF links. If there is a deployment problem, check the repository's **Actions** tab for the Pages build result.

Official instructions: [Configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

### Alternative: upload without Git

GitHub's repository file-upload interface can also publish these static files. Upload all extracted files and folders, including `index.html`, `air-quality.html`, `questions.html`, `styles.css`, the icon files, `assets` and `reports`. Keep them at the repository root. Then enable Pages as described above. The terminal method above also includes the `.nojekyll` file automatically. Push the extracted website files rather than the ZIP itself.

## Add a custom domain later

First make sure the default GitHub Pages URL works. The proposed domain is `whatsthehazard.com.au`. Once registered and under your control, configure it in the repository's **Settings → Pages → Custom domain**, following GitHub's current DNS instructions. Domain ownership, verification and DNS values depend on whether you use an apex domain or a subdomain. No domain has been registered, checked for availability or configured in this download.

[GitHub's custom-domain guidance](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Edit and update

- `index.html`: name, navigation, page copy and source links.
- `air-quality.html`: monitoring, fire warnings, planned-burning information and smoke health resources.
- `questions.html`: arguments supporting HRB, evidence-based responses and limits, with source links.
- `styles.css`: colours, spacing, typography and mobile/print layouts.
- `favicon.svg` and `favicon.ico`: question-mark browser icons.
- `assets/favicon-32.png` and `assets/apple-touch-icon.png`: PNG icon versions.
- `assets/bushland-illustration.webp`: compressed website illustration.
- `assets/bushland-illustration.png`: original illustration for reuse.
- `ASSETS.md`: image prompt and icon details.
- `reports/hazard-reduction-burning-v2.pdf`: the downloadable report.
- `.nojekyll`: tells GitHub Pages to serve the static files without Jekyll processing. Keep it.

After editing, open `index.html` locally to check the result, then:

```sh
git add .
git commit -m "Update website"
git push
```

When you replace the report, also update its version, date, page count, reference count and file size in `index.html`. Keep any new report filename and both page links in agreement.

## Editorial scope

The site presents a targeted evidence review, not a systematic review or a reanalysis of raw data. The public report does not identify the user's personal example. Commissioned economic reports are distinguished from academic research funding. In the Deloitte document, CBA means cost–benefit analysis; it is not evidence of a Commonwealth Bank funding connection. The site makes no claim that a national net harm, hidden sponsorship or astroturfing has been established.

The PDF provides fuller references, methods and limitations. Check new evidence before extending the findings to other regions or programs. No claim of affiliation with a research institute, emergency agency or government is made by this website.

The air-quality page links to providers instead of importing readings or warnings. It is a directory, not a live alert service. Resources cover every state and territory, plus IQAir, WAQI/AQICN and AirRater. Monitoring coverage varies. NSW Health is cited for the short health guidance and contact numbers. The SA EPA and WA DWER destinations were identified in public search results but blocked automated retrieval (HTTP 403); check those links manually when publishing, along with the other external services. Dynamic maps may need JavaScript on the provider's own site. Review directory links periodically and update the review date after checking them.
