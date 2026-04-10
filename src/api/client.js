// TODO: Set the base URL for your API
const API_BASE_URL = 'http://bvrithcloud.com'; 

export async function get(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`GET request failed: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error in GET request:', error);
    throw error;
  }
}

export async function del(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`DELETE request failed: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error in DELETE request:', error);
    throw error;
  }
}
