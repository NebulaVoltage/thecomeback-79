import React from 'react';

export default function Skills() {
  const SKILL_CATEGORIES = [
    {
      category: 'SOFTWARE',
      items: ['Python', 'Java', 'JavaScript', 'React', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js'],
    },
    {
      category: 'DATA STRUCTURES & ALGORITHMS',
      items: [
        'BST',
        'AVL Trees',
        'B-Trees',
        'B+ Trees',
        'Segment Trees',
        'Fenwick Trees',
        'Graphs',
        'BFS',
        'DFS',
        'Dijkstra',
        'A*',
      ],
    },
    {
      category: 'AI / ML',
      items: [
        'Machine Learning',
        'Gradient Descent',
        'Classification',
        'Probability',
        'Search Algorithms',
        'NLP fundamentals',
      ],
    },
    {
      category: 'ELECTRONICS / EMBEDDED',
      items: [
        'Arduino',
        'Embedded Systems',
        'Analog Electronics',
        'Digital Signal Processing',
        'Communication Systems',
        'Sampling',
        'Modulation',
        'Signal Analysis',
        'Circuit Simulation',
      ],
    },
    {
      category: 'TOOLS',
      items: ['Git', 'GitHub', 'Vercel', 'Netlify', 'IntelliJ IDEA', 'Eclipse', 'VS Code'],
    },
  ];

  return (
    <section id="skills" className="py-28 md:py-36 bg-[#050505] border-t border-white/12">
      <div className="container-custom">
        
        {/* Section Eyebrow */}
        <div className="section-tag">
          02 // TECHNICAL SKILLS
        </div>

        {/* Editorial Heading */}
        <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight text-[#FAFAFA] mb-16 font-[Manrope]">
          ENGINEERING CAPABILITIES.
        </h2>

        {/* Editorial Technical List with Thin Separators */}
        <div className="flex flex-col border-t border-white/12">
          {SKILL_CATEGORIES.map((cat, index) => (
            <div
              key={cat.category}
              className="py-8 md:py-10 border-b border-white/12 flex flex-col lg:flex-row lg:items-start justify-between gap-6"
            >
              {/* Category Label */}
              <div className="lg:w-1/3 flex items-center gap-4">
                <span className="mono text-xs text-white/40">0{index + 1}</span>
                <h3 className="text-sm font-semibold tracking-wider text-[#FAFAFA] uppercase font-[Manrope]">
                  {cat.category}
                </h3>
              </div>

              {/* Items List */}
              <div className="lg:w-2/3 flex flex-wrap gap-x-6 gap-y-3">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-white/70 font-normal hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
