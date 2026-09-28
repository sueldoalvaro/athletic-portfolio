function NavBar() {
    return (
        <nav className="sticky top-0 w-full bg-slate-900 text-white shadow-md z-50">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="font-serif text-xl font-bold tracking-wide whitespace-nowrap text-amber-300">Alvaro Sueldo</div>

                <div className="flex gap-6 items-center text-base">
                    <a href="#hero" className="text-white-300 no-underline hover:underline hover:text-white-200">Home</a>
                    <a href="#videos" className="text-white-300 no-underline hover:underline hover:text-white-200">Videos</a>
                    <a href="#career" className="text-white-300 no-underline hover:underline hover:text-white-200">Career</a>
                    <a href="#pictures" className="text-white-300 no-underline hover:underline hover:text-white-200">Pictures</a>
                    <a href="#contact" className="text-white-300 no-underline hover:underline hover:text-white-200">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;