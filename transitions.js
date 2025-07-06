document.addEventListener('DOMContentLoaded', function() {
  // Handle both landing page (index.html) and other pages
  var buttonContainer = document.querySelector('.button-container') || document.querySelector('.menu-buttons');
  var centeredImage = document.getElementById('centered-image');
  var textureOverlay = document.querySelector('.texture-overlay');

  // Find buttons in either container (but exclude mobile dropdown buttons)
  var allButtons = Array.from(document.querySelectorAll('.action-button'));
  var mobileDropdownButtons = Array.from(document.querySelectorAll('.mobile-nav-options .action-button'));
  
  // Filter out mobile dropdown buttons from the main button selection
  var mainButtons = allButtons.filter(btn => !mobileDropdownButtons.includes(btn));
  
  var designBtn = mainButtons.find(btn => btn.textContent.trim() === 'DESIGN');
  var growthBtn = mainButtons.find(btn => btn.textContent.trim() === 'GROWTH');
  var teamBtn = mainButtons.find(btn => btn.textContent.trim() === 'TEAM');
  var contactBtn = mainButtons.find(btn => btn.textContent.trim() === 'CONTACT');

  console.log('Found design button:', designBtn);
  console.log('Found growth button:', growthBtn);
  console.log('Found team button:', teamBtn);
  console.log('Found contact button:', contactBtn);
  console.log('Mobile dropdown buttons found:', mobileDropdownButtons.length);
  console.log('Main buttons found:', mainButtons.length);

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

  // Mobile bottom navigation setup (for pages that have it)
  var mobileBottomNav = document.querySelector('.mobile-bottom-nav');
  console.log('Mobile bottom nav found:', mobileBottomNav);
  
  if (mobileBottomNav) {
    var mobileBottomButtons = mobileBottomNav.querySelectorAll('.action-button');
    console.log('Mobile bottom buttons found:', mobileBottomButtons.length);
    
    Array.from(mobileBottomButtons).forEach(function(btn, index) {
      console.log('Setting up mobile bottom button', index, ':', btn.textContent, btn.href);
      
      function handleMobileBottomButton(e) {
        console.log('Mobile bottom nav button clicked/touched:', btn.textContent, btn.href);
        // Don't prevent default - let the natural link behavior work
        // The href attribute will handle navigation automatically
      }
      
      btn.addEventListener('click', handleMobileBottomButton);
      btn.addEventListener('touchstart', handleMobileBottomButton, { passive: true });
    });
  }
}); 
