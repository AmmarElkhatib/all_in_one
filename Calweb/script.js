var apps = [
  {
    name: 'Sample App 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio et sapien pellentesque facilisis eu ac risus.',
    icon: 'https://via.placeholder.com/150',
    url: 'https://www.example.com/app1'
  },
  {
    name: 'Sample App 2',
    description: 'Pellentesque habitus morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    icon: 'https://via.placeholder.com/150',
    url: 'https://www.example.com/app2'
  },
  {
    name: 'Sample App 3',
    description: 'Etiam vitae eros non dolor laoreet suscipit. Sed auctor sapien at sapien ullamcorper, eget bibendum purus faucibus.',
    icon: 'https://via.placeholder.com/150',
    url: 'https://www.example.com/app3'
  },
  // Add more apps here...
];

var appContainer = document.getElementById('apps');

apps.forEach(function(app) {
  var appCard = document.createElement('div');
  appCard.className = 'app';

  var appIcon = document.createElement('img');
  appIcon.src = app.icon;
  appIcon.alt = app.name + ' icon';
  appCard.appendChild(appIcon);

  var appName = document.createElement('h2');
  appName.textContent = app.name;
  appCard.appendChild(appName);

  var appDescription = document.createElement('p');
  appDescription.textContent = app.description;
  appCard.appendChild(appDescription);

  var installButton = document.createElement('button');
  installButton.className = 'install';
  installButton.textContent = 'Install';
  installButton.addEventListener('click', function() {
    // Redirect to the app URL when the Install button is clicked
   window.location.href = app.url;
  });
  appCard.appendChild(installButton);

  appContainer.appendChild(appCard);
});