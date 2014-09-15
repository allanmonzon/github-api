function renderTemplate(templateId, location, model) {
    var templateString = $(templateId).text();
    var templateFunction = _.template(templateString);
    var renderedTemplate = templateFunction(model);
    $(location).append(renderedTemplate);
}

$.getJSON('https://api.github.com/users/allanmonzon').done(function(item) {
  	var items = {
 		    image: item.avatar_url,
 		 home_url: item.html_url,
 			 name: item.name,
 		 username: item.login,
 		 location: item.location,
 			email: item.email,
 		   joined: moment(item.created_at).format("MMM D YYYY"),
 	    followers: item.followers,
 		following: item.following,
 	}  	
  	$.getJSON('https://api.github.com/users/allanmonzon/starred').done(function(starredData) {
	    items.starred = starredData.length;
	    renderTemplate('#template-user', '.user', items);
  	});
});


$.getJSON("https://api.github.com/users/allanmonzon/repos").done(function(data) {	
	var models = _.map(data, function(item) {
		return {
			 repo_name: item.name,
			  repo_url: item.html_url,
		   repo_update: moment(item.updated_at).fromNow(),
		 repo_language: item.language,
            stargazers: item.stargazers_count,
                 forks: item.forks_count
		};
	});
	_.each(models, function(model) {
		renderTemplate('#template-repos', '.main-repos', model);
	});
});










// $.getJSON("https://api.github.com/users/allanmonzon").done(function(item) {
//  	var items = {
//  		    image: item.avatar_url,
//  		 home_url: item.html_url,
//  			 name: item.name,
//  		 username: item.login,
//  		 location: item.location,
//  			email: item.email,
//  		   joined: moment(item.created_at).format("MMM D YYYY"),
//  	    followers: item.followers,
//  		following: item.following,
//  	}

//  	var templateString = $('#template-user').text();
//  	var templateFunction = _.template(templateString);
//  	var renderTemplate = templateFunction(items);
//  	$('.user').append(renderTemplate);
 	
// });





// var cool = $.getJSON("https://api.github.com/users/allanmonzon/repos").done(function(data) {	
// 	var models = _.map(data, function(item) {
// 		return {
// 			 repo_name: item.name,
// 			  repo_url: item.html_url,
// 		   repo_update: moment(item.updated_at).fromNow(),
// 		 repo_language: item.language,
//             stargazers: item.stargazers_count,
//                  forks: item.forks_count
// 		};
// 	});

// 	_.each(models, function(model) {
// 		var templateString = $('#template-repos').text();
// 		var templateFunction = _.template(templateString);
// 		var renderTemplate = templateFunction(model);
// 		$('.main-repos').append(renderTemplate);
// 	});
// });




























