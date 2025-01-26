const API_URL = "http://localhost:8080/data";

export async function fetchData() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
