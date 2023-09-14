import { createMachine } from "xstate";

const feedbackMachine = createMachine({
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
      meta: {
        test: () => {
          cy.contains("Feedback Form");
          cy.contains("Great 😁");
          cy.contains("Bad 😡");
        },
      },
    },
    form: {
      on: {
        SUBMIT: "thankYou",
        CANCEL: "home",
      },
      meta: {
        test: () => {
          cy.contains("Feedback Form");
          cy.contains("Submit");
          cy.contains("Cancel");
        },
      },
    },
    thankYou: {
      on: {},

      meta: {
        test: function () {
          cy.contains("Thanks for your feedback 😁");
        },
      },
    },
    closed: {
      type: "final",
      on: {},
      meta: {
        test: function () {
          cy.contains("Closed");
        },
      },
    },
  },
});

export default feedbackMachine;
