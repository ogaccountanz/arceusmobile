const btnDownload = document.getElementById('btn-download');
const modelMain = document.getElementById('device-model');

const tutorialBox = document.getElementById('video-box');
const tutorialModel = document.getElementById('tutorial-model');

const modelOpen = () => {
  modelMain.classList.add('model-open');
};

const modelClose = () => {
  modelMain.classList.remove('model-open');
};

const tutorialOpen = () => {
  tutorialModel.classList.add('model-open');
};

const tutorialClose = () => {
  tutorialModel.classList.remove('model-open');
};

//  Navigation close and open.

const header = document.querySelector('.header');

const navToggle = () => {
  console.log(header.classList.contains('nav-open'));
  header.classList.contains('nav-open')
    ? header.classList.remove('nav-open')
    : header.classList.add('nav-open');
};
