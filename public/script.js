const form = document.querySelector('form');
const qrCode = document.getElementById('qr-code');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const text = formData.get('text');
    const qrCodeDataUrl = await generateQRCode(text);
    qrCode.src = qrCodeDataUrl;
});

async function generateQRCode(text) {
    try {
        const qrCodeDataUrl = await QRCode.toDataURL(text);
        return qrCodeDataUrl;
    } catch (error) {
        console.error(error);
        alert('Gagal membuat QR code. Silakan coba lagi.');
        return '';
    }
}
