'use strict';

// get the window width
let windowWidth = window.innerWidth;

// query furniture placement content
let furniturePlacementContent = document.querySelector(
  '.furniture-placement-content'
);

// query writer details
// queary share button from writer details share button
let writerDetails = document.querySelector('.writer-details');
let shareButton = document.querySelector('.icon-wrapper');
let shareIcon = document.querySelector('.share-icon');
// load share media icons
// create share social media div
// and add class to it
let shareSocialMediaMobile = document.createElement('div');
shareSocialMediaMobile.classList.add('share-social-media');
shareSocialMediaMobile.innerHTML = `
  <p class='share-text'>SHARE</p>
  <div class='social-media-icons'>
  <img
    src='/images/icon-facebook.svg'
    alt='facebook icon'
    class='social-media-icon'
  />
  <img
    src='/images/icon-twitter.svg'
    alt='twitter icon'
    class='social-media-icon'
  />
  <img
    src='/images/icon-pinterest.svg'
    alt='pinterest icon'
    class='social-media-icon'
  />
  </div>
    <div class='icon-wrapper-social-media'>
      <img
        src='/images/icon-share-white.svg'
        alt='share icon'
        class='share-icon'
      />
    </div>
`;

let triangleTooltip = document.createElement('div');
triangleTooltip.classList.add('triangle-tooltip');

// add event listener to share button
shareButton.addEventListener('click', activateShareSocialMedia);

// this function will activate the share social media options
function activateShareSocialMedia() {
  //check whether windows width is less than 768px
  if (windowWidth < 768) {
    console.log('window width is less than 768px - activate');
    // replace writer details with share social media
    furniturePlacementContent.replaceChild(
      shareSocialMediaMobile,
      writerDetails
    );

    // query share icon button
    let shareIconButton = document.querySelector('.icon-wrapper-social-media');
    // add event listener to share social media button
    shareIconButton.addEventListener('click', deactivateShareSocialMedia);
  } else {
    writerDetails.appendChild(shareSocialMediaMobile);
    writerDetails.appendChild(triangleTooltip);

    shareButton.removeEventListener('click', activateShareSocialMedia);
    shareButton.addEventListener('click', deactivateShareSocialMedia);

    // change share button icon
    shareIcon.setAttribute('src', '/images/icon-share-white.svg');
    shareButton = document.querySelector('.icon-wrapper');
    shareButton.style.backgroundColor = '#6e8098';
  }
}

function deactivateShareSocialMedia() {
  // check whether windows width is less than 768px
  if (windowWidth < 768) {
    console.log('window width is less than 768px - deactivate');
    // replace share social media with writer details
    furniturePlacementContent.replaceChild(
      writerDetails,
      shareSocialMediaMobile
    );
  } else {
    shareSocialMediaMobile.remove();
    triangleTooltip.remove();
    shareButton.removeEventListener('click', deactivateShareSocialMedia);
    shareButton.addEventListener('click', activateShareSocialMedia);

    // change share button icon
    shareIcon.setAttribute('src', '/images/icon-share.svg');
    shareButton = document.querySelector('.icon-wrapper');
    shareButton.style.backgroundColor = '#ecf2f8';
  }
}
