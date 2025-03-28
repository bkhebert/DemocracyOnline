import React, { useState, useCallback, useEffect } from "react";
import axios from 'axios';

const hotTopics = ["Abortion", "Tariffs", "Gun Control", "The Border", "DOGE", "Middle East"];

export default function HotTopics() {
  const [topics, setTopics] = useState([]);

  const getTopics = useCallback(() => {
    axios.get('/api/topic')
    .then(({ data }) => {
      setTopics(data);
    })
    .catch((error) => {
      console.error('Failed to getTopics:', error);
    });
  }, []);

  useEffect(() => {
    getTopics();
  }, [getTopics]);

  return (
    <div className="flex flex-row flex-wrap gap-4 py-4 max-w-[75%] mx-auto justify-center">
      {topics.map((topic) => (
        <div
          key={topic.id}
          className="border-accent-gold border-2 rounded-xl font-bold text-neutral-dark text-center px-4"
        >
          {topic.name}
        </div>
      ))}
    </div>
  );
}
