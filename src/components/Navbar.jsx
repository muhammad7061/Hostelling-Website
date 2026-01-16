import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b z-50">
      <div className="max-w-[80%] mx-auto">
        <div className="h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={`https://hihostels.com/wp-content/webp-express/webp-images/uploads/2022/07/hostellinginternational_logo_dark_transparent-768x157.png.webp`}
              alt="Hostelling International"
              className="w-auto h-12 object-contain"
            />

            {/* <div className="leading-tight">
              <p className="text-sm font-bold text-gray-900">
                Hostelling International
              </p>
              <p className="text-[11px] text-orange-500">
                Discover the real hostel experience
              </p>
            </div> */}
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-gray-800">
            <Link className="hover:text-orange-500" to="/">
              DESTINATIONS
            </Link>
            <Link className="hover:text-orange-500" to="/blog">
              INSPIRATION
            </Link>
            <Link className="hover:text-orange-500" to="/mission">
              IMPACT
            </Link>
            <Link className="hover:text-orange-500" to="/join">
              MEMBERSHIP
            </Link>
            <Link className="hover:text-orange-500" to="/groups">
              GROUPS
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm font-semibold text-gray-800">
            <Link onClick={() => setOpen(false)} to="/">DESTINATIONS</Link>
            <Link onClick={() => setOpen(false)} to="/blog">INSPIRATION</Link>
            <Link onClick={() => setOpen(false)} to="/Mission">IMPACT</Link>
            <Link onClick={() => setOpen(false)} to="/join">MEMBERSHIP</Link>
            <Link onClick={() => setOpen(false)} to="/groups">GROUPS</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
