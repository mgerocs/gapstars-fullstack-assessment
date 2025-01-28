import { useEffect, useMemo, useState } from "react";
import { Item } from "../../api/types";
import { fetchData } from "../../api/fetch";
import { groupByIndustry } from "./groupByIndustry";
import { Card } from "../card/Card";

import "./List.css";

export function List() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const [data, setData] = useState<Item[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData();

        setData((data?.items) || null);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const companiesByIndustry = useMemo(
    () => (data ? groupByIndustry(data) : null),
    [data]
  );

  return (
    <>
      {error && <p>{error.message}</p>}
      {loading && <div className="loader"></div>}
      {companiesByIndustry && (
        <div className="cards">
          {Object.entries(companiesByIndustry).map(([industry, companies]) => (
            <Card key={industry} industry={industry} companies={companies} />
          ))}
        </div>
      )}
    </>
  );
}
