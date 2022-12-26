const style = { 
    backgroundColor: '#555555',
    color: '#EEEEEE'
};


const Nome = ({children}) => (
    <li className="component-lista-item">{children}</li>
);

const Email = ({children}) => (
    <li style={style} className="component-lista-email">{children}</li>
);

// Exemplo: Passando multiplos props para componentes
// usando um objeto

// const clienteData = {
//     nome: "Leonardo",
//     email: "leo@gmail.com",
//     telefone: "11 5555-5555",
//     cpf: "333.333.333-33",
// }

// const cliente = 
//     <Row
//         {...clienteData}
//     />;

export { Email };
export default Nome;