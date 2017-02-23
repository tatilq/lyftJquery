function a()
{
  var jsonp = '[{"Lang":"jQuery","ID":"1"},{"Lang":"C#","ID":"2"}]';
  var lang = '';
  var p = '';
  var obj = $.parseJSON(jsonp);
  $.each(obj, function() 
  {
      lang += this['Lang'] + "<br/>";
      p += this['ID'] + "<br/>";
  });
  $('#n').html(lang);
  $('#n1').html(p);
}