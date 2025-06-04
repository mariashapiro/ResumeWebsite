/**
 * Simple Loading Bar Implementation
 * Basic progress bar functionality for portfolio site
 */

(function () {
  "use strict";

  // Loading bar constructor
  function LoadingBar(options) {
    this.options = Object.assign(
      {
        container: document.body,
        color: "#2c98f0",
        height: "2px",
        duration: 500,
      },
      options
    );

    this.progress = 0;
    this.element = null;
    this.init();
  }

  LoadingBar.prototype.init = function () {
    // Create loading bar element
    this.element = document.createElement("div");
    this.element.className = "loading-bar";
    this.element.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: ${this.options.height};
      background-color: ${this.options.color};
      transition: width ${this.options.duration}ms ease;
      z-index: 9999;
      opacity: 0;
    `;

    this.options.container.appendChild(this.element);
  };

  LoadingBar.prototype.start = function () {
    if (this.element) {
      this.element.style.opacity = "1";
      this.set(10);
    }
  };

  LoadingBar.prototype.set = function (percent) {
    if (this.element) {
      this.progress = Math.min(Math.max(percent, 0), 100);
      this.element.style.width = this.progress + "%";
    }
  };

  LoadingBar.prototype.inc = function (amount) {
    this.set(this.progress + (amount || 10));
  };

  LoadingBar.prototype.done = function () {
    const self = this;
    this.set(100);
    setTimeout(function () {
      if (self.element) {
        self.element.style.opacity = "0";
        setTimeout(function () {
          if (self.element && self.element.parentNode) {
            self.element.parentNode.removeChild(self.element);
          }
        }, self.options.duration);
      }
    }, 100);
  };

  // Global loading bar instance
  window.LoadingBar = LoadingBar;

  // Auto-initialize for page load
  document.addEventListener("DOMContentLoaded", function () {
    const loadingBar = new LoadingBar();

    // Simulate loading progress
    loadingBar.start();

    let progress = 10;
    const interval = setInterval(function () {
      progress += Math.random() * 30;
      loadingBar.set(progress);

      if (progress >= 90) {
        clearInterval(interval);
        loadingBar.done();
      }
    }, 200);

    // Complete loading when page is fully loaded
    window.addEventListener("load", function () {
      clearInterval(interval);
      loadingBar.done();
    });
  });
})();
