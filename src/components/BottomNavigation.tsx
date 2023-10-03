import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { BxsCalculator, BxsCog } from "./Boxicons";

const BottomNavigation = () => {
  const { t } = useTranslation();

  const listClassName = "flex-auto";

  const getNavLinkClassName = ({ isActive }: { isActive: boolean }) => {
    return `${
      isActive ? "fill-accent-500" : "fill-base-100"
    } hover:fill-accent-300 active:fill-accent-600 p-2 flex justify-center`;
  };

  const iconProps = {
    width: 44,
    height: 44,
  };

  return (
    <nav className="bg-base-900 text-base-100 fixed bottom-0 w-full">
      <ul className="flex mx-auto max-w-2xl">
        <li className={listClassName}>
          <NavLink to={t("pages:homepage")} className={getNavLinkClassName} end>
            <BxsCalculator {...iconProps} />
          </NavLink>
        </li>
        <li className={listClassName}>
          <NavLink to={t("pages:settings")} className={getNavLinkClassName}>
            <BxsCog {...iconProps} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigation;
