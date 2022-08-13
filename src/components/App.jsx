import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function emojis(emoji) {
  return (
    <Entry
      key={emoji.key}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(emojis)}</dl>
    </div>
  );
}

export default App;
