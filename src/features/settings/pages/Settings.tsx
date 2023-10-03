import Wrapper from "../../../components/Wrapper";
import Card from "../../../components/Card";
import Title from "../../../components/Title";
import { useTranslation } from "react-i18next";
import Paragraph from "../../../components/Paragraph";
import setLanguageCodeToStorage from "../../../localization/utils/setLanguageCodeToStorage";
import { useNavigate } from "react-router-dom";
import { useSettings } from "../../../context/settingsContext";
import Checkbox from "../../../components/Inputs/Checkbox";

const Settings = () => {
  const { settings, updateSettings } = useSettings();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const optionProps = {
    className: "text-lg text-base-900",
  };

  console.log(settings.rememberLastWeight);

  return (
    <Wrapper className="space-y-4">
      <Card>
        <Title className="mb-4">{t("common:settings.remember.title")}</Title>
        <Paragraph>{t("common:settings.remember.paragraph1")}</Paragraph>
        <Paragraph>{t("common:settings.remember.paragraph2")}</Paragraph>
      </Card>
      <Card>
        <Title Component="h2" className="mb-4">
          {t("common:settings.settings.title")}
        </Title>
        <Checkbox
          label={t("common:settings.settings.rememberLastWeight.label")}
          id={"rememberLastWeight"}
          checked={settings.rememberLastWeight}
          onChange={() =>
            updateSettings("rememberLastWeight", !settings.rememberLastWeight)
          }
        />
      </Card>
      <Card>
        <Title Component="h2" className="mb-4">
          {t("common:settings.language")}
        </Title>
        <select
          className="text-lg text-accent-500 active:text-accent-600 hover:text-accent-300 w-full"
          style={{ background: "unset" }}
          onChange={async (e) => {
            const value = e.target.value;

            i18n.changeLanguage(value);
            await setLanguageCodeToStorage(value);

            navigate(t("pages:settings"));
          }}
          value={i18n.language}
        >
          <option value={"pl"} {...optionProps}>
            Polski
          </option>
          <option value={"en"} {...optionProps}>
            English
          </option>
        </select>
      </Card>
      <Card>
        <Paragraph>
          {t("common:settings.mail.paragraph1")}{" "}
          <a
            className="underline text-accent-500 hover:text-accent-300 active:text-accent-600"
            href="mailto:actycalc@piotrflorczak.pl"
          >
            actycalc@piotrflorczak.pl
          </a>
        </Paragraph>
      </Card>
      <Card>
        <Paragraph className="text-center">
          {t("common:settings.copyright", { year: new Date().getFullYear() })}
        </Paragraph>
      </Card>
    </Wrapper>
  );
};

export default Settings;
