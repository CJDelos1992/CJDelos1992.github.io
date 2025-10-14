
(function(){
  const key='cds-theme';
  const root = document.documentElement;
  const stored = localStorage.getItem(key);
  if(stored==='dark'){root.classList.add('dark');}
  document.addEventListener('click', e=>{
    if(e.target && e.target.id==='theme-toggle'){
      root.classList.toggle('dark');
      localStorage.setItem(key, root.classList.contains('dark')?'dark':'light');
    }
  });
})();
