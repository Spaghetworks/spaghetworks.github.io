# Scene State Machine

State transitions consist of the following:

- (Start loading screen)
- Save old scene state
- Free old scene
- Start new scene
- Load new scene state
- Pass to the new scene any payload
- (Kill loading screen)

~~Scene frees can be deferred to improve reload times. The primary usecase is exiting the editor, then immediately reentering it to fix some minor error.
Regardless of whether the scene free is deferred, the scene state is always saved immediately.~~ Feature deplanned, but will reconsider if load times become long enough to bother.

Full list of scenes currently planned:
`SCENE_NONE` Placeholder null scene. Indicates that the state machine is uninitialized.
`SCENE_MENU` Main menu.
`SCENE_EDITOR` Edit constructs.
`SCENE_SIMULATION` Physics and simulation active. Time may be paused, but all states remain in memory.
