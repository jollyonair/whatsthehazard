'use strict';
(() => {
  const defaultHome = 'https://whatsthehazard.org/';
  const home = defaultHome;
  const current = new URL(location.pathname.split('/').pop() || './', home);
  current.search = ''; current.hash = '';
  if (current.pathname.endsWith('/index.html')) current.pathname = current.pathname.slice(0, -10);
  const pageUrl = current.href;
  const shareText = 'A plain-English briefing on hazard reduction burning: protection, smoke, ecology and public costs.';
  const status = document.querySelector('#share-status');
  const urlField = document.querySelector('[data-share-url]');
  const say = message => { if (status) status.textContent = message; };
  if (urlField) urlField.value = pageUrl;
  document.querySelectorAll('[data-share-email]').forEach(a => {
    a.href = 'mailto:?subject=' + encodeURIComponent('What’s the Hazard? — read the evidence') + '&body=' + encodeURIComponent(shareText + '\n\n' + pageUrl);
  });
  async function copy(text, field, notify, success) {
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text);
      notify(success);
    } catch (_) {
      if (field) { field.focus(); field.select(); }
      notify('Text selected. Use your device’s Copy command, or Ctrl+C / Command+C.');
    }
  }
  document.querySelectorAll('[data-copy-link]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => copy(pageUrl, urlField, say, 'Page link copied.'));
  });
  document.querySelectorAll('[data-share]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', async () => {
      if (typeof navigator.share !== 'function') { await copy(pageUrl, urlField, say, 'Page link copied. Share it in your preferred app.'); return; }
      button.disabled = true;
      try {
        await navigator.share({title: document.title, text: shareText, url: pageUrl});
        say('Sharing options opened.');
      } catch (error) {
        if (error.name === 'AbortError') say('Sharing cancelled.');
        else await copy(pageUrl, urlField, say, 'Page link copied. Share it in your preferred app.');
      } finally { button.disabled = false; }
    });
  });
  const recipient = document.querySelector('#mp-email');
  const subject = document.querySelector('#email-subject');
  const body = document.querySelector('#email-body');
  const emailLink = document.querySelector('#email-link');
  const draftStatus = document.querySelector('#draft-status');
  if (recipient && subject && body && emailLink) {
    body.value = body.value.replace(defaultHome, home);
    const update = () => {
      const to = encodeURIComponent(recipient.value.trim()).replace(/%40/g, '@');
      emailLink.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject.value) + '&body=' + encodeURIComponent(body.value);
    };
    [recipient, subject, body].forEach(field => field.addEventListener('input', update));
    update();
    emailLink.addEventListener('click', event => {
      if (!recipient.reportValidity()) event.preventDefault();
    });
    const copyDraft = document.querySelector('#copy-draft');
    if (copyDraft) {
      copyDraft.hidden = false;
      copyDraft.addEventListener('click', () => copy('Subject: ' + subject.value + '\n\n' + body.value, body, message => {
        draftStatus.textContent = message;
      }, 'Draft copied. Add it to your email app or the office’s contact form.'));
    }
  }
})();
