# Block Loading System

The block loading system deserializes block definitions from config files, assets, and scripts.

- Read and parse file to structured data per [Block Definition](./block-definition.md)
- Assemble scene
- Place scene in collection
- Emit signal with name

Scene assembly is as follows:

- Start scene assembly with a MeshInstance, Area3D, and CollisionShape (all defaults)
- Configure the MeshInstance and CollisionShape by asset references or cuboid helper function
- Iterate over all entries in the module list, writing the appropriate parameters to each module before adding
- Attach metadata to MeshInstance
