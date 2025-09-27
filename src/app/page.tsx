import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col sm:flex-row items-center sm:items-start gap-8 p-8">
      
      {/* Profile Photo */}
      <div className="flex-shrink-0">
        <Image 
          src="/profile.JPG" 
          alt="Profile Picture" 
          width={250} 
          height={250} 
          className="rounded-full"
        />
      </div>
      
      {/* About Me + Buttons */}
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">Manihams Suraparaju</h2>
        <p className="text-lg text-gray-800 mb-6">
          I’m a Computer Science student passionate about building interactive
          projects, web apps, and learning modern frameworks like Next.js, React, and Tailwind CSS.
          I have experience with Java, C++, HTML, CSS, and JavaScript. I have a strong foundation
          in data structures and algorithms, and I enjoy solving complex problems.
          I’m eager to contribute to innovative projects and collaborate with like-minded individuals.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://manihams.github.io/Unity-Game/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            View Projects
          </a>
          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/manihams-suraparaju-87841a213/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            LinkedIn
          </a>
          <a
            href="mailto:manihams123@gmail.com"
            className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Contact Me
          </a> 
        </div>
      </div>
    </section>
  );
}

