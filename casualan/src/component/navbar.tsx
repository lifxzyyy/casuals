import { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll + auto close menu
  useEffect(() => {
    const anchors =
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();

      const anchorEl = e.currentTarget as HTMLAnchorElement | null;
      if (!anchorEl) return;

      const href = anchorEl.getAttribute("href");
      if (!href) return;

      const target = document.querySelector<HTMLElement>(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // Tutup menu setelah klik link
      if (isOpen) {
        setIsClosing(true);
        setIsOpen(false);
        setTimeout(() => setIsClosing(false), 300); // durasi animasi CSS
      }
    };

    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));

    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleClick)
      );
    };
  }, [isOpen]);

  // Tambah efek shading saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="nav-container">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Lorem ipsum"
          />
          <i className="fas fa-search search-icon"></i>
        </div>
        <a href="#home" className="logo">
          <img src="" alt="" />
        </a>
        <ul
          className={`nav-links ${isOpen ? "active" : ""} ${
            isClosing ? "closing" : ""
          }`}
        >
          <li>
            <a href="#men">MEN</a>
          </li>
          <li>
            <a href="#women">WOMEN</a>
          </li>
          <li>
            <a href="#kids">KIDS</a>
          </li>
          <li>
            <a href="#collection">COLLECTION</a>
          </li>
          <li>
            <a href="#about">CONTACT</a>
          </li>
        </ul>
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
              clip-rule="evenodd"
            />
          </svg>
          <h4
            style={{ cursor: "pointer" }}
            onClick={() => navigate(isLoginPage || isRegisterPage ? "/" : "/login")}
          >
            {isLoginPage || isRegisterPage ? "HOME" : "LOGIN"}
      
          </h4>
        </div>
        <div
          className={`mobile-menu ${isOpen ? "open" : ""}`}
          onClick={() => {
            if (isOpen) {
              // sedang open → tutup dengan animasi
              setIsClosing(true);
              setIsOpen(false);
            } else {
              // sedang closed → buka langsung
              setIsOpen(true);
              setIsClosing(false);
            }
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
