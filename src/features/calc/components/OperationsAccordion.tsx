import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  getIsOpenOperationsFromStorage,
  setIsOpenOperationsToStorage,
} from "../utils/isOpenOperations";
import Accordion from "../../../components/Accordion";

function OperationsAccordion({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();
  const [defaultIsOpen, setDefaultIsOpen] = useState(false);

  useEffect(() => {
    getIsOpenOperationsFromStorage().then((isOpen) => {
      setDefaultIsOpen(isOpen);
    });
  }, []);

  return (
    <Accordion
      title={t("common:calc.operations")}
      defaultIsOpen={defaultIsOpen}
      onOpen={async () => await setIsOpenOperationsToStorage(true)}
      onClose={async () => await setIsOpenOperationsToStorage(false)}
    >
      {children}
    </Accordion>
  );
}

export default OperationsAccordion;
