class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: white;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
        }
.navbar-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          display: flex;
          align-items: center;
          font-weight: 600;
          font-size: 1.25rem;
          color: #0f172a;
          text-decoration: none;
        }
        .logo svg {
          margin-right: 0.5rem;
          color: #10b981;
          width: 24px;
          height: 24px;
        }
.nav-links {
          display: flex;
          gap: 1.5rem;
        }
        .nav-link {
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #10b981;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 0.5rem;
        }
        .mobile-menu-btn i {
          width: 24px;
          height: 24px;
        }
        .mobile-menu-btn:focus {
          outline: none;
        }
@media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            gap: 0.5rem;
          }
          .nav-links.open {
            display: flex;
          }
          .mobile-menu-btn {
            display: block;
          }
          .nav-link {
            padding: 0.5rem;
            border-bottom: 1px solid #e2e8f0;
          }
        }
</style>
      <div class="navbar-container">
        <a href="/" class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
          ISGA
        </a>
        <button class="mobile-menu-btn" id="mobile-menu-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
<div class="nav-links" id="nav-links">
          <a href="/" class="nav-link">Dashboard</a>
          <a href="src/scheduling.html" class="nav-link">Scheduling</a>
          <a href="src/manual.html" class="nav-link">Manual</a>
          <a href="src/calibration.html" class="nav-link">Calibration</a>
</div>
      </div>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);