import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex align-between gap-8 justify-end mr-8 mt-2">
      <p className="hover:underline hover:decoration-solid hover:cursor-pointer"><Link to="/">Página inicial</Link></p>
      <p className="hover:underline hover:decoration-solid hover:cursor-pointer"><Link to="/login">Login/Cadastro</Link></p>
      <p className="hover:underline hover:decoration-solid hover:cursor-pointer">Home</p>
    </div>
  );
}

export default Header;
