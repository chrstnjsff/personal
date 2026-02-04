export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 dark:text-gray-400">
          © {currentYear} Christian Josef Aquino. All Rights Reserved.
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">
          Built with Next.js & Tailwind CSS | Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
