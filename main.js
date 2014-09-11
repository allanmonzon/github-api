
 $.getJSON("https://api.github.com/users/allanmonzon").done(function(item) {
 	var items = {
 		    image: item.avatar_url,
 		 home_url: item.html_url,
 			 name: item.name,
 		 username: item.login,
 		 location: item.location,
 			email: item.email,
 		   joined: item.created_at,
 	    followers: item.followers,
 		following: item.following,
 	}

 	var templateString = $('#template-user').text();
 	var templateFunction = _.template(templateString);
 	var renderTemplate = templateFunction(items);
 	$('.left').append(renderTemplate);
 });


var cool = $.getJSON("https://api.github.com/users/allanmonzon/repos").done(function(data) {	
	var models = _.map(data, function(item) {
		return {
			 repo_name: item.name,
			  repo_url: item.html_url,
		   repo_update: item.updated_at,
		 repo_language: item.language,
            stargazers: item.stargazers_count,
                 forks: item.forks_count
		};
	});

	_.each(models, function(model) {
		var templateString = $('#template-repos').text();
		var templateFunction = _.template(templateString);
		var renderTemplate = templateFunction(model);
		$('.right').append(renderTemplate);
	});
});























