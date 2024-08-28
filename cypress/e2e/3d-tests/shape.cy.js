import "../../support/commands";

const posX = 0;
const posY = 0;
const posZ = 0;
const color = 0x0;
const maxInteger = Number.MAX_SAFE_INTEGER;
const negativeInteger = -1;
const zero = 0;
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

// Conversion From Str to Number may cause leading zeros to appear.
// This util function removes them
function removeLeadingZerosRegex(str) {
    return str.replace(/^0(?=\d)/, '');
}

describe('3D Shape Creation Testing', () => {
    beforeEach(() => {
            cy.visit('http://localhost:8080/');
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

            it("Position Input Fields should Accept Numbers", () => {
                cy.get('input#pos_x').type(`${maxInteger.toString()}{enter}`).should('have.value', maxInteger.toString());
                cy.get('input#pos_x').type(`${negativeInteger.toString()}{enter}`).should('have.value', negativeInteger.toString());
                cy.get('input#pos_x').type(`${zero.toString()}{enter}`).should('have.value', zero.toString());
                cy.get('input#pos_y').type(`${maxInteger.toString()}{enter}`).should('have.value', maxInteger.toString());
                cy.get('input#pos_y').type(`${negativeInteger.toString()}{enter}`).should('have.value', negativeInteger.toString());
                cy.get('input#pos_y').type(`${zero.toString()}{enter}`).should('have.value', zero.toString());
                cy.get('input#pos_z').type(`${maxInteger.toString()}{enter}`).should('have.value', maxInteger.toString());
                cy.get('input#pos_z').type(`${negativeInteger.toString()}{enter}`).should('have.value', negativeInteger.toString());
                cy.get('input#pos_z').type(`${zero.toString()}{enter}`).should('have.value', zero.toString());
            })

            it("Color Input Field Should Accept Hex Values", () => {
                cy.get("input#color").invoke('val', "" + white).trigger('input').should('have.value', white);
                cy.get("input#color").invoke('val', "" + red).trigger('input').should('have.value', red);
                cy.get("input#color").invoke('val', "" + black).trigger('input').should('have.value', black);
            })
        })
    })

    describe("Failure Cases", () => {
        describe("Check UI Elements", () => {
            it("Position Input Fields should Fail On Wrong Input", () => {
                cy.get('input#pos_x').type(word).should('have.value', zero);
                cy.get('input#pos_x').type("" + decimal).should('have.value', zero);
                cy.get('input#pos_x').type(white).should('have.value', zero);
                cy.get('input#pos_y').type(word).should('have.value', zero);
                cy.get('input#pos_y').type("" + decimal).should('have.value', zero);
                cy.get('input#pos_y').type(white).should('have.value', zero);
                cy.get('input#pos_z').type(word).should('have.value', zero);
                cy.get('input#pos_z').type("" + decimal).should('have.value', zero);
                cy.get('input#pos_z').type(white).should('have.value', zero);
            })

            it("Color Input Field should Fail On Wrong Input", () => {
                // Should revert to default value #ffffff
                cy.get('input#color').invoke('val', "" + word).trigger('input').should('have.value', black);
                cy.get('input#color').invoke('val', "" + decimal).trigger('input').should('have.value', black);
                cy.get("input#color").invoke('val', "" + negativeInteger).trigger('input').should('have.value', black);
                cy.get("input#color").invoke('val', "" + Number.MAX_SAFE_INTEGER).trigger('input').should('have.value', black);
            })
        })
    })
})
