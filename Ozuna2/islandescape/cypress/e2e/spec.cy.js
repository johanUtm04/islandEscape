describe('Prueba básica — Carga del sitio', () => {
  it('Debe cargar correctamente la página principal', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Personajes').should('exist'); // Cambia por algo que exista en tu página
  });
});
