import { FaBook, FaCode, FaGlobe, FaLock, FaUserShield } from 'react-icons/fa';
import Version from "./version";
import './css/nav.css';

export default function Home() {
    return (
        <div>
            <div className="navbar">
                <div className="navbar__item -blue">
                    <span className="navbar__icon">
                        <FaBook />
                    </span>
                </div>
                <div className="navbar__item -orange">
                    <span className="navbar__icon">
                        <FaCode />
                    </span>
                </div>
                <div className="navbar__item -navy-blue">
                    <span className="navbar__icon">
                        <FaGlobe />
                    </span>
                </div>
                <div className="navbar__item -yellow">
                    <span className="navbar__icon">
                        <FaLock />
                    </span>
                </div>
                <div className="navbar__item -purple">
                    <span className="navbar__icon">
                        <FaUserShield />
                    </span>
                </div>
            </div>
            {/* <Version /> */}
        </div>
    );
}
