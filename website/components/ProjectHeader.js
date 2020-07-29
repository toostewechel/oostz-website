function ProjectHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 w-full p-2">
      <div className="flex items-center justify-between">
        <div>
          <a href="/">
            <img src="/logo-oostz.svg"></img>
          </a>
        </div>
        <a href="#">
          <img src="/MenuClose.svg"></img>
        </a>
      </div>
    </header>
  );
}

export default ProjectHeader;
