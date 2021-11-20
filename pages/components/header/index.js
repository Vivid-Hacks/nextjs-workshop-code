import styles from './header.module.css';


export default function Header() {
    return (
        <div className={styles.container}>
            <header>
                <div style={{}}>
                    <a href="/"><h1>Vivid Charts</h1></a>
                </div>
                <div style={{float: "right"}} className={styles.navportion}>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/live-data">Live Data</a>
                </div>
            </header>
        </div>
    )
}
