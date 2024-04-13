import { createSignal } from "solid-js";

import styles from './header.module.css';

function Header() {
    const [learningName, setLearningName] = createSignal('');
    const [openLearningDialog, setOpenLearningDialog] = createSignal(false);

    const createLearning = () => {
        // consoling out the name of the learning 
        console.log(learningName);
    }

    return (
        <>
            <div className={styles.header}>
                <h2 className={styles.heading}>Learning system</h2>
                <button onClick={() => setOpenLearningDialog(true)} className={styles.addLearningButton}>
                    Create learning
                </button>
            </div>

            {openLearningDialog() && (
                <div className={styles.createLearningDialog}>
                    <div className={styles.dialogHeader}>
                        <p className={styles.dialogHeading}>Learning name</p>
                        <button className={styles.closeButton} onClick={() => setOpenLearningDialog(false)}>Close</button>
                    </div>
                    <div className={styles.dialogColumn}>
                        <input type="text" className={styles.learningInput} placeholder="Type name..." onChange={(e) => setLearningName(e.target.value)} />
                        <button className={styles.createButton} onClick={createLearning}>Create</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
