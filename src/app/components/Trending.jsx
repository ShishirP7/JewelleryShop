// components/TrendingProducts.jsx
const products = [
  {
    title: "14KT Yellow Gold Diamond Hoop",
    category: "Women | Necklace",
    price: "Rs. 4,554.00",
    discount: "-30%",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9HaEqv7-fSJp8XB--yQJstJSpcOFxgtRhg&s",
  },
  {
    title: "14KT Yellow Gold Diamond Hoop",
    category: "Women | Necklace",
    price: "Rs. 4,554.00",
    discount: "-30%",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9HaEqv7-fSJp8XB--yQJstJSpcOFxgtRhg&s",
  },
  {
    title: "14KT Yellow Gold Diamond Hoop",
    category: "Women | Necklace",
    price: "Rs. 4,554.00",
    discount: "-30%",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9HaEqv7-fSJp8XB--yQJstJSpcOFxgtRhg&s",
  },
  {
    title: "14KT Yellow Gold Diamond Hoop",
    category: "Women | Necklace",
    price: "Rs. 4,554.00",
    discount: "-30%",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9HaEqv7-fSJp8XB--yQJstJSpcOFxgtRhg&s",
  },
  {
    title: "14KT Yellow Gold Diamond Hoop",
    category: "Women | Necklace",
    price: "Rs. 4,554.00",
    discount: "-30%",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9HaEqv7-fSJp8XB--yQJstJSpcOFxgtRhg&s",
  },
  // ... add more products
];

export default function TrendingProducts() {
  return (
    <div className="bg-[#fcf7f2] py-10 px-6 text-gray-800">
      <h2 className="text-2xl font-serif text-center mb-8 text-black">Trending Now</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-center">
        {products.map((p, i) => (
          <div key={i} className="bg-white  shadow-sm">
            <div className="relative">
              <img src={p.img} alt={p.title} className="h-48 w-full object-contain" />
              <span className="absolute top-2 left-2 bg-blue-900 text-white px-1 text-xs">{p.discount}</span>
            </div>
            <div className="p-3 text-sm">
              <p className="font-medium">{p.title}</p>
              <p className="text-gray-500">{p.category}</p>
              <p className="text-blue-800 font-bold">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
