const Education = () => {
  return (
    <section className="bg-[#EFDF6D] px-6 py-24 text-black">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-medium tracking-tight">
          Education<span className="text-black">.</span>
        </h2>

        <div className="mt-12 border-t border-black/20 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <span className="inline-block rounded-md bg-black px-4 py-2 text-sm font-semibold text-[#EFDF6D]">
                Bachelor&apos;s Degree
              </span>

              <h3 className="mt-6 text-lg font-bold text-black md:text-2xl">
                Bachelor of Arts (BA) in English
              </h3>

              <p className="mt-3 text-lg text-gray-800">
                Moulvibazar Government College
              </p>

              <p className="mt-1 text-gray-700">
                National University, Bangladesh
              </p>
            </div>

            <div className="md:text-right">
              <p className="font-semibold text-black">2020 — 2025</p>

              <p className="mt-6 text-sm text-gray-700">CGPA</p>

              <p className="text-2xl font-bold text-black">2.90</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
