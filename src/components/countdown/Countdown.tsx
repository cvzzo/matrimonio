import Countdown from "react-countdown";
import "./Countdown.css"; // Assicurati di importare il CSS

const CountdownComponent = () => {
    // La tua data target: 20 Giugno 2027
    const dataTarget = new Date("2027-06-20T16:00:00").getTime();

    // Questa funzione costruisce la struttura HTML personalizzata
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <div className="countdown-completato">È il grande giorno!</div>;
        } else {
            // Aggiungiamo padStart per avere sempre due cifre (es. 09 invece di 9)
            return (
                <div className="flip-clock-container">
                    <div className="flip-unit">
                        <span className="number">{String(days).padStart(2, '0')}</span>
                        <span className="label">GIORNI</span>
                    </div>
                    <div className="flip-unit">
                        <span className="number">{String(hours).padStart(2, '0')}</span>
                        <span className="label">ORE</span>
                    </div>
                    <div className="flip-unit">
                        <span className="number">{String(minutes).padStart(2, '0')}</span>
                        <span className="label">MINUTI</span>
                    </div>
                    <div className="flip-unit">
                        <span className="number">{String(seconds).padStart(2, '0')}</span>
                        <span className="label">SECONDI</span>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="countdown-wrapper">
            <Countdown date={dataTarget} renderer={renderer} />
        </div>
    );
};

export default CountdownComponent;