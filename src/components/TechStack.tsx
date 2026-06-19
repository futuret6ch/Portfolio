"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Layout, Server, Sparkles, Terminal } from "lucide-react";
import { useState } from "react";

interface TechItem {
  name: string;
  category: string;
}

const TECH_ITEMS: TechItem[] = [
  // AI & ML
  { name: "Generative AI", category: "AI & ML" },
  { name: "AI Agents", category: "AI & ML" },
  { name: "LLMs", category: "AI & ML" },
  { name: "Prompt Engineering", category: "AI & ML" },
  { name: "RAG", category: "AI & ML" },
  { name: "NLP", category: "AI & ML" },
  { name: "Machine Learning", category: "AI & ML" },

  // AI Frameworks
  { name: "LangChain", category: "Frameworks" },
  { name: "LangGraph", category: "Frameworks" },
  { name: "CrewAI", category: "Frameworks" },
  { name: "LlamaIndex", category: "Frameworks" },
  { name: "OpenAI API", category: "Frameworks" },
  { name: "Gemini API", category: "Frameworks" },

  // Frontend
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Three.js", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "REST APIs", category: "Backend" },

  // Database
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Redis", category: "Database" },

  // Cloud & DevOps
  { name: "AWS", category: "Cloud & DevOps" },
  { name: "Azure", category: "Cloud & DevOps" },
  { name: "Docker", category: "Cloud & DevOps" },
  { name: "Kubernetes", category: "Cloud & DevOps" },
  { name: "GitHub", category: "Cloud & DevOps" },
  { name: "CI/CD", category: "Cloud & DevOps" },
];

const CATEGORIES = [
  { id: "All", label: "All Stack", icon: Cpu },
  { id: "AI & ML", label: "AI & Machine Learning", icon: Sparkles },
  { id: "Frameworks", label: "AI Frameworks", icon: Terminal },
  { id: "Frontend", label: "Frontend", icon: Layout },
  { id: "Backend", label: "Backend & APIs", icon: Server },
  { id: "Database", label: "Databases", icon: Database },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredItems =
    activeCategory === "All"
      ? TECH_ITEMS
      : TECH_ITEMS.filter((item) => item.category === activeCategory || (activeCategory === "Database" && item.category === "Database") || (activeCategory === "Frameworks" && item.category === "Frameworks"));

  // Adjust filters to cover Cloud & DevOps as well under "All" or add it as a specific category
  const categoriesWithCloud = [
    ...CATEGORIES,
    { id: "Cloud & DevOps", label: "Cloud & DevOps", icon: Server }
  ];

  const currentFiltered = activeCategory === "All" 
    ? TECH_ITEMS 
    : TECH_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="w-full space-y-10">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
        {categoriesWithCloud.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all border ${
                isActive
                  ? "border-glow-purple bg-glow-purple/15 text-white shadow-md shadow-glow-purple/10"
                  : "border-white/5 bg-white/5 text-text-secondary hover:border-white/10 hover:text-white"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Badges Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5"
      >
        {currentFiltered.map((tech) => (
          <motion.div
            layout
            key={tech.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -3, scale: 1.02 }}
            className="flex items-center justify-between rounded-xl border border-white/8 bg-card-glass/40 px-4 py-3.5 backdrop-blur-sm transition-colors hover:border-glow-blue/20 group"
          >
            <span className="text-sm font-medium tracking-wide text-white group-hover:text-glow-blue transition-colors">
              {tech.name}
            </span>
            <div className={`h-1.5 w-1.5 rounded-full ${
              tech.category === "AI & ML" 
                ? "bg-glow-accent shadow-md shadow-glow-accent" 
                : tech.category === "Frameworks" 
                ? "bg-glow-purple shadow-md shadow-glow-purple" 
                : tech.category === "Frontend" 
                ? "bg-glow-blue shadow-md shadow-glow-blue" 
                : "bg-teal-400 shadow-md shadow-teal-400"
            }`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
