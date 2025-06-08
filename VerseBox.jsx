import React, { useState } from "react";

export default function VerseBox({ verse, language }) {
  const [showPurport, setShowPurport] = useState(false);

  const getTranslation = () => {
    switch (language) {
      case "sanskrit":
        return verse.sloka_sanskrit;
      case "english":
        return verse.translation_english;
      case "bengali":
        return verse.translation_bangla;
      case "hindi":
        return verse.translation_hindi || "अनुवाद उपलब्ध नहीं है";
      default:
        return verse.translation_english;
    }
  };

  const getPurport = () => {
    if (language === "bengali") return verse.purport_bangla;
    return verse.purport_english;
  };

  return (
    <div className="border rounded-md p-4 bg-white shadow">
      <div className="font-serif text-lg whitespace-pre-line">
        {getTranslation()}
      </div>

      {/* Sanskrit Word meanings */}
      {language === "sanskrit" && verse.word_meanings && (
        <details className="mt-2 text-sm text-gray-600">
          <summary>Word Meanings</summary>
          <ul className="list-disc list-inside">
            {Object.entries(verse.word_meanings).map(([word, meaning]) => (
              <li key={word}>
                <strong>{word}</strong>: {meaning}
              </li>
            ))}
          </ul>
        </details>
      )}

      {/* Purport toggle */}
      {(language === "english" || language === "bengali") && getPurport() && (
        <div className="mt-3">
          <button
            onClick={() => setShowPurport(!showPurport)}
            className="text-blue-600 underline"
          >
            {showPurport ? "Hide Purport" : "Show Purport"}
          </button>
          {showPurport && (
            <p className="mt-2 text-gray-700 whitespace-pre-line">{getPurport()}</p>
          )}
        </div>
      )}
    </div>
  );
}
