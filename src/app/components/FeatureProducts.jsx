// components/FeatureProduct.jsx
export default function FeatureProduct() {
  return (
    <div className="bg-[#fcf7f2] py-16 px-4 md:px-20 flex flex-col md:flex-row gap-12 items-center">
      {/* Image */}
      <div className="flex-1">
        <img
          src="https://images.unsplash.com/photo-1640745692195-1e90a00e5fa5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gold Chain"
          className="rounded-md shadow-md"
        />
      </div>

      {/* Text */}
      <div className="flex-1">
        <p className="text-xs text-gray-500 uppercase tracking-widest">Lorem Ipsum</p>
        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mt-2 mb-4">
          K ho timro name baini parichaye pam
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm">
       K ho timro name baini parichaye pam, Himal Jastai raixau timi Bihani ko gham, Kata hideko ... Bijuli Balera ... Hot vayera .... Eh Pot vayera .. Beauty vayera timi cutie vayera , Hami hereko herai, hamro dushman xa dherai hami hereko herai
        </p>
      </div>
    </div>
  );
}
