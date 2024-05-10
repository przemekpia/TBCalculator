import React, { useState } from "react";
import CustomButton from "./CustomButton";

const InstructionWidget = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <CustomButton onClick={handleClick}>
        {showText ? "Schowaj" : "Pokaż"} Instrukcję
      </CustomButton>
      {showText && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "70vw" }}>
            <p style={{ textAlign: "center" }}>
              Pierwszym krokiem jest wybranie jednej z czterech opcji obliczania
              armi. Będzie to decydowało jakie jednostki mają zostać
              uwzględnione w planowanej przez ciebie armi. Następnym krokiem
              jest uzupełnienie zakresów odpowiednich typów jednostek. Przykład:
              Jeżeli posiadamy jednostki g1, g2 oraz g3 i chcemy uwzglednic je
              wszystkie to należy wpisać zakres od 1 do 3. Musimy tak postąpić
              dla wszystkich jednostek, które będą w naszej armi. Następnie
              należy uzupełnić bonusy jednostek. CHODZI NAM TUTAJ O BONUS TO
              ZDROWIA. Najłatwiej jest to sprawdzić poprzez wejście do dowolnego
              przygotowania do ataku wybrania odpowiedniego/odpowiednich
              kapitanow do ataku i wejscie w szczegóły dowolnej jednostki
              wybranego typu. Tam będzie widnieć informacja na temat porzadanych
              statystyk. Ostatnim krokiem jest wprowadzenie pojemności naszej
              armi. Po uzupełnieniu danych wystarczny nacisnąć przycisk oblicz.
              W odpowiedniej tabeli zostaną wyświetlone ilości jednostek jakie
              należy wprowadzić do armi w grze.
            </p>
            <p style={{ textAlign: "center" }}>Sugestie od autora:</p>
            <p style={{ textAlign: "center" }}>
              1. Wybór potworów oraz najmów jest opcjonalny.
            </p>
            <p style={{ textAlign: "center" }}>
              2. Ataki z wyliczeń będą najskuteczniejsze w atakach na na
              potwory, gdzie poszczególne jednostki będą ginąć jednocześnie całe
              np. blaszak.
            </p>
            <p style={{ textAlign: "center" }}>
              3. Kalkulator nie bedzie działał poprawnie w przypadku gdy bonusy
              pomiedzy poszczegolnymi typami jednestek (łucznik, włócznik,
              jazda) będą miały bardzo różne bonusy do zdrowia. Stąd w atakach
              sugeruje się stosowanie kapitanów oraz artefaktów dających bonusy
              na całe grupy jednestek (specjaliści, gwardziści, potwory, cała
              armia)
            </p>
            <p style={{ textAlign: "center" }}>
              4. W przypadku wątpliwości co do działania aplikacji oraz wystąpienia jakiś problemów/błędów prosze o kontakt w wiadomości w grze na konto przemekpia
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructionWidget;
