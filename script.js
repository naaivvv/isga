document.addEventListener('DOMContentLoaded', function () {
    // Initialize Feather icons once at start
    feather.replace();

    // Control button toggle setup
    document.querySelectorAll('.control-btn').forEach(button => {
        button.addEventListener('click', function () {
            const controlBox = this.closest('.control-box');
            if (!controlBox) return;

            controlBox.classList.toggle('active');

            // Update button text based on state
            if (controlBox.classList.contains('active')) {
                this.textContent = this.textContent.replace('Start', 'Stop');
            } else {
                this.textContent = this.textContent.replace('Stop', 'Start');
            }
        });
    });

    // ✅ Setup mobile menu (for custom-navbar web component)
    function setupMobileMenu() {
        const navbar = document.querySelector('custom-navbar');
        if (!navbar || !navbar.shadowRoot) return;

        const navLinks = navbar.shadowRoot.getElementById('nav-links');
        const menuBtn = navbar.shadowRoot.getElementById('mobile-menu-btn');

        if (!menuBtn || !navLinks) return;

        menuBtn.addEventListener('click', function () {
            navLinks.classList.toggle('open');

            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('open')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }

            feather.replace(); // Refresh icons after toggle
        });
    }

    // ✅ Initialize mobile menu
    setupMobileMenu();

    // ✅ Simulated system status updates
    function updateSystemStatus() {
        const cpuEl = document.getElementById('cpu-load');
        const storageEl = document.getElementById('storage-free');

        if (!cpuEl || !storageEl) return;

        const cpuLoad = (Math.random() * 30 + 5).toFixed(0);
        const storageFree = (50 + Math.random() * 150).toFixed(0);

        cpuEl.textContent = cpuLoad;
        storageEl.textContent = storageFree;
    }

    // Update system status every 5 seconds
    setInterval(updateSystemStatus, 5000);
    updateSystemStatus(); // Initial call

    // ✅ Uptime counter
    let seconds = 0;
    setInterval(() => {
        seconds++;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        const uptimeEl = document.getElementById('uptime');
        if (uptimeEl) {
            uptimeEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes
                .toString()
                .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
    }, 1000);
});
