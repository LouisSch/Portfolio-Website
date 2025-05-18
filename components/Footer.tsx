export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold gradient-text">
              PORTFOLIO
            </a>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/LouisSch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-github text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/louisschirra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-linkedin text-xl" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Louis Schirra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}