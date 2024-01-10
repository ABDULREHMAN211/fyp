// ARScene.js
import React from 'react';
import 'aframe';
import 'aframe-ar';

const ARScene = () => {
  return (
    <a-scene embedded arjs='trackingMethod: best;'>
      <a-marker preset='hiro'>
        <a-box position='0 0.5 0' material='color: red;'></a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARScene;
