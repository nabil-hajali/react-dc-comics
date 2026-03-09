import facebook from '../public/footer-facebook.png'
import twitter from '../public/footer-twitter.png'
import youtube from '../public/footer-youtube.png'
import pinterest from '../public/footer-pinterest.png'
import periscope from '../public/footer-periscope.png'

export default function AppFooter() {
    return (
        <footer>
            <section className="container d-flex gap-5 text-white py-5">
                <div className="row">
                    <div className="col-4 text-start">
                        <ul className="list-unstyled text-secondary">
                        <h2>DC COMICS</h2>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                        </ul>
                    </div>

                    <div className="col-4 text-start">
                        <ul className="list-unstyled text-secondary">
                        <h2>DC</h2>
                            <li>Terms Of Use</li>
                            <li>Privacy policy (New)</li>
                            <li>Ad Choices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshops</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className="col-4 text-start">
                        <ul className="list-unstyled text-secondary">
                        <h2>SITES</h2>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DS Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                    </div>

                    <div className="col-4 text-start">
                        <ul className="list-unstyled text-secondary">
                        <h2>SHOP</h2>
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                    </div>
                    </div>
            </section>

            <section className="container bg-dark py-3 text-white">
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-outline-primary text-light rounded-0">
                                SIGN-UP NOW!
                            </button>
                        </div>
                        
                        <div className="col-6 d-flex align-items-center justify-content-end gap-3">
                            <div className="text-primary fw-bold">FOLLOW US</div>
                            <img src={facebook} alt="facebook" width="30px"></img>
                            <img src={twitter} alt="twitter" width="30px"></img>
                            <img src={youtube} alt="youtube" width="30px"></img>
                            <img src={pinterest} alt="pinterest" width="30px"></img>
                            <img src={periscope} alt="periscope" width="30px"></img>
                        </div>
                    </div>
            </section>
        </footer>
    )
}