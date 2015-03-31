/**
 * Blockly Games: Pinball
 *
 
/**
 * 
 * @author weifen@mijotech.net
 */
'use strict';

goog.provide('Hw5.Blocks');

goog.require('Blockly');
goog.require('BlocklyGames');
goog.require('Blockly.JavaScript');
goog.require('Blockly.Blocks.colour');
goog.require('Blockly.JavaScript.colour');
goog.require('Blockly.Blocks.lists');
goog.require('Blockly.JavaScript.lists');
goog.require('Blockly.Blocks.logic');
goog.require('Blockly.JavaScript.logic');
goog.require('Blockly.Blocks.loops');
goog.require('Blockly.JavaScript.loops');
goog.require('Blockly.Blocks.math');
goog.require('Blockly.JavaScript.math');
goog.require('Blockly.Blocks.procedures');
goog.require('Blockly.JavaScript.procedures');
goog.require('Blockly.Blocks.texts');
goog.require('Blockly.JavaScript.texts');
goog.require('Blockly.Blocks.variables');
goog.require('Blockly.JavaScript.variables');
goog.require('BlocklyGames');


Blockly.Blocks['move'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(260);
    this.appendDummyInput()
        .appendField("go")
        .appendField(new Blockly.FieldDropdown([["up", "UP"], ["down", "DOWN"], ["right", "RIGHT"], ["left", "LEFT"]]), "direction");
    this.appendDummyInput()
        .appendField(" ")
        .appendField(new Blockly.FieldTextInput("number"), "STEPS")
        .appendField("steps");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['move'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var text_steps = block.getFieldValue('STEPS');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.Blocks['set_object'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(225);
    this.appendDummyInput()
        .appendField("Object name:")
        .appendField(new Blockly.FieldTextInput(""), "OBJECT_NAME");
    this.appendStatementInput("motion")
        .setCheck("null", "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['set_object'] = function(block) {
  var statements_motion = Blockly.JavaScript.statementToCode(block, 'motion');
  var text_object_name = block.getFieldValue('OBJECT_NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.Blocks['hit'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(260);
    this.appendDummyInput()
        .appendField("HIT!");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['hit'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.Blocks['repeat'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(45);
    this.appendDummyInput()
        .appendField("repeat")
        .appendField(new Blockly.FieldTextInput("0"), "RepeatNUMBER")
        .appendField("times");
    this.appendStatementInput("repeat_motion");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['repeat'] = function(block) {
  var text_repeatnumber = block.getFieldValue('RepeatNUMBER');
  var statements_repeat_motion = Blockly.JavaScript.statementToCode(block, 'repeat_motion');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};
