import { createSignal, useContext } from 'solid-js';
import { SignalContext } from '../Context/ButtonClickProvider';
import styles from '../Styles/AddWorkSpace.module.css'

const AddWorkSpaceButton = () => {
    // Accessing the context values
    // const { cancelClicked, SetCancelClicked } = useContext(SignalContext) as {
    //     cancelClicked: boolean;
    //     SetCancelClicked: (value: boolean) => void;
    // }

    // const handleCancelClick = () => {
    //     console.log(`current cancelClicked value is: ${cancelClicked}`);
    //     // Setting the cancelClicked signal to true
    //     SetCancelClicked(!cancelClicked);
    // };

    // we would use the create signal for this to show and hide the popup box
    const [hidePopup, sethidePopup] = createSignal(false);
    const handleCancel = () => {
        sethidePopup(true);
    }

    // popup box text type adn text
    const [ addSpaceText, SetAddSpaceText ] = createSignal('');
    const TechList = JSON.parse(localStorage.getItem('Techs') || '[]') as string[];

    // adding up the text in the localstorage based array
    const addInSpace = () => {
        // Check if the tech already exists in the list
        if (TechList.includes(addSpaceText())) {
          // Tech already exists, show a message or handle it as needed
          console.log('Tech already exists!');
        } else {
          // Tech doesn't exist, add it to the list and update local storage
          const updatedTechList = [...TechList, addSpaceText()];
          localStorage.setItem('Techs', JSON.stringify(updatedTechList));
    
          // Clear the input field after adding the tech
          SetAddSpaceText('');
          sethidePopup(true);
        }
      };
    

    return (
        <>

            {/* this div  for the test of the context visulization  */}
            {/* <div>
                <input type="text" placeholder="Add workspace name..." />
                <button onClick={handleCancelClick}>Cancel</button>
                <button>Add</button>
            </div> */}

            <div class={`${styles.AddWorkSpacePopup} ${hidePopup() ? styles.hidepopup : styles.showpopup}`}>
                <input type="text" placeholder='Add workspace name...' value={addSpaceText()}
                class={styles.addWorkSpaceText}
                onchange={(e) => SetAddSpaceText(e.target.value)} />
                <div class={styles.buttons}>
                    <button class={styles.button} onclick={handleCancel}>Cancel</button>
                    <button class={styles.button} onclick={addInSpace}>Add</button>
                </div>
            </div>

        </>
    );
};

export default AddWorkSpaceButton;
