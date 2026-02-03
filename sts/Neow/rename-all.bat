@echo off
setlocal enabledelayedexpansion

rem Step 1: rename to temporary names
set n=1
for %%F in (*.png *.PNG) do (
    ren "%%F" "__temp_!n!.png"
    set /a n+=1
)

rem Step 2: rename temp files to final numbers
set n=1
for %%F in (__temp_*.png) do (
    ren "%%F" "!n!.png"
    set /a n+=1
)

echo Done! Renamed PNGs to 1.png, 2.png, 3.png, ...
pause
