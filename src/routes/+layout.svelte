<svelte:head>
  <link rel="icon" href="data:;base64,=" />
  <title>Készletnyilvántartó</title>
</svelte:head>

<nav>
  <ul>
    <li><a href="/">Kezdőlap</a></li>
    <li><a href="/cleaning">Tisztítószerek</a></li>
    <li><a href="/foods">Élelmiszerek</a></li>
    <li><a href="/household">Háztartási cikkek</a></li>
    <li><a href="/shopping-list">Bevásárlólista</a></li>
  </ul>
</nav>

<slot />

<style>
  nav {
    background-color: #f8f9fa;
    padding: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ddd;
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0;
    margin: 0;
  }
  nav li {
    text-decoration: none;
    color: #007bff;
  }
  nav a:hover {
    text-decoration: underline;
    color: #0056b3;
  }
</style>
