import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meaning(props) {
  console.log(props.meaning);

  let hasSynonyms = props.meaning.synonyms && props.meaning.synonyms.length > 0;

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition"> {props.meaning.definition}</div>
      <div className="example">
        <em>{props.meaning.example}</em>
      </div>
      <div className="has-synonyms">
        {hasSynonyms && (
          <>
            <Synonyms synonyms={props.meaning.synonyms} />
          </>
        )}
      </div>
    </div>
  );
}
