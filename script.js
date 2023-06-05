window.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const menuItems = Array.from(document.getElementsByClassName('menu-item'));
    
    // Her 3 ürünü gruplayan alt dizileri oluşturun
    const itemGroups = [];
    while (menuItems.length > 0) {
      itemGroups.push(menuItems.splice(0, 3));
    }
    
    // Her grup için yeni bir satır oluşturun
    itemGroups.forEach(function(group) {
      const row = document.createElement('div');
      row.classList.add('menu-row');
      
      // Grubun ürünlerini satıra ekleyin
      group.forEach(function(item) {
        row.appendChild(item);
      });
      
      // Satırı menüye ekleyin
      menu.appendChild(row);
    });
  });
  