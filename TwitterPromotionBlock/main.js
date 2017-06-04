function removePromotions() {
  var rows = document.querySelectorAll('[role="article"]');
  for (var i = 0; i < rows.length; i++) {
    var is_promotion = rows[i].querySelectorAll('[d="M51 14H11a8 8 0 0 0-8 8v28a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8V22a8 8 0 0 0-8-8zm-7 27a3 3 0 1 1-6 0v-6.758L23.122 49.121c-.586.586-1.354.879-2.122.879s-1.535-.293-2.121-.879a2.998 2.998 0 0 1 0-4.242L33.758 30H27a3 3 0 1 1 0-6h14a3 3 0 0 1 3 3v14z"]').length > 0;
    if (is_promotion) {
      var target_node = rows[i]; //.parentNode;
      target_node.parentNode.removeChild(target_node);
    }
  }
}

function setMutationObserver() {
  var rows = document.querySelectorAll('[role="article"]');
  if (rows.length > 0) {
    var obj = rows[0].parentNode.parentNode;
    var observer = new MutationObserver(function (MutationRecords, MutationObserver) {
      removePromotions();
    });
    observer.observe(obj, { childList: true });
  }
}

document.addEventListener('DOMSubtreeModified', setMutationObserver);
