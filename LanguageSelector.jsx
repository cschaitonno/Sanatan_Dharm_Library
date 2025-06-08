import React from "react";

const languages = [
  { code: "sanskrit", label: "संस्कृत" },
  { code: "english", label: "English" },
  { code: "bengali", label: "বাংলা" },
  { code: "hindi", label: "हिन्दी" },
];

export default function LanguageSelector({ language, setLanguage }) {
  return (
    <div className="flex justify-center space-x-4">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className={`px-3 py-1 rounded ${
            language === code
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}