import {Box} from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="bg-accent rounded-2xl mx-5 my-4  text-theme">
      <div className="px-4 py-3 flex items-center justify-between ">
        <Box/>
        <div className="space-x-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#lab" className="hover:underline">Lab</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar