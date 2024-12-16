<script>
  import { inventory, shoppingList } from "$lib/stores";
  import { onMount } from "svelte";

  const updateShoppingList = () => {
    console.log("updateShoppingList függvény fut!");
    try {
      const inventoryData = $inventory || {cleaning: [], foods: [], household: []};
      console.log('Aktuális inventoryData:', inventoryData);

      const filteredShoppingList = [
        ...(inventoryData.cleaning || []).filter(item => item.quantity < 2),
        ...(inventoryData.foods || []).filter(item => item.quantity < 2),
        ...(inventoryData.household || []).filter(item => item.quantity < 2),
      ];

      console.log('Szűrt bevásárlólista:', filteredShoppingList);
      shoppingList.set(filteredShoppingList);
    } catch (error) {
      console.error("Hiba a bevásárlólista frissítésekor:", error);
      alert("Hiba történt a bevásárlólista frissítése során.");
    }
  };

  onMount(() => {
    updateShoppingList();
  });

  const deleteShoppingItem = (index) => {
    shoppingList.update((currentList) => {
      const updatedList = [...currentList];
      updatedList.splice(index, 1);
      return updatedList;
    });
  };

  const deleteInventoryItem = (category, index) => {
    inventory.update((curr) => {
      const updatedInventory = { ...curr };
      if (updatedInventory[category]) {
        updatedInventory[category].splice(index, 1);
      }
      return updatedInventory;
    });

    updateShoppingList();
  };

  if (typeof window !== 'undefined') {
  window.updateShoppingList = updateShoppingList;
}

</script>



<h1>Bevásárlólista</h1>
<button class="btn btn-primary mb-3" on:click={updateShoppingList}>Frissítés</button>

{#if $shoppingList.length > 0}
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
      {#each $shoppingList as item, index}
        <tr>
          <td>{item.item || 'N/A'}</td>
          <td>{item.quantity || 'N/A'}</td>
          <td>{item.unit || 'N/A'}</td>
          <td>{item.store || 'N/A'}</td>
          <td>
            <button
              class="btn btn-danger btn-sm"
              on:click={() => deleteShoppingItem(index)}>Törlés</button
            >
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
{:else}
  <p>A bevásárlólista üres.</p>
{/if}

<style>
  .btn-primary {
    background-color: #007bff;
    border: none;
  }
  .btn-primary:hover {
    background-color: #0056b3;
  }
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
  }
</style>


