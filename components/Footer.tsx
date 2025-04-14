import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-3 mt-5 flex w-full flex-col items-center justify-center space-y-3 px-3 pt-4 text-center sm:mb-0 sm:h-20 sm:flex-col sm:space-y-4 sm:pt-2">
     
      {/* Badges Centered */}
      <div className="flex space-x-4">
        <a
          href="https://sudo-self.github.io/create-react-tsx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src="https://img.shields.io/badge/npx-create--react--tsx-blue?style=flat&logo=typescript&logoColor=white&logoWidth=20" 
            alt="npx Badge"
            className="inline-flex hover:scale-105 transition-transform duration-300"
            style={{ height: "28px" }}
          />
        </a>

        <a
          href="https://www.npmjs.com/package/create-react-tsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src="https://img.shields.io/badge/npm%20i-create--react--tsx-red?style=flat&logo=npm&logoColor=white&logoWidth=20" 
            alt="npm Badge"
            className="inline-flex hover:scale-105 transition-transform duration-300"
            style={{ height: "28px" }}
          />
        </a>
      </div>

      {/* Twitter */}
      <div className="flex space-x-2 pb-4 sm:pb-0">
        <Link
          href="https://x.com/ilostmyipad"
          className="group flex items-center space-x-2"
          aria-label="Twitter"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 251 256"
            className="h-6 w-6 fill-gray-500 group-hover:fill-gray-700"
          >
            <path d="M149.079 108.399L242.33 0h-22.098l-80.97 94.12L74.59 0H0l97.796 142.328L0 256h22.1l85.507-99.395L175.905 256h74.59L149.073 108.399zM118.81 143.58l-9.909-14.172l-78.84-112.773h33.943l63.625 91.011l9.909 14.173l82.705 118.3H186.3l-67.49-96.533z"/>
          </svg>
          <span className="text-gray-500 group-hover:text-gray-700">@iLostmyipad</span>
        </Link>
      </div>
    </footer>
  );
}


