(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/content_script.ts.a2a851bd.js")
    );
  })().catch(console.error);

})();
