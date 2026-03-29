/* KinetiX Sport - kinetek-najam.hr */
(function(){
  'use strict';

  /* Mobile menu */
  var hamburger = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav');
  if(hamburger && nav){
    hamburger.addEventListener('click', function(){
      nav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    nav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){ nav.classList.remove('open'); });
    });
  }

  /* Header scroll */
  var header = document.querySelector('.header');
  if(header){
    var onScroll = function(){
      if(window.scrollY > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  /* Back to top */
  var btt = document.querySelector('.back-to-top');
  if(btt){
    window.addEventListener('scroll', function(){
      if(window.scrollY > 400) btt.classList.add('visible');
      else btt.classList.remove('visible');
    }, {passive:true});
    btt.addEventListener('click', function(){
      window.scrollTo({top:0, behavior:'smooth'});
    });
  }

  /* FAQ accordion */
  document.querySelectorAll('.faq-question').forEach(function(btn){
    btn.addEventListener('click', function(){
      var item = btn.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(function(el){
        el.classList.remove('open');
      });
      if(!wasOpen) item.classList.add('open');
    });
  });

  /* Scroll animations */
  if('IntersectionObserver' in window){
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.1, rootMargin: '0px 0px -40px 0px'});
    document.querySelectorAll('.fade-up').forEach(function(el){
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.fade-up').forEach(function(el){
      el.classList.add('visible');
    });
  }

  /* Smooth scroll for anchor links */
  document.querySelectorAll('a[href^="#"]').forEach(function(link){
    link.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

})();