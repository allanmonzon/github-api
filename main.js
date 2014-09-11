var userData;

$.getJSON("https://api.github.com/users/allanmonzon").done(function(data) {
	var models = _.map(userData, function(item) {
		return {
				image: item.avatar_url,
			 home_url: item.html_url,
				 name: item.name,
			 username: item.login,
			 location: item.location,
			 	email: item.email,
			   joined: item.created_at,
			followers: item.followers,
			following: item.following,
			   orgurl: item.org_url,
			   imgurl: item.org_img_url
		};
	});

	_.each(models, function(model) {
		var templateString = $('#template-user').text();
		var templateFunction = _.template(templateString);
		var renderTemplate = templateFunction(model);
		$('.left').append(renderTemplate);
	});

});



$.getJSON("https://api.github.com/users/allanmonzon/repos").done(function(data) {
	
	var models = _.map(data, function(item) {
		return {
			repo_name: item.name,
			repo_url: item.html_url,
			repo_update: item.updated_at,
			repo_language: item.language,
		};
	});

	_.each(models, function(model) {
		var templateString = $('#template-repos').text();
		var templateFunction = _.template(templateString);
		var renderTemplate = templateFunction(model);
		$('.right').append(renderTemplate);
	});

});
