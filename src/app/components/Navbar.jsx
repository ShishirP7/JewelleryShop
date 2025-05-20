// components/Navbar.jsx
import { Search, Heart, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full bg-[#fcf7f2] text-[#1c1c1c]">
      {/* Top bar */}
      <div className="flex justify-between items-center px-8 py-3 border-b border-gray-200 text-sm">
        {/* Left: Search */}
        <div className="flex items-center gap-2 w-1/3">
          {/* <Search className="h-4 w-4" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent outline-none w-full"
          /> */}
        </div>

        {/* Center: Logo */}
        <div className="text-2xl font-serif font-bold text-[#1c1c1c]">
          <span className="relative px-2 border-b-[3px] border-yellow-400">
            Shree Pashupati Jewellers
          </span>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-6 w-1/3 justify-end text-sm">
          {/* <div>India (INR ₹)</div> */}
          <User className="h-5 w-5 cursor-pointer" />
          <Heart className="h-5 w-5 cursor-pointer" />
          <ShoppingCart className="h-5 w-5 cursor-pointer" />
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex justify-center gap-8 py-2 text-sm font-medium border-b border-gray-200">
        <div className="cursor-pointer hover:text-yellow-600">Brands</div>
        <div className="cursor-pointer hover:text-yellow-600">The Edits</div>
        <div className="cursor-pointer hover:text-yellow-600">Earrings</div>
        <div className="cursor-pointer hover:text-yellow-600">Necklaces</div>
        <div className="cursor-pointer hover:text-yellow-600">Rings</div>
        <div className="cursor-pointer hover:text-yellow-600">Bracelets</div>
        <div className="cursor-pointer hover:text-yellow-600">Gifts</div>
        <div className="cursor-pointer hover:text-yellow-600">Personalized</div>
      </div>
    </div>
  );
}