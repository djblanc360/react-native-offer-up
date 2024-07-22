const API_URL = 'http://localhost:3000' // or use react-native-dotenv

// https://reactnative.dev/docs/network

export const login = async (data: any) => {
    const { email, password } = data
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
  
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
  
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error logging in:', error)
      throw error
    }
  }
  
  export const register = async (data: any) => {
    const { email, password } = data
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
  
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
  
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error registering:', error)
      throw error
    }
  }