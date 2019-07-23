import React from "react";
import "../styles/input.sass";

const Input = ({ option, change, submit }) => {
  return (
    <form className="form" onSubmit={submit}>
      <p>Choose a city:</p>
      <select name="cities" value={option} onChange={change}>
        <option value="Powiat warszawski zachodni">Warsaw</option>
        <option value="Powiat radomski">Radom</option>
        <option value="Powiat krakowski">Kraków</option>
        <option value="Powiat łódzki wschodni">Łódź</option>
        <option value="Powiat wrocławski">Wrocław</option>
        <option value="Powiat poznański">Poznań</option>
        <option value="Powiat gdański">Gdańsk</option>
        <option value="Powiat szczecinecki">Szczecin</option>
        <option value="Powiat lubliniecki">Lublin</option>
        <option value="Powiat białostocki">Białystok</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;
