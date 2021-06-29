const Header = () => {
  return (
    <header className="flex fixed top-0 p-4 text-white w-full h-32 flex-row-reverse">
      <a href="#">
        <nav className="flex flex-row space-x-6 font-semibold">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">projects</a>
          <a href="#">Contact</a>
        </nav>
      </a>
    </header>
  );
};
export default Header;
