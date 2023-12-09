export default function Navbar(){
    const path = window.location.pathname
    return <nav className="nav">
        <a href="/" className="site-title">FullStack Final Assignment- Kollin Brown</a>
        <ul>
            <li>
                <a href="/A1"> Assignment 1</a>
                </li>
                <li>
                <a href="/A2"> Assignment 2</a>
                </li>
                <li>
                <a href="/A3"> Assignment 3</a>
            
            
            </li>

        
        
        
        </ul>
    </nav>

}
function CustomLink({ href, children, ...props}){
    return
    <li>
        <a href="/href"> {children} </a>
    </li>
}