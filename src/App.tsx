import "./App.css";

function App() {
  return (
    <>
      <nav>
        <a href='#about'>
          <li>About</li>
        </a>
        <a href='#books'>
          <li>Books</li>
        </a>
        <a href='#contact'>
          <li>Contact</li>
        </a>
      </nav>
      <header>
        <h1>Alyssa Selene</h1>
        <p>Real Lives, Written Chronicle</p>
      </header>
      <article id='about'>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Morbi rutrum metus sit amet ligula suscipit
          efficitur. Contact us for more information. Sed euismod risus ac mi
          facilisis, at posuere turpis ullamcorper. Vestibulum euismod gravida
          odio, nec consectetur odio malesuada eu. Integer sit amet tortor vel
          ligula euismod sodales eget non sapien. Sed in odio sit amet orci
          viverra tincidunt eu eu elit. Praesent bibendum vehicula magna, in
          fermentum leo volutpat et. Nunc ac sodales nunc. Duis efficitur dolor
          vitae posuere varius. Quisque vestibulum euismod sapien, nec lobortis
          libero elementum quis. Curabitur laoreet justo vel dolor auctor, nec
          sagittis lacus bibendum.
        </p>
      </article>
      <main id='books'>
        <div>
          <iframe
            width='500'
            height='290'
            src='https://embed.wattpad.com/story/356944930'
          />
        </div>
        <p>
          Quick note: For accesing the book press the url button from the 2nd
          side
        </p>
      </main>
      <article id='contact'>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Morbi rutrum metus sit amet ligula suscipit
          efficitur. Contact us for more information. Sed euismod risus ac mi
          facilisis, at posuere turpis ullamcorper. Vestibulum euismod gravida
          odio, nec consectetur odio malesuada eu. Integer sit amet tortor vel
          ligula euismod sodales eget non sapien. Sed in odio sit amet orci
          viverra tincidunt eu eu elit. Praesent bibendum vehicula magna, in
          fermentum leo volutpat et. Nunc ac sodales nunc. Duis efficitur dolor
          vitae posuere varius. Quisque vestibulum euismod sapien, nec lobortis
          libero elementum quis. Curabitur laoreet justo vel dolor auctor, nec
          sagittis lacus bibendum.
        </p>
      </article>
      <footer>
        For More Websites like this one don't be afraid to contact the
        developer:<a href='https://github.com/dotegoo'>GitHub</a>
        and
        <a href='https://instagram.com/doteegoo'>Instagram</a>
      </footer>
    </>
  );
}

export default App;
