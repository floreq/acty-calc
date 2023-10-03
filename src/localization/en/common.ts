const common = {
  version: "ActyCalc, version {{number}}",
  calc: {
    patientWeight: "Patient Weight",
    bolus: "Bolus",
    enterPatientWeight: "Enter patient weight",
    operations: "Operations",
  },
  settings: {
    language: "Language",
    remember: {
      title: "📢 Remember!",
      paragraph1:
        "We are not doctors, we created this application out of passion. Treat any received results as your own analysis.",
      paragraph2:
        "The creators are not responsible for any potential errors in the results.",
    },
    settings: {
      title: "Settings",
      autoFocusWeightField: {
        label: "Automatically select weight file when opening the application",
      },
      rememberLastWeight: {
        label: "Remember last typed weight",
      },
    },
    mail: {
      paragraph1: "Issues can be reported to",
    },
    copyright:
      "© {{year}} ActyCalc. All rights reserved. Authors Bartosz Skórzak i Piotr Florczak",
  },
  oneTimeAlert: {
    title: "Remember",
    message:
      "We are not doctors, we created this application out of passion. Treat any received results as your own analysis.\n\nThe creators are not responsible for any potential errors in the results.",
    button: "I use ActyCalc at my own risk",
  },
};

export default common;
