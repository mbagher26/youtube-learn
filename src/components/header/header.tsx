import { Link } from "react-router-dom";
import IHeaderProps from "./header.types";
import styles from './header.module.scss'

const Header = (props: IHeaderProps) => {

    return (
        <header className={styles.header}>
            <div className="container">
                <nav>
                    <div className={styles.nav_box}>
                        <Link to="/">Home</Link>
                        <Link to="/posts">Products</Link>
                    </div>
                    <div className={styles.nav_box}>
                        <Link to="/login">Login</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
