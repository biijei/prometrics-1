const WHATSAPP_URL = "https://wa.me/14193789459";

const WhatsAppButton = () => {
  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: 0.45; }
          80%, 100% { transform: scale(1.75); opacity: 0; }
        }
        @keyframes wa-enter {
          0% { transform: translate(16px, 24px) scale(0.6); opacity: 0; }
          100% { transform: translate(0, 0) scale(1); opacity: 1; }
        }
        .wa-fab {
          animation: wa-enter 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .wa-fab-ring {
          animation: wa-pulse 2s ease-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-fab,
          .wa-fab-ring {
            animation: none;
          }
        }
      `}</style>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Prometrics on WhatsApp"
        className="wa-fab group fixed z-40"
        style={{
          right: "max(1.25rem, env(safe-area-inset-right))",
          bottom: "max(1.25rem, env(safe-area-inset-bottom))",
        }}
      >
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-full bg-white px-3.5 py-2 text-sm font-medium text-secondary opacity-0 shadow-3xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
          Chat on WhatsApp
        </span>
        <span className="relative flex h-14 w-14 items-center justify-center">
          <span
            aria-hidden="true"
            className="wa-fab-ring absolute inset-0 rounded-full bg-[#25D366]"
          />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform duration-200 group-hover:scale-110 group-active:scale-95 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-[#25D366]">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-7 w-7"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.44zM12.07 21.3h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.21-3.74.98 1-3.64-.23-.37a9.84 9.84 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.98c0 5.45-4.44 9.88-9.91 9.88zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
            </svg>
          </span>
        </span>
      </a>
    </>
  );
};

export default WhatsAppButton;
