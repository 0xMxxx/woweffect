import { useRouter } from 'next/router';
import { useEffect, useReducer } from 'react';
import styles from '../../styles/Navbar.module.scss';
import Modal from './Modal';

export default function Navbar() {

    const [isOpen, toggleIsOpen] = useReducer((state, action) => {
        return action;
    }, false);

    const router = useRouter();

    useEffect(() => {
        window.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                toggleIsOpen(false);
            } else if (e.key === 'a' || e.key === 'A') {
                toggleIsOpen(true);
            }
        });
    }, []);

    return (
        <>
            <Modal showModal={isOpen} setShowModal={toggleIsOpen} />
            <section className={styles.container}>
                <div className={styles.header}>
                    <h1>Seth Diary - V0.0.5</h1>
                    <div className={styles.rightHeader}>
                        {!isOpen && <button onClick={() => toggleIsOpen(true)} className={styles.contactMe}>Contact Team</button>}
                    </div>
                </div>
            </section>
        </>
    )
}