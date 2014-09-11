var userData;

var models = _.map(userData, function(item) {
	return {
			image: item.avatar_url,
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

var repoData;
