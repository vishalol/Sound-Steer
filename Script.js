function onLoad() {
    gapi.client.setApiKey('YoutubeAPIKey');
    gapi.client.load('youtube', 'v3', function(){});
}


$("#song").on("submit", function(e) {
	e.preventDefault();
    $('#links').html("");
 var q = $('#query').val();
 var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    order: 'viewCount'
});

 request.execute(function(response) {
    var results = response.result;
    $('#query').val('');
    var str = JSON.stringify(results);
    var item = results.items;
    for(var i in item){
        $( "#links" ).append('<div><iframe style="width:230px;height:60px;border:0;overflow:hidden;" scrolling="no" src="//www.youtubeinmp3.com/widget/button/?video=https://www.youtube.com/watch?v='+item[i].id.videoId+'"></div><br>');
    };
});
});

