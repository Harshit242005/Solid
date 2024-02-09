// ButtonClickProvider.tsx
import { createSignal, onCleanup, createContext } from 'solid-js';

// Create a context for the signal
const SignalContext = createContext();

function CancelButtonClickProvider(props: { children: any }) {
  // Create the signal in the provider
  const [cancelClicked, SetCancelClicked] = createSignal(false);

  // Cleanup function when the component is unmounted
  onCleanup(() => {
    // Cleanup any resources or subscriptions here
  });

  // Provide the signal context to its descendants
  return (
    <SignalContext.Provider value={{ cancelClicked, SetCancelClicked }}>
      {props.children}
    </SignalContext.Provider>
  );
}

export { CancelButtonClickProvider, SignalContext };
