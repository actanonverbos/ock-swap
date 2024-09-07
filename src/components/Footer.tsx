'use client';

export default function Footer() {
  return (
    <footer className="mt-auto py-4 w-full flex justify-center items-center">
      <div className="text-center">
        <p className="text-sm text-white">
          Built with love by{' '}
          <a
            href="https://mrmigglesbase.com"
            target="_blank"
            rel="noreferrer"
            title="Miggles"
            className="font-semibold hover:text-indigo-200 text-white"
          >
            Miggles <span role="img" aria-label="blue heart">💙</span>
          </a>
        </p>
      </div>
    </footer>
  );
}
