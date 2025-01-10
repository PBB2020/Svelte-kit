<script>
  import { inventory, shoppingList } from "$lib/stores";
  import { onMount } from "svelte";

  let newItem = {
    item: "",
    quantity: 1,
    desiredQuantity: 1,
    unit: "",
    desiredUnit: "",
    shop: "",
    store: "Bevásárlólista",
  };

  const updateShoppingList = () => {
    console.log("updateShoppingList függvény fut!");
    try {
      const inventoryData = $inventory || {
        cleaning: [],
        foods: [],
        household: [],
      };
      console.log("Aktuális inventoryData:", inventoryData);

      const currentItems = new Set(
        $shoppingList.map((item) => `${item.item}-${item.unit}-${item.store}`)
      );

      const filteredShoppingList = [
        ...$shoppingList,
        ...(inventoryData.cleaning || [])
          .filter((item) => item.quantity < 2)
          .filter(
            (item) =>
              !currentItems.has(`${item.item}-${item.unit}-${item.store}`)
          ),
        ...(inventoryData.foods || [])
          .filter((item) => item.quantity < 2)
          .filter(
            (item) =>
              !currentItems.has(`${item.item}-${item.unit}-${item.store}`)
          ),
        ...(inventoryData.household || [])
          .filter((item) => item.quantity < 2)
          .filter(
            (item) =>
              !currentItems.has(`${item.item}-${item.unit}-${item.store}`)
          ),
      ];

      console.log("Szűrt bevásárlólista:", filteredShoppingList);
      shoppingList.set(filteredShoppingList);
    } catch (error) {
      console.error("Hiba a bevásárlólista frissítésekor:", error);
      alert("Hiba történt a bevásárlólista frissítése során.");
    }
  };

  const addNewItem = () => {
    if (!newItem.item || !newItem.unit) {
      alert("Kérlek töltsd ki az összes mezőt!");
      return;
    }

    shoppingList.update((currentList) => {
      return [...currentList, { ...newItem }];
    });

    newItem = { item: "", quantity: 1, unit: "", store: "Bevásárlólista" };
  };

  const deleteShoppingItem = (index) => {
    shoppingList.update((currentList) => {
      const updatedList = [...currentList];
      updatedList.splice(index, 1);
      return updatedList;
    });
  };

  const updateDesiredQuantity = (index) => {
    shoppingList.update((currentList) => {
      const updatedList = [...currentList];
      if (updatedList[index]) {
        updatedList[index].desiredQuantity = Math.max(
          1,
          updatedList[index].desiredQuantity || 1
        );
      }
      return updatedList;
    });
  };

  const updateDesiredUnit = (index) => {
    shoppingList.update((currentList) => {
      const updatedList = [...currentList];
      if (updatedList[index]) {
        updatedList[index].desiredUnit = updatedList[index].desiredUnit || "";
      }
      return updatedList;
    });
  };

  const updateShop = (index) => {
    shoppingList.update((currentList) => {
      const updatedList = [...currentList];
      if(updatedList[index]) {
        updatedList[index].shop = updatedList[index].shop || "";
      }
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
  };

  onMount(() => {
    updateShoppingList();
  });

  if (typeof window !== "undefined") {
    window.updateShoppingList = updateShoppingList;
  }
</script>

<h1>Bevásárlólista</h1>
<div class="new-item-form">
  <h2>Új tétel hozzáadása</h2>
  <form on:submit|preventDefault={addNewItem}>
    <div class="form-group">
      <label for="item">Tétel neve</label>
      <input
        id="item"
        type="text"
        bind:value={newItem.item}
        placeholder=""
        required
      />
    </div>
    <div class="form-group">
      <label for="quantity">Mennyiség</label>
      <input
        id="quantity"
        type="number"
        min="1"
        bind:value={newItem.quantity}
        placeholder=""
        required
      />
    </div>
    <div class="form-group">
      <label for="unit">Mértékegység</label>
      <input
        id="unit"
        type="text"
        bind:value={newItem.unit}
        placeholder=""
        required
      />
    </div>
    <div class="form-group">
      <label for="shop">Bolt</label>
      <input
        id="shop"
        type="text"
        bind:value={newItem.shop}
        placeholder=""
        required
      />
    </div>
    <button type="submit" class="btn btn-primary">Hozzáadás</button>
  </form>
</div>

<button class="btn btn-primary mb-3" on:click={updateShoppingList}
  >Frissítés</button
>
{#if $shoppingList.length > 0}
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Tétel neve</th>
        <th scope="col">Mennyiség</th>
        <th scope="col">Mértékegység</th>
        <th scope="col">Bolt</th>
        <th scope="col">Akciók</th>
      </tr>
    </thead>
    <tbody>
      {#each $shoppingList as item, index}
        <tr>
          <td>{item.item || "N/A"}</td>
          <td>
            <input
              type="number"
              min="1"
              bind:value={$shoppingList[index].desiredQuantity}
              on:change={() => updateDesiredQuantity(index)}
              style="width: 60 px; text-align: center;"
            />
          </td>
          <td>
            <input
              type="text"
              bind:value={$shoppingList[index].desiredUnit}
              on:change={() => updateDesiredUnit(index)}
              style="width: 100 px; text-align: center;"
            />
          </td>
          <td>
            <input
              type="text"
              bind:value={$shoppingList[index].shop}
              on:change={() => updateShop(index)}
              style="width: 150 px; text-align: center;"
            />
          </td>
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
    background-color:rgb(194, 233, 245)
  }
  .new-item-form {
    background-color: rgb(194, 233, 245);
    margin-bottom: 2rem;
    text-align: center;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .form-group input {
    width: 25%;
    padding: 0.5rem;
    font-size: 1rem;
  }
  h1 {
    background-color: rgb(148, 149, 149);
  }
</style>
