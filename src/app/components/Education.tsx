const Education = () => {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-medium tracking-tight">
          Education<span className="text-[#EFDF6D]">.</span>
        </h2>

        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <span className="inline-block rounded-md bg-[#EFDF6D] px-4 py-2 text-sm font-semibold text-black">
                Bachelor&apos;s Degree
              </span>

              <h3 className="mt-6 text-lg font-bold text-white md:text-2xl">
                Bachelor of Arts (BA) in English
              </h3>

              <p className="mt-3 text-lg text-gray-300">
                Moulvibazar Government College
              </p>

              <p className="mt-1 text-gray-400">
                National University, Bangladesh
              </p>
            </div>

            <div className="md:text-right">
              <p className="font-semibold text-[#EFDF6D]">2020 — 2025</p>

              <p className="mt-6 text-sm text-gray-400">CGPA</p>

              <p className="text-2xl font-bold text-white">2.90</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
