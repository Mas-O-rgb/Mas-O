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

  // Memuat header dan footer ke dalam container masing-masing
  loadComponent('#header-container', './header_footer/header.html');
  loadComponent('#footer-container', './header_footer/footer.html');
});