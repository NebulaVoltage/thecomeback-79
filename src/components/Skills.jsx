import React from 'react';

export default function Skills() {
  const SKILL_GROUPS = [
    {
      category: 'SOFTWARE',
      skills: [
        'Python',
        'Java',
        'JavaScript',
        'React',
        'HTML',
        'CSS',
        'Tailwind CSS',
        'Node.js',
      ],
    },
    {
      category: 'DATA STRUCTURES & ALGORITHMS',
      skills: [
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
      skills: [
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
      skills: [
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
      skills: [
        'Git',
        'GitHub',
        'Vercel',
        'Netlify',
        'IntelliJ IDEA',
        'Eclipse',
        'VS Code',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#050505] border-t border-white/12">
      <div className="container-custom">
        
        {/* Eyebrow */}
        <div className="section-tag">
          02 // TECHNICAL SKILLS
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#FAFAFA] mb-12">
          ENGINEERING CAPABILITIES.
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, index) => (
            <div key={group.category} className="clean-card p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-white/12 pb-3">
                  <h3 className="text-sm font-bold tracking-wider text-[#FAFAFA] uppercase">
                    {group.category}
                  </h3>
                  <span className="mono text-xs text-white/40">0{index + 1}</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-white/5 border border-white/12 text-xs font-medium text-[#FAFAFA] tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
