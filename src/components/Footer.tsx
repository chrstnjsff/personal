export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-100 dark:border-[#2a2a2a]">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs text-gray-400 dark:text-gray-600">
          © {currentYear} Christian Josef Aquino. All Rights Reserved.
        </p>
        <p className="text-xs text-gray-300 dark:text-gray-700 mt-0.5">
          Developed in Mandaluyong City, Metro Manila, Philippines
        </p>
      </div>
    </footer>
  );
}
