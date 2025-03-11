const Api_URL = "http://localhost:5000";

export const getData = async () => {
    const response = await fetch(`${Api_URL}/`); // Backend URL sahi likhein
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
};
