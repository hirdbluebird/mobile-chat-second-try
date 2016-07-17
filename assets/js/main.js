function textareaAddComment(e) {
	e = e || window.event;
	if(e.keyCode == 13 && e.ctrlKey) {
		addComment();
	}
}

function addComment() {
	var commentBody = document.getElementById('textareaComment').value;
	var name = prompt('Enter your name:');
	var date = getDate();
	var commentSection = document.getElementById('comments');

	//take all parametres from comment form
	comment = createCommentDOM(name, date, commentBody);

	//insert comment
	commentSection.appendChild(comment);

	//clear textarea after posting comment
	document.getElementById('textareaComment').value = '';
}
function createCommentDOM(name, date, comm) {

	//create span elemt with username value
	var username = document.createElement('span');
	username.className = 'username';
	username.innerHTML = name;

	//create span element with current date
	var commentTime = document.createElement('span');
	commentTime.className = 'comment-time';
	commentTime.innerHTML = date;

	// creates div container with date and username
	var commentHeader = document.createElement('div');
	commentHeader.className = 'comment-header';
	commentHeader.appendChild(username);
	commentHeader.appendChild(commentTime);

	// creates div with comment's text
	var commentBody = document.createElement('div');
	commentBody.className = 'comment-body';
	commentBody.innerHTML = comm;

	// creates div with all inner HTML 
	var comment = document.createElement('div');
	comment.className = 'comment';
	comment.appendChild(commentHeader);
	comment.appendChild(commentBody);

	return comment;
}
function getDate() {
	var currentTime = new Date();
	var dd = currentTime.getDate();
	var mm = currentTime.getMonth()+1; //January is 0
	var yyyy = currentTime.getFullYear();

	if(mm == 1) {
		mm = 'января'
	} else if (mm == 2) {
		mm = 'февраля'
	} else if (mm == 3) {
		mm = 'марта'
	} else if (mm == 4) {
		mm = 'апреля'
	} else if (mm == 5) {
		mm = 'мая'
	} else if (mm == 6) {
		mm = 'июня'
	} else if (mm == 7) {
		mm = 'июля'
	} else if (mm == 8) {
		mm = 'августа'
	} else if (mm == 9) {
		mm = 'сентября'
	} else if (mm == 10) {
		mm = 'октября'
	} else if (mm == 11) {
		mm = 'ноября'
	} else if (mm == 12) {
		mm = 'декабря'
	}

	return dd +' '+ mm +' ' + yyyy;
}