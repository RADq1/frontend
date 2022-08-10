import Logo from '../icons/Logo';

const Navbar = () => {
    return (<nav>
    <a href="http://localhost:3000/"><Logo/></a>
    <div>
      <ul>
        <li>
          <a href="/contact"> Kontakt </a>
        </li>
      </ul>
      <a href="/login">Zaloguj się</a>
    </div>
    </nav>)
}
export default Navbar;