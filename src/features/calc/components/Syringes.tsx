import Syringe from "./Syringe";
import roundToFirstDecimalPlace from "../utils/roundToFirstDecimalPlace";

const Syringes = ({
  syringeSizeInMl,
  dose,
}: {
  syringeSizeInMl: number;
  dose: number;
}) => {
  const numberOfSyringes = dose / syringeSizeInMl;
  const numberOfFullSyringes = Math.floor(numberOfSyringes);
  const rest = dose - numberOfFullSyringes * syringeSizeInMl;

  const syringes = [];

  for (let i = 0; i < numberOfFullSyringes; i++) {
    syringes.push(<Syringe key={i + 1} number={i + 1} dosageInMl={50} />);
  }

  if (rest > 0) {
    syringes.push(
      <li key={numberOfFullSyringes + 1}>
        <Syringe
          number={numberOfFullSyringes + 1}
          dosageInMl={roundToFirstDecimalPlace(rest)}
        />
      </li>
    );
  }

  return <ul className="space-y-4">{syringes}</ul>;
};

export default Syringes;
