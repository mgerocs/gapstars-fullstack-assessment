import { Item } from "../../api/types";

type CardProps = { industry: string; companies: Item[] };

export function Card({ industry, companies }: CardProps) {
  return (
    <article className="card">
      <div className="card-header">
        <div className="card-header-title">
          <h3>{industry}</h3>
          <h3>{companies.length}</h3>
        </div>
        <div className="card-header-subtitle">
          <h5>Name</h5>
          <h5>Total jobs available</h5>
        </div>
      </div>
      <div className="card-body">
        {companies.map((company, index) => (
          <>
            {/* There are items with the same uuid in the data, I had to use the index to make them unique */}
            <div key={`${company.uuid}-${index}`} className="card-body-item">
              <div>
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
                <h4>{company.name}</h4>
                <h4>{company.total_jobs_available}</h4>
              </div>
            </div>
          </>
        ))}
      </div>
    </article>
  );
}
