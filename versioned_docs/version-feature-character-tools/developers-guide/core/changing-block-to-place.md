# Changing Block to Place

1. Click on the UI button (or use a hotkey sequence?)
2. UI maps this onto a particular value from the block enum and sends it to CursorGlobals
3. CursorGlobals emits a change signal at the end of accepting this change
4. The UI listens for the change signal, and updates its display to match
5. The cursor listens for the change signal, and updates the thing it intends to place + the placement rules
