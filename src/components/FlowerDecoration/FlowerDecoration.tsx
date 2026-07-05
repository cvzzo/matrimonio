import fiori from "../../assets/nuovifiori.png";
import "./FlowerDecoration.css";

export function FlowerDecoration() {
  return (
    <div className="ws-flowers">
      <img
        src={fiori}
        alt="decorazione floreale"
        style={{ filter: "saturate(0.8) brightness(0.95)" }}
      />
    </div>
  );
}
