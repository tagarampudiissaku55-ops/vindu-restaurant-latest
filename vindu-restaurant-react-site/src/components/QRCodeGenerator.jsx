// icon removed to avoid runtime import shape issues

export default function QRCodeGenerator() {
  const configuredBase = import.meta.env.VITE_PUBLIC_URL || (typeof window !== 'undefined' ? window.location.origin : 'https://yourdomain.com');
  const base = configuredBase.replace(/\/$/, '');
  const qrUrl = `${base}/menu`;
  // Use a simple public QR image generator for printed codes so scanning from tables
  // reliably points to the configured public URL without bundler import issues.
  const qrImageSrc = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
    qrUrl,
  )}`;

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="glass grid gap-6 rounded-3xl p-5 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron/15 text-saffron">
            <span className="font-black">QR</span>
          </div>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">QR Menu for tables</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">
            Print this QR code and place it on tables. Customers can scan it and land directly on the mobile menu.
          </p>
          <p className="mt-4 break-all rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-saffron">
            {qrUrl}
          </p>
        </div>
        <figure className="rounded-3xl bg-white p-4" aria-label="QR code for menu">
          <img src={qrImageSrc} alt="QR code linking to menu" width={180} height={180} />
        </figure>
      </div>
    </section>
  );
}
