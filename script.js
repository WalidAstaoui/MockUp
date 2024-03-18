function fact(n) {
  if (n <= 2) {
    return n;
  }
  return n * fact(n - 1);
}

function applique(f, tab) {
  const resultat = [];
  for (const element of tab) {
    resultat.push(f(element));
  }
  return resultat;
}

msgs = [
  { "msg": "Button Clicked 1" },
  { "msg": "Button Clicked 2" },
  { "msg": "Button Clicked 3" },
  { "msg": "Button Clicked 4" }
];

function update(messages) {
  const listeMessages = document.querySelector('ul');
  listeMessages.innerHTML = "";

  for (const message of messages) {
    const elementLi = document.createElement('li');
    elementLi.textContent = message.msg;
    listeMessages.appendChild(elementLi);
  }
}

/*
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('button');
  button.addEventListener('click', function() {
    update(msgs);
  });
});

fetch('https://7bb3ba51-99b4-45b8-ab79-58399dd2a684-00-2r33bx6x3ysoc.janeway.replit.dev/msg/getAll')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  alert(data.messages[0]);
});
*/

/*
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('button');
  button.addEventListener('click', function() {
    update(msgs);
  });

  fetch('https://7bb3ba51-99b4-45b8-ab79-58399dd2a684-00-2r33bx6x3ysoc.janeway.replit.dev/msg/getAll')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    update(data.messages);
  });
});
*/

function updateMessages() {
  fetch('https://7bb3ba51-99b4-45b8-ab79-58399dd2a684-00-2r33bx6x3ysoc.janeway.replit.dev/msg/getAll')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    update(data.messages);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('button');
  const textarea = document.querySelector('textarea');

  updateMessages();

  button.addEventListener('click', function() {
    const message = textarea.value;
    fetch('https://7bb3ba51-99b4-45b8-ab79-58399dd2a684-00-2r33bx6x3ysoc.janeway.replit.dev/msg/post/' + message)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      updateMessages();
    });
  });
});

