window.onload = () => {
  
  const array = [
    'Candra Dwi Cahyo',
    'Movies',
    'Banjir',
    'Kecelakaan',
    'Hancur',
    'Kena Azab',
    'Mati',
    'Meninggal',
    'Cakep',
    'Jalanan',
    'Kuda Lumping',
    'Teroris',
    'Anjing',
    'Babi',
    'Antena TV',
    'AC Kedap Kedip',
    'Meledak'
  ];
  
  const names = array.sort();
  const content = document.querySelector('.content');
  const input = document.querySelector('.input');
  input.addEventListener('keyup', function() {
    const value = this.value.trim().toLowerCase();
    if (!value) return content.innerHTML = '';
    showSuggestions(value);
  });
  
  function showSuggestions(value) {
    content.innerHTML = '';
    names.forEach(name => {
      if (name.toLowerCase().indexOf(value) != -1) {
        const result = renderElement(name);
        content.appendChild(result);
      }
    });
  }
  
  function renderElement(name) {
    const list = document.createElement('div');
    list.addEventListener('click', () => setValue(list));
    list.classList.add('list-item');
    list.textContent = name;
    return list;
  }
  
  function setValue(param) {
    input.value = param.textContent.trim();
  }
  
}