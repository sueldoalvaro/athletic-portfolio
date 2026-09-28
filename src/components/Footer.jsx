import { FiInstagram, FiFileText } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__inner">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 text-left">
          {/* Left Column: Contact information */}
          <div>
            <div className="site-footer__heading">
              <h2>Contact information</h2>
            </div>
            <div className="flex flex-col gap-3">
              <a className="site-footer__contact" href="https://instagram.com/alvaro.sueldo" target="_blank" rel="noreferrer">
                <span className="site-footer__icon">
                  <FiInstagram size={20} aria-hidden="true" />
                </span>
                <span>@alvaro.sueldo</span>
              </a>

              <a className="site-footer__contact" href="https://wa.me/5493513652166" target="_blank" rel="noreferrer">
                <span className="site-footer__icon">
                  <FaWhatsapp size={20} aria-hidden="true" />
                </span>
                <span>+54 (351) 365-2166</span>
              </a>

              <a className="site-footer__contact" href="mailto:alvarosueldoc@gmail.com">
                <span className="site-footer__icon">
                  <SiGmail size={18} aria-hidden="true" />
                </span>
                <span className="site-footer__email">alvarosueldoc@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Body measurements */}
          <div className="flex flex-col">
            <div className="site-footer__heading">
              <h2>Body measurements</h2>
            </div>
            <div className="flex flex-1 items-start pt-2">
              <a
                href="https://drive.google.com/file/d/1TzFBZ-6wTzIpL5qzEEFohtqL8xZv_lkM/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-slate-950 shadow-lg shadow-amber-400/20 no-underline transition-all duration-200 hover:bg-amber-300 hover:scale-[1.02]"
              >
                <FiFileText size={20} aria-hidden="true" />
                <span>Body Measurements ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer__copyright">
        <p>© {new Date().getFullYear()} Alvaro Sueldo. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
