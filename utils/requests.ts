import axios from 'axios'
const baseURL = 'https://taxivoshod.ru/testapi/?w='

export const getList = async (page: number) => {
  try {
    const response = await axios.get(`${baseURL}list&page=${page}`)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
export const getItemInfo = async (id: number) => {
  try {
    const response = await axios.get(`${baseURL}item&id=${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
