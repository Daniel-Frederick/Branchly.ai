import React, { useState, useEffect } from "react";

const TestComponent = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/test");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Test Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Created at:{" "}
            {new Date(item.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestComponent;
