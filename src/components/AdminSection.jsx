
import { useState } from "react";
import { Search } from "lucide-react";

export default function AdminSection({
  title,
  subtitle,
  icon: Icon,
  description,
  features = []
}) {
  const [search, setSearch] = useState("");

  const filteredFeatures = features.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-section-page">
      <div className="page-header">
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      <section className="panel admin-section-card">
        <div className="admin-section-icon">
          {Icon && <Icon size={26} />}
        </div>

        <h2>{title}</h2>
        <p>{description}</p>

        <label className="admin-section-search">
          <Search size={17} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search ${title.toLowerCase()}...`}
          />
        </label>

        <div className="admin-feature-list">
          {filteredFeatures.length ? (
            filteredFeatures.map((feature) => (
              <div className="admin-feature" key={feature}>
                <span>{feature}</span>
                <span>›</span>
              </div>
            ))
          ) : (
            <p>No matching sections found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
