import { createSignal, useContext } from 'solid-js';
import { SignalContext } from '../Context/ButtonClickProvider';
import styles from '../Styles/AddWorkSpace.module.css'

const AddWorkSpaceButton = () => {
    // Accessing the context values
    const { cancelClicked, SetCancelClicked } = useContext(SignalContext) as {
        cancelClicked: boolean;
        SetCancelClicked: (value: boolean) => void;
    }

    const handleCancelClick = () => {
        console.log(`current cancelClicked value is: ${cancelClicked}`);
        // Setting the cancelClicked signal to true
        SetCancelClicked(!cancelClicked);
    };

    // we would use the create signal for this to show and hide the popup box
    const [hidePopup, sethidePopup] = createSignal(false);
    const handleCancel = () => {
        sethidePopup(true);
    }

    return (
        <>

            {/* this div  for the test of the context visulization  */}
            <div>
                <input type="text" placeholder="Add workspace name..." />
                <button onClick={handleCancelClick}>Cancel</button>
                <button>Add</button>
            </div>

            <div class={`${styles.AddWorkSpacePopup} ${hidePopup() ? styles.hidepopup : styles.showpopup}`}>
                <input type="text" placeholder='Ass workspace name...' />
                <div class={styles.buttons}>
                    <button class={styles.button} onclick={handleCancel}>Cancel</button>
                    <button class={styles.button}>Add</button>
                </div>
            </div>

        </>
    );
};

export default AddWorkSpaceButton;
