import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./features/settings/pages/Settings";
import Calc from "./features/calc/pages/Calc";
import Guide from "./features/guide/components/Guide";
import BottomNavigation from "./components/BottomNavigation";
import "./localization/i18n";
import NotFound from "./components/NotFound";
import { useTranslation } from "react-i18next";
import Provider from "./components/Provider";
import Language from "./components/Language";

function App() {
  const { t } = useTranslation("pages");

  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} Component={Language}></Route>
          <Route path={t("homepage")} Component={Calc}></Route>
          <Route path={t("settings")} Component={Settings}></Route>
          <Route path={t("guide")} Component={Guide}></Route>
          <Route path="*" Component={NotFound} />
        </Routes>
        <BottomNavigation />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
