import "../../support/commands";

const posX = 0;
const posY = 0;
const posZ = 0;
const color = 0x0;
const maxInteger = Number.MAX_SAFE_INTEGER;
const negativeInteger = -1;
const zero = 0;
const one = 1;
const white = "#ffffff";
const red = "#ff0000";
const black = "#000000";
const word = "abc";
const decimal = 0.0;

const options = {
    color: color,
    position: {
        x: posX,
        y: posY,
        z: posZ
    }
};

describe('3D Shape Creation Testing', () => {
    beforeEach(() => {
            cy.visit('http://localhost:8080/');
            cy.get('.loader').should('not.exist') // wait for page to load
            cy.get('#view', { timeout: 1000 }).should('be.visible');
        }
    )

    afterEach(() => {
        cy.clearAllSessionStorage()
    })

    describe('Custom Commands', () => {
        it('should call helloWorld', () => {
            cy.helloWorld();
        });
    });

    describe("Success Cases", () => {
        describe("Check UI Elements", () => {
            it("Check Buttons", () => {
                cy.get('button#add_sphere').should('be.visible');
                cy.get('button#add_cube').should('be.visible');
                cy.get('button#remove_last').should('be.visible');
                cy.get('button#remove_all').should('be.visible');
            })

            it("Check Input Fields", () => {
                cy.get('input#pos_x').should('be.visible');
                cy.get('input#pos_y').should('be.visible');
                cy.get('input#pos_z').should('be.visible');
                cy.get('input#color').should('be.visible');
            })

            it("Position Input Fields should Accept MAX_SAFE_INTEGER", () => {
                cy.get("input#pos_x").invoke('val', "" + maxInteger.toString()).
                trigger('change');
                cy.get("input#pos_x").should('have.value', maxInteger.toString());
                cy.get("input#pos_y").invoke('val', "" + maxInteger.toString()).
                trigger('change');
                cy.get("input#pos_y").should('have.value', maxInteger.toString());
                cy.get("input#pos_z").invoke('val', "" + maxInteger.toString()).
                trigger('change');
                cy.get("input#pos_z").should('have.value', maxInteger.toString());
            })

            it("Position Input Fields should Accept Negative Integer", () => {
                cy.get("input#pos_x").invoke('val', "" + negativeInteger.toString()).
                trigger('change').should('have.value', negativeInteger.toString());
                cy.get("input#pos_y").invoke('val', "" + negativeInteger.toString()).
                trigger('change').should('have.value', negativeInteger.toString());
                cy.get("input#pos_z").invoke('val', "" + negativeInteger.toString()).
                trigger('change').should('have.value', negativeInteger.toString());
            })

            it("Position Input Fields should Accept Zero Value", () => {
                cy.get("input#pos_x").invoke('val', "" + zero.toString()).
                trigger('change');
                cy.get("input#pos_x").should('have.value', zero.toString());
                cy.get("input#pos_y").invoke('val', "" + zero.toString()).
                trigger('change');
                cy.get("input#pos_y").should('have.value', zero.toString());
                cy.get("input#pos_z").invoke('val', "" + zero.toString()).
                trigger('change');
                cy.get("input#pos_z").should('have.value', zero.toString());
            })

            it("Color Input Field Should Accept Hex Values", () => {
                cy.get("input#color").invoke('val', "" + white).trigger('change');
                cy.get("input#color").should('have.value', white);
                cy.get("input#color").invoke('val', "" + red).trigger('change');
                cy.get("input#color").should('have.value', red);
                cy.get("input#color").invoke('val', "" + black).trigger('change');
                cy.get("input#color").should('have.value', black);
            })
        })

        describe('Input Field Events', () => {
            it('should call the change event on pos_x input', () => {
                cy.get('#pos_x')
                    .as('numberInput')
                    .then(($input) => {
                        $input.on('change', (event) => {
                            const eventValue = event.target.value;
                            expect(eventValue).to.equal(one.toString());
                        });
                    });
                cy.get('@numberInput').clear().type('1').trigger('change');
            });

            it('should call the change event on pos_y input', () => {
                cy.get('#pos_y')
                    .as('numberInput')
                    .then(($input) => {
                        $input.on('change', (event) => {
                            const eventValue = event.target.value;
                            expect(eventValue).to.equal(one.toString());
                        });
                    });
                cy.get('@numberInput').clear().type('1').trigger('change');
            });

            it('should call the change event on pos_z input', () => {
                cy.get('#pos_z')
                    .as('numberInput')
                    .then(($input) => {
                        $input.on('change', (event) => {
                            const eventValue = event.target.value;
                            expect(eventValue).to.equal(one.toString());
                        });
                    });
                cy.get('@numberInput').clear().type('1').trigger('change');
            });
        });

        describe('Shape Creation Test', () => {
            it('should create a sphere and add it to window.shapes', () => {
                const addSphereStub = cy.stub();
                cy.window().then((win) => {
                    win.addEventListener('click', addSphereStub);
                });

                cy.get('#add_sphere').click();

                cy.wrap(addSphereStub).should((stub) => {
                    const eventDetail = stub.args[0][0].detail;
                    console.log(eventDetail);
                    // expect(eventDetail.type).to.equal('click');
                });
                cy.window().its('shapes').should('have.length', 1);
                cy.window().its('shapes').then((shapes) => {
                    expect(shapes[0].type).to.equal('sphere');
                });
            });

            it('should create a cube and add it to window.shapes', () => {
                const addBoxStub = cy.stub();
                cy.window().then((win) => {
                    win.addEventListener('click', addBoxStub);
                });

                cy.get('#add_cube').click();

                cy.wrap(addBoxStub).should('have.been.calledOnce');

                cy.wrap(addBoxStub).should((stub) => {
                    const eventDetail = stub.args[0][0].detail;
                    // expect(eventDetail.type).to.equal('click');
                });
                cy.window().its('shapes').should('have.length', 1);
                cy.window().its('shapes').then((shapes) => {
                    expect(shapes[0].type).to.equal('cube');
                });
            });
        });
    })

    describe("Failure Cases", () => {
        describe("Check UI Elements", () => {
            it("Position Input Fields should Fail On Text Input", () => {
                cy.get("input#pos_x").invoke('val', "" + word).
                trigger('input').should('have.value', "");
                cy.get("input#pos_y").invoke('val', "" + word).
                trigger('input').should('have.value', "");
                cy.get("input#pos_z").invoke('val', "" + word).
                trigger('input').should('have.value', "");
            })

            it("Position Input Fields should Fail on Decimal Input", () => {
                cy.get("input#pos_x").invoke('val', "" + decimal).
                trigger('input').should('have.value', zero);
                cy.get("input#pos_y").invoke('val', "" + decimal).
                trigger('input').should('have.value', zero);
                cy.get("input#pos_z").invoke('val', "" + decimal).
                trigger('input').should('have.value', zero);
            })

            it("Position input Fields should Fail on Hex Value Input", () => {
                cy.get("input#pos_x").invoke('val', "" + white).
                trigger('input').should('have.value', "");
                cy.get("input#pos_y").invoke('val', "" + white).
                trigger('input').should('have.value', "");
                cy.get("input#pos_z").invoke('val', "" + white).
                trigger('input').should('have.value', "");
            })

            it("Color Input Field should Fail On Wrong Input", () => {
                // Should revert to default value #ffffff
                cy.get('input#color').invoke('val', "" + word).trigger('input').
                should('have.value', black);
                cy.get('input#color').invoke('val', "" + decimal).trigger('input').
                should('have.value', black);
                cy.get("input#color").invoke('val', "" + negativeInteger).
                trigger('input').should('have.value', black);
                cy.get("input#color").invoke('val', "" + Number.MAX_SAFE_INTEGER).
                trigger('input').should('have.value', black);
            })
        })
    })
})
