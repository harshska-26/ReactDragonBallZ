import './NavBar.Component.css'
export const NavBar = () => {
  return (
    <nav id="navbar">
      <img
        id="homeimg"
        src="https://web.dragonball-api.com/images-compress/android-icon-192x192.webp"
      />
      <div id="rightside">
        <a href="https://web.dragonball-api.com/documentation">Docs</a>
        <a href="https://web.dragonball-api.com/about">About</a>
        <a id="supportbutton" href="https://web.dragonball-api.com/support">
          SUPPORT US
        </a>
      </div>
    </nav>
  );
};
