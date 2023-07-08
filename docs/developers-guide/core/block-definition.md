# Block Definition

- `name:string` Internal name
- `display_name:string` Display name
- `category:string` Category path
- `visual_mesh` Visual mesh asset location, or else generator
- `collision_mesh` Collision mesh asset location, or else generator
- `modules:array` Modules block
  - `[n]:dictionary` Module
    - `name:string` Module name
    - `parameter:value` Module parameters

---

Additional fields may be required for mass, attachment rules, et cetera.
