import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Language = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(i18n.language);
  }, [i18n.language, navigate]);

  return null;
};

export default Language;
