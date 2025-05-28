<script>
  const tutorials = [
    { title: "Nmap Tool", url: "https://hacker404.site/tools/nmap.html" },
    { title: "SQLMap Usage", url: "https://hacker404.site/tools/sqlmap.html" },
    { title: "Facebook Hacking", url: "https://hacker404.site/tools/fbhack1.html" },
    { title: "Burp Suite Basics", url: "https://hacker404.site/tools/burpsuitetut01.html" },
    { title: "Termux Tricks", url: "https://hacker404.site/termux/termuxtricks1.html" },
    // Add more as needed
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
</script>
