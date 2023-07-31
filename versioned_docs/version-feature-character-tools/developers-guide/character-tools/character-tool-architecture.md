# Character Tool Architecture

The character possesses a selection of tools. Some examples are the impulse tool, flags, and the sample kit. The character is understood to have all of these tools available at all times, and may switch between them freely.

Tools are scenes, and manage all internal state and interaction with the world. All tools are parented to the toolbelt, which manages equipped state and filters input events.

Tools respond to the following inputs:

- Primary action (LMB)
- Secondary action (RMB)
- Tertiary action / mode switch (MMB)
- Range up/down (wheel up and down)

Primary / secondary / tertiary action inputs are passed as keyup and keydown. Range up/down is passed as keypress.
