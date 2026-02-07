

// popup open
document.querySelectorAll('.open_popup').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const popupId = btn.getAttribute('data-popup');
        document.getElementById(popupId).style.display = 'flex';
    });
});

// popup close
document.querySelectorAll('.popup_close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const popupId = closeBtn.getAttribute('data-close');
        document.getElementById(popupId).style.display = 'none';
    });
});

// Ferme le popup lorsqu’on clique en dehors de la boîte
document.querySelectorAll('.popup_overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});
