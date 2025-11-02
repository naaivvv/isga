document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts
    const coCtx = document.getElementById('coChart').getContext('2d');
    const co2Ctx = document.getElementById('co2Chart').getContext('2d');
    const o2Ctx = document.getElementById('o2Chart').getContext('2d');
    
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(226, 232, 240, 0.5)'
                },
                ticks: {
                    color: '#64748b'
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#64748b'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        },
        elements: {
            point: {
                radius: 0
            }
        }
    };
    
    const coChart = new Chart(coCtx, {
        type: 'line',
        data: {
            labels: Array(12).fill(''),
            datasets: [{
                data: Array(12).fill(0),
                borderColor: '#ef4444',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(239, 68, 68, 0.1)'
            }]
        },
        options: chartOptions
    });
    
    const co2Chart = new Chart(co2Ctx, {
        type: 'line',
        data: {
            labels: Array(12).fill(''),
            datasets: [{
                data: Array(12).fill(0),
                borderColor: '#f97316',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(249, 115, 22, 0.1)'
            }]
        },
        options: chartOptions
    });
    
    const o2Chart = new Chart(o2Ctx, {
        type: 'line',
        data: {
            labels: Array(12).fill(''),
            datasets: [{
                data: Array(12).fill(0),
                borderColor: '#10b981',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(16, 185, 129, 0.1)'
            }]
        },
        options: chartOptions
    });
    
    // Simulate data updates
    function updateSensorData() {
        // Generate random data for demo
        const newCO = (Math.random() * 50).toFixed(2);
        const newCO2 = (Math.random() * 10).toFixed(2);
        const newO2 = (20 + Math.random() * 5).toFixed(2);
        
        // Update display values
        document.getElementById('co-value').textContent = newCO;
        document.getElementById('co2-value').textContent = newCO2;
        document.getElementById('o2-value').textContent = newO2;
        
        // Update status indicators
        document.getElementById('co-status').textContent = `${newCO} ppm`;
        document.getElementById('co2-status').textContent = `${newCO2}%`;
        document.getElementById('o2-status').textContent = `${newO2}%`;
        
        // Update charts
        updateChart(coChart, newCO);
        updateChart(co2Chart, newCO2);
        updateChart(o2Chart, newO2);
        
        // Update system status
        updateSystemStatus();
    }
    
    function updateChart(chart, newValue) {
        chart.data.datasets[0].data.shift();
        chart.data.datasets[0].data.push(newValue);
        chart.update();
    }
    // Mobile menu toggle with animation
    function setupMobileMenu() {
        const navbar = document.querySelector('custom-navbar');
        if (!navbar) return;
        
        const navLinks = navbar.shadowRoot.getElementById('nav-links');
        const menuBtn = navbar.shadowRoot.getElementById('mobile-menu-btn');
        
        if (menuBtn) {
            menuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('open');
                const icon = menuBtn.querySelector('i');
                if (navLinks.classList.contains('open')) {
                    icon.setAttribute('data-feather', 'x');
                } else {
                    icon.setAttribute('data-feather', 'menu');
                }
                feather.replace();
            });
        }
    }

    // Initialize mobile menu
    setupMobileMenu();
// System status updates
    function updateSystemStatus() {
        // Simulate CPU load
        const cpuLoad = (Math.random() * 30 + 5).toFixed(0);
        document.getElementById('cpu-load').textContent = cpuLoad;
        
        // Simulate storage
        const storageFree = (50 + Math.random() * 150).toFixed(0);
        document.getElementById('storage-free').textContent = storageFree;
    }
    
    // Uptime counter
    let seconds = 0;
    setInterval(() => {
        seconds++;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        document.getElementById('uptime').textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
    // Initial data load
    if (document.getElementById('co-value')) {
        updateSensorData();
        // Update data every 3 seconds
        setInterval(updateSensorData, 3000);
    }

    // System status updates for all pages
    updateSystemStatus();
    setInterval(updateSystemStatus, 3000);
// Replace Feather Icons
    feather.replace();
});