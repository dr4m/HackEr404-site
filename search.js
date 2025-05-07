const tutorials = [
  { title: "Nmap Tool", url: "nmap.html" },
  { title: "SQLMap Usage", url: "sqlmap.html" },
  { title: "Facebook Hacking", url: "fbhack1.html" },
  { title: "Burp Suite Basics", url: "burpsuitetut01.html" },
  // Add more...
];

function searchFunction() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsContainer = document.getElementById("searchResults");
  resultsContainer.innerHTML = '';

  if (input === '') {
    resultsContainer.style.display = 'none';
    return;
  }

  const filtered = tutorials.filter(tutorial =>
    tutorial.title.toLowerCase().includes(input)
  );

  if (filtered.length > 0) {
    resultsContainer.style.display = 'block';
    filtered.forEach(t => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${t.url}">${t.title}</a>`;
      resultsContainer.appendChild(li);
    });
  } else {
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = '<li>No results found</li>';
  }
}
