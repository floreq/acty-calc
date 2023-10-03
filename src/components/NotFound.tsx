import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(t("pages:homepage"));
  }, [navigate, t]);

  return <div />;
};

export default NotFound;
