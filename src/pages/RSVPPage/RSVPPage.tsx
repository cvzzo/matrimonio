import { useState } from "react";
import texture from "../../assets/white-texture.png";
import heroImg from "./Assets/DSC08492.jpg";
import { RSVP_DEADLINE } from "../../constants/wedding";
import "./RSVPPage.css";

type PersonType = "adulto" | "bambino";

interface Person {
  firstName: string;
  lastName: string;
  type: PersonType;
  hasAllergies: boolean;
  allergies: string;
}

const MAX_PEOPLE = 15;

function makePerson(): Person {
  return {
    firstName: "",
    lastName: "",
    type: "adulto",
    hasAllergies: false,
    allergies: "",
  };
}

interface AbsentPerson {
  firstName: string;
  lastName: string;
}

function makeAbsent(): AbsentPerson {
  return { firstName: "", lastName: "" };
}

export function RSVPPage() {
  // Il valore digitato è tenuto come stringa così la casella può restare vuota
  // mentre si scrive (altrimenti resterebbe bloccata su 0).
  const [countInput, setCountInput] = useState("1");
  const [people, setPeople] = useState<Person[]>([makePerson()]);
  const [attending, setAttending] = useState("si");
  const [absentInput, setAbsentInput] = useState("1");
  const [absentPeople, setAbsentPeople] = useState<AbsentPerson[]>([
    makeAbsent(),
  ]);

  function clampCount(raw: string) {
    const parsed = parseInt(raw, 10);
    // minimo 1 persona
    return Number.isNaN(parsed) ? 1 : Math.min(Math.max(parsed, 1), MAX_PEOPLE);
  }

  function resizePeople(n: number) {
    setPeople((prev) => {
      if (n === prev.length) return prev;
      const next = prev.slice(0, n);
      while (next.length < n) next.push(makePerson());
      return next;
    });
  }

  function resizeAbsent(n: number) {
    setAbsentPeople((prev) => {
      if (n === prev.length) return prev;
      const next = prev.slice(0, n);
      while (next.length < n) next.push(makeAbsent());
      return next;
    });
  }

  function handleCountChange(raw: string) {
    setCountInput(raw);
    if (raw === "") return; // consente di svuotare per riscrivere
    resizePeople(clampCount(raw));
  }

  function handleCountBlur() {
    const n = clampCount(countInput);
    resizePeople(n);
    setCountInput(String(n));
  }

  function handleAbsentCountChange(raw: string) {
    setAbsentInput(raw);
    if (raw === "") return;
    resizeAbsent(clampCount(raw));
  }

  function handleAbsentBlur() {
    const n = clampCount(absentInput);
    resizeAbsent(n);
    setAbsentInput(String(n));
  }

  function updateAbsent(
    index: number,
    field: keyof AbsentPerson,
    value: string
  ) {
    setAbsentPeople((prev) =>
      prev.map((p, i) => (i === index ? { ...p, [field]: value } : p))
    );
  }

  function updatePerson<K extends keyof Person>(
    index: number,
    field: K,
    value: Person[K]
  ) {
    setPeople((prev) =>
      prev.map((p, i) => (i === index ? { ...p, [field]: value } : p))
    );
  }

  const adults = people.filter((p) => p.type === "adulto").length;
  const children = people.filter((p) => p.type === "bambino").length;

  return (
    <div
      className="ws-texture-section ws-texture-section--full"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <section className="ws-hero-villa">
        <img src={heroImg} alt="RSVP" className="villa villa--bottom" />

        <div className="ws-hero-overlay" />
        <div className="ws-hero-title">
          <h1>R S V P</h1>
        </div>
      </section>
      <div className="ws-page">
        <p className="ws-page-sub">Ci sarete?</p>
        <div className="ws-letter">
          <p style={{ textAlign: "center" }}>
            Per aiutarci a organizzare tutto al meglio, vi chiediamo la
            cortesia di confermare la vostra presenza entro e non oltre il{" "}
            {RSVP_DEADLINE}.
          </p>
          <p style={{ textAlign: "center" }}>
            Qui sotto potrete confermare per voi e per la vostra famiglia,
            segnalandoci eventuali allergie, intolleranze o menù speciali.
          </p>
        </div>
        <div className="ws-form">
          <label>Partecipate?</label>
          <select
            value={attending}
            onChange={(e) => setAttending(e.target.value)}
          >
            <option value="si">Sì, ci saremo! 🎉</option>
            <option value="no">Purtroppo non riusciamo a venire 😢</option>
          </select>

          {attending === "no" && (
            <>
              <label>In quanti non riuscite a venire?</label>
              <input
                type="number"
                inputMode="numeric"
                min={1}
                max={MAX_PEOPLE}
                value={absentInput}
                onChange={(e) => handleAbsentCountChange(e.target.value)}
                onBlur={handleAbsentBlur}
              />

              {absentPeople.length > 0 && (
                <div className="ws-rsvp-people">
                  {absentPeople.map((person, i) => (
                    <div className="ws-rsvp-card" key={i}>
                      <span className="ws-rsvp-card-num">Persona {i + 1}</span>
                      <div className="ws-rsvp-card-fields">
                        <input
                          type="text"
                          placeholder="Nome"
                          value={person.firstName}
                          onChange={(e) =>
                            updateAbsent(i, "firstName", e.target.value)
                          }
                        />
                        <input
                          type="text"
                          placeholder="Cognome"
                          value={person.lastName}
                          onChange={(e) =>
                            updateAbsent(i, "lastName", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {attending === "si" && (
            <>
              <label>Quante persone partecipano?</label>
              <input
                type="number"
                inputMode="numeric"
                min={1}
                max={MAX_PEOPLE}
                value={countInput}
                onChange={(e) => handleCountChange(e.target.value)}
                onBlur={handleCountBlur}
              />

              {people.length > 0 && (
                <>
                  <div className="ws-rsvp-people">
                    {people.map((person, i) => (
                      <div className="ws-rsvp-card" key={i}>
                        <span className="ws-rsvp-card-num">Persona {i + 1}</span>
                        <div className="ws-rsvp-card-fields">
                          <input
                            type="text"
                            placeholder="Nome"
                            value={person.firstName}
                            onChange={(e) =>
                              updatePerson(i, "firstName", e.target.value)
                            }
                          />
                          <input
                            type="text"
                            placeholder="Cognome"
                            value={person.lastName}
                            onChange={(e) =>
                              updatePerson(i, "lastName", e.target.value)
                            }
                          />
                          <select
                            value={person.type}
                            onChange={(e) =>
                              updatePerson(
                                i,
                                "type",
                                e.target.value as PersonType
                              )
                            }
                          >
                            <option value="adulto">Adulto</option>
                            <option value="bambino">
                              Bambino (sotto i 9 anni)
                            </option>
                          </select>
                        </div>

                        <span className="ws-rsvp-card-label">
                          Ha intolleranze o allergie?
                        </span>
                        <div className="ws-rsvp-radio">
                          <label>
                            <input
                              type="radio"
                              name={`allergie-${i}`}
                              checked={person.hasAllergies}
                              onChange={() =>
                                updatePerson(i, "hasAllergies", true)
                              }
                            />
                            Sì
                          </label>
                          <label>
                            <input
                              type="radio"
                              name={`allergie-${i}`}
                              checked={!person.hasAllergies}
                              onChange={() => {
                                updatePerson(i, "hasAllergies", false);
                                updatePerson(i, "allergies", "");
                              }}
                            />
                            No
                          </label>
                        </div>
                        {person.hasAllergies && (
                          <textarea
                            className="ws-rsvp-card-allergies"
                            rows={2}
                            placeholder="Indica allergie, intolleranze o menù speciali..."
                            value={person.allergies}
                            onChange={(e) =>
                              updatePerson(i, "allergies", e.target.value)
                            }
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="ws-rsvp-summary">
                    {adults} {adults === 1 ? "adulto" : "adulti"} ·{" "}
                    {children} {children === 1 ? "bambino" : "bambini"}
                  </p>
                </>
              )}
            </>
          )}

          {/* TODO: Collega il form a un backend / servizio (Formspree, EmailJS, Supabase, ecc.) */}
          <button type="button">Invia conferma</button>
        </div>
      </div>
    </div>
  );
}
