FB.api('/me/albums?fields=id,name,link,cover_photo', function(res){
	$.each(res.data, function(i, elm){
		var coverImageLink, 
			appendHTML = '<div class="album"><h1>'+elm.name+'</h1>';
		
		FB.api('/'+elm.cover_photo, function(res){
			appendHTML += '<div style="border:solid 1px #800000"><img src="'+res.picture+'" />Album Cover</div>';
		});
		
		FB.api('/'+elm.id+'/photos', function(response){				
			
			$.each(response.data, function(idx, elem){
				appendHTML += '<img src="'+elem.picture+'" />';
			});
			appendHTML += '<hr /></div>';
			
			$("#status").append(appendHTML);
			
		});
	});
  });