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
        {/*<a href='#contact'>
          <li>Contact</li>
        </a>*/}
      </nav>
      <header>
        <h1>Alyssa Selene</h1>
        <p>Real Lives, Written Chronicle</p>
      </header>
      <article id='about'>
        <h2>About Me</h2>
        <div id='about-p'>
          <p>
            Bun venit pe pagina mea! Sunt Alyssa Selene, o pasionată scriitoare
            aflată la început de drum în lumea cuvintelor și a poveștilor. Cu
            sufletul meu încrezător și pixul în mână, explorez universuri noi și
            aduc la viață personaje captivante.
            <br />
            <h1>Cine sunt eu?</h1> Sunt o călătoare în lumea literaturii, o
            visătoare convinsă și o colecționară de povești. Îmi place să cred
            că fiecare cuvânt pe care îl scriu este o călătorie într-o altă
            dimensiune, iar fiecare poveste este o fereastră către imaginația
            noastră colectivă.
            <br /> <h1>Ce mă inspiră?</h1> În fiecare zi, găsesc inspirație în
            cotidian, în emoțiile oamenilor și în frumusețea nesperată a vieții.
            Îmi place să explorez teme precum dragostea, aventura, reziliența și
            descoperirea de sine în poveștile mele.
            <br /> <h1>De ce scriu?</h1> Cuvintele au puterea de a conecta inimi
            și de a crea lumi întregi. Scriu pentru a împărtăși bucuriile și
            tristețile, pentru a explora și pentru a înțelege mai profund ceea
            ce înseamnă să fim oameni. Fiecare cuvânt este o picătură în oceanul
            cuvintelor, și sper ca poveștile mele să rămână cu tine și să te
            inspire într-un fel sau altul. <br /> Cu drag, Alyssa Selene
          </p>
        </div>
      </article>
      <main id='books'>
        <h1>Books Written By Me</h1>
        <div>
          <a
            href='https://www.wattpad.com/story/356944930-jocul-mortal-al-min%C8%9Bii'
            target='_blanc'
          >
            <img
              src='./Jocul-Mortal-al-Mintii.jpg'
              height='200'
              width='130'
              alt='Jocul Mortal al Mintii'
            />
            <br />
            <h2 className='Book-title'>Jocul Mortal al mintii</h2>
          </a>
        </div>
      </main>
      {/*<article id='contact'>
        <p>
     
        </p>
      </article>*/}
      <footer>
        For More Websites like this one don't be afraid to contact the
        developer:
        <a href='https://github.com/dotegoo' target='_blanc'>
          GitHub
        </a>
        and
        <a href='https://instagram.com/doteegoo' target='_blanc'>
          Instagram
        </a>
      </footer>
    </>
  );
}

export default App;
