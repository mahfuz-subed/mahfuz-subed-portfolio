export default function About() {
  return (
    <section id="about" className="bg-ink text-white">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-24 md:grid-cols-[1fr_2fr] md:gap-16">
        {/* Heading */}
        <div>
          <h2 className="text-3xl font-medium tracking-tight">
            About me<span className="text-[#EFDF6D]">.</span>
          </h2>
          <div className="mt-4 h-1 w-16 bg-[#EFDF6D]" />
        </div>

        {/* Text card */}
        <div className="space-y-5 rounded-lg border border-white/15 border-l-4 border-l-[#EFDF6D] bg-neutral-900 p-6 text-left leading-relaxed text-white/80 hyphens-auto sm:p-8 sm:text-justify">
          <p>
            I&apos;ve always been fascinated by technology and wanted to dive
            deep into it. That curiosity led me to web development, where I
            started with basic HTML and CSS and worked my way up to the full
            stack: React and Next.js on the front end, Node, Express and MongoDB
            on the back.
          </p>
          <p>
            I enjoy building apps that people can use in their everyday lives.
            Khair, which helps a community come together to support people in
            need, and Bazar Dor, which shows the latest prices of daily-need
            goods, are two examples. I like the whole process, from working out
            how the data should be stored to making the interface simple to use.
          </p>
          <p>
            Outside of coding, I am a huge cricket fan and always get upset by
            Bangladesh&apos;s match results.
          </p>
        </div>
      </div>
    </section>
  );
}
