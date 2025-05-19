// components/Hero.jsx
export default function Hero() {
  return (
    <div className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://www.aurusjewels.com/cdn/shop/files/pexels-gursher-gill-136618451.jpg?v=1684409226')" }}>
      <div className="bg-white/80 rounded-lg p-10 max-w-2xl text-center backdrop-blur-sm shadow-md">
        <h1 className="text-4xl font-serif font-semibold text-blue-900">Gold <span className="text-yellow-500">Jewellery</span></h1>
        <div className="mt-6 text-2xl font-bold text-blue-900">10K+ <span className="text-sm font-normal text-blue-900 ml-4">LOREM IPSUM<br />SIMPLY DUMMY LOREM</span></div>
        <p className="mt-4 text-gray-700">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
      </div>
    </div>
  );
}
