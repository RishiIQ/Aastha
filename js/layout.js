window.aasthaToast = function(title, message, type = 'success') {
  let existing = document.getElementById('aasthaToastModal');
  if (existing) existing.remove();

  const modalHtml = `
    <div id="aasthaToastModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn">
      <div class="aastha-card w-full max-w-md p-8 rounded-3xl shadow-2xl bg-white dark:bg-zinc-900 border border-amber-200 dark:border-zinc-800 text-center space-y-6 transform scale-100 transition-transform">
        <div class="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto text-2xl font-bold shadow-inner">
          ${type === 'success' ? '✨' : 'ℹ️'}
        </div>
        <div class="space-y-2">
          <h3 class="font-serif font-bold text-2xl uppercase tracking-tight text-zinc-900 dark:text-white">${title}</h3>
          <p class="text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-300 leading-relaxed">${message}</p>
        </div>
        <button onclick="document.getElementById('aasthaToastModal').remove()" class="aastha-btn w-full py-3.5 text-center cursor-pointer shadow-lg">Acknowledge & Close</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
};

window.aasthaLayout = {
  init() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    const headerHTML = `
     

      <header class="fixed top-1 left-0 w-full z-40 bg-white/90 dark:bg-[#14110f]/90 backdrop-blur-md border-b border-amber-200/50 dark:border-zinc-800 h-[78px] flex items-center px-6 transition-all">
        <div class="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-white shadow-md shrink-0">
              <img src="logo.png" class="w-full h-full object-cover" alt="Aastha Pooja Store Logo"/> 
            </div>
            <a href="index.html" class="font-serif font-bold text-2xl tracking-tight text-amber-900 dark:text-amber-400 no-underline leading-none">
              Aastha 
              <span class="block text-[0.55rem] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-sans font-semibold mt-0.5">Pooja Store</span>
            </a>
          </div>

          <nav class="hidden lg:flex items-center gap-6 text-sm font-bold uppercase tracking-wider">
            <!-- Home Dropdown -->
            <div class="relative group">
              <button class="flex items-center gap-1 transition-colors py-2 ${['index.html', 'saas.html'].includes(currentPath) ? 'text-amber-600 font-extrabold underline underline-offset-8' : 'hover:text-amber-600'}">
                Home 
                <svg class="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="absolute top-full left-0 w-48 bg-white dark:bg-zinc-900 border border-amber-200/50 dark:border-zinc-800 rounded-2xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <a href="index.html" class="block px-4 py-2.5 text-sm font-bold uppercase hover:bg-amber-50 dark:hover:bg-zinc-800 transition-colors ${currentPath === 'index.html' ? 'text-amber-600 bg-amber-50 dark:bg-zinc-800' : 'text-zinc-700 dark:text-zinc-300'}">Main Store Home</a>
                <a href="saas.html" class="block px-4 py-2.5 text-sm font-bold uppercase hover:bg-amber-50 dark:hover:bg-zinc-800 transition-colors ${currentPath === 'saas.html' ? 'text-amber-600 bg-amber-50 dark:bg-zinc-800' : 'text-zinc-700 dark:text-zinc-300'}">SaaS Dashboard</a>
              </div>
            </div>

            <!-- Shop & Festival Kits Dropdown -->
            <div class="relative group">
              <button class="flex items-center gap-1 transition-colors py-2 ${['shop.html', 'kits.html'].includes(currentPath) ? 'text-amber-600 font-extrabold underline underline-offset-8' : 'hover:text-amber-600'}">
                Shop
                <svg class="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="absolute top-full left-0 w-48 bg-white dark:bg-zinc-900 border border-amber-200/50 dark:border-zinc-800 rounded-2xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <a href="shop.html" class="block px-4 py-2.5 text-sm font-bold uppercase hover:bg-amber-50 dark:hover:bg-zinc-800 transition-colors ${currentPath === 'shop.html' ? 'text-amber-600 bg-amber-50 dark:bg-zinc-800' : 'text-zinc-700 dark:text-zinc-300'}">Browse Shop</a>
                <a href="kits.html" class="block px-4 py-2.5 text-sm font-bold uppercase hover:bg-amber-50 dark:hover:bg-zinc-800 transition-colors ${currentPath === 'kits.html' ? 'text-amber-600 bg-amber-50 dark:bg-zinc-800' : 'text-zinc-700 dark:text-zinc-300'}">Festival Kits</a>
              </div>
            </div>

            <a href="about.html" class="transition-colors ${currentPath === 'about.html' ? 'text-amber-600 font-extrabold underline underline-offset-8' : 'hover:text-amber-600'}">About Us</a>
            <a href="blog.html" class="transition-colors ${currentPath === 'blog.html' ? 'text-amber-600 font-extrabold underline underline-offset-8' : 'hover:text-amber-600'}">Blog</a>
            <a href="pricing.html" class="transition-colors ${currentPath === 'pricing.html' ? 'text-amber-600 font-extrabold underline underline-offset-8' : 'hover:text-amber-600'}">Pricing</a>
            <a href="calendar.html" class="transition-colors ${currentPath === 'calendar.html' ? 'text-amber-600 font-extrabold underline underline-offset-8' : 'hover:text-amber-600'}">2026 Tithi Calendar</a>
            <a href="contact.html" class="transition-colors ${currentPath === 'contact.html' ? 'text-amber-600 font-extrabold underline underline-offset-8' : 'hover:text-amber-600'}">Contact</a>
          </nav>

          <div class="flex items-center gap-3 text-sm font-bold uppercase">
            <button id="rtlToggle" class="hidden lg:inline-flex p-2.5 border border-amber-200 dark:border-zinc-700 rounded-xl text-amber-800 dark:text-amber-300 hover:border-amber-500 transition-colors cursor-pointer" title="Toggle RTL/LTR">
              <span id="rtlLabel" class="text-[0.6rem]">RTL</span>
            </button>
            <button id="themeToggle" class="hidden lg:inline-flex p-2.5 border border-amber-200 dark:border-zinc-700 rounded-xl text-amber-800 dark:text-amber-300 hover:border-amber-500 transition-colors cursor-pointer" title="Toggle Theme">
              <svg class="dark:hidden" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
              <svg class="hidden dark:block text-amber-400" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            </button>
            <a href="cart.html" class="relative p-2.5 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-colors shadow-md" title="Cart">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              <span id="cartBadge" class="absolute -top-1.5 -right-1.5 bg-orange-600 text-white text-[0.5rem] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-900" style="display:none;">0</span>
            </a>
            <button id="mobileMenuBtn" class="lg:hidden p-2.5 border border-amber-200 dark:border-zinc-700 rounded-xl text-amber-800 dark:text-amber-300 hover:border-amber-500 transition-colors cursor-pointer" title="Toggle Menu">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </header>

      <div id="mobileMenu" class="fixed top-[115px] left-0 w-full z-30 bg-white dark:bg-black border-b border-border p-6 space-y-3 hidden shadow-2xl lg:hidden transition-all">
        <div class="flex flex-col space-y-2 text-sm font-bold uppercase tracking-widest">
          <div class="py-2.5 px-3 rounded-xl bg-amber-50/50 dark:bg-zinc-800/50 flex flex-col space-y-2">
            <span class="text-sm text-amber-700 dark:text-amber-400">Home Options:</span>
            <a href="index.html" class="pl-3 py-1 hover:text-amber-600 ${currentPath === 'index.html' ? 'text-amber-600 font-extrabold' : ''}">↳ Main Store Home</a>
            <a href="saas.html" class="pl-3 py-1 hover:text-amber-600 ${currentPath === 'saas.html' ? 'text-amber-600 font-extrabold' : ''}">↳ SaaS Dashboard</a>
          </div>
          <div class="py-2.5 px-3 rounded-xl bg-amber-50/50 dark:bg-zinc-800/50 flex flex-col space-y-2">
            <span class="text-sm text-amber-700 dark:text-amber-400">Shop:</span>
            <a href="shop.html" class="pl-3 py-1 hover:text-amber-600 ${currentPath === 'shop.html' ? 'text-amber-600 font-extrabold' : ''}">↳ Browse Shop</a>
            <a href="kits.html" class="pl-3 py-1 hover:text-amber-600 ${currentPath === 'kits.html' ? 'text-amber-600 font-extrabold' : ''}">↳ Festival Kits</a>
          </div>
          <a href="about.html" class="py-2.5 px-3 rounded-xl hover:bg-amber-50 dark:hover:bg-zinc-800 transition-colors ${currentPath === 'about.html' ? 'text-amber-600 bg-amber-50 dark:bg-zinc-800' : ''}">About Us</a>
          <a href="blog.html" class="py-2.5 px-3 rounded-xl hover:bg-amber-50 dark:hover:bg-zinc-800 transition-colors ${currentPath === 'blog.html' ? 'text-amber-600 bg-amber-50 dark:bg-zinc-800' : ''}">Blog</a>
          <a href="pricing.html" class="py-2.5 px-3 rounded-xl hover:bg-amber-50 dark:hover:bg-zinc-800 transition-colors ${currentPath === 'pricing.html' ? 'text-amber-600 bg-amber-50 dark:bg-zinc-800' : ''}">Pricing Plans</a>
          <a href="calendar.html" class="py-2.5 px-3 rounded-xl hover:bg-amber-50 dark:hover:bg-zinc-800 transition-colors ${currentPath === 'calendar.html' ? 'text-amber-600 bg-amber-50 dark:bg-zinc-800' : ''}">2026 Tithi Calendar</a>
          <a href="contact.html" class="py-2.5 px-3 rounded-xl hover:bg-amber-50 dark:hover:bg-zinc-800 transition-colors ${currentPath === 'contact.html' ? 'text-amber-600 bg-amber-50 dark:bg-zinc-800' : ''}">Contact</a>
          
          <div class="pt-4 border-t border-border grid grid-cols-2 gap-3">
            <button id="rtlToggleMobile" class="py-3 px-4 bg-amber-100/50 dark:bg-zinc-800 rounded-xl text-amber-800 dark:text-amber-300 text-[0.7rem] font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer">
              <span><span id="rtlLabelMobile">RTL</span></span>
            </button>
            <button id="themeToggleMobile" class="py-3 px-4 bg-amber-100/50 dark:bg-zinc-800 rounded-xl text-amber-800 dark:text-amber-300 text-[0.7rem] font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer">
              <span>Theme</span>
            </button>
          </div>
        </div>
      </div>
    `;

    const footerHTML = `
      <footer class="bg-red-100/50 text-zinc-700 dark:text-zinc-300 dark:bg-black border-t border-border pt-20 pb-12 mt-24">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div class="space-y-4">
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-white shadow-md shrink-0">
      <img src="logo.png" class="w-full h-full object-cover rounded-full" alt="Aastha Pooja Store Logo"/> 
    </div>
    <div>
      <a href="index.html" class="font-serif font-bold text-2xl tracking-tight text-amber-900 dark:text-amber-400 no-underline leading-none">
        Aastha 
        <span class="block text-[0.55rem] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-sans font-semibold mt-0.5">Pooja Store</span>
      </a>
    </div>
  </div>
  <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">Serving devotional households worldwide with sanctified brassware, pure ghee wicks, and festival kits since 1998.</p>
  
  <!-- Social Media Icons -->
  <div class="flex items-center gap-3 pt-2">
    <!-- Instagram -->
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-xl bg-amber-100/60 dark:bg-zinc-800 text-amber-800 dark:text-amber-400 hover:bg-amber-700 hover:text-white dark:hover:bg-amber-600 dark:hover:text-white flex items-center justify-center transition-all shadow-sm" title="Instagram">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    </a>
    <!-- Facebook -->
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-xl bg-amber-100/60 dark:bg-zinc-800 text-amber-800 dark:text-amber-400 hover:bg-amber-700 hover:text-white dark:hover:bg-amber-600 dark:hover:text-white flex items-center justify-center transition-all shadow-sm" title="Facebook">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    </a>
    <!-- YouTube -->
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-xl bg-amber-100/60 dark:bg-zinc-800 text-amber-800 dark:text-amber-400 hover:bg-amber-700 hover:text-white dark:hover:bg-amber-600 dark:hover:text-white flex items-center justify-center transition-all shadow-sm" title="YouTube">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor"/></svg>
    </a>
  
  </div>
</div>

          <div>
            <h3 class="text-amber-800 dark:text-amber-400 font-semibold mb-4 text-sm tracking-widest uppercase">Sacred Navigation</h3>
            <ul class="space-y-3 text-sm">
              <li><a href="shop.html" class="text-zinc-600 dark:text-zinc-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">Browse Artifacts</a></li>
              <li><a href="kits.html" class="text-zinc-600 dark:text-zinc-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">Festival Kits</a></li>
              <li><a href="pricing.html" class="text-zinc-600 dark:text-zinc-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">Pricing Plans</a></li>
              <li><a href="calendar.html" class="text-zinc-600 dark:text-zinc-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">2026 Tithi Calendar</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-amber-800 dark:text-amber-400 font-semibold mb-4 text-sm tracking-widest uppercase">Heritage & Trust</h3>
            <ul class="space-y-3 text-sm">
              <li><a href="about.html" class="text-zinc-600 dark:text-zinc-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">Our Varanasi Roots</a></li>
              <li><a href="contact.html" class="text-zinc-600 dark:text-zinc-300 hover:text-amber-700 dark:hover:text-amber-400 transition-colors">Temple Bulk Orders</a></li>
              <li><span class="text-zinc-500">100% Secure Checkout</span></li>
            </ul>
          </div>

          <div>
            <h3 class="text-amber-800 dark:text-amber-400 font-semibold mb-4 text-sm tracking-widest uppercase">Stay Blessed</h3>
            <p class="text-sm text-zinc-600 dark:text-zinc-400 mb-3 font-light">Subscribe for auspicious tithi alerts and member-only festival discounts.</p>
            <form onsubmit="event.preventDefault(); window.aasthaToast('Newsletter', 'Subscribed successfully with divine blessings!'); this.reset();" class="space-y-3">
              <input type="email" placeholder="Enter your email address" required class="w-full px-4 py-3 bg-surface border border-border rounded-xl text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-amber-600">
              <button type="submit" class="w-full py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-xl font-semibold transition-colors cursor-pointer shadow-lg uppercase tracking-wider text-sm">Subscribe</button>
            </form>
          </div>
        </div>

        <div class="max-w-7xl mx-auto px-6 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between text-sm text-zinc-500 gap-4">
          <span>&copy; 2026 Aastha Pooja Store. All rights reserved. Crafted with absolute devotion.</span>
          <div class="flex gap-6">
            <a href="privacy.html" class="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="terms.html" class="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">Terms of Seva</a>
          </div>
        </div>
      </footer>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    this.initHandlers();
    this.updateCartBadge();
    window.addEventListener('cartUpdated', () => this.updateCartBadge());
  },
  initHandlers() {
    const applyThemeAndRtl = () => {
      const isDark = localStorage.getItem('aastha_theme') === 'dark';
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      const savedDir = localStorage.getItem('aastha_dir') || 'ltr';
      document.documentElement.setAttribute('dir', savedDir);
      const rtlLabel = document.getElementById('rtlLabel');
      const rtlLabelMobile = document.getElementById('rtlLabelMobile');
      if (rtlLabel) rtlLabel.textContent = savedDir === 'rtl' ? 'LTR' : 'RTL';
      if (rtlLabelMobile) rtlLabelMobile.textContent = savedDir === 'rtl' ? 'LTR' : 'RTL';
    };

    applyThemeAndRtl();

    const toggleThemeFn = () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('aastha_theme', isDark ? 'dark' : 'light');
    };

    document.getElementById('themeToggle')?.addEventListener('click', toggleThemeFn);
    document.getElementById('themeToggleMobile')?.addEventListener('click', toggleThemeFn);

    const toggleRtlFn = () => {
      const currentDir = document.documentElement.getAttribute('dir');
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', newDir);
      localStorage.setItem('aastha_dir', newDir);
      applyThemeAndRtl();
    };

    document.getElementById('rtlToggle')?.addEventListener('click', toggleRtlFn);
    document.getElementById('rtlToggleMobile')?.addEventListener('click', toggleRtlFn);

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  },
  updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (!badge) return;
    const cart = window.aasthaDB ? window.aasthaDB.getCart() : [];
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  }
};

document.addEventListener('DOMContentLoaded', () => aasthaLayout.init());