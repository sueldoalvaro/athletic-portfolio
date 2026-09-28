import { Carousel } from '../components/Carousel';
import photoThree from '../assets/carousel-pictures/DSC02241.jpg';
import photoFive from '../assets/carousel-pictures/DSC02509.jpg';
import photoSix from '../assets/carousel-pictures/DSC02275.jpg';
import photoFour from '../assets/carousel-pictures/IMG_0213.JPG';

function PictureSection() {
    const pictures = [
        { id: 'photo-three', src: photoThree, alt: 'Alvaro Sueldo during a match' },
        { id: 'photo-five', src: photoFive, alt: 'Alvaro Sueldo during a match' },
        { id: 'photo-six', src: photoSix, alt: 'Alvaro Sueldo during a match' },
        { id: 'photo-four', src: photoFour, alt: 'Alvaro Sueldo during a match' }
    ];


    return (
        <section id="pictures" className="flex min-h-[calc(100vh-60px)] scroll-mt-[60px] flex-col justify-center bg-slate-900 px-4 py-6 text-white md:px-6 md:py-8" aria-labelledby="picture-section-title">
            <div className="mx-auto flex w-full max-w-3xl flex-col">
                <div className="mb-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
                    <h2 id="picture-section-title" className="font-serif text-3xl font-bold tracking-wide text-amber-300">Pictures</h2>

                    <a
                        href="https://drive.google.com/drive/folders/1yxcb2gaJNGrsVWFM-oJQNArf7Zgj7qtW?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 rounded-full bg-amber-400 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-950 shadow-md shadow-amber-400/20 no-underline transition-all duration-200 hover:bg-amber-300 hover:scale-[1.02]"
                    >
                        <span>More Pictures</span>
                        <span className="text-sm">↗</span>
                    </a>
                </div>

                <div className="flex min-h-[65vh] w-full items-center justify-center">
                    <Carousel
                        items={pictures}
                        autoHeight={true}
                        renderItem={(picture) => (
                            <img
                                className="block max-h-[65vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                                src={picture.src}
                                alt={picture.alt}
                            />
                        )}
                    />
                </div>
            </div>
        </section>
    )
}

export default PictureSection