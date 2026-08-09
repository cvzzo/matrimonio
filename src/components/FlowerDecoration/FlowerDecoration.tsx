import fiori from "../../assets/nuovifiori.png?w=1600&quality=80&format=webp";
import "./FlowerDecoration.css";

export function FlowerDecoration() {
  return (
    <div className="ws-flowers">
      <img src={fiori} alt="decorazione floreale" />
    </div>
  );
}
