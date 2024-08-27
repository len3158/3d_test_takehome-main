describe('Shape Creation Testing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
        }
    )

    afterEach(() => {
        cy.clearAllSessionStorage()
    })


    describe('Create Cube', () => {
        it('Should create a cube', () => {
            cy.get('#add_cube').click();
        })
    })
})