// components/TrustIcons.jsx
import { PackageCheck, RefreshCw, ShieldCheck, ShoppingCart } from "lucide-react";

const items = [
  { icon: <ShoppingCart size={24} />, label: "Support Independent Brands" },
  { icon: <RefreshCw size={24} />, label: "Free Returns and Exchanges" },
  { icon: <ShieldCheck size={24} />, label: "Secure Checkout" },
  { icon: <PackageCheck size={24} />, label: "Fast & Safe Delivery" },
];

export default function TrustIcons() {
  return (
    <div className="bg-[#10215a] text-white py-6 px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div className="text-white">{item.icon}</div>
          <p className="text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
