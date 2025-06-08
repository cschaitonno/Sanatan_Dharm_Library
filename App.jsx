import React, { useState, useEffect } from "react";
import LanguageSelector from "./components/LanguageSelector";
import VerseBox from "./components/VerseBox";

export default function App() {
  const [language, setLanguage] = useState("english");
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    fetch("/data/chapter1.json")
      .then((res) => res.json())
      .then((data) => setVerses(data.verses))
      .catch((err) => console.error("Failed to load verses:", err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Bhagavad Gita Chapter 1
      </h1>

      <LanguageSelector language={language} setLanguage={setLanguage} />

      <div className="mt-6 space-y-6">
        {verses.map((verse) => (
          <VerseBox key={verse.verse_number} verse={verse} language={language} />
        ))}
      </div>
    </div>
  );
}
