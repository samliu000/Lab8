describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it("Slider changes when volume input changes", () => {
    cy.get("#volume-number").clear().type('75');
    cy.get('#volume-slider').then( ($el) => {
      expect($el).to.have.value(75);
    });
  });

  it("Volume input changes when slider changes", () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it("Audio volume changes when slider changes", () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', .33);
    });
  });

  it("Image and sound source change when party horn radio buttons", () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg");
    });
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3');
    });
  });

  it("Volume image changes", () => {
    cy.get("#volume-number").clear().type('80');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg');
    });
    cy.get("#volume-number").clear().type('50');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg');
    });
    cy.get("#volume-number").clear().type('20');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg');
    });
    cy.get("#volume-number").clear().type('-100');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg');
    });
  });

  it("Honk button disabled", () => {
    cy.get("#volume-number").clear().type(' ');
    cy.get('#honk-btn').then(($el) => {
      expect($el).attr('disabled');
    });
    cy.get("#volume-number").clear().type('a');
    cy.get('#honk-btn').then(($el) => {
      expect($el).attr('disabled');
    });
  });

  it("Out of range error", () => {
    cy.get("#volume-number").clear().type('10000');
    cy.get('#party-horn-form').within(() => {
      cy.get('input:invalid').should('have.length', 1);
    });
  });

});
