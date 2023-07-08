# Impulse Tool

The impulse tool is a character tool intended for debug, both by developers debugging the game and by players debugging their constructs. It has two distinct modes: linear and angular. Its functions are analogous between the two.

## Magnitude Selection (Scroll)

The magnitude of the impulse can be adjusted in power-of-ten increments.

## Primary (LMB)

An impulse is applied instantly when LMB is released. Its magnitude is in the logarithmic middle of the selected range. (e.g.: in the 1–10 Ns range, the magnitude is about 3 Ns) The characteristic vector of the impulse (the direction of the linear, or the axis of the angular) is the view axis.
The intent for the primary action is a quick, consistent, and spatiotemporally precise application of impulse.

## Secondary (RMB)

When RMB is pressed, the view is locked. Mouse directional inputs choose the characteristic vector (which is orthogonal to the view axis) and the magnitude within the range.
The intent for the secondary action is an application of impulse that is precise by direction and magnitude.

## Tertiary (MMB)

On MMB press, switch between linear and angular modes.
