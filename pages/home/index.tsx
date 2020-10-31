import React from 'react';
import Link from 'next/link';

import { HeaderNavbar} from '@component';

import styles from './style.module.scss';

export default function Home() {
    return (
        <div className={styles.homePage}>
            <HeaderNavbar />

            <div className="container">
                <section className={['row', styles.first].join(' ')}>
                    <div className={['col-md-6', styles.firstLeft].join(' ')}>
                        <h1>Resumeify</h1>
                        <p>Design a resume</p>

                        <div className={styles.crBtn}>
                            <Link href="/resume-builder">
                                <a>Build My Resume</a>
                            </Link>
                        </div>
                    </div>
                    <div className={['col-md-6', styles.firstRight].join(' ')}>
                        
                    </div>
                </section>

                
                 

                <section className={[styles.third].join(' ')}>
                    <h2></h2>
                    <div className="row justify-content-md-center">
                        <article className={['col-md-6 row justify-content-md-center', styles.thirdVideo].join(' ')}>
                           
                        </article>
                    </div>
                </section>

               
            </div>

           
        </div>
    );
}
