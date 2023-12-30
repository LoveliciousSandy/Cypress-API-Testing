describe("HTTP Request ", () => {

    it("GET call", () => {

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
            .its('status').should('equal', 200);
    });

    it("POST call", () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body: {
                title: "Test Post 20/12/2023",
                body: "This is Post Request",
                userId: 1
            }
        }).its('status').should('equal', 201);
    });
    it("PUT call",()=>{
        cy.request({
            method: 'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{
                title: "Test Post 20/12/2023",
                body: "This is Post Request",
                userId: 1,
                id: 1
            }
        }).its('status').should('equal',200);
    });
    it('DELET call',()=>{
        cy.request({
            method: 'DELETE',
            url:'https://jsonplaceholder.typicode.com/posts/1',
        }).its('status').should('equal',200);
    });
});