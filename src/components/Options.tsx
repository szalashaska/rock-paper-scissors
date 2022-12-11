import Button from "./Button";
import "./Options.scss";

function Options() {
  return (
    <div className="options-container">
      <Button avatar="rock" />
      <Button avatar="scissors" />
      <Button avatar="paper" />
      <Button avatar="lizard" />
      <Button avatar="spock" />
    </div>
  );
}

export default Options;
