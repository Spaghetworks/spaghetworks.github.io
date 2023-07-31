# Character Controller

Use `move_and_slide` for most (all?) movements.
Air control is fine, but at significantly reduced authority.
Jump produces upward acceleration for the first few frames after takeoff to permit jumps of different heights.
Directional inputs are vector summed, then normalized. No diagonal running.

Camera is azimuth-altitude Euler. The cursor should be locked by default, but may be unlocked momentarily by holding alt.
The camera is parented to the upper characterbody sphere.

## Crouching not yet implemented

Crouching is controlled by a rigidbody "head" affixed to the lower characterbody sphere by a slider joint. The upper characterbody sphere follows the rigidbody head.
Crouch lowers the rigidbody head by modifying the joint parameters. Nominal height is 175cm (17.5 blocks), crouching height is 85cm (8.5 blocks).
