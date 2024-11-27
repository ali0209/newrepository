export default function Nav({nav}) {
    return(
      <nav className="nav">
        <p>{nav[0].title}</p>
        <p>{nav[0].link}</p>
        <p>{nav[0].h1}</p>
        <p>{nav[0].h2}</p>
        <p>{nav[0].h3}</p>
        
      </nav>
    )
  }