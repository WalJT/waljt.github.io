// Sidebar toggle for small screens
(function(){
  var btn = document.querySelector('.menu-btn');
  var app = document.querySelector('.app');
  var overlay = document.getElementById('sidebarOverlay');
  function open(){ app && app.classList.add('sidebar-open'); overlay && overlay.classList.add('visible'); if(btn) btn.setAttribute('aria-expanded','true'); }
  function close(){ app && app.classList.remove('sidebar-open'); overlay && overlay.classList.remove('visible'); if(btn) btn.setAttribute('aria-expanded','false'); }
  if(btn) btn.addEventListener('click', function(){ if(app && app.classList.contains('sidebar-open')) close(); else open(); });
  if(overlay) overlay.addEventListener('click', close);
  // close on Escape
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });
})();
