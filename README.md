# What’s the Hazard?

A portable, static website for GitHub Pages. The site name is **What’s the Hazard?**, with proposed domain `whatsthehazard.com.au`. It includes the September 2026 v2 report (16 pages, 27 linked references), a Q&A page addressing 13 strong objections, a research directory linking all 27 report references and seven additional readings, a practical Australian air-quality and fire-information directory, an editorial illustration and browser icons.

There is no installation, build command, JavaScript, external font service or analytics service. Open `index.html` in a browser to preview it. All local assets use relative paths, so the same files work at `https://jollyonair.github.io/whatsthehazard/` or a custom domain.

## Update the published website

The website has been published in [jollyonair/whatsthehazard](https://github.com/jollyonair/whatsthehazard). This download contains source files; it contains no Git history.

Copy the **contents** of the extracted `whatsthehazard-site` folder into your existing local repository, where `index.html` already lives. Replace the matching files and add `research.html`. Keep your existing Git history, repository settings and any custom-domain configuration. Do not nest the extracted folder inside the repository.

The smaller research-update ZIP contains only six changed/new files: `research.html`, `index.html`, `questions.html`, `air-quality.html`, `styles.css` and this README. The v2 PDF and image assets are unchanged.

From your existing repository folder:

```sh
git status
git add research.html index.html questions.html air-quality.html styles.css README.md
git commit -m "Add linked research directory and further assessment questions"
git push
```

GitHub Pages will rebuild from your existing publishing branch. Check the Research link on all four pages, the bibliography and the PDF. Check the repository's Actions tab if the deployment fails. No update has been pushed from this download.

## Publish a fresh copy on GitHub Pages

1. Unzip the download and open a terminal **inside the `whatsthehazard-site` folder**, where `index.html` is located.
2. Use this initialisation workflow only for an empty repository. To update the existing published repository, use the instructions above.
3. Run these commands inside the extracted folder (the folder containing `index.html`):

```sh
git init
git add .
git commit -m "Publish website, research directory, Q&A and v2 report"
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

GitHub's repository file-upload interface can also publish these static files. Upload all extracted files and folders, including `index.html`, `air-quality.html`, `questions.html`, `research.html`, `styles.css`, the icon files, `assets` and `reports`. Keep them at the repository root. Then enable Pages as described above. The terminal method above also includes the `.nojekyll` file automatically. Push the extracted website files rather than the ZIP itself.

## Add a custom domain later

First make sure the default GitHub Pages URL works. The proposed domain is `whatsthehazard.com.au`. Once registered and under your control, configure it in the repository's **Settings → Pages → Custom domain**, following GitHub's current DNS instructions. Domain ownership, verification and DNS values depend on whether you use an apex domain or a subdomain. No domain has been registered, checked for availability or configured in this download.

[GitHub's custom-domain guidance](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Edit and update

- `index.html`: name, navigation, page copy and source links.
- `air-quality.html`: monitoring, fire warnings, planned-burning information and smoke health resources.
- `questions.html`: arguments supporting HRB, evidence-based responses and limits, with source links.
- `research.html`: all 27 v2 references, seven additional readings, public explanations, researcher profiles and six questions for fuller assessment.
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

The research directory is a selected reading guide, not a systematic or exhaustive bibliography. Original v2 reference numbers are preserved and all 27 references appear once in the directory. Additional readings are labelled separately and do not change the v2 PDF. Papers, agency guidance, commissioned reports, perspectives and professional responses have different purposes; each is labelled. Inclusion of a researcher or organisation does not imply endorsement. Water and carbon entries include mixed findings; broader assessment questions do not imply a quantified additional harm. Some publisher pages may need subscription access; repository records and author-uploaded papers are linked where identified. Access checks do not establish that every linked provider will remain available.

The air-quality page links to providers instead of importing readings or warnings. It is a directory, not a live alert service. Resources cover every state and territory, plus IQAir, WAQI/AQICN and AirRater. Monitoring coverage varies. NSW Health is cited for the short health guidance and contact numbers. The SA EPA and WA DWER destinations were identified in public search results but blocked automated retrieval (HTTP 403); check those links manually when publishing, along with the other external services. Dynamic maps may need JavaScript on the provider's own site. Review directory links periodically and update the review date after checking them.
