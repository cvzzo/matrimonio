import { useEffect, useState } from "react";
import type { CountdownTime } from "../types";

export function useCountdown(targetDate: Date): CountdownTime {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    giorni: 0,
    ore: 0,
    minuti: 0,
    secondi: 0,
  });
  useEffect(() => {
    const calc = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0)
        return setTimeLeft({ giorni: 0, ore: 0, minuti: 0, secondi: 0 });
      setTimeLeft({
        giorni: Math.floor(diff / 86400000),
        ore: Math.floor((diff % 86400000) / 3600000),
        minuti: Math.floor((diff % 3600000) / 60000),
        secondi: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const t = setInterval(calc, 1000);
    return () => clearInterval(t);
  }, [targetDate]);
  return timeLeft;
}
