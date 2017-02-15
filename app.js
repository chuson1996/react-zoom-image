import React from 'react';
import ReactDOM from 'react-dom';
import ReactImageZoom from './lib/react-image-zoom.js';

ReactDOM.render(
  <ReactImageZoom
    imageUrl={'https://images.unsplash.com/photo-1441986300917-64674bd600d8?dpr=2&auto=format&fit=crop&w=767&h=512&q=80&cs=tinysrgb&crop='}
    renderThumbnail={({ showImage }) => <button onClick={showImage}>Show Image</button>}
  />,
  document.querySelector('#main'));
