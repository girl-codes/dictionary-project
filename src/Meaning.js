import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition"> {props.meaning.definition}</div>
      <br />
      <div className="example">
        <em>{props.meaning.example}</em>
      </div>
      <br />
      <strong> Similar: </strong> <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
