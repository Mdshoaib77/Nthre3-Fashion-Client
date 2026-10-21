import React, { useContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { FaBarsStaggered } from "react-icons/fa6";
import { TbBasket, TbUserCircle } from "react-icons/tb";
import { RiUserLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ShopContext } from "../context/ShopContext";

const EASE = [0.22, 1, 0.36, 1];

const Header = () => {
  const { token, setToken, getCartCount, navigate } = useContext(ShopContext);
  const [menuOpened, setMenuOpened] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpened((prev) => !prev);
  const closeMenu = () => setMenuOpened(false);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  /* Load Saved Theme */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  /* Toggle Theme */
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  /* Compact the header after scrolling */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock page scroll + close on Escape while the drawer is open */
  useEffect(() => {
    if (!menuOpened) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setMenuOpened(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpened]);

  const menuItemClass =
    "px-3.5 py-2.5 text-[13.5px] tracking-[0.02em] rounded-xl cursor-pointer text-tertiary dark:text-white transition-colors duration-200 hover:bg-primary";

  const iconBtn =
    "flex items-center justify-center w-10 h-10 rounded-full cursor-pointer text-tertiary dark:text-white transition-colors duration-300 hover:bg-primary";

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="sticky top-0 z-50 w-full"
    >
      {/* Glass background layer (kept separate so fixed children are never trapped) */}
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 border-b border-[color:var(--line)] backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "bg-[rgb(var(--c-paper)/0.82)] shadow-[0_14px_34px_-22px_rgb(33_28_25/0.4)]"
            : "bg-[rgb(var(--c-paper)/0.95)]"
        }`}
      />

      {/* Announcement bar */}
      <div
        className={`overflow-hidden bg-tertiary text-white dark:bg-[#0D0A09] transition-all duration-500 ease-premium ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <Link
          to="/collection"
          className="flex items-center justify-center h-9 gap-3 px-4 text-[10.5px] sm:text-[11.5px] font-medium tracking-[0.22em] uppercase text-white/90 hover:text-white transition-colors"
        >
          <span className="hidden sm:block h-px w-8 bg-white/30" />
          <span className="truncate">New season arrivals&nbsp;&nbsp;·&nbsp;&nbsp;Shop the modern collection</span>
          <span className="hidden sm:block h-px w-8 bg-white/30" />
        </Link>
      </div>

      {/* Main bar */}
      <div
        className={`max-padd-container grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 transition-[padding] duration-500 ease-premium ${
          scrolled ? "py-2" : "py-3 sm:py-4"
        }`}
      >
        {/* Left: menu button (mobile/tablet) + nav (desktop) */}
        <div className="flex items-center justify-start">
          <motion.button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpened}
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            className={`${iconBtn} -ml-2 xl:hidden`}
          >
            <FaBarsStaggered className="text-[19px]" />
          </motion.button>

          <Navbar containerStyles="hidden xl:flex items-center gap-x-9 2xl:gap-x-11" />
        </div>

        {/* Center: logo */}
        <Link to={"/"} className="flex justify-center" aria-label="NTHRE3 home">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="font-display text-[26px] xs:text-[30px] sm:text-[36px] font-bold tracking-[0.14em] sm:tracking-[0.18em] leading-none text-tertiary dark:text-white pl-[0.14em]"
          >
            NTHRE<span className="italic font-semibold text-secondary dark:text-[#E58A57]">3</span>
          </motion.div>
        </Link>

        {/* Right: actions */}
        <div className="flex items-center justify-end gap-x-0.5 xs:gap-x-1.5 sm:gap-x-3">
          {/* Dark Mode */}
          <motion.button
            type="button"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            className={iconBtn}
          >
            {darkMode ? <MdLightMode size={21} /> : <MdDarkMode size={21} />}
          </motion.button>

          {/* Cart */}
          <Link to={"/cart"} className={`${iconBtn} relative`} aria-label="Cart">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TbBasket className="text-[25px]" />
            </motion.div>

            <motion.span
              key={getCartCount()}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 420, damping: 18 }}
              className="bg-secondary text-white text-[10.5px] font-bold absolute right-0 top-0 flexCenter min-w-[17px] h-[17px] px-1 rounded-full ring-2 ring-[var(--bg)]"
            >
              {getCartCount()}
            </motion.span>
          </Link>

          {/* User */}
          <div className="relative group">
            <div>
              {token ? (
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className={iconBtn}
                >
                  <TbUserCircle className="text-[27px]" />
                </motion.div>
              ) : (
                <motion.button
                  onClick={() => navigate("/login")}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  aria-label="Login"
                  className="btn-dark flexCenter gap-x-2 !px-3 xs:!px-5 !py-2.5 !text-[12px] !tracking-[0.14em] uppercase"
                >
                  <span className="hidden xs:inline">Login</span>
                  <RiUserLine className="text-[17px]" />
                </motion.button>
              )}
            </div>

            {/* Dropdown (invisible bridge keeps it open while the mouse travels to it) */}
            <AnimatePresence>
              {token && (
                <motion.ul
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="absolute right-0 z-50 flex-col hidden w-52 p-2 bg-white shadow-lift dark:bg-gray-800 rounded-2xl ring-1 ring-[color:var(--line)] top-[calc(100%+0.6rem)] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 group-hover:flex group-focus-within:flex regular-14"
                >
                  <li onClick={() => navigate("/dashboard")} className={menuItemClass}>Dashboard</li>
                  <li onClick={() => navigate("/orders")} className={menuItemClass}>Orders</li>
                  <li onClick={() => navigate("/wishlist")} className={menuItemClass}>Wishlist</li>
                  <li onClick={() => navigate("/cart")} className={menuItemClass}>Cart</li>
                  <li onClick={() => navigate("/profile")} className={menuItemClass}>Profile</li>
                  <li onClick={() => navigate("/settings")} className={menuItemClass}>Settings</li>
                  <li onClick={logout} className={menuItemClass}>Logout</li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile / tablet drawer (portal so it always covers the full screen) */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {menuOpened && (
              <>
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-[60] bg-[#211c19]/60 backdrop-blur-[3px] xl:hidden"
                  onClick={closeMenu}
                />

                <motion.aside
                  key="drawer"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", stiffness: 260, damping: 32 }}
                  className="fixed top-0 left-0 z-[61] flex flex-col w-[86%] max-w-[380px] h-[100dvh] px-6 pt-6 pb-8 overflow-y-auto border-r border-[color:var(--line)] shadow-2xl bg-[var(--bg)] text-[var(--text)] xl:hidden"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Menu"
                >
                  <div className="flex items-center justify-between mb-10">
                    <div className="font-display text-[30px] font-bold tracking-[0.16em] leading-none text-tertiary dark:text-white">
                      NTHRE<span className="italic font-semibold text-secondary dark:text-[#E58A57]">3</span>
                    </div>

                    <motion.button
                      type="button"
                      aria-label="Close menu"
                      whileHover={{ rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className={iconBtn}
                      onClick={closeMenu}
                    >
                      <IoClose className="text-2xl" />
                    </motion.button>
                  </div>

                  <Navbar variant="drawer" containerStyles="flex flex-col" onNavigate={closeMenu} />

                  <div className="mt-auto pt-10">
                    <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[var(--muted)]">
                      Modern fashion, delivered
                    </p>
                    <button
                      type="button"
                      onClick={toggleTheme}
                      className="btn-light flexCenter gap-x-2 w-full mt-4 !text-[12px] !tracking-[0.14em] uppercase"
                    >
                      {darkMode ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
                      {darkMode ? "Light mode" : "Dark mode"}
                    </button>
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </motion.header>
  );
};

export default Header;
