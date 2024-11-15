document.getElementById("url").innerHTML = window.location.href;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has("id")) {
  replaceUrl("id");
}

if (urlParams.has("ws")) {
  replaceUrl("ws");
}

if (!urlParams.has("id") && !urlParams.has("ws")) alert(window.location.href);

function replaceUrl(params) {
  urlParams.delete(params);
  const newUrl = `${window.location.origin}${
    window.location.pathname
  }?${urlParams.toString()}`;
  console.log(newUrl);
  alert(newUrl);
  location.replace(newUrl);
}
