<script>
  import { inventory } from "$lib/stores";
  import { onMount } from "svelte";

  let storedValue = "Alapértelmezett érték";

  onMount(() => {
    if (typeof localStorage !== "undefined") {
      storedValue =
        localStorage.getItem("custom_key") || "Alapértelmezett érték";
    }
  });

  const deleteHouseholdInventory = () => {
    try {
      inventory.update((curr) => {
        curr.household = [];
        return curr;
      });
      alert("A háztartási készlet sikeresen törölve.");
    } catch (error) {
      console.error("Hiba történt a háztartási készlet törlésekor", error);
      alert("Nem sikerült törölni a háztartási készletet.");
    }
  };

  let item = "";
  let quantity = 0;
  let unit = "";
  let store = "";
  let errorMessage = "";

  const addItem = () => {
    if (!item) {
      errorMessage = "A tétel neve nem lehet üres!";
      return;
    }

    if (quantity <= 0) {
      errorMessage = "A mennyiségnek pozitív számnak kell lennie!";
      return;
    }

    if (!unit) {
      errorMessage = "A mértékegység mező nem lehet üres!";
      return;
    }

    if (!store) {
      errorMessage = "A készlet tárolási hely nem lehet üres!";
      return;
    }

    try {
      inventory.update((curr) => {
        if (!curr.household) {
          curr.household = [];
        }
        curr.household.push({ item, quantity, unit, store });
        return curr;
      });
      item = "";
      quantity = 0;
      unit = "";
      store = "";
      errorMessage = "";
    } catch (error) {
      console.error("Hiba történt a tétel hozzáadásakor:", error);
      errorMessage = "Nem sikerült hozzáadni a tételt. Kérlek, próbáld újra.";
    }
  };

  const deleteItem = (index) => {
    inventory.update((curr) => {
      const updatedInventory = { ...curr };
      updatedInventory.household = curr.household.filter((_, i) => i !== index);
      return updatedInventory;
    });
  };
</script>

<h1>Háztartási készlet</h1>

{#if errorMessage}
  <p style="color: red;">{errorMessage}</p>
{/if}

<div id="element">
  <input bind:value={item} placeholder="Tétel neve" />
  <input type="number" bind:value={quantity} placeholder="Mennyiség" />
  <input bind:value={unit} placeholder="Mértékegység" />
  <input bind:value={store} placeholder="Készlet helye" />
  <button on:click={addItem}>Hozzáadás</button>
</div>

<h2>Készlet</h2>
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Tétel neve</th>
      <th scope="col">Mennyiség</th>
      <th scope="col">Mértékegység</th>
      <th scope="col">Készlet helye</th>
      <th scope="col">Akciók</th>
    </tr>
  </thead>
  <tbody>
    {#each $inventory.household || [] as household, index}
      <tr>
        <td>{household.item}</td>
        <td>{household.quantity}</td>
        <td>{household.unit}</td>
        <td>{household.store}</td>
        <td>
          <button
            class="btn btn-danger btn-sm"
            on:click={() => deleteItem(index)}>Törlés</button
          >
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<footer class="bg-light border-top py-3 fixed-bottom">
  <div class="container text-center">
    <p class="mb-1">Tárolt érték: {storedValue}</p>
    <button class="btn btn-danger btn-sm" on:click={deleteHouseholdInventory}>
      Háztartási készlet törlése
    </button>
  </div>
</footer>

<style>
  .btn-danger {
    background-color: #f54545;
    border: none;
  }
  .btn-danger:hover {
    background-color: #aa1010;
  }
  .table th,
  .table td {
    text-align: center;
    background-color: rgb(194, 233, 245);
  }
 h1 {
  background-color: rgb(148, 149, 149);
 }
 #element {
  background-color:rgb(194, 233, 245);
 }
</style>
