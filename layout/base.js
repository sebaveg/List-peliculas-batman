import Link from 'next/link'

export default ({ children }) => (
  <div className="main">
    <div className="logo">
      <h2><Link href="/"><a>Películas</a></Link></h2>
    </div>
    
    {children}
    
    {/* global styles */}
    <style jsx>{`
      .main {
        padding: 10px 50px;
        font-family: sans-serif;  
      }
      .logo a {
        color: inherit;
      }
      a {
        text-decoration: none;
      }
    `}</style>
    
  </div>
)