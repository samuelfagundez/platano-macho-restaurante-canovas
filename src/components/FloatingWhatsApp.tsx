import { WHATSAPP_CONTACT_MESSAGE, whatsappLink } from '../content';

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(WHATSAPP_CONTACT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="white" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.65 4.53 1.78 6.4L4 29l7.76-1.75a12 12 0 0 0 4.26.78h.01c6.63 0 12.03-5.4 12.03-12.02C28.06 8.4 22.66 3 16.02 3zm0 21.98h-.01a9.9 9.9 0 0 1-5.06-1.39l-.36-.21-3.75.85.86-3.66-.24-.37a9.9 9.9 0 0 1-1.53-5.28c0-5.5 4.47-9.98 9.99-9.98 2.67 0 5.18 1.04 7.07 2.93a9.93 9.93 0 0 1 2.92 7.06c0 5.51-4.47 9.98-9.89 9.98zm5.47-7.48c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.09 3.2 5.07 4.48.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}
