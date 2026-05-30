import { tools, categories } from "@/lib/tools";

export default function Home() {
  const grouped = Object.keys(categories).map((cat) => ({
    ...categories[cat as keyof typeof categories],
    tools: tools.filter((t) => t.category === cat),
  }));

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Free Online Developer Tools</h1>
        <p className="text-[var(--text-secondary)] text-lg">
          No signup, no data collection. Everything runs in your browser.
        </p>
      </div>

      {grouped.map((group) => (
        <div key={group.label} className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-[var(--text-secondary)]">{group.label}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.tools.map((tool) => (
              <a
                key={tool.id}
                href={tool.path}
                className="block p-5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl w-10 h-10 flex items-center justify-center rounded-md bg-[var(--accent)] text-white font-mono">
                    {tool.icon}
                  </span>
                  <h3 className="font-semibold text-lg">{tool.name}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{tool.description}</p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
