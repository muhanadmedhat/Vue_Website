import { ref } from "vue";

export function useApi(baseURL) {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const getAll = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(baseURL);
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      data.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  const getOne = async (id) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${baseURL}/${id}`);
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      data.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  const update = async (product) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${baseURL}/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      data.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }
  return { data, error, loading, getAll, update, getOne }
}