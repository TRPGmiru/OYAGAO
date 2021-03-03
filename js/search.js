$(function () {
  searchWord = function () {
    var searchText = $(this).val(), // 検索ボックスに入力された値
      targetText;

    $('.session').each(function () {
      targetText = $(this).text();

      // 検索対象となるリストに入力された文字列が存在するかどうかを判断
      if (targetText.indexOf(searchText) != -1) {
        $(this).removeClass('hidden');
      } else {
        $(this).addClass('hidden');
      }
    });
  };

  // searchWordの実行
  $('#search-text').on('input', searchWord);
});

history.replaceState(null, document.getElementsByTagName('title')[0].innerHTML, null);
window.addEventListener('popstate', function(e) {
  window.location.reload();
});

let serchclear = function(){
  var textForm = document.getElementById("search-text");
  textForm.value = '';
}