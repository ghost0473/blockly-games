/**
 * Blockly Games: Pinball

/**
 * @author weifen@mijotech.net
 */
'use strict';

goog.provide('Hw5');

goog.require('Hw5.soy');
goog.require('Hw5.Blocks');
goog.require('BlocklyDialogs');
goog.require('BlocklyGames');
goog.require('BlocklyInterface');
goog.require('goog.math');


BlocklyGames.NAME = 'pinball';

/**
 * Initialize Blockly and the pinball.  Called on page load.
 */
Hw5.init = function() {
  // Render the Soy template.
  document.body.innerHTML = Hw5.soy.start({}, null,
      {lang: BlocklyGames.LANG,
       html: BlocklyGames.IS_HTML});

  BlocklyInterface.init();

  var rtl = BlocklyGames.isRtl();
  var blocklyDiv = document.getElementById('blockly');
  var onresize = function(e) {
    blocklyDiv.style.width = (window.innerWidth - 20) + 'px';
    blocklyDiv.style.height =
        (window.innerHeight - blocklyDiv.offsetTop - 15) + 'px';
  };
  onresize();
  window.addEventListener('resize', onresize);  

  Blockly.inject(document.getElementById('blockly'),
      {toolbox: document.getElementById('toolbox')});

  
};

window.addEventListener('load', Hw5.init);

