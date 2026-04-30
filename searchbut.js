// Search functionality for UGS Custom
(function() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        const buttons = document.querySelectorAll('.buttons-container input[type="button"]');
        const sections = document.querySelectorAll('.letter-section');

        if (searchTerm === '') {
            // Show all buttons and sections
            buttons.forEach(btn => {
                btn.style.display = 'block';
            });
            sections.forEach(section => {
                section.style.display = 'block';
                section.classList.remove('empty');
            });
            return;
        }

        // Filter buttons
        buttons.forEach(btn => {
            const buttonText = btn.value.toLowerCase();
            if (buttonText.includes(searchTerm)) {
                btn.style.display = 'block';
            } else {
                btn.style.display = 'none';
            }
        });

        // Hide empty sections
        sections.forEach(section => {
            const visibleButtons = section.querySelectorAll('input[type="button"]:not([style*="display: none"])');
            const hasVisibleButtons = visibleButtons.length > 0;

            if (hasVisibleButtons) {
                section.style.display = 'block';
                section.classList.remove('empty');
            } else {
                section.style.display = 'none';
            }
        });
    });
})();
