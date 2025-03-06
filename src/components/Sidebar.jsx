"use client";

import { PromedikGreen } from "@/app/assets/colors";
import { useRouter, usePathname } from "next/navigation";

function Sidebar({ isOpen, setIsOpen }) {
  const router = useRouter();
  const pathname = usePathname(); // Get current route

  const handleNavigation = (path) => {
    setIsOpen(false); // Close sidebar
    router.push(path); // Navigate to the new page
  };

  return (
    <div>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}></div>}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 text-white p-4 shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        style={{ backgroundColor: PromedikGreen }}
      >
        {/* Close Button */}
        <div
          onClick={() => setIsOpen(false)}
          className="p-3 top-4 text-white right-4 text-lg cursor-pointer text-end"
        >
          ✕
        </div>

        {/* Menu List */}
        <ul className="mt-1 space-y-3">
          {[
            { name: "Home", path: "/" },
            { name: "Articles", path: "/artikel" },
            { name: "FAQ", path: "/faq" }
          ].map((item) => (
            <li key={item.path}>
              <div
                onClick={() => handleNavigation(item.path)}
                aria-current={pathname === item.path ? "page" : undefined}
                className="block w-full text-left py-2 px-4 rounded-lg transition-colors 
                  hover:bg-white/20 
                  aria-[current=page]:bg-white/30 aria-[current=page]:font-semibold"
              >
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
