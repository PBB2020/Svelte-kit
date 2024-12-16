<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { inventory } from "$lib/stores";

  let storedValue = "Alapértelmezett érték";

  const navigateTo = (path) => {
    goto(path);
  }

  onMount(() => {
    if (typeof localStorage !== "undefined") {
      storedValue = localStorage.getItem("custom_key") || "Alapértelmezett érték";
    }
  })

  const deleteInventory = () => {
   try {
      inventory.update(() => ({}));
      alert("A készlet sikeresen törölve.");
    } catch (error) {
      console.error("Hiba történt a készlet törlésekor", error);
      alert("Nem sikerült törölni a készletet.");
    }
};
</script>

<div class="container mt-5">
  <div class="text-center">
    <h1 class="mb-4">Üdvözöllek a Készletnyilvántartó felületen!</h1>
    <p class="mb-5">Innen érheted el az összes funkciót.</p>
  </div>

  <div class="row">
    <div class="col-12 mb-4">
      <div class="card shadow-sm h-100">
        <div class="card-body text-center">
          <h5 class="card-title">Bevásárlólista</h5>
          <p class="card-text">
            Kezeld az alacsony készletű termékeket és frissítsd a
            bevásárlólistát!
          </p>
          <button
            class="btn btn-primary"
            on:click={() => navigateTo("/shopping-list")}>Megnyitás</button>
        </div>
      </div>
    </div>
  </div>

  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card shadow-sm h-100">
          <div class="card-body text-center">
            <h5 class="card-title">Élelmiszer készlet kezelése</h5>
            <p class="card-text">Kezeld az élelmiszer készleted!</p>
            <button
              class="btn btn-primary"
              on:click={() => navigateTo("/foods")}>Megnyitás</button>
          </div>
        </div>
      </div>

    <div class="col">
      <div class="card shadow-sm h-100">
        <div class="card-body text-center">
          <h5 class="card-title">Háztartási készlet kezelése</h5>
          <p class="card-text">Kezeld a háztartási eszközök készletét!</p>
          <button
            class="btn btn-primary"
            on:click={() => navigateTo("/household")}>Megnyitás</button>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card shadow-sm h-100">
        <div class="card-body text-center">
          <h5 class="card-title">Tisztítószerek kezelése</h5>
          <p class="card-text">Kezeld a tisztítószer készleted!</p>
          <button
            class="btn btn-primary"
            on:click={() => navigateTo("/cleaning")}>Megnyitás</button>
        </div>
      </div>
    </div>
  </div>
</div>

<svelte:head>
  <link rel="icon" href="data:;base64,=" />
</svelte:head>

<slot />

<footer class="bg-light border-top py-3 fixed-bottom">
  <div class="container text-center">
    <p class="mb-1">Tárolt érték: {storedValue}</p>
    <button class="btn btn-danger btn-sm" on:click={deleteInventory}>
      Teljes készlet törlése
    </button>
  </div>
</footer>

<style>
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  .card-text {
    font-size: 0.9rem;
    color: #6c757d;
  }
  .btn-danger {
    background-color: #f54545;
    border: none;
  }
  .btn-danger:hover {
    background-color: #aa1010;
  }
</style>
