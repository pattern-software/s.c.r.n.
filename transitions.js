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

  // Mobile nav expand/collapse
  var navToggle = document.getElementById('nav-toggle');
  var mobileNavOptions = document.getElementById('mobile-nav-options');
  if (navToggle && mobileNavOptions) {
    // Handle both click and touch events for mobile compatibility
    function toggleNav(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Nav toggle clicked/touched');
      mobileNavOptions.classList.toggle('open');
    }
    
    navToggle.addEventListener('click', toggleNav);
    navToggle.addEventListener('touchstart', toggleNav);
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (mobileNavOptions.classList.contains('open') && !navToggle.contains(e.target)) {
        mobileNavOptions.classList.remove('open');
      }
    });
    
    // Close dropdown when touching outside (mobile)
    document.addEventListener('touchstart', function(e) {
      if (mobileNavOptions.classList.contains('open') && !navToggle.contains(e.target)) {
        mobileNavOptions.classList.remove('open');
      }
    });
    
    mobileNavOptions.addEventListener('click', function(e) {
      e.stopPropagation();
    });
    
    mobileNavOptions.addEventListener('touchstart', function(e) {
      e.stopPropagation();
    });
    
    // Close nav after clicking any option
    Array.from(mobileNavOptions.querySelectorAll('.action-button')).forEach(function(btn) {
      btn.addEventListener('click', function() {
        mobileNavOptions.classList.remove('open');
      });
      btn.addEventListener('touchstart', function() {
        mobileNavOptions.classList.remove('open');
      });
    });
    // CONTACT button scroll or alert
    var contactBtn = document.getElementById('contact-mobile');
    if (contactBtn) {
      contactBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          alert('Contact section coming soon!');
        }
      });
    }
  }
}); 
