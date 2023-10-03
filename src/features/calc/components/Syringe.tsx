import { BsxInjection } from "../../../components/Boxicons";

function Syringe({
  dosageInMl,
  number,
}: {
  number: number;
  dosageInMl: number;
}) {
  return (
    <div className="flex items-center justify-center gap-2 text-base-100 text-xl">
      <span>{number}</span>
      <BsxInjection className={"fill-base-100"} />
      <span>{dosageInMl} ml</span>
    </div>
  );
}

export default Syringe;
