from yolobit import *
import machine, neopixel
import time
import binascii

Red = [255, 0, 0]

class CarBit():
    def __init__(self):
        self._num_leds = 6
        self._rgb_leds = neopixel.NeoPixel(machine.Pin(23), self._num_leds)
        self.set_wheel_speed(0, 0)
        self.show_led(0, 0)
        
    def forward(self, speed, t=None):
        self.set_wheel_speed(speed, speed)
        if t != None :
            time.sleep(t)
            self.stop()
        
    def backward(self, speed, t=None):
        self.set_wheel_speed(-speed, -speed)
        if t != None :
            time.sleep(t)
            self.stop()

    def turn_right(self, speed, t=None):
        self.set_wheel_speed(speed, -speed)
        if t != None :
            time.sleep(t)
            self.stop()

    def turn_left(self, speed, t=None):
        self.set_wheel_speed(-speed, speed)
        if t != None :
            time.sleep(t)
            self.stop()

    def stop(self):
        self.set_wheel_speed(0, 0)
    
    def set_wheel_speed(self, m1_speed, m2_speed):
        if m1_speed > 0:
            # Forward
            pin2.write_digital(0)
            pin3.write_digital(1)
        elif m1_speed < 0:
            # Backward
            pin2.write_digital(1)
            pin3.write_digital(0)
        else:
            # Release
            pin2.write_digital(0)
            pin3.write_digital(0)

        if m2_speed > 0:
            # Forward
            pin10.write_digital(1)
            pin11.write_digital(0)
        elif m2_speed < 0:
            # Backward
            pin10.write_digital(0)
            pin11.write_digital(1)
        else:
            # Release
            pin10.write_digital(0)
            pin11.write_digital(0)

        pin12.write_analog(int(translate(abs(m1_speed), 0, 100, 0, 1023)))
        pin16.write_analog(int(translate(abs(m2_speed), 0, 100, 0, 1023)))

    def show_led(self, index, state):
        if index == 0: # both led
            pin4.write_digital(state)
            pin6.write_digital(state)
        elif index == 1: # left led
            pin4.write_digital(state)
        elif index == 2: # left led
            pin6.write_digital(state)

    def show_rgb_led(self, index, color, delay=None):
        if index == 0:
            for i in range(self._num_leds):
                self._rgb_leds[i] = color
            self._rgb_leds.write()
        elif (index > 0) and (index <= self._num_leds) :
            self._rgb_leds[index - 1] = color
            self._rgb_leds.write()

        if delay != None:
            time.sleep(delay)
            if index == 0:
                for i in range(self._num_leds):
                    self._rgb_leds[i] = (0, 0, 0)
                self._rgb_leds.write()
            elif (index > 0) and (index <= self._num_leds) :
                self._rgb_leds[index - 1] = (0, 0, 0)
                self._rgb_leds.write()

carbit = CarBit()

def stop_all(): # override stop function called by app
  carbit.stop()