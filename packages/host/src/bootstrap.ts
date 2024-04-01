function loadScript(url, callback) {
  var script = document.createElement('script') as any;
  script.type = 'text/javascript';
  if (script.readyState) {
    // only required for IE <9
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others
    script.onload = function () {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

// loadScript('http://localhost:4171/remoteEntry.js', () => {
  import('./index');
// });
