import { Item } from "../../api/types";
import "./Card.css";

type CardProps = { industry: string; companies: Item[] };

export function Card({ industry, companies }: CardProps) {
  return (
    <article className="card">
      <div className="card-header">
        <div className="card-header-title">
          <span className="industry">{industry}</span>
          <span>{companies.length}</span>
        </div>
        <div className="card-header-subtitle">
          <span>Name</span>
          <span>Total jobs available</span>
        </div>
        <div className="divider"></div>
      </div>
      <div className="card-body">
        {companies.map((company) => (
          <div key={company.uuid} className="card-body-item">
            {/* Some images are missing, I'm using a placeholder as fallback */}
            <img
              width={32}
              height={32}
              src={company.images["32x32"]}
              alt={company.name}
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://placehold.co/32x32/orange/black";
              }}
            />
            <span className="company">{company.name}</span>
            <span>{company.total_jobs_available}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
