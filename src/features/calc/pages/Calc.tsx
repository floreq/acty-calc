import Card from "../../../components/Card";
import { useTranslation } from "react-i18next";
import Title from "../../../components/Title";
import Wrapper from "../../../components/Wrapper";
import { useState, useRef, useEffect } from "react";
import roundToFirstDecimalPlace from "../utils/roundToFirstDecimalPlace";
import Syringes from "../components/Syringes";
import Paragraph from "../../../components/Paragraph";
import OperationsAccordion from "../components/OperationsAccordion";
import { useSettings } from "../../../context/settingsContext";
import getWeightFromStorage from "../utils/getWeightFromStorage";
import setWeightToStorage from "../utils/setWeightToStorage";

const DEFAULT_WEIGHT = 60;
const MIN_INPUT_WEIGHT = 0;
const MAX_INPUT_WEIGHT = 123;

const Calc = () => {
  const { settings } = useSettings();
  const { t } = useTranslation();
  const [weight, setWeight] = useState<number | undefined>(
    settings.rememberLastWeight
      ? getWeightFromStorage() ?? DEFAULT_WEIGHT
      : DEFAULT_WEIGHT
  );

  const weightInputRef = useRef<HTMLInputElement>(null);

  const selectWeightInputText = () => {
    weightInputRef?.current?.select?.();
  };

  const handleTypeWeight = (newWeight: string) => {
    const value = Number(newWeight);

    if (newWeight === "") {
      setWeight(undefined);
    }

    if (isNaN(value)) {
      return;
    }

    if (value < MIN_INPUT_WEIGHT) {
      return;
    }

    if (value > MAX_INPUT_WEIGHT) {
      return;
    }

    setWeight(value);

    if (settings.rememberLastWeight) {
      setWeightToStorage(value);
    }
  };

  const getWeight = () => {
    return weight ?? 0;
  };

  useEffect(() => {
    const focusWeightInputText = () => {
      if (settings.autoFocusWeightField) {
        weightInputRef?.current?.focus?.();
      }
    };

    focusWeightInputText();
  }, [settings.autoFocusWeightField]);

  const calculation1Result = roundToFirstDecimalPlace(getWeight() * 0.9);
  const calculation1Label = `${getWeight()} · 0.9 = ${calculation1Result}`;

  const calculation2Result = roundToFirstDecimalPlace(calculation1Result * 0.1);
  const calculation2Label = `${calculation1Result} · 10% = ${calculation2Result}`;

  const calculation3Result = roundToFirstDecimalPlace(
    calculation1Result - calculation2Result
  );
  const calculation3Label = `${calculation1Result} - ${calculation2Result} = ${calculation3Result}`;

  return (
    <Wrapper className="space-y-4">
      <Card Component="label" className="cursor-pointer block">
        <Title className="text-center mb-4">
          {t("common:calc.patientWeight")}
        </Title>
        <input
          value={weight ? weight.toString() : ""}
          onChange={(e) => {
            handleTypeWeight(e.target.value);
          }}
          onFocus={selectWeightInputText}
          ref={weightInputRef}
          className="text-5xl text-accent-500 font-bold mx-auto block text-center placeholder-accent-500"
          style={{ background: "none", maxWidth: "4ch" }}
          placeholder="-"
          inputMode="numeric"
        />
      </Card>
      <Card>
        {calculation3Result ? (
          <>
            <Title className="mb-4 text-center">{`${t(
              "common:calc.bolus"
            )} ${calculation2Result}`}</Title>
            <Syringes syringeSizeInMl={50} dose={calculation3Result} />
          </>
        ) : (
          <Paragraph className="text-center">
            {t("common:calc.enterPatientWeight")}
          </Paragraph>
        )}
      </Card>
      <OperationsAccordion>
        <div className="space-y-2 text-base-100 text-center text-xl">
          <Paragraph>{calculation1Label}</Paragraph>
          <Paragraph>{calculation2Label}</Paragraph>
          <Paragraph>{calculation3Label}</Paragraph>
        </div>
      </OperationsAccordion>
    </Wrapper>
  );
};

export default Calc;
