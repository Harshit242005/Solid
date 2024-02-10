import { Show, createSignal, useContext } from 'solid-js';
import styles from '../Styles/Navbar.module.css';
import Tooltip from './Tooltip';
import AddWorkSpaceButton from './AddWorkSpace';
import { SignalContext } from '../Context/ButtonClickProvider';
function Navbar() {
    const [isTooltipVisible, setTooltipVisible] = createSignal(false);
    // const [isButtonClicked, setButtonClicked] = createSignal(false);
    const [togglePopup, setTogglePopup] = createSignal(false);
    const { cancelClicked, SetCancelClicked } = useContext(SignalContext) as {
        cancelClicked: boolean;
        SetCancelClicked: (value: boolean) => void;
    }

    const handleButtonClick = () => {
        console.log(`current cancelClicked value is: ${togglePopup}`);
        console.log(`current toggle popup value is: ${cancelClicked}`);
        setTogglePopup(!togglePopup());
        SetCancelClicked(!cancelClicked);
    };

    return (

        <>
            <div class={styles.navbar}>
                <button class={styles.startButton}
                    id='addWorkspaceButton'
                    onMouseEnter={() => setTooltipVisible(true)}
                    onMouseLeave={() => setTooltipVisible(false)}
                    onClick={handleButtonClick}
                >
                    <i class='fa fa-plus' style={{ "margin-right": "10px" }}></i>
                    Add</button>
            </div>
            {isTooltipVisible() && (
                <Tooltip content="Button will add a workspace">
                    {/* Any content that triggers the tooltip */}
                    <span>ℹ️</span>
                </Tooltip>
            )}

            {/* showing the add workspace here in this */}
            <Show when={togglePopup()}>
                <AddWorkSpaceButton />
            </Show>
        </>
    );
}
export default Navbar;