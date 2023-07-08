# Orbit Camera

Two modes: locked cursor and unlocked cursor.

## Locked Cursor Mode

In this mode, the cursor is locked and hidden. The camera's azimuth and elevation are adjusted every mouse motion event from relative mouse motion.
Tapping the cursor lock key will transition to unlocked cursor mode on keyup or after a (configurable, default maybe .25 seconds) delay. In the latter case the cursor will return to locked mode on keyup.

## Unlocked Cursor Mode

In this mode, the cursor is unlocked and visible. The camera's azimuth and elevation are adjusted only if the orbit camera key is pressed and input is not masked by UI elements. While the orbit camera key is pressed, the visible cursor will wrap the non-UI area.
Tapping the cursor lock key will transition to locked cursor mode on keyup. There is no held behavior.

The order of rotation is: azimuth, elevation (YXZ, where Z is unused). Elevation can rotate over the pole. In this condition, azimuth input is reversed to maintain consistency with cursor directions.
