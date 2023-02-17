import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.background}>
    <div className={styles.navbar}>
        <div className={styles.logo}>
       <Image src="/2.png" width={100} height={25} />
        </div>
        <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About us</Link>
            <Link href="/login">Login</Link>
        </div>
        </div>
        <h4 className={styles.start}>
            Start a new experience
        </h4>
        <h4 className={styles.in}>
            in <span className={styles.contri}>contributing with</span>
            <span className={styles.team}> your team</span>
            </h4>
        <div className={styles.content}>
        dordoc is a collaborative platform gathering human centered methodologies, 
Everything will be organised in one place, your team will be working together,you’ll 
be on top of things, and a sense of calm will set in.
        </div>
        <div className={styles.row}>
            <ul className={styles.lin}>
                <li className={styles.one}>Project Management</li>
                <li className={styles.two}>Meetings</li>
                <li className={styles.three}>invoice management</li>
                <li className={styles.four}>Hrms system</li>
                <li className={styles.five}>CI & CD Tools</li>
            </ul>
        </div>
        <div className={styles.banner}>
            <Image src="/banner.png" width={800} height={400}/>
        </div>
        <div className={styles.onee}>
        <h2 className={styles.plat}>One Platform</h2>
        <h2 className={styles.sol}>many solutions</h2>
        </div>
        <div className={styles.content2}>
        Bring your team’s work together in one shared space. Choose the project view that suits your 
style and collaborate no matter where you are.Automate and manage all your team and 
internal work in one place to simply your workflow with our solutions.
        </div>
        <div className={styles.but}>
            <Image src="/button.png" width={370} height={150} className={styles.img}/>
            <Image src ="/arrow.png" width={40} height={40} className={styles.arrow} />
            <span className={styles.get}>Get Start With dordoc</span>
        </div>
        
        
    
    </div>
  )
}

export default Navbar