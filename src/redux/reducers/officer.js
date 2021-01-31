const initialState = {
  loggedIn: false,
  isLoading: false,
  isError: false,
  message: null,
  data: null
}

const Officer = (state = initialState, action) => {

  switch (action.type) {
    case "CLEAR_MESSAGE": {
      return {
        ...state,
        message: null
      }
    }
    case "LOGIN": {
      return {
        ...state,
        loggedIn: true,
        data: action.payload
      }
    }
    case "LOGOUT": {
      return {
        ...state,
        loggedIn: false,
        data: null
      }
    }
    // case "LOGIN_PENDING":{
    //   return {
    //     ...state,
    //     isLoading: true
    //   }
    // }
    // case "LOGIN_REJECTED":{
    //   const {response, message} = action.payload
    //   return{
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //     message: response !== null ? response.data.message : message
    //   } 
    // }
    // case "LOGIN_FULFILLED":{
    //   const {message, data} = action.payload.data
    //   return{
    //     ...state,
    //     isLoading: false,
    //     isError: false,
    //     message,
    //     data
    //   }
    // }
    default: {
      return state
    }
  }
}

export default Officer