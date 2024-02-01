import '../App.css';

import Contacto from './Contacto';

import { Link } from 'react-router-dom';

// import hero from '../assets/hero-image.png';
import heroFront from '../assets/hero-front.png';
import mv1 from '../assets/movie1.png';
import mv2 from '../assets/movie2.png';
import mv3 from '../assets/movie3.png';
import figma from '../assets/figma.svg';
import canva from '../assets/canva.svg';
import illustrator from '../assets/illustrator.svg';

function Responsive() {

    return (
        <div className='mobile-body'>
            <div className='nav-layer'>
                <nav className="navbar navbar-expand-lg fixed-top" data-bs-theme="dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                    <div className="nav-link" onClick={() => document.getElementById('paulYatim').scrollIntoView()}>PaulYatim</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" onClick={() => document.getElementById('sobreMi').scrollIntoView()}>sobreMi</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" onClick={() => document.getElementById('projsDesarrollo').scrollIntoView()}>desarrolloWeb</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" onClick={() => document.getElementById('audiovisual').scrollIntoView()}>audiovisual</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" onClick={() => document.getElementById('contacto').scrollIntoView()}>contacto</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div id='paulYatim'>
                <div className="container-fluid justify-content-end section-lg intro">
                    <svg viewBox="0 0 324 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_834_477" fill="white">
                            <path d="M23.576 0.400024C26.008 0.400024 27.416 1.80803 27.416 4.24003V36.24C27.416 38.672 28.824 40.08 31.256 40.08H43.544C46.104 40.08 47.384 38.672 47.384 36.24V4.24003C47.384 1.80803 48.792 0.400024 51.224 0.400024H65.56C68.12 0.400024 69.4 1.68002 69.4 4.24003V86.16C69.4 88.592 68.12 90 65.56 90H51.224C48.792 90 47.384 88.592 47.384 86.16V65.936C47.384 63.376 46.104 62.096 43.544 62.096H31.256C28.824 62.096 27.416 63.376 27.416 65.936V86.16C27.416 88.592 26.136 90 23.576 90H9.24002C6.80802 90 5.40002 88.592 5.40002 86.16V4.24003C5.40002 1.68002 6.68002 0.400024 9.24002 0.400024H23.576Z"/>
                            <path d="M93.67 0.400024C96.23 0.400024 97.51 1.68002 97.51 4.24003V86.16C97.51 88.592 96.23 90 93.67 90H79.59C77.158 90 75.75 88.592 75.75 86.16V4.24003C75.75 1.68002 77.158 0.400024 79.59 0.400024H93.67Z"/>
                            <path d="M23.32 110.4C25.88 110.4 27.16 111.68 27.16 114.24V196.16C27.16 198.592 25.88 200 23.32 200H9.24002C6.80802 200 5.40002 198.592 5.40002 196.16V114.24C5.40002 111.68 6.80802 110.4 9.24002 110.4H23.32Z"/>
                            <path d="M49.116 110.4C51.676 110.4 52.956 111.68 52.956 114.24V128.576C52.956 137.92 48.86 145.344 39.004 146.368C37.34 146.496 36.7 144.96 37.852 143.552C41.308 139.456 41.82 136.256 41.948 133.696C41.948 132.928 41.436 132.416 40.668 132.416H34.78C32.348 132.416 30.94 131.008 30.94 128.576V114.24C30.94 111.68 32.348 110.4 34.78 110.4H49.116Z"/>
                            <path d="M87.186 110.4C89.49 110.4 90.77 111.68 91.282 113.856L100.37 151.104C100.626 152.384 101.65 152.384 101.906 151.104L110.994 113.856C111.506 111.68 112.786 110.4 115.09 110.4H141.586C144.146 110.4 145.426 111.68 145.426 114.24V196.16C145.426 198.592 144.146 200 141.586 200H127.25C124.818 200 123.41 198.592 123.41 196.16V145.728C123.41 144.832 122.258 144.704 122.002 145.6L109.586 196.672C109.074 198.848 107.666 200 105.362 200H96.914C94.61 200 93.202 198.848 92.69 196.672L80.274 145.6C80.018 144.704 78.866 144.832 78.866 145.728V196.16C78.866 198.592 77.586 200 75.026 200H60.69C58.13 200 56.85 198.592 56.85 196.16V114.24C56.85 111.68 58.13 110.4 60.69 110.4H87.186Z"/>
                            <path d="M9.24002 220.4H37.4C60.184 220.4 69.4 230.128 69.4 251.12C69.4 272.112 60.184 281.84 37.4 281.84H31.256C28.824 281.84 27.416 283.12 27.416 285.68V306.16C27.416 308.72 26.136 310 23.576 310H9.24002C6.80802 310 5.40002 308.592 5.40002 306.16V224.368C5.40002 221.808 6.68002 220.528 9.24002 220.4ZM31.256 259.824H38.168C44.312 259.824 47.384 259.056 47.384 251.12C47.384 243.184 44.312 242.416 38.168 242.416H31.256C28.824 242.416 27.416 243.696 27.416 246.256V255.984C27.416 258.416 28.824 259.824 31.256 259.824Z"/>
                            <path d="M132.955 305.648C132.955 308.464 131.675 310 129.115 310H114.779C112.347 310 110.939 308.72 110.939 306.16V295.024C110.939 292.464 109.659 291.184 107.099 291.184H96.091C93.659 291.184 92.251 292.464 92.251 295.024V306.16C92.251 308.72 90.971 310 88.411 310H74.075C71.643 310 70.235 308.464 70.235 305.648V251.376C70.235 235.248 72.795 218.096 101.595 218.096C130.395 218.096 132.955 235.248 132.955 251.376V305.648ZM110.939 251.376C110.939 245.232 110.043 242.16 101.595 242.16C93.147 242.16 92.251 245.232 92.251 251.376V265.328C92.251 267.76 93.659 269.168 96.091 269.168H107.099C109.659 269.04 110.939 267.76 110.939 265.2V251.376Z"/>
                            <path d="M141.797 220.4H156.133C158.693 220.4 159.973 221.68 159.973 224.24V274.416C159.973 284.272 160.613 290.288 170.085 290.288C179.557 290.288 180.197 284.272 180.197 274.416V224.24C180.197 221.68 181.605 220.4 184.037 220.4H198.373C200.933 220.4 202.213 221.68 202.213 224.24V281.2C202.213 289.648 200.421 312.304 170.085 312.304C139.749 312.304 137.957 289.648 137.957 281.2V224.24C137.957 221.68 139.365 220.4 141.797 220.4Z"/>
                            <path d="M226.001 220.4C228.561 220.4 229.841 221.68 229.841 224.24V284.144C229.841 286.576 231.249 287.984 233.681 287.984H262.225C264.785 287.984 266.065 289.264 266.065 291.824V306.16C266.065 308.72 264.785 310 262.225 310H211.665C209.233 310 207.825 308.592 207.825 306.16V224.24C207.825 221.68 209.233 220.4 211.665 220.4H226.001Z"/>
                            <path d="M22.808 330.4C24.984 330.4 26.392 331.296 27.16 333.344L36.632 357.152C37.144 358.304 37.912 358.304 38.424 357.152L47.896 333.344C48.664 331.296 50.072 330.4 52.248 330.4H70.552C73.496 330.4 74.776 332.192 73.496 334.88L50.584 386.08C50.328 386.592 50.328 387.104 50.328 387.616V416.16C50.328 418.592 49.048 420 46.488 420H28.568C26.136 420 24.728 418.592 24.728 416.16V387.616C24.728 387.104 24.728 386.592 24.472 386.08L1.43202 334.88C0.15202 332.192 1.43202 330.4 4.37602 330.4H22.808Z"/>
                            <path d="M134.08 415.648C134.08 418.464 132.8 420 130.24 420H115.904C113.472 420 112.064 418.72 112.064 416.16V405.024C112.064 402.464 110.784 401.184 108.224 401.184H97.216C94.784 401.184 93.376 402.464 93.376 405.024V416.16C93.376 418.72 92.096 420 89.536 420H75.2C72.768 420 71.36 418.464 71.36 415.648V361.376C71.36 345.248 73.92 328.096 102.72 328.096C131.52 328.096 134.08 345.248 134.08 361.376V415.648ZM112.064 361.376C112.064 355.232 111.168 352.16 102.72 352.16C94.272 352.16 93.376 355.232 93.376 361.376V375.328C93.376 377.76 94.784 379.168 97.216 379.168H108.224C110.784 379.04 112.064 377.76 112.064 375.2V361.376Z"/>
                            <path d="M157.83 356.256C157.83 353.696 156.55 352.416 153.99 352.416H136.07C133.638 352.416 132.23 351.008 132.23 348.576V334.24C132.23 331.68 133.638 330.4 136.07 330.4H201.606C204.166 330.4 205.446 331.68 205.446 334.24V348.576C205.446 351.008 204.166 352.416 201.606 352.416H183.686C181.254 352.416 179.846 353.696 179.846 356.256V416.16C179.846 418.592 178.566 420 176.006 420H161.67C159.238 420 157.83 418.592 157.83 416.16V356.256Z"/>
                            <path d="M224.62 330.4C227.18 330.4 228.46 331.68 228.46 334.24V416.16C228.46 418.592 227.18 420 224.62 420H210.54C208.108 420 206.7 418.592 206.7 416.16V334.24C206.7 331.68 208.108 330.4 210.54 330.4H224.62Z"/>
                            <path d="M265.136 330.4C267.44 330.4 268.72 331.68 269.232 333.856L278.32 371.104C278.576 372.384 279.6 372.384 279.856 371.104L288.944 333.856C289.456 331.68 290.736 330.4 293.04 330.4H319.536C322.096 330.4 323.376 331.68 323.376 334.24V416.16C323.376 418.592 322.096 420 319.536 420H305.2C302.768 420 301.36 418.592 301.36 416.16V365.728C301.36 364.832 300.208 364.704 299.952 365.6L287.536 416.672C287.024 418.848 285.616 420 283.312 420H274.864C272.56 420 271.152 418.848 270.64 416.672L258.224 365.6C257.968 364.704 256.816 364.832 256.816 365.728V416.16C256.816 418.592 255.536 420 252.976 420H238.64C236.08 420 234.8 418.592 234.8 416.16V334.24C234.8 331.68 236.08 330.4 238.64 330.4H265.136Z"/>
                        </mask>
                        <path d="M23.576 0.400024C26.008 0.400024 27.416 1.80803 27.416 4.24003V36.24C27.416 38.672 28.824 40.08 31.256 40.08H43.544C46.104 40.08 47.384 38.672 47.384 36.24V4.24003C47.384 1.80803 48.792 0.400024 51.224 0.400024H65.56C68.12 0.400024 69.4 1.68002 69.4 4.24003V86.16C69.4 88.592 68.12 90 65.56 90H51.224C48.792 90 47.384 88.592 47.384 86.16V65.936C47.384 63.376 46.104 62.096 43.544 62.096H31.256C28.824 62.096 27.416 63.376 27.416 65.936V86.16C27.416 88.592 26.136 90 23.576 90H9.24002C6.80802 90 5.40002 88.592 5.40002 86.16V4.24003C5.40002 1.68002 6.68002 0.400024 9.24002 0.400024H23.576Z" stroke="#3C9B81" strokeWidth="2" strokeOpacity="0.5" mask="url(#path-1-inside-1_834_477)"/>
                        <path d="M93.67 0.400024C96.23 0.400024 97.51 1.68002 97.51 4.24003V86.16C97.51 88.592 96.23 90 93.67 90H79.59C77.158 90 75.75 88.592 75.75 86.16V4.24003C75.75 1.68002 77.158 0.400024 79.59 0.400024H93.67Z" stroke="#3C9B81" strokeWidth="2" strokeOpacity="0.5" mask="url(#path-1-inside-1_834_477)"/>
                        <path d="M23.32 110.4C25.88 110.4 27.16 111.68 27.16 114.24V196.16C27.16 198.592 25.88 200 23.32 200H9.24002C6.80802 200 5.40002 198.592 5.40002 196.16V114.24C5.40002 111.68 6.80802 110.4 9.24002 110.4H23.32Z" stroke="#3C9B81" strokeWidth="2" strokeOpacity="0.5" mask="url(#path-1-inside-1_834_477)"/>
                        <path d="M49.116 110.4C51.676 110.4 52.956 111.68 52.956 114.24V128.576C52.956 137.92 48.86 145.344 39.004 146.368C37.34 146.496 36.7 144.96 37.852 143.552C41.308 139.456 41.82 136.256 41.948 133.696C41.948 132.928 41.436 132.416 40.668 132.416H34.78C32.348 132.416 30.94 131.008 30.94 128.576V114.24C30.94 111.68 32.348 110.4 34.78 110.4H49.116Z" stroke="#3C9B81" strokeWidth="2" strokeOpacity="0.5" mask="url(#path-1-inside-1_834_477)"/>
                        <path d="M87.186 110.4C89.49 110.4 90.77 111.68 91.282 113.856L100.37 151.104C100.626 152.384 101.65 152.384 101.906 151.104L110.994 113.856C111.506 111.68 112.786 110.4 115.09 110.4H141.586C144.146 110.4 145.426 111.68 145.426 114.24V196.16C145.426 198.592 144.146 200 141.586 200H127.25C124.818 200 123.41 198.592 123.41 196.16V145.728C123.41 144.832 122.258 144.704 122.002 145.6L109.586 196.672C109.074 198.848 107.666 200 105.362 200H96.914C94.61 200 93.202 198.848 92.69 196.672L80.274 145.6C80.018 144.704 78.866 144.832 78.866 145.728V196.16C78.866 198.592 77.586 200 75.026 200H60.69C58.13 200 56.85 198.592 56.85 196.16V114.24C56.85 111.68 58.13 110.4 60.69 110.4H87.186Z" stroke="#3C9B81" strokeWidth="2" strokeOpacity="0.5" mask="url(#path-1-inside-1_834_477)"/>
                        <path d="M9.24002 220.4H37.4C60.184 220.4 69.4 230.128 69.4 251.12C69.4 272.112 60.184 281.84 37.4 281.84H31.256C28.824 281.84 27.416 283.12 27.416 285.68V306.16C27.416 308.72 26.136 310 23.576 310H9.24002C6.80802 310 5.40002 308.592 5.40002 306.16V224.368C5.40002 221.808 6.68002 220.528 9.24002 220.4ZM31.256 259.824H38.168C44.312 259.824 47.384 259.056 47.384 251.12C47.384 243.184 44.312 242.416 38.168 242.416H31.256C28.824 242.416 27.416 243.696 27.416 246.256V255.984C27.416 258.416 28.824 259.824 31.256 259.824Z" stroke="#3C9B81" strokeWidth="2" strokeOpacity="0.5" mask="url(#path-1-inside-1_834_477)"/>
                        <path d="M132.955 305.648C132.955 308.464 131.675 310 129.115 310H114.779C112.347 310 110.939 308.72 110.939 306.16V295.024C110.939 292.464 109.659 291.184 107.099 291.184H96.091C93.659 291.184 92.251 292.464 92.251 295.024V306.16C92.251 308.72 90.971 310 88.411 310H74.075C71.643 310 70.235 308.464 70.235 305.648V251.376C70.235 235.248 72.795 218.096 101.595 218.096C130.395 218.096 132.955 235.248 132.955 251.376V305.648ZM110.939 251.376C110.939 245.232 110.043 242.16 101.595 242.16C93.147 242.16 92.251 245.232 92.251 251.376V265.328C92.251 267.76 93.659 269.168 96.091 269.168H107.099C109.659 269.04 110.939 267.76 110.939 265.2V251.376Z" stroke="#3C9B81" strokeWidth="2" strokeOpacity="0.5" mask="url(#path-1-inside-1_834_477)"/>
                        <path d="M141.797 220.4H156.133C158.693 220.4 159.973 221.68 159.973 224.24V274.416C159.973 284.272 160.613 290.288 170.085 290.288C179.557 290.288 180.197 284.272 180.197 274.416V224.24C180.197 221.68 181.605 220.4 184.037 220.4H198.373C200.933 220.4 202.213 221.68 202.213 224.24V281.2C202.213 289.648 200.421 312.304 170.085 312.304C139.749 312.304 137.957 289.648 137.957 281.2V224.24C137.957 221.68 139.365 220.4 141.797 220.4Z" stroke="#3C9B81" strokeWidth="2" strokeOpacity="0.5" mask="url(#path-1-inside-1_834_477)"/>
                        <path d="M226.001 220.4C228.561 220.4 229.841 221.68 229.841 224.24V284.144C229.841 286.576 231.249 287.984 233.681 287.984H262.225C264.785 287.984 266.065 289.264 266.065 291.824V306.16C266.065 308.72 264.785 310 262.225 310H211.665C209.233 310 207.825 308.592 207.825 306.16V224.24C207.825 221.68 209.233 220.4 211.665 220.4H226.001Z" stroke="#3C9B81" strokeWidth="2" strokeOpacity="0.5" mask="url(#path-1-inside-1_834_477)"/>
                        <path d="M22.808 330.4C24.984 330.4 26.392 331.296 27.16 333.344L36.632 357.152C37.144 358.304 37.912 358.304 38.424 357.152L47.896 333.344C48.664 331.296 50.072 330.4 52.248 330.4H70.552C73.496 330.4 74.776 332.192 73.496 334.88L50.584 386.08C50.328 386.592 50.328 387.104 50.328 387.616V416.16C50.328 418.592 49.048 420 46.488 420H28.568C26.136 420 24.728 418.592 24.728 416.16V387.616C24.728 387.104 24.728 386.592 24.472 386.08L1.43202 334.88C0.15202 332.192 1.43202 330.4 4.37602 330.4H22.808Z" stroke="#3C9B81" strokeWidth="2" strokeOpacity="0.5" mask="url(#path-1-inside-1_834_477)"/>
                        <path d="M134.08 415.648C134.08 418.464 132.8 420 130.24 420H115.904C113.472 420 112.064 418.72 112.064 416.16V405.024C112.064 402.464 110.784 401.184 108.224 401.184H97.216C94.784 401.184 93.376 402.464 93.376 405.024V416.16C93.376 418.72 92.096 420 89.536 420H75.2C72.768 420 71.36 418.464 71.36 415.648V361.376C71.36 345.248 73.92 328.096 102.72 328.096C131.52 328.096 134.08 345.248 134.08 361.376V415.648ZM112.064 361.376C112.064 355.232 111.168 352.16 102.72 352.16C94.272 352.16 93.376 355.232 93.376 361.376V375.328C93.376 377.76 94.784 379.168 97.216 379.168H108.224C110.784 379.04 112.064 377.76 112.064 375.2V361.376Z" stroke="#3C9B81" strokeWidth="2" strokeOpacity="0.5" mask="url(#path-1-inside-1_834_477)"/>
                        <path d="M157.83 356.256C157.83 353.696 156.55 352.416 153.99 352.416H136.07C133.638 352.416 132.23 351.008 132.23 348.576V334.24C132.23 331.68 133.638 330.4 136.07 330.4H201.606C204.166 330.4 205.446 331.68 205.446 334.24V348.576C205.446 351.008 204.166 352.416 201.606 352.416H183.686C181.254 352.416 179.846 353.696 179.846 356.256V416.16C179.846 418.592 178.566 420 176.006 420H161.67C159.238 420 157.83 418.592 157.83 416.16V356.256Z" stroke="#3C9B81" strokeWidth="2" strokeOpacity="0.5" mask="url(#path-1-inside-1_834_477)"/>
                        <path d="M224.62 330.4C227.18 330.4 228.46 331.68 228.46 334.24V416.16C228.46 418.592 227.18 420 224.62 420H210.54C208.108 420 206.7 418.592 206.7 416.16V334.24C206.7 331.68 208.108 330.4 210.54 330.4H224.62Z" stroke="#3C9B81" strokeWidth="2" strokeOpacity="0.5" mask="url(#path-1-inside-1_834_477)"/>
                        <path d="M265.136 330.4C267.44 330.4 268.72 331.68 269.232 333.856L278.32 371.104C278.576 372.384 279.6 372.384 279.856 371.104L288.944 333.856C289.456 331.68 290.736 330.4 293.04 330.4H319.536C322.096 330.4 323.376 331.68 323.376 334.24V416.16C323.376 418.592 322.096 420 319.536 420H305.2C302.768 420 301.36 418.592 301.36 416.16V365.728C301.36 364.832 300.208 364.704 299.952 365.6L287.536 416.672C287.024 418.848 285.616 420 283.312 420H274.864C272.56 420 271.152 418.848 270.64 416.672L258.224 365.6C257.968 364.704 256.816 364.832 256.816 365.728V416.16C256.816 418.592 255.536 420 252.976 420H238.64C236.08 420 234.8 418.592 234.8 416.16V334.24C234.8 331.68 236.08 330.4 238.64 330.4H265.136Z" stroke="#3C9B81" strokeWidth="2" strokeOpacity="0.5" mask="url(#path-1-inside-1_834_477)"/>
                    </svg>

                </div>
            </div>
            <div id='fotoFront' className='bg-image' style={{zIndex: 5}}>
                <div className="heroImage">
                    <img src={heroFront} alt="foto de Paul Yatim" className="img-fluid"/>
                </div>
            </div>
            <div id='bienvenidxs' style={{zIndex: 1}}>
                <div className="container-fluid justify-content-end section-lg">
                    <div className="col-7 scroll-section intro">
                        <h2>Bienvenidxs a mi <span><strong>paul</strong>folio</span></h2>
                        <p>Soy Paul Yatim, estudiante de Diseño de Imagen y Sonido en la Universidad de Palermo. Soy desarrollador frontend y diseñador digital.</p>
                    </div>
                </div>
            </div>
            <div className='PL-sticky'>
                <div className="container-fluid justify-content-end section-lg">
                    <div className="col-7 scroll-section section-top">
                        <h2>sobreMi</h2>
                        <p>Me gustan los rankings, así que les dejo algunos top 3 para que me conozcan:</p>
                    </div>
                </div>
            </div>
            <div className='PL-child' id='sobreMi'>
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
            </div>
            <div className='PL-sticky'>
                <div className="container-fluid justify-content-end section-lg">
                    <div className="col-7 scroll-section section-top">
                        <h2>desarrolloWeb</h2>
                        <p>Estos son algunos proyectos míos como desarrollador y diseñador web:</p>
                    </div>
                </div>
            </div>
            <div className='PL-child' id='projsDesarrollo'>
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
            </div>
            <div className='PL-sticky'>
                <div className="container-fluid justify-content-end section-lg">
                    <div className="col-7 scroll-section section-top">
                        <h2>audiovisual</h2>
                        <p>Estos son algunos proyectos audiovisuales que he realizado en estos últimos años:</p>
                    </div>
                </div>
            </div>
            <div className='PL-child' id='audiovisual'>
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
            </div>
            <div className='PL-child' id='contacto'>
                <div className="container-fluid justify-content-end section-lg">
                    <div className="col-7 scroll-section">
                        <div>
                            <h2>contacto</h2>
                            <p>Escríbanme! Estoy activamente buscando trabajo, así que si les interesa lo que tengo para ofrecer, entremos en contacto así podemos trabajar juntos!</p>
                        </div>
                        <Contacto></Contacto>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Responsive;