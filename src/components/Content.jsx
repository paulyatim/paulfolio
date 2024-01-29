import '../App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import hero from '../assets/hero-image.png';
import heroFront from '../assets/hero-front.png';
import mv1 from '../assets/movie1.png';
import mv2 from '../assets/movie2.png';
import mv3 from '../assets/movie3.png';
import figma from '../assets/figma.svg';
import canva from '../assets/canva.svg';
import illustrator from '../assets/illustrator.svg';

import bgFront1 from '../assets/bg-front-1.png';
import bgFront2 from '../assets/bg-front-2.png';
import bgFront3 from '../assets/bg-front-3.png';
import bgFront4 from '../assets/bg-front-4.png';
import bgFront5 from '../assets/bg-front-5.png';
import bgFront6 from '../assets/bg-front-6.png';
import bgFront7 from '../assets/bg-front-7.png';
import bgFront8 from '../assets/bg-front-8.png';
import bgFront9 from '../assets/bg-front-9.png';

function Content() {

    const ref = useRef();

    return (
        <Parallax pages={13} ref={ref}>
            {/* NavBar */}
            <ParallaxLayer className='nav-layer' offset={0} sticky={{start: 0, end: 17}}>
                <nav className="navbar navbar-expand-lg fixed-top" data-bs-theme="dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                    <div className="nav-link" onClick={() => ref.current.scrollTo(0)}>PaulYatim</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" onClick={() => ref.current.scrollTo(2)}>sobreMi</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" onClick={() => ref.current.scrollTo(5.2)}>desarrolloWeb</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" onClick={() => ref.current.scrollTo(9.8)}>audiovisual</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" onClick={() => ref.current.scrollTo(11)}>contacto</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </ParallaxLayer>
            {/* Header "Paul Yatim" */}
            <ParallaxLayer id='paulYatim' offset={0} speed={1}>
                <div className="container-fluid justify-content-end section-lg intro">
                    <svg viewBox="0 0 361 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_736_20)">
                            <path d="M309.473 146.91L309.471 146.9L309.469 146.889L300.382 109.645C300.381 109.645 300.381 109.644 300.381 109.643C300.11 108.491 299.622 107.522 298.849 106.841C298.069 106.154 297.048 105.804 295.799 105.804H269.303C267.946 105.804 266.836 106.144 266.069 106.91C265.302 107.677 264.963 108.787 264.963 110.144V192.064C264.963 193.363 265.306 194.467 266.065 195.245C266.827 196.026 267.933 196.404 269.303 196.404H283.639C285.008 196.404 286.115 196.026 286.877 195.245C287.636 194.467 287.979 193.363 287.979 192.064V141.632C287.979 141.52 288.013 141.467 288.034 141.443C288.058 141.416 288.093 141.398 288.137 141.393C288.18 141.389 288.229 141.4 288.274 141.431C288.314 141.459 288.369 141.516 288.404 141.633L300.816 192.69C300.816 192.691 300.816 192.691 300.817 192.692C301.092 193.86 301.619 194.801 302.432 195.447C303.244 196.094 304.291 196.404 305.527 196.404H313.975C315.211 196.404 316.257 196.094 317.07 195.447C317.882 194.801 318.41 193.86 318.685 192.692C318.685 192.691 318.685 192.691 318.686 192.69L331.098 141.633C331.133 141.516 331.187 141.459 331.228 141.431C331.273 141.4 331.322 141.389 331.365 141.393C331.409 141.398 331.444 141.416 331.468 141.443C331.489 141.467 331.523 141.52 331.523 141.632V192.064C331.523 193.376 331.904 194.477 332.677 195.25C333.45 196.022 334.551 196.404 335.863 196.404H350.199C351.568 196.404 352.675 196.026 353.437 195.245C354.196 194.467 354.539 193.363 354.539 192.064V110.144C354.539 108.787 354.199 107.677 353.432 106.91C352.666 106.144 351.556 105.804 350.199 105.804H323.703C322.454 105.804 321.432 106.154 320.652 106.841C319.88 107.522 319.392 108.491 319.121 109.643C319.121 109.644 319.12 109.645 319.12 109.645L310.033 146.889L310.031 146.9L310.029 146.91C309.976 147.172 309.892 147.326 309.826 147.404C309.788 147.449 309.762 147.463 309.751 147.467C309.74 147.463 309.714 147.449 309.676 147.404C309.609 147.326 309.526 147.172 309.473 146.91Z" stroke="#4fcc8a" strokeOpacity="0.2"/>
                            <path d="M253.223 110.144C253.223 108.787 252.883 107.677 252.116 106.91C251.35 106.144 250.24 105.804 248.883 105.804H234.803C233.504 105.804 232.4 106.147 231.622 106.906C230.841 107.668 230.463 108.774 230.463 110.144V192.064C230.463 193.376 230.844 194.477 231.617 195.25C232.39 196.022 233.491 196.404 234.803 196.404H248.883C250.252 196.404 251.359 196.026 252.121 195.245C252.88 194.467 253.223 193.363 253.223 192.064V110.144Z" stroke="#4fcc8a" strokeOpacity="0.2"/>
                            <path d="M171.853 128.82C173.056 128.82 173.866 129.12 174.379 129.634C174.893 130.147 175.193 130.957 175.193 132.16V192.064C175.193 193.376 175.574 194.477 176.347 195.25C177.12 196.022 178.221 196.404 179.533 196.404H193.869C195.239 196.404 196.345 196.026 197.107 195.245C197.866 194.467 198.209 193.363 198.209 192.064V132.16C198.209 130.969 198.535 130.156 199.066 129.638C199.6 129.117 200.416 128.82 201.549 128.82H219.469C220.839 128.82 221.945 128.442 222.707 127.661C223.466 126.883 223.809 125.779 223.809 124.48V110.144C223.809 108.787 223.469 107.677 222.703 106.91C221.936 106.144 220.826 105.804 219.469 105.804H153.933C152.634 105.804 151.53 106.147 150.752 106.906C149.971 107.668 149.593 108.774 149.593 110.144V124.48C149.593 125.792 149.974 126.893 150.747 127.666C151.52 128.438 152.621 128.82 153.933 128.82H171.853Z" stroke="#4fcc8a" strokeOpacity="0.2"/>
                            <path d="M141.703 196.404C143.086 196.404 144.201 195.985 144.96 195.112C145.709 194.251 146.043 193.026 146.043 191.552V137.28C146.043 129.216 145.411 120.755 141.078 114.313C136.714 107.824 128.684 103.5 114.183 103.5C99.6817 103.5 91.6523 107.824 87.2881 114.313C82.9553 120.755 82.323 129.216 82.323 137.28V191.552C82.323 193.037 82.6943 194.26 83.4577 195.117C84.2289 195.982 85.338 196.404 86.663 196.404H100.999C102.356 196.404 103.466 196.064 104.233 195.298C104.999 194.531 105.339 193.421 105.339 192.064V180.928C105.339 179.738 105.665 178.924 106.196 178.406C106.73 177.885 107.546 177.588 108.679 177.588H119.687C120.89 177.588 121.7 177.888 122.213 178.402C122.727 178.915 123.027 179.725 123.027 180.928V192.064C123.027 193.434 123.405 194.54 124.186 195.302C124.964 196.061 126.068 196.404 127.367 196.404H141.703ZM114.183 128.564C118.381 128.564 120.511 129.335 121.639 130.688C122.787 132.066 123.027 134.185 123.027 137.28V151.104C123.027 152.305 122.728 153.119 122.209 153.651C121.69 154.183 120.875 154.51 119.674 154.572H108.679C107.559 154.572 106.74 154.249 106.201 153.71C105.662 153.171 105.339 152.352 105.339 151.232V137.28C105.339 134.185 105.579 132.066 106.727 130.688C107.855 129.335 109.985 128.564 114.183 128.564Z" stroke="#4fcc8a" strokeOpacity="0.2"/>
                            <path d="M56.0942 162.208L56.099 162.198L56.1034 162.188L79.0131 110.993C79.6909 109.567 79.7506 108.244 79.0857 107.257C78.4263 106.277 77.1698 105.804 75.615 105.804H57.311C56.1553 105.804 55.1543 106.042 54.3297 106.592C53.5038 107.143 52.904 107.973 52.4926 109.068L43.0262 132.862C42.9162 133.107 42.807 133.258 42.7191 133.341C42.6761 133.382 42.6431 133.402 42.6227 133.411C42.6036 133.42 42.594 133.42 42.591 133.42C42.588 133.42 42.5784 133.42 42.5593 133.411C42.5389 133.402 42.506 133.382 42.4629 133.341C42.375 133.258 42.2658 133.107 42.1558 132.862L32.6894 109.068C32.278 107.973 31.6782 107.142 30.8524 106.592C30.0277 106.042 29.0267 105.804 27.871 105.804H9.43901C7.88421 105.804 6.62777 106.277 5.96829 107.257C5.30331 108.244 5.36316 109.567 6.04122 110.994L29.079 162.189L29.0832 162.198L29.0878 162.208C29.2837 162.599 29.291 162.995 29.291 163.52V192.064C29.291 193.376 29.6725 194.477 30.4455 195.25C31.2184 196.022 32.3193 196.404 33.631 196.404H51.551C52.9205 196.404 54.0273 196.026 54.7889 195.245C55.5484 194.467 55.891 193.363 55.891 192.064V163.52C55.891 162.995 55.8983 162.599 56.0942 162.208Z" stroke="#4fcc8a" strokeOpacity="0.2"/>
                            <path d="M254.604 12.144C254.604 10.7869 254.264 9.67724 253.497 8.9104C252.731 8.14356 251.621 7.80396 250.264 7.80396H235.928C234.629 7.80396 233.525 8.14662 232.747 8.90606C231.966 9.66764 231.588 10.7744 231.588 12.144V94.064C231.588 95.3757 231.969 96.4765 232.742 97.2495C233.515 98.0225 234.616 98.404 235.928 98.404H286.488C287.845 98.404 288.955 98.0644 289.721 97.2975C290.488 96.5307 290.828 95.421 290.828 94.064V79.728C290.828 78.3709 290.488 77.2612 289.721 76.4944C288.955 75.7276 287.845 75.388 286.488 75.388H257.944C256.824 75.388 256.004 75.0654 255.465 74.5264C254.926 73.9874 254.604 73.1683 254.604 72.048V12.144Z" stroke="#4fcc8a" strokeOpacity="0.2"/>
                            <path d="M173.996 7.80396H159.66C158.361 7.80396 157.257 8.14662 156.479 8.90606C155.698 9.66765 155.32 10.7744 155.32 12.144V69.104C155.32 73.3503 155.767 81.2464 160.085 88.0908C164.43 94.9767 172.635 100.708 187.948 100.708C203.262 100.708 211.466 94.9767 215.811 88.0908C220.129 81.2464 220.576 73.3503 220.576 69.104V12.144C220.576 10.7869 220.236 9.67724 219.47 8.9104C218.703 8.14356 217.593 7.80396 216.236 7.80396H201.9C200.601 7.80396 199.497 8.14662 198.719 8.90606C197.938 9.66765 197.56 10.7744 197.56 12.144V62.32C197.56 64.7827 197.52 66.9836 197.315 68.9049C197.11 70.8279 196.743 72.4383 196.107 73.7315C195.478 75.0131 194.582 75.9896 193.295 76.6536C191.997 77.323 190.267 77.692 187.948 77.692C185.629 77.692 183.899 77.323 182.601 76.6536C181.314 75.9896 180.418 75.0131 179.789 73.7315C179.154 72.4383 178.786 70.8279 178.581 68.9049C178.376 66.9836 178.336 64.7827 178.336 62.32V12.144C178.336 10.7869 177.996 9.67724 177.23 8.9104C176.463 8.14356 175.353 7.80396 173.996 7.80396Z" stroke="#4fcc8a" strokeOpacity="0.2"/>
                            <path d="M140.578 98.404C141.961 98.404 143.076 97.9855 143.835 97.1121C144.584 96.2511 144.918 95.0263 144.918 93.552V39.28C144.918 31.2163 144.286 22.755 139.953 16.313C135.589 9.82438 127.559 5.5 113.058 5.5C98.5567 5.5 90.5273 9.82438 86.1631 16.313C81.8303 22.755 81.198 31.2163 81.198 39.28V93.552C81.198 95.0374 81.5693 96.2601 82.3327 97.1167C83.1039 97.9818 84.213 98.404 85.538 98.404H99.874C101.231 98.404 102.341 98.0644 103.108 97.2976C103.874 96.5307 104.214 95.4211 104.214 94.064V82.928C104.214 81.7375 104.54 80.9243 105.071 80.4059C105.605 79.8853 106.421 79.588 107.554 79.588H118.562C119.765 79.588 120.575 79.8884 121.088 80.4016C121.602 80.9147 121.902 81.7251 121.902 82.928V94.064C121.902 95.4335 122.28 96.5403 123.061 97.3019C123.839 98.0613 124.943 98.404 126.242 98.404H140.578ZM113.058 30.564C117.256 30.564 119.386 31.3351 120.514 32.6881C121.662 34.0661 121.902 36.1849 121.902 39.28V53.104C121.902 54.3049 121.603 55.1195 121.084 55.6508C120.565 56.1826 119.75 56.51 118.549 56.572H107.554C106.434 56.572 105.615 56.2495 105.076 55.7105C104.537 55.1714 104.214 54.3523 104.214 53.232V39.28C104.214 36.1849 104.454 34.0661 105.602 32.6881C106.73 31.3351 108.86 30.564 113.058 30.564Z" stroke="#4fcc8a" strokeOpacity="0.2"/>
                            <path d="M14.3029 7.80396H14.2904L14.2779 7.80458C12.9254 7.8722 11.8244 8.24841 11.065 9.02679C10.3034 9.80742 9.96289 10.9128 9.96289 12.272V94.064C9.96289 95.3757 10.3444 96.4765 11.1173 97.2495C11.8903 98.0225 12.9912 98.404 14.3029 98.404H28.6389C29.996 98.404 31.1056 98.0644 31.8724 97.2975C32.6393 96.5307 32.9789 95.421 32.9789 94.064V73.584C32.9789 72.3935 33.3047 71.5803 33.8361 71.0619C34.3696 70.5413 35.1862 70.244 36.3189 70.244H42.4629C53.9121 70.244 62.0697 67.8017 67.3571 62.6128C72.6469 57.4215 74.9629 49.5809 74.9629 39.024C74.9629 28.4671 72.6469 20.6264 67.3571 15.4351C62.0697 10.2462 53.9121 7.80396 42.4629 7.80396H14.3029ZM43.2309 47.228H36.3189C35.1986 47.228 34.3795 46.9054 33.8404 46.3664C33.3014 45.8274 32.9789 45.0083 32.9789 43.888V34.16C32.9789 32.9695 33.3047 32.1563 33.8361 31.6379C34.3696 31.1173 35.1862 30.82 36.3189 30.82H43.2309C44.7624 30.82 46.071 30.8684 47.179 31.0569C48.2842 31.2449 49.157 31.5673 49.8376 32.092C51.1786 33.1256 51.9469 35.0884 51.9469 39.024C51.9469 42.9595 51.1786 44.9223 49.8376 45.956C49.157 46.4806 48.2842 46.803 47.179 46.991C46.071 47.1796 44.7624 47.228 43.2309 47.228Z" stroke="#4fcc8a" strokeOpacity="0.2"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_736_20" x="-0.000244141" y="0" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="2.5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_736_20"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_736_20" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </ParallaxLayer>
            {/* Foto Back */}
            <ParallaxLayer className='bg-image' offset={0} speed={1} sticky={{start: 0, end: 15}} style={{zIndex: -1}}>
                <div className="heroImage">
                    <img src={hero} alt="foto de Paul Yatim" className="img-fluid fixed-bottom"/>
                </div>
            </ParallaxLayer>
            {/* Foto Front */}
            <ParallaxLayer className='bg-image' offset={0} speed={1} sticky={{start: 0, end: 15}} style={{zIndex: 5}}>
                <div className="heroImage">
                    <img src={heroFront} alt="foto de Paul Yatim" className="img-fluid fixed-bottom"/>
                </div>
            </ParallaxLayer>
            {/* Intro */}
            <ParallaxLayer offset={1} speed={0.5} style={{zIndex: 1}}>
                <div className="container-fluid justify-content-end section-lg">
                    <div className="col-7 scroll-section intro">
                        <h2>Bienvenidxs a mi <span><strong>paul</strong>folio</span></h2>
                        <p>Soy Paul Yatim, estudiante de Diseño de Imagen y Sonido en la Universidad de Palermo. Soy desarrollador frontend y diseñador digital.</p>
                    </div>
                </div>
            </ParallaxLayer>
            {/* Fondo Back "sobreMi" */}
            <ParallaxLayer className='bg-back' offset={2.2} speed={0.5} factor={4} id='bgBack1'>
            <div className="container-fluid justify-content-end section-lg section-md">
                    <div className="col-7 scroll-section">
                    </div>
                </div>
            </ParallaxLayer>


            {/* sobreMi */}
            <ParallaxLayer className='PL-sticky' offset={2} speed={1} sticky={{start: 2, end: 4}}>
                <div className="container-fluid justify-content-end section-lg">
                    <div className="col-7 scroll-section section-top">
                        <h2>sobreMi</h2>
                        <p>Me gustan los rankings, así que les dejo algunos top 3 para que me conozcan:</p>
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer className='PL-child' offset={2.4} speed={0.5} factor={1}>
                <div className="container-fluid justify-content-end section-lg section-md">
                    <div className="col-7 scroll-section">
                        <h3>Top 3 Películas</h3>
                        <ol className='top3'>
                            <li>
                                <img src={mv1} alt=""/>
                            </li>
                            <li>
                                <img src={mv2} alt=""/>
                            </li>
                            <li>
                                <img src={mv3} alt=""/>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="container-fluid justify-content-end section-lg section-md">
                    <div className="col-7 scroll-section">
                        <h3>Top 3 Álbumes</h3>
                        <ol className='top3' id='albumes'>
                            <li>
                                <iframe src="https://open.spotify.com/embed/album/3TJz2UBNYJtlEly0sPeNrQ?utm_source=generator&theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            </li>
                            <li>
                                <iframe src="https://open.spotify.com/embed/album/7f6xPqyaolTiziKf5R5Z0c?utm_source=generator&theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>                            </li>
                            <li>
                                <iframe src="https://open.spotify.com/embed/album/3U8n8LzBx2o9gYXvvNq4uH?utm_source=generator&theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="container-fluid justify-content-end section-lg section-md">
                    <div className="col-7 scroll-section">
                        <h3>Top 3 Números Primos</h3>
                        <ol className='top3'>
                            <li><h4>499</h4></li>
                            <li><h4>2</h4></li>
                            <li><h4>103</h4></li>
                        </ol>
                    </div>
                </div>
                <div className="container-fluid justify-content-end section-lg section-md">
                    <div className="col-7 scroll-section">
                        <h3>Top 3 Programas de Diseño</h3>
                        <ol className='top3'>
                            <li>
                                <img src={figma} alt="" />
                            </li>
                            <li>
                                <img src={canva} alt="" />
                            </li>
                            <li>
                                <img src={illustrator} alt="" />
                            </li>
                        </ol>
                    </div>
                </div>
            </ParallaxLayer>


            {/* Fondo Back "desarrolloWeb" */}
            <ParallaxLayer className='bg-back' offset={5.6} speed={0.1} factor={4} id='bgBack2'>
                <div className="container-fluid justify-content-end section-lg section-md">
                    <div className="col-7 scroll-section">
                    </div>
                </div>
            </ParallaxLayer>

            {/* desarrolloWeb */}
            <ParallaxLayer className='PL-sticky' offset={5.2} speed={1} sticky={{start: 5.2, end: 8.3}}>
                <div className="container-fluid justify-content-end section-lg">
                    <div className="col-7 scroll-section section-top">
                        <h2>desarrolloWeb</h2>
                        <p>Estos son algunos proyectos míos como desarrollador y diseñador web:</p>
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer className='PL-child' offset={5.7} speed={1} id='projsDesarrollo'>
                <div className="container-fluid justify-content-end section-lg">
                    <div className="col-7 scroll-section">
                        <Link to={'https://paulyatim.github.io/Atiti/'} target='_blank' className='link'><h3>Atiti</h3></Link>
                        <h5>08/21</h5>
                        <div className="mbp-mockup-wrapper">
                            <div className="mbp-container">
                                <div className="mbp-display with-glare">
                                    <div className="display-edge">
                                        <div className="bezel">
                                            <div className="display-camera" ></div>
                                            <div className="display-frame">
                                                <iframe src="https://paulyatim.github.io/Atiti/index.html" ></iframe>
                                            </div>
                                            <div className="below-display">
                                                <div className="macbookpro"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mbp-keyboard">
                                    <div className="front">
                                        <div className="opener-left"></div>
                                        <div className="opener-right"></div>
                                    </div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <div className="mbp-shadow">			
                                        <div className="shadow-left"></div>
                                        <div className="shadow-right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='proj-description'>
                            <p>Este fue el primer sitio que realicé por mi cuenta. Atiti significó mucho para mí ya que pude incorporar una parte muy importante de mi cultura venezolana en un proyecto personal. El mismo consistía en un sitio para un restaurante ficticio de comida venezolana en Buenos Aires. Este proyecto lo realicé durante el curso de Desarrollo Web de Coderhouse.</p>
                            <div className='tags'>
                                <span>#HTML</span>
                                <span>#CSS</span>
                                <span>#Bootstrap</span>
                                <span>#Sass</span>
                                <span>@Coderhouse</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid justify-content-end section-lg">
                    <div className="col-7 scroll-section">
                        <Link to={'https://do-nuts.netlify.app/'} target='_blank' className='link'><h3>Do-Nuts</h3></Link>
                        <h5>01/22</h5>
                        <div className="mbp-mockup-wrapper">
                            <div className="mbp-container">
                                <div className="mbp-display with-glare">
                                    <div className="display-edge">
                                        <div className="bezel">
                                            <div className="display-camera" ></div>
                                            <div className="display-frame">
                                                <iframe src="https://do-nuts.netlify.app/" ></iframe>
                                            </div>
                                            <div className="below-display">
                                                <div className="macbookpro"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mbp-keyboard">
                                    <div className="front">
                                        <div className="opener-left"></div>
                                        <div className="opener-right"></div>
                                    </div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <div className="mbp-shadow">			
                                        <div className="shadow-left"></div>
                                        <div className="shadow-right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='proj-description'>
                            <p>Mi introducción a React no fue simple... Fue un desafío que no solo pude superar pero también aprendí a amar (tan así que este portfolio está hecho con react). Este sitio consistía en un e-commerce que funcionara con carrito y con interacciones más elevadas de parte del usuario. Este proyecto lo realicé durante el curso de React JS de Coderhouse</p>
                            <div className='tags'>
                                <span>#HTML</span>
                                <span>#CSS</span>
                                <span>#Bootstrap</span>
                                <span>#Javascript</span>
                                <span>#React</span>
                                <span>#ecommerce</span>
                                <span>@Coderhouse</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid justify-content-end section-lg">
                    <div className="col-7 scroll-section">
                    <Link to={'https://paulyatim.github.io/dismorfia/'} target='_blank' className='link'><h3>Dism0rfia</h3></Link>
                        <h5>01/23</h5>
                        <div className="mbp-mockup-wrapper">
                            <div className="mbp-container">
                                <div className="mbp-display with-glare">
                                    <div className="display-edge">
                                        <div className="bezel">
                                            <div className="display-camera" ></div>
                                            <div className="display-frame">
                                                <iframe src="https://paulyatim.github.io/dismorfia/index.html" ></iframe>
                                            </div>
                                            <div className="below-display">
                                                <div className="macbookpro"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mbp-keyboard">
                                    <div className="front">
                                        <div className="opener-left"></div>
                                        <div className="opener-right"></div>
                                    </div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <div className="mbp-shadow">			
                                        <div className="shadow-left"></div>
                                        <div className="shadow-right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='proj-description'>
                            <p>Este fue mi primer trabajo con una cliente. Fue muy interesante porque se trataba de una diseñadora que ya sabía como quería que se viera el sitio, por lo que fue la primera vez que tuve que replicar exactamente lo que ella tenía en mente. Es uno de mis proyectos favoritos.</p>
                            <div className='tags'>
                                <span>#HTML</span>
                                <span>#CSS</span>
                                <span>#Sass</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid justify-content-end section-lg">
                    <div className="col-7 scroll-section">
                        <Link to={'https://paulyatim.github.io/sauca-global/'} target='_blank' className='link'><h3>Sauca Global</h3></Link>
                        <h5>02/23</h5>
                        <div className="mbp-mockup-wrapper">
                            <div className="mbp-container">
                                <div className="mbp-display with-glare">
                                    <div className="display-edge">
                                        <div className="bezel">
                                            <div className="display-camera" ></div>
                                            <div className="display-frame">
                                                <iframe src="https://paulyatim.github.io/sauca-global/" ></iframe>
                                            </div>
                                            <div className="below-display">
                                                <div className="macbookpro"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mbp-keyboard">
                                    <div className="front">
                                        <div className="opener-left"></div>
                                        <div className="opener-right"></div>
                                    </div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <div className="mbp-shadow">			
                                        <div className="shadow-left"></div>
                                        <div className="shadow-right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='proj-description'>
                            <p>Este sitio fue otro cliente que necesitaba un sitio para un grupo de psicólogos que querían poder realizar turnos para hispanos en Estados Unidos. Destaco este proyecto por ser uno de los primeros proyectos profesionales que he realizado.</p>
                            <div className='tags'>
                                <span>#HTML</span>
                                <span>#CSS</span>
                                <span>#Bootstrap</span>
                                <span>#Sass</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid justify-content-end section-lg">
                    <div className="col-7 scroll-section">
                        <Link to={'https://paulyatim.github.io/eeaao/'} target='_blank' className='link'><h3>EEAAO - Sitio Web</h3></Link>
                        <h5>08/21</h5>
                        <div className="mbp-mockup-wrapper">
                            <div className="mbp-container">
                                <div className="mbp-display with-glare">
                                    <div className="display-edge">
                                        <div className="bezel">
                                            <div className="display-camera" ></div>
                                            <div className="display-frame">
                                                <iframe src="https://paulyatim.github.io/eeaao/" ></iframe>
                                            </div>
                                            <div className="below-display">
                                                <div className="macbookpro"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mbp-keyboard">
                                    <div className="front">
                                        <div className="opener-left"></div>
                                        <div className="opener-right"></div>
                                    </div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <div className="mbp-shadow">			
                                        <div className="shadow-left"></div>
                                        <div className="shadow-right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='proj-description'>
                            <p>Este es un proyecto muy especial para mí por distintos motivos. No solo es sobre mi película favorita, pero también me parece uno de los mejores que he hecho en cuestión de diseño y desarrollo. Este proyecto lo realicé en la materia de Producción Digital II, dictada por Joaquín Molinos en la Universidad de Palermo. Este sitio terminó siendo premiado por la universidad y el cuatrimestre siguiente fui invitado para ser asistente en la misma materia, con el mismo profesor, donde pude he aprendido y he ganado mucha más experiencia. </p>
                            <div className='tags'>
                                <span>#HTML</span>
                                <span>#CSS</span>
                                <span>#Bootstrap</span>
                                <span>#Javascript</span>
                                <span>@UniversidadDePalermo</span>
                                <span>@JoaquínMolinos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>
            

            <ParallaxLayer className='PL-sticky' offset={9.8} speed={2} sticky={{start: 9.8, end: 10.5}}>
                <div className="container-fluid justify-content-end section-lg">
                    <div className="col-7 scroll-section section-top">
                        <h2>audiovisual</h2>
                        <p>Estos son algunos proyectos audiovisuales que he realizado en estos últimos años:</p>
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer className='PL-child' offset={10} speed={1}>
                <div className="container-fluid justify-content-end section-lg">
                    <div className="col-7 scroll-section">
                        <h3>Koda</h3>
                        <iframe className='video' src="https://www.youtube.com/embed/-fYW9A4c6cE?si=CKTNVX3C8PCNbrMl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="container-fluid justify-content-end section-lg">
                    <div className="col-7 scroll-section">
                        <h3>La Última Dona</h3>
                        <iframe className='video' src="https://www.youtube.com/embed/bXW_oC9MaE4?si=Gap6Gi5oPUfro7zW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={11.5} speed={0.5}>
                <div className="container-fluid justify-content-center section-lg">
                    <div className="col-7 scroll-section">
                        <h2>Contacto</h2>
                    </div>
                </div>
            </ParallaxLayer>


            <ParallaxLayer className='bg-front' offset={2} speed={1} factor={1} sticky={{start: 2, end: 2.1}} id='bgFront1'>
                <div>
                    <img src={bgFront1} alt="" className="img-fluid fixed-bottom"/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer className='bg-front' offset={2.8} speed={1} factor={1} sticky={{start: 2.8, end: 2.9}} id='bgFront2'>
                <div>
                    <img src={bgFront2} alt="" className="img-fluid fixed-bottom"/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer className='bg-front' offset={3.6} speed={1} factor={1} sticky={{start: 3.6, end: 3.7}} id='bgFront3'>
                <div>
                    <img src={bgFront3} alt="" className="img-fluid fixed-bottom"/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer className='bg-front' offset={4.2} speed={1} factor={1} sticky={{start: 4.2, end: 4.3}} id='bgFront4'>
                <div>
                    <img src={bgFront4} alt="" className="img-fluid fixed-bottom"/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer className='bg-front' offset={5.2} speed={1} factor={1} sticky={{start: 5.2, end: 5.3}} id='bgFront5'>
                <div>
                    <img src={bgFront5} alt="" className="img-fluid fixed-bottom"/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer className='bg-front' offset={6} speed={1} factor={1} sticky={{start: 6, end: 6.1}} id='bgFront6'>
                <div>
                    <img src={bgFront6} alt="" className="img-fluid fixed-bottom"/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer className='bg-front' offset={6.8} speed={1} factor={1} sticky={{start: 6.8, end: 6.9}} id='bgFront7'>
                <div>
                    <img src={bgFront7} alt="" className="img-fluid fixed-bottom"/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer className='bg-front' offset={7.6} speed={1} factor={1} sticky={{start: 7.6, end: 7.7}} id='bgFront7'>
                <div>
                    <img src={bgFront8} alt="" className="img-fluid fixed-bottom"/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer className='bg-front' offset={8.4} speed={1} factor={1} sticky={{start: 8.4, end: 8.5}} id='bgFront7'>
                <div>
                    <img src={bgFront9} alt="" className="img-fluid fixed-bottom"/>
                </div>
            </ParallaxLayer>
        </Parallax>
    );
};

export default Content;