# Cursor Camera Movement

EditorCursorUp and -Down will increment or decrement the cursor's Y coordinate, respectively, and invert when the camera is rotated over.

EditorCursor\[Forward|Left|Back|Right] will modify the cursor's X and Z coordinates (Forward is Z¯ and Left is X¯), rotated into place by `round(azimuth/(pi/2)) * pi/2`.
