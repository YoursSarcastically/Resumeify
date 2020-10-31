import React from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={['row', styles.footerNav].join(' ')}>
                    <div className="col-md-4">
                        <Link href="/">
                            <a>
                                <img src="/images/logo1.png" alt="wtfresume logo (resume builder)" className={styles.logo} />
                            </a>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li className={styles.footerNavTitle}></li>
                          
                        
                        </ul>
                    </div>
                    <div className="col-md-4">
                        
                                {/* <Link to="/insurance-api-service">
                                Insurance APIs
                            </Link> */}
                
                    </div>
                </div>
            </div>

            <div className={styles.footerCopyright}>resumeify</div>
        </footer>
    );
}
