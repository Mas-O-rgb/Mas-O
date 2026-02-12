// c:\Users\OKAY\Documents\Project WEB\Mas-O\loadComponents.js
document.addEventListener("DOMContentLoaded", () => {
  const loadComponent = async (selector, url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to load ${url}: ${response.statusText}`);
      const data = await response.text();
      const container = document.querySelector(selector);
      if (container) {
        container.innerHTML = data;

        // Jika berada di dalam folder 'jv', sesuaikan path relatif (src dan href) agar mengarah ke root
        if (window.location.pathname.includes('/jv/')) {
          const fixPath = (el, attr) => {
            const val = el.getAttribute(attr);
            if (val && !val.startsWith('http') && !val.startsWith('/') && !val.startsWith('#') && !val.startsWith('mailto:')) {
              el.setAttribute(attr, '../' + val);
            }
          };
          container.querySelectorAll('[src]').forEach(el => fixPath(el, 'src'));
          container.querySelectorAll('[href]').forEach(el => fixPath(el, 'href'));
        }

        // Menjalankan skrip yang ada di dalam file yang dimuat
        Array.from(container.getElementsByTagName("script")).forEach(oldScript => {
          const newScript = document.createElement("script");
          Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
          newScript.appendChild(document.createTextNode(oldScript.innerHTML));
          oldScript.parentNode.replaceChild(newScript, oldScript);
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Tentukan path prefix berdasarkan lokasi file (jika di dalam folder 'jv', gunakan '../')
  const pathPrefix = window.location.pathname.includes('/jv/') ? '../' : './';

  // Memuat header dan footer ke dalam container masing-masing
  loadComponent('#header-container', pathPrefix + 'header_footer/header.html');
  loadComponent('#footer-container', pathPrefix + 'header_footer/footer.html');
});