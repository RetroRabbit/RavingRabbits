export const Login_User = 'reducerRegister/Login_User'

const initialState = {
    name: "",
    email: "",
    password: "",
  };
  
  export function myRegister (state = initialState, action){

    switch (action.type)
    {
        case Register_User:
            return {
                ...state, 
                name : action.name,
                email : action.email,
                password : action.password
            } 

        default:
            return state;
    }
  }

  export function Register_User(name, email, password)
  {
      return{
              type:Register_User,
              name : name,
              email : email,
              password : password
      }
  }