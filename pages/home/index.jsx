import './style.css'
import { FaRegTrashAlt } from "react-icons/fa";

function Home() {

  const users = [
    {
      id: '2470001',
      name: 'Maria',
      idade: 20,
      email: 'MariaCristina.l.c@gmail.com',
    },
    {
      id: '2470002',
      name: 'Lucas',
      idade: 19,
      email: 'lucascolognese.m@gmail.com',
    },

  ]

  return ( 
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="nome" name='name' type='text' />
        <input placeholder="idade" name='idade' type='number' />
        <input placeholder="e-mail" name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span> </p>
            <p>Idade: <span> {user.idade}</span> </p>
            <p>Email: <span> {user.email}</span> </p>
          </div>
          <button>
            <FaRegTrashAlt />
          </button>
        </div>
      ))}

    </div>
  );
}

export default Home;