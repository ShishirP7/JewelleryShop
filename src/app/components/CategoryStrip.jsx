// components/CategoryStrip.jsx
const categories = [
  { label: "Bangles", img: "https://images.unsplash.com/photo-1740567389909-b36e9cadbef9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { label: "Chains", img: "https://images.unsplash.com/photo-1666800715778-4b0409bb66bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { label: "Earrings", img: "https://images.unsplash.com/photo-1589095053205-8fc842336f4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { label: "Neckwears", img: "https://images.unsplash.com/photo-1601121141499-17ae80afc03a?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { label: "Pendants", img: "https://images.unsplash.com/photo-1611107683227-e9060eccd846?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { label: "Rings", img: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
];

export default function CategoryStrip() {
  return (
    <div className="bg-[#fcf7f2] py-6  flex justify-center gap-4 flex-wrap  ">
      {categories.map((cat, i) => (
        <div key={i} className="text-center ">
          <img src={cat.img} alt={cat.label} className="rounded-lg object-cover h-40 w-full mb-2" />
          <p className="text-blue-900 font-serif font-semibold">{cat.label}</p>
        </div>
      ))}
    </div>
  );
}
