// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your __tests__ files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
import {mount} from "cypress/react";
import "cypress-react-selector";
import {store} from "@/store"; // Augment the Cypress namespace to include type definitions for

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }

    // interface Chainable {
    //   /**
    //    * Mounts a React node
    //    * @param component React Node to mount
    //    * @param options Additional options to pass into mount
    //    */
    //   mount(
    //     component: React.ReactNode,
    //     options?: MountOptions & { reduxStore?: EnhancedStore<RootState> },
    //   ): Cypress.Chainable<MountReturn>;
    // }
  }
}

interface CypressWithStore extends Cypress.Cypress {
  store?: typeof store;
}

declare global {
  interface Window {
    Cypress?: CypressWithStore;
  }
}

Cypress.Commands.add("mount", mount);

// Example use:
// cy.mount(<MyComponent />)
