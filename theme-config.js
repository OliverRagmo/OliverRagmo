// 🎨 SIMPLE THEME CONFIGURATION
// Edit these values to customize your portfolio theme!

// ==========================================
// 🎯 MAIN SETTINGS - CHANGE THESE!
// ==========================================

const OLIVER_THEME = {
  // 🎨 Brand color - your main accent color
  brandColor: '#0284c7',
  
  // 🌈 Quick presets you can switch to
  colorPresets: {
    red: '#e53e3e',      // Current
    blue: '#0284c7',     
    green: '#166534',    
    purple: '#7c3aed',   
    orange: '#d97706',   
    teal: '#0d9488',     
    pink: '#ec4899',     
  },
  
  // 🌓 Background colors
  backgrounds: {
    light: '#ffffff',
    dark: '#111111',
  },
  
  // 🎭 Optional: Add subtle background tints (0-5)
  backgroundTint: 0,
  
  // ⭐ Animation settings
  animations: {
    enabled: true,
    speed: 'normal', // 'slow', 'normal', 'fast'
  }
};

// ==========================================
// 🚀 EASY FUNCTIONS TO CHANGE THEME
// ==========================================

// Use these functions anywhere in your HTML:

function changeToBlue() {
  OLIVER_THEME.brandColor = OLIVER_THEME.colorPresets.blue;
  applyOliverTheme();
}

function changeToGreen() {
  OLIVER_THEME.brandColor = OLIVER_THEME.colorPresets.green;
  applyOliverTheme();
}

function changeToPurple() {
  OLIVER_THEME.brandColor = OLIVER_THEME.colorPresets.purple;
  applyOliverTheme();
}

function changeToCustomColor(hexColor) {
  OLIVER_THEME.brandColor = hexColor;
  applyOliverTheme();
}

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  applyOliverTheme();
}

// ==========================================
// 🔧 ADVANCED SETTINGS (Optional)
// ==========================================

const ADVANCED_OLIVER_THEME = {
  // Color generation settings
  colorSteps: {
    lightVariation: 35,    // How much to lighten colors
    darkVariation: 25,     // How much to darken colors
    saturationBoost: 10,   // Saturation increase for darker shades
  },
  
  // Surface elevation differences
  surfaces: {
    cardElevation: 6,      // How much cards stand out
    subtleElevation: 2,    // Subtle surface difference
  },
  
  // Typography (optional overrides)
  typography: {
    baseFontSize: '14px',
    scaleFactor: 1.2,      // How much bigger each heading level is
  }
};

// ==========================================
// 💡 USAGE EXAMPLES
// ==========================================

/*

<!-- In your HTML, add these buttons: -->

<button onclick="changeToBlue()">Blue Theme</button>
<button onclick="changeToGreen()">Green Theme</button>
<button onclick="changeToPurple()">Purple Theme</button>
<button onclick="changeToCustomColor('#ff6b35')">Custom Color</button>
<button onclick="toggleDarkMode()">Dark Mode</button>

<!-- Or use the color picker: -->
<input type="color" onchange="changeToCustomColor(this.value)" value="#e53e3e">

*/

// ==========================================
// 🎨 AUTO-APPLY THEME
// ==========================================

// This will be handled by the main theme system
// Just include this file before theme-system.js

if (typeof window !== 'undefined') {
  window.OLIVER_THEME = OLIVER_THEME;
  window.ADVANCED_OLIVER_THEME = ADVANCED_OLIVER_THEME;
  
  // Make functions global
  window.changeToBlue = changeToBlue;
  window.changeToGreen = changeToGreen;
  window.changeToPurple = changeToPurple;
  window.changeToCustomColor = changeToCustomColor;
  window.toggleDarkMode = toggleDarkMode;
}