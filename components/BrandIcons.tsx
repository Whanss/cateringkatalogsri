export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
    >
      <path d="M16.04 3.2A12.72 12.72 0 0 0 5.16 22.5L3.4 28.8l6.48-1.7A12.7 12.7 0 1 0 16.04 3.2Zm0 2.32a10.38 10.38 0 0 1 8.82 15.85 10.38 10.38 0 0 1-13.88 3.55l-.46-.27-3.85 1 1.03-3.74-.3-.48A10.38 10.38 0 0 1 16.04 5.52Zm-4.2 5.31c-.23 0-.6.08-.91.44-.32.36-1.2 1.18-1.2 2.88 0 1.7 1.23 3.34 1.4 3.57.17.23 2.38 3.8 5.88 5.17 2.91 1.15 3.5.92 4.13.86.63-.06 2.04-.83 2.33-1.64.29-.8.29-1.49.2-1.64-.08-.14-.31-.23-.66-.4-.34-.17-2.04-1-2.35-1.12-.31-.11-.54-.17-.77.18-.23.34-.89 1.11-1.09 1.34-.2.23-.4.26-.74.09-.34-.17-1.45-.53-2.76-1.7-1.02-.91-1.71-2.04-1.91-2.38-.2-.34-.02-.53.15-.7.16-.15.34-.4.52-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.08-.17-.77-1.86-1.06-2.55-.28-.67-.57-.58-.77-.59h-.66Z" />
    </svg>
  );
}

export function DapurSriLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lingkaran latar */}
      <circle cx="20" cy="20" r="20" fill="#E8741E" />
      {/* Wajan — setengah lingkaran */}
      <path
        d="M8 22 Q8 30 20 30 Q32 30 32 22"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Gagang wajan */}
      <line x1="32" y1="22" x2="37" y2="19" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      {/* Uap kecil kiri */}
      <path
        d="M15 20 Q14 17 15 14"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      {/* Uap kecil tengah */}
      <path
        d="M20 19 Q19 16 20 13"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Uap kecil kanan */}
      <path
        d="M25 20 Q24 17 25 14"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}

export function AdvantageIcon({ icon }: { icon: string }) {
  if (icon === "leaf") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2 1-1 2-2 2-4-4 0-7 3-7 7 0 1.5.5 2.9 1.3 4H6c0-1.5.5-3 1.5-4.2C9 9.5 11 8 17 8Z" />
      </svg>
    );
  }

  if (icon === "fire") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M12 23a7.5 7.5 0 0 1-5.14-12.96C8.2 8.77 11.5 6.5 11 1.5c6 4 9 8 3 14 1 0 2.5 0 3-1.5.5 1 .5 2 .5 3A7.5 7.5 0 0 1 12 23Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}
