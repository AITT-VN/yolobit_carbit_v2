
Blockly.Blocks['block_stringtonumber'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_stringtonumber",
        "message0": Blockly.Msg.BLOCK_STRINGTONUMBER_MESSAGE0,
        "args0": [
          {
            "type": "input_value",
            "name": "numbercv"
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": Blockly.Msg.BLOCK_STRINGTONUMBER_TOOLTIP,
        "helpUrl": Blockly.Msg.BLOCK_STRINGTONUMBER_HELPURL
      }
    );
  }
};
Blockly.Python['block_stringtonumber'] = function(block) {
  var value_numbercv = Blockly.Python.valueToCode(block, 'numbercv', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'int(' + value_numbercv + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['carbit_create'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "carbit_create",
        "message0": Blockly.Msg.CARBIT_CREATE_MESSAGE0,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#cb2026",
        "tooltip": Blockly.Msg.CARBIT_CREATE_TOOLTIP,
        "helpUrl": Blockly.Msg.CARBIT_CREATE_HELPURL
      }
    );
  }
};

Blockly.Python['carbit_create'] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
  var code = 'new_car = Car()\nled_car = RGBcar()\n';
  return code;
};

Blockly.Blocks['carbit_move'] = {
  init: function() {
    this.jsonInit(
      
      {
        "type": "carbit_move",
        "message0": Blockly.Msg.CARBIT_MOVE_MESSAGE0,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "action",
            "options": [
              [
                Blockly.Msg.CARBIT_MOVE_MESSAGE1,
                "forward"
              ],
              [
                Blockly.Msg.CARBIT_MOVE_MESSAGE2,
                "backward"
              ],
              [
                Blockly.Msg.CARBIT_MOVE_MESSAGE3,
                "left"
              ],
              [
                Blockly.Msg.CARBIT_MOVE_MESSAGE4,
                "right"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#cb2026",
        "tooltip": Blockly.Msg.CARBIT_MOVE_TOOLTIP,
        "helpUrl": Blockly.Msg.CARBIT_MOVE_HELPURL
      }
    );
  }
};
Blockly.Python['carbit_forward'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
  var dropdown_action = block.getFieldValue('action');
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  if (value_speed>100)
    value_speed = 100*10.23;
  else if (value_speed<=0)
    value_speed = 0;
  else
    value_speed = value_speed*10.23;
  // TODO: Assemble Python into code variable.
  var code = 'new_car.'+dropdown_action+'('+Math.round(value_speed)+')\n';
  return code;
};

// Blockly.Blocks['block_car_backward'] = {
//   init: function() {
//     this.jsonInit(
//       {
//         "type": "block_car_backward",
//         "message0": "lùi lại với tốc độ %1",
//         "args0": [
//           {
//             "type": "input_value",
//             "name": "speed",
//             "check": "Number"
//           }
//         ],
//         "inputsInline": true,
//         "previousStatement": null,
//         "nextStatement": null,
//         "colour": "#cb2026",
//         "tooltip": "tốc độ từ 0 đến 1000",
//         "helpUrl": ""
//       }
//     );
//   }
// };
// Blockly.Python['block_car_backward'] = function(block) {
//   Blockly.Python.definitions_['import_car'] = 'from carbit import *';
//   Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
//   var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble Python into code variable.
//   var code = 'new_car.backward('+value_speed+')\n';
//   return code;
// };

Blockly.Blocks['carbit_stop'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "carbit_stop",
        "message0": Blockly.Msg.CARBIT_STOP_MESSAGE0,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#cb2026",
        "tooltip": Blockly.Msg.CARBIT_STOP_TOOLTIP,
        "helpUrl": Blockly.Msg.CARBIT_STOP_HELPURL
      }
    );
  }
};

Blockly.Python['carbit_stop'] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
  var code = 'new_car.stop()\n';
  return code;
};

// Blockly.Blocks['block_car_left'] = {
//   init: function() {
//     this.jsonInit(
//       {
//         "type": "block_car_left",
//         "message0": "xoay trái với tốc độ %1",
//         "args0": [
//           {
//             "type": "input_value",
//             "name": "speed",
//             "check": "Number"
//           }
//         ],
//         "inputsInline": true,
//         "previousStatement": null,
//         "nextStatement": null,
//         "colour": "#cb2026",
//         "tooltip": "tốc độ từ 0 đến 1000",
//         "helpUrl": ""
//       }
//     );
//   }
// };
// Blockly.Python['block_car_left'] = function(block) {
//   Blockly.Python.definitions_['import_car'] = 'from carbit import *';
//   Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
//   var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble Python into code variable.
//   var code = 'new_car.left('+value_speed+')\n';
//   return code;
// };

// Blockly.Blocks['block_car_right'] = {
//   init: function() {
//     this.jsonInit(
//       {
//         "type": "block_car_right",
//         "message0": "xoay phải với tốc độ %1",
//         "args0": [
//           {
//             "type": "input_value",
//             "name": "speed",
//             "check": "Number"
//           }
//         ],
//         "inputsInline": true,
//         "previousStatement": null,
//         "nextStatement": null,
//         "colour": "#cb2026",
//         "tooltip": "tốc độ từ 0 đến 1000",
//         "helpUrl": ""
//       }
//     );
//   }
// };
// Blockly.Python['block_car_right'] = function(block) {
//   Blockly.Python.definitions_['import_car'] = 'from carbit import *';
//   Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
//   var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble Python into code variable.
//   var code = 'new_car.right('+value_speed+')\n';
//   return code;
// };


Blockly.Blocks['carbit_check_line_sensor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "carbit_check_line_sensor",
        "message0": Blockly.Msg.CARBIT_CHECK_LINE_SENSOR_MESSAGE0,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME1",
            "options": [
              [
                Blockly.Msg.CARBIT_CHECK_LINE_SENSOR_MESSAGE1,
                "pin0"
              ],
              [
                Blockly.Msg.CARBIT_CHECK_LINE_SENSOR_MESSAGE2,
                "pin1"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                ">",
                ">"
              ],
              [
                "<",
                "<"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "num"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": "#cb2026",
        "tooltip": Blockly.Msg.CARBIT_CHECK_LINE_SENSOR_TOOLTIP,
        "helpUrl": Blockly.Msg.CARBIT_CHECK_LINE_SENSOR_HELPURL
      }
    );
  }
};

Blockly.Python['carbit_check_line_sensor'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  var dropdown_name1 = block.getFieldValue('NAME1');
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  var code = dropdown_name1+'.read_analog()'+dropdown_name+value_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['carbit_line_sensor_read_analog'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_type",
        "message0": Blockly.Msg.CARBIT_LINE_SENSOR_READ_ANALOG_MESSAGE0,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME1",
            "options": [
              [
                Blockly.Msg.CARBIT_LINE_SENSOR_READ_ANALOG_MESSAGE1,
                "pin0"
              ],
              [
                Blockly.Msg.CARBIT_LINE_SENSOR_READ_ANALOG_MESSAGE2,
                "pin1"
              ]
            ]
          }
        ],
        "output": null,
        "colour": "#cb2026",
        "tooltip": Blockly.Msg.CARBIT_LINE_SENSOR_READ_ANALOG_TOOLTIP,
        "helpUrl": Blockly.Msg.CARBIT_LINE_SENSOR_READ_ANALOG_HELPURL

      }
    );
  }
};

Blockly.Python['carbit_line_sensor_read_analog'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  var dropdown_name1 = block.getFieldValue('NAME1');
  var code = dropdown_name1+ '.read_analog()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['carbit_ledRGB'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "carbit_ledRGB",
        "message0": Blockly.Msg.CARBIT_LEDRGB_MESSAGE0,
        "args0": [
          {
            "type": "field_colour",
            "name": "color",
            "colour": "#33ccff"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#cb2026",
        "tooltip": Blockly.Msg.CARBIT_LEDRGB_TOOLTIP,
        "helpUrl": Blockly.Msg.CARBIT_LEDRGB_HELPURL
      }
    );
  }
}; 

Blockly.Python['carbit_ledRGB'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_RGB'] = 'led_car = RGBcar()';
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble Python into code variable.
  var code = 'led_car.all_led("'+colour_color+'")\n';
  return code;
};


Blockly.Blocks['carbit_speed'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "carbit_speed",
        "message0": Blockly.Msg.CARBIT_SPEED_MESSAGE0,
        "args0": [
          {
            "type": "field_number",
            "name": "NAME",
            "value": 500,
            "min": 0,
            "max": 1000
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#cb2026",
        "tooltip": Blockly.Msg.CARBIT_SPEED_TOOLTIP,
        "helpUrl": Blockly.Msg.CARBIT_SPEED_HELPURL
      }
    );
  }
};
  
  Blockly.Python['carbit_speed'] = function(block) {
    Blockly.Python.definitions_['import_car'] = 'from carbit import *';
    Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
    var number_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = 'new_car.setspeed('+number_name+')\n';
    return code;
  };

  
Blockly.Blocks['carbit_control_motor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "carbit_control_motor",
        "message0": Blockly.Msg.CARBIT_CONTROL_MOTOR_MESSAGE0,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "motor",
            "options": [
              [
                Blockly.Msg.CARBIT_CONTROL_MOTOR_MESSAGE1,
                "motor_left"
              ],
              [
                Blockly.Msg.CARBIT_CONTROL_MOTOR_MESSAGE2,
                "motor_right"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "state",
            "options": [
              [
                Blockly.Msg.CARBIT_CONTROL_MOTOR_MESSAGE3,
                "True"
              ],
              [
                Blockly.Msg.CARBIT_CONTROL_MOTOR_MESSAGE4,
                "False"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#cb2026",
        "tooltip": Blockly.Msg.CARBIT_CONTROL_MOTOR_TOOLTIP,
        "helpUrl": Blockly.Msg.CARBIT_CONTROL_MOTOR_HELPURL
      }
    );
  }
};


  
Blockly.Python['carbit_control_motor'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
    var dropdown_motor = block.getFieldValue('motor');
    var dropdown_state = block.getFieldValue('state');
    var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
    if (value_speed>100)
      value_speed = 100*10.23;
    else if (value_speed<=0)
      value_speed = 0;
     else
    value_speed = value_speed*10.23;
    // TODO: Assemble Python into code variable.
    var code = 'new_car.'+dropdown_motor+'('+dropdown_state+','+Math.round(value_speed)+')\n';
    return code;
};


Blockly.Blocks['carbit_led'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "carbit_led",
        "message0": Blockly.Msg.CARBIT_LED_MESSAGE0
        ,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "led",
            "options": [
              [
                Blockly.Msg.CARBIT_LED_MESSAGE1,
                "led_left"
              ],
              [
                Blockly.Msg.CARBIT_LED_MESSAGE2,
                "led_right"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "state",
            "options": [
              [
                Blockly.Msg.CARBIT_LED_MESSAGE3,
                "True"
              ],
              [
                Blockly.Msg.CARBIT_LED_MESSAGE4,
                "False"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#cb2026",
        "tooltip": Blockly.Msg.CARBIT_LED_TOOLTIP,
        "helpUrl": Blockly.Msg.CARBIT_LED_HELPURL
      }
    );
  }
};


    
Blockly.Python['carbit_led'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
      var dropdown_led = block.getFieldValue('led');
      var dropdown_state = block.getFieldValue('state');
      // TODO: Assemble Python into code variable.
      var code = 'new_car.'+dropdown_led+'('+dropdown_state+')\n';
      return code;
    };


Blockly.Blocks['carbit_single_led'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "carbit_single_led",
        "message0": Blockly.Msg.CARBIT_SINGLE_LED_MESSAGE0,
        "args0": [
          {
            "type": "input_value",
            "name": "number_led"
          },
          {
            "type": "input_value",
            "name": "color"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#cb2026",
        "tooltip": Blockly.Msg.CARBIT_SINGLE_LED_TOOLTIP,
        "helpUrl": Blockly.Msg.CARBIT_SINGLE_LED_HELPURL
      }
    );
  }
};

Blockly.Python['carbit_single_led'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_RGB'] = 'led_car = RGBcar()';
        var value_number_led = Blockly.Python.valueToCode(block, 'number_led', Blockly.Python.ORDER_ATOMIC);
        var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = 'led_car.singleLed('+value_number_led+','+value_color+')\n';
        return code;
      };

Blockly.Blocks['carbit_ultrasonic'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "carbit_ultrasonic",
        "message0": Blockly.Msg.CARBIT_ULTRASONIC_MESSAGE0,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#cb2026",
        "tooltip": Blockly.Msg.CARBIT_ULTRASONIC_TOOLTIP,
        "helpUrl": Blockly.Msg.CARBIT_ULTRASONIC_HELPURL
      }
    );
  }
};

Blockly.Python['carbit_ultrasonic'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_ultrasonic'] = 'ultrasonic_car = Ultrasonic_car()';
  // TODO: Assemble Python into code variable.
  var code = 'ultrasonic_car = Ultrasonic_car(trigger_pin=pin13.pin, echo_pin=pin14.pin)\n';
  return code;
};

Blockly.Blocks['carbit_ultrasonic_checkdistance'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "carbit_ultrasonic_checkdistance",
        "message0": Blockly.Msg.CARBIT_ULTRASONIC_CHECKDISTANCE_MESSAGE0,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "distance",
            "options": [
              [
                "cm",
                "cm"
              ],
              [
                "mm",
                "mm"
              ]
            ]
          }
        ],
        "output": null,
        "colour": "#cb2026",
        "tooltip": Blockly.Msg.CARBIT_ULTRASONIC_CHECKDISTANCE_TOOLTIP,
        "helpUrl": Blockly.Msg.CARBIT_ULTRASONIC_CHECKDISTANCE_HELPURL
      }
    );
  }
};

Blockly.Python['carbit_ultrasonic_checkdistance'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_ultrasonic'] = 'ultrasonic_car = Ultrasonic_car()';
  var dropdown_distance = block.getFieldValue('distance');
  // TODO: Assemble Python into code variable.
  var code = 'ultrasonic_car.distance_'+dropdown_distance+'()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['yolobit_ble_start'] = {
  init: function() {
    this.jsonInit(
      {"colour": "#cb2026", 
      "nextStatement": null, 
      "tooltip": Blockly.Msg.YOLOBIT_BLE_START_TOOLTIP, 
      "message0": Blockly.Msg.YOLOBIT_BLE_START_MESSAGE0, 
      "previousStatement": null, 
      "args0": [
        {
          "type": "input_value",
          "name": "NAME",
          "check": "String"
        }],
      "inputsInline": true,
      "helpUrl": Blockly.Msg.YOLOBIT_BLE_START_HELPURL});
  }
};

Blockly.Blocks['yolobit_ble_on_receive_message'] = {
  init: function() {
    this.jsonInit({
      "colour": "#cb2026", 
      "nextStatement": null, 
      "tooltip": Blockly.Msg.YOLOBIT_BLE_ON_RECEIVE_MESSAGE_TOOLTIP, 
      "message0": Blockly.Msg.YOLOBIT_BLE_ON_RECEIVE_MESSAGE_MESSAGE0, 
      "previousStatement": null, 
      "args0": [
        {"variable": Blockly.Msg.YOLOBIT_BLE_ON_RECEIVE_MESSAGE_MESSAGE1, "type": "field_variable", "name": "message"}, 
        {"type": "input_dummy"}, 
        {"type": "input_statement", "name": "ACTION"}
      ], 
      "helpUrl": Blockly.Msg.YOLOBIT_BLE_ON_RECEIVE_MESSAGE_HELPURL
    });
  }
};

// Any imports need to be reserved words
Blockly.Python.addReservedWords('ble_start');
Blockly.Python.addReservedWords('ble_on_rx');

Blockly.Python['yolobit_ble_start'] = function(block) {
  Blockly.Python.definitions_['import_ble_peripheral'] = 'from ble_uart_peripheral import *';
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'ble_start(' + value_name + ')\n';
  return code;
};

Blockly.Python['yolobit_ble_on_receive_message'] = function(block) {
  Blockly.Python.definitions_['import_ble_peripheral'] = 'from ble_uart_peripheral import *';
  var variable_message = Blockly.Python.variableDB_.getName(block.getFieldValue('message'), Blockly.Variables.NAME_TYPE);
  var statements_action = Blockly.Python.statementToCode(block, 'ACTION');
  // TODO: Assemble Python into code variable.
  var cbFunctionName = Blockly.Python.provideFunction_(
    'ble_on_rx_callback',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(' + variable_message + '):',
      statements_action || Blockly.Python.PASS
    ]);

  var code = 'ble_on_rx(' + cbFunctionName + ')\n';
  return code;
};


Blockly.Blocks['carbit_gamepad_message'] = {
  init: function() {
    this.jsonInit({
      "type": "carbit_gamepad_message",
      "message0": Blockly.Msg.CARBIT_GAMEPAD_MESSAGE_MESSAGE0,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              {
                src: "https://www.flaticon.com/svg/static/icons/svg/44/44674.svg",
                width: 15,
                height: 15,
                alt: "Lên",
              },
              "!B516"
            ],
            [
              {
                src: "https://www.flaticon.com/svg/static/icons/svg/44/44698.svg",
                width: 15,
                height: 15,
                alt: "Xuống",
              },
              "!B615"
            ],
            [
              {
                src: "https://www.flaticon.com/svg/static/icons/svg/44/44767.svg",
                width: 15,
                height: 15,
                alt: "Trái",
              },
              "!B714"
            ],
            [
              {
                src: "https://www.flaticon.com/svg/static/icons/svg/56/56925.svg",
                width: 15,
                height: 15,
                alt: "Phải",
              },
              "!B814"
            ],
            [
              "A",
              "!B11:"
            ],
            [
              "B",
              "!B219"
            ],
            [
              "C",
              "!B318"
            ],
            [
              "D",
              "!B417"
            ]
          ]
        }
      ],
      "output": null,
      "colour": "#cb2026",
      "tooltip": Blockly.Msg.CARBIT_GAMEPAD_MESSAGE_TOOLTIP,
      "helpUrl": Blockly.Msg.CARBIT_GAMEPAD_MESSAGE_HELPURL
    });
  }
};

Blockly.Python['carbit_gamepad_message'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  // TODO: Assemble Python into code variable.
  var dropdown_type = block.getFieldValue('type');
  var code = "'" + dropdown_type + "'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};