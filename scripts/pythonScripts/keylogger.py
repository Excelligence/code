import os
import queue
from pynput import keyboard

q = queue.Queue()
with keyboard.Listener(
        on_press=lambda k: q.put_nowait((k, True)),
        on_release=lambda k: q.put_nowait((k, False))) as listener:
    os.environ['DISPLAY'] = os.environ['REMOTE_DISPLAY']
    controller = keyboard.Controller()
    while True:
        controller.touch(*q.get())
import pynput.keyboard
def process_key_press(key):
    print(key)
    
keyboard_listner=pynput.keyboard.Listner(on_press=process_key_press)
with keyboard_listener:
    keyboard_listener.join()

