document.addEventListener('DOMContentLoaded', function() {
  var designBtn = Array.from(document.querySelectorAll('.action-button')).find(btn => btn.textContent.trim() === 'DESIGN');
  var growthBtn = Array.from(document.querySelectorAll('.action-button')).find(btn => btn.textContent.trim() === 'GROWTH');
  var teamBtn = Array.from(document.querySelectorAll('.action-button')).find(btn => btn.textContent.trim() === 'TEAM');
  var centeredImage = document.getElementById('centered-image');
  var buttonContainer = document.getElementById('button-container');
  var textureOverlay = document.querySelector('.texture-overlay');

  console.log('Found design button:', designBtn);
  console.log('Found growth button:', growthBtn);

  if (designBtn && centeredImage && buttonContainer && textureOverlay) {
    designBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Design button clicked');
      // Animate
      centeredImage.classList.add('shrink');
      buttonContainer.classList.add('fade-blur');
      textureOverlay.classList.add('fade-out');
      // After animation, navigate
      setTimeout(function() {
        window.location.href = 'design.html';
      }, 500); // match CSS transition duration
    });
  }

  if (growthBtn && centeredImage && buttonContainer && textureOverlay) {
    growthBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Growth button clicked');
      // Animate
      centeredImage.classList.add('shrink');
      buttonContainer.classList.add('fade-blur');
      textureOverlay.classList.add('fade-out');
      // After animation, navigate
      setTimeout(function() {
        window.location.href = 'growth.html';
      }, 500); // match CSS transition duration
    });
  }

  if (teamBtn && centeredImage && buttonContainer && textureOverlay) {
    teamBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Team button clicked');
      // Animate
      centeredImage.classList.add('shrink');
      buttonContainer.classList.add('fade-blur');
      textureOverlay.classList.add('fade-out');
      // After animation, navigate
      setTimeout(function() {
        window.location.href = 'team.html';
      }, 500); // match CSS transition duration
    });
  }

  if (textureOverlay) {
    setTimeout(function() {
      textureOverlay.classList.add('show');
    }, 10);
  }
}); 