# Thư viện mở rộng cho bộ kit xe điều khiển car:bit v2

```python
from carbit import *
from ble_uart_peripheral import *
import time

def ble_on_rx_callback(event):
  if event == (!B516):
    new_car.forward(0)
  elif event == (!B615):
    new_car.backward(0)
  elif event == (!B714):
    new_car.left(0)
  elif event == (!B714):
    new_car.right(0)
  else:
    new_car.stop()

led_car = RGBcar()

new_car = Car()

ultrasonic_car = Ultrasonic_car()

ble_start('oh-carbit')
ble_on_rx(ble_on_rx_callback)

if True:
  led_car.all_led("#33ccff")
  new_car.led_left(True)
  new_car.led_right(True)

while True:
  print(ultrasonic_car.distance_cm())
  time.sleep_ms(100)
```
