import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";
import Content from "./content";

export default function App() {
  
  let date = new Date()
  let dateyear = date.getFullYear()
  let navmenu = [{title: 'Новости', link: '/news', h1:"wffw", h2: "wfwf",h3:"fwwfwf"}]

  return(
    <div>
      <Header/>
      <Nav nav={navmenu}/>
      <Footer year={dateyear}/>
      <Content/>
    </div>
  )
}