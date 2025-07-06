document.addEventListener('DOMContentLoaded', function() {
  // Handle both landing page (index.html) and other pages
  var buttonContainer = document.querySelector('.button-container') || document.querySelector('.menu-buttons');
  var centeredImage = document.getElementById('centered-image');
  var textureOverlay = document.querySelector('.texture-overlay');

  // Find buttons in either container
  var designBtn = Array.from(document.querySelectorAll('.action-button')).find(btn => btn.textContent.trim() === 'DESIGN');
  var growthBtn = Array.from(document.querySelectorAll('.action-button')).find(btn => btn.textContent.trim() === 'GROWTH');
  var teamBtn = Array.from(document.querySelectorAll('.action-button')).find(btn => btn.textContent.trim() === 'TEAM');
  var contactBtn = Array.from(document.querySelectorAll('.action-button')).find(btn => btn.textContent.trim() === 'CONTACT');

  console.log('Found design button:', designBtn);
  console.log('Found growth button:', growthBtn);
  console.log('Found team button:', teamBtn);
  console.log('Found contact button:', contactBtn);

  // Helper function to handle button interactions with proper mobile support
  function setupButtonInteraction(button, targetPage) {
    if (!button) return;
    
    function handleInteraction(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log(button.textContent + ' button clicked/touched');
      
      // Animate if we have the elements
      if (centeredImage && buttonContainer && textureOverlay) {
        centeredImage.classList.add('shrink');
        buttonContainer.classList.add('fade-blur');
        textureOverlay.classList.add('fade-out');
        // After animation, navigate
        setTimeout(function() {
          window.location.href = targetPage;
        }, 500); // match CSS transition duration
      } else {
        // Direct navigation if no animation elements
        window.location.href = targetPage;
      }
    }
    
    // Add both click and touch events for mobile compatibility
    button.addEventListener('click', handleInteraction);
    button.addEventListener('touchstart', handleInteraction, { passive: false });
  }

  // Setup button interactions
  if (designBtn) {
    setupButtonInteraction(designBtn, 'design.html');
  }

  if (growthBtn) {
    setupButtonInteraction(growthBtn, 'growth.html');
  }

  if (teamBtn) {
    setupButtonInteraction(teamBtn, 'team.html');
  }

  if (contactBtn) {
    setupButtonInteraction(contactBtn, 'mailto:brad@scrn.co');
  }

  // Show texture overlay
  if (textureOverlay) {
    setTimeout(function() {
      textureOverlay.classList.add('show');
    }, 10);
  }

  // Mobile nav expand/collapse (only for pages that have it)
  var navToggle = document.getElementById('nav-toggle');
  var mobileNavOptions = document.getElementById('mobile-nav-options');
  console.log('Nav toggle found:', navToggle);
  console.log('Mobile nav options found:', mobileNavOptions);
  
  if (navToggle && mobileNavOptions) {
    // Handle both click and touch events for mobile compatibility
    function toggleNav(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Nav toggle clicked/touched');
      mobileNavOptions.classList.toggle('open');
    }
    
    navToggle.addEventListener('click', toggleNav);
    navToggle.addEventListener('touchstart', toggleNav, { passive: false });
    
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
    
    // Close nav after clicking any option
    var mobileButtons = mobileNavOptions.querySelectorAll('.action-button');
    console.log('Mobile buttons found:', mobileButtons.length);
    
    Array.from(mobileButtons).forEach(function(btn, index) {
      console.log('Setting up mobile button', index, ':', btn.textContent, btn.href);
      
      function handleMobileButton(e) {
        console.log('Mobile nav button clicked/touched:', btn.textContent, btn.href);
        mobileNavOptions.classList.remove('open');
        // Let the default link behavior work
      }
      
      btn.addEventListener('click', handleMobileButton);
      btn.addEventListener('touchstart', handleMobileButton, { passive: false });
    });
    
    // CONTACT button scroll or alert
    var contactBtn = document.getElementById('contact-mobile');
    if (contactBtn) {
      function handleContact(e) {
        e.preventDefault();
        var contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          alert('Contact section coming soon!');
        }
      }
      
      contactBtn.addEventListener('click', handleContact);
      contactBtn.addEventListener('touchstart', handleContact, { passive: false });
    }
  }
}); 
