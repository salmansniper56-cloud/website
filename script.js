// Pocket AI Web Platform Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
});

// Mobile Navigation
function initMobileNav() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('navMenu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('active');
            const icon = btn.querySelector('i');
            if (icon) {
                icon.className = menu.classList.contains('active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
            }
        });

        document.querySelectorAll('.nav-item').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                const icon = btn.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            });
        });
    }
}

// Collapsible QR Drawer
function toggleQrBox() {
    const qrContainer = document.getElementById('qrContainer');
    if (qrContainer) {
        qrContainer.classList.toggle('hidden');
    }
}

// iOS Modal Handlers
function openIosModal() {
    const modal = document.getElementById('iosModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeIosModal() {
    const modal = document.getElementById('iosModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function handleIosForm(event) {
    event.preventDefault();
    const input = document.getElementById('iosEmail');
    const note = document.getElementById('iosSuccessNote');
    if (input && note) {
        note.classList.remove('hidden');
        input.value = '';
        setTimeout(() => {
            closeIosModal();
            note.classList.add('hidden');
        }, 3000);
    }
}

// FAQ Accordion
function toggleFaq(btn) {
    const row = btn.parentElement;
    const ans = row.querySelector('.faq-a');
    const isActive = row.classList.contains('active');

    document.querySelectorAll('.faq-row').forEach(r => {
        r.classList.remove('active');
        const a = r.querySelector('.faq-a');
        if (a) a.style.maxHeight = null;
    });

    if (!isActive) {
        row.classList.add('active');
        if (ans) ans.style.maxHeight = ans.scrollHeight + "px";
    }
}
