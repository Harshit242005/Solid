// Tooltip.tsx
import { Portal } from 'solid-js/web';
import { JSX } from 'solid-js/jsx-runtime';
interface TooltipProps {
  content: string;
  children?: JSX.Element; // Include children in the interface
}

const Tooltip = (props: TooltipProps): JSX.Element => {
  const tooltipRoot = document.getElementById('tooltip-root')!;

  return (
    <Portal mount={tooltipRoot}>
      <div style={tooltipStyles}>
        {props.content}
        {props.children} {/* Render children if provided */}
      </div>
    </Portal>
  );
};
// getting the button access
//const button = document.getElementById('addWorkspaceButton'); // Replace with your button's ID
const tooltipStyles: Record<string, string> = {
  position: 'absolute',
  background: 'rgba(0, 0, 0, 1)',
  color: 'white',
  padding: '8px',
  borderRadius: '10px',
  TransitionEvent: 'ease-in',
  Transition: '0.5s',
  zIndex: '999',
   // Adjust the following styles for positioning
   top: '10%',  // Adjust as needed
   left: '90%',  // Adjust as needed
   transform: 'translate(-50%, -50%)', // Center the tooltip
};

export default Tooltip;