# Construct Editor-Simulation Translation

## From Editor to Simulation

Convert the construct's root Node3D into a RigidBody3D
Iterate over all blocks:

- Call the MeshInstance3D's `to_simulation()` to signal any modules to enter simulation mode
- Add the block's mass-weighted position to the CoM
- Add the block's moment of inertia about the root
- Move the CollisionShape3D to the RigidBody3D preserving transform
- Free the Area3D
  Correct the moment of inertia by the parallel axis theorem

## From Simulation to Editor

Convert the construct's root RigidBody3D into a Node3D
Iterate over all blocks:

- Call the MeshInstance3D's `to_editor()` to signal any modules to enter editor mode
- Copy instanced the Area3D (and CollisionShape) from the original block
