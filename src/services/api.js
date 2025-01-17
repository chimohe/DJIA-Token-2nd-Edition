const BASE_URL = "https://api.example.com"; // Replace with the actual API base URL

/**
 * Fetch DJIA data from the API
 * @returns {Promise<Object>} DJIA data including current value, change, and market cap
 */
export const fetchDJIAData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/djia`);
    if (!response.ok) {
      throw new Error("Failed to fetch DJIA data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching DJIA data:", error);
    throw error;
  }
};
