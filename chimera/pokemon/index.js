const siteRegex = new RegExp(`^${window.location.protocol}//${window.location.host}`);
let dummy = document.createElement('html');

const getPage = async (u, e) => {
  const url = new URL(u);
  if (`${url.protocol}//${url.host}`.match(siteRegex)) {
    if (e.type === 'click') {
      e.preventDefault();
    }
    const request = await fetch(url.href);
    dummy.innerHTML = await request.text();
    document.querySelector('main').innerHTML = dummy.querySelector('main').innerHTML;
    dummy.querySelectorAll('main script').forEach((item) => {
      const resource = item.getAttribute('src');
      const newScript = document.createElement('script');
      if (resource) {
        newScript.setAttribute('src', resource);
      }
      newScript.setAttribute('type', item.getAttribute('type'));
      newScript.innerHTML = item.innerHTML;
      document.querySelector('body').append(newScript);
      item.remove();
    });
  }
}

const routingInit = async () => {
  document.addEventListener('click', async (e) => {
    const link = e.target.closest('a');
    const url = new URL(link.href);
    if (link.target !== '_blank') {
      getPage(url, e);
      window.history.pushState( {} , dummy.querySelector('title').text, url.pathname);
    }
  });

  window.addEventListener('popstate', async (e) => {
    const url = new URL(document.location);
    getPage(url, e);
  });
}

routingInit();