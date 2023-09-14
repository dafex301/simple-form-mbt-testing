export const feedbackState = {
  id: "feedback",
  initial: "home",
  on: {
    ESCAPE: "closed",
    CLOSE: "closed",
  },
  states: {
    home: {
      on: {
        GREAT: "thankYou",
        BAD: "form",
      },
    },
    form: {
      on: {
        SUBMIT: "thankYou",
        CANCEL: "home",
      },
    },
    thankYou: {
      on: {},
    },
    closed: {
      type: "final",
      on: {},
    },
  },
};
