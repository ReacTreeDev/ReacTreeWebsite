const Navbar = () => {
  return(
    <nav>
      <div className='left-buttons'>
        <a className='nav-padding nav-button' href='https://medium.com/@bnohcub/onboarding-a-dense-react-codebase-reactree-has-your-back-c29c71dd9ee2'>About</a>
        <a className='nav-button' href='https://github.com/oslabs-beta/ReacTree'>Github</a>
      </div>
      <div className='right-button'>
        <a className='nav-button get-reactree-button' href='https://marketplace.visualstudio.com/items?itemName=ReacTreeDev.reactree'>Get ReacTree</a>
      </div>
    </nav>
  );
}

export default Navbar;