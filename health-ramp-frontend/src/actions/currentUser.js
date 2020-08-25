import { clearLoginForm } from "./loginForm.js"
import { clearSignupForm } from "./signupForm.js"

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER",
    }
}


// async action creators
export const login = credentials => {
    return dispatch => {
        //this would be intermediate state
      
            return fetch("http://localhost:3001/api/v1/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              credentials: "include",
              body: JSON.stringify(credentials)
            })
            .then(resp => resp.json())
            .then(json => {
                if (json.errors){
                    console.log(json.errors)
                } else {
                    dispatch(setCurrentUser(json.data.attributes))
                    dispatch(clearLoginForm())
                }
            })
            .catch(console.log)

    }
}

export const signup = credentials => {
    return dispatch => {
      
            return fetch("http://localhost:3001/api/v1/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              credentials: "include",
              body: JSON.stringify(credentials)
            })
            .then(resp => resp.json())
            .then(json => {
                console.log(json.data)
                if (json.errors){
                    console.log(json.errors)
                } else {
                    dispatch(setCurrentUser(json.data.attributes))
                    dispatch(clearSignupForm())
                }
            })
            .catch(console.log)

    }
}

export const getCurrentUser = () => {
    return dispatch => {
      dispatch({type: 'LOADING_CURRENT_USER'})
      
            return fetch("http://localhost:3001/api/v1/current_user", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              credentials: "include",
            })
            .then(resp => resp.json())
            .then(json => {
                if (json.errors){
                    dispatch(clearCurrentUser())
                } else {
                    dispatch(setCurrentUser(json.data.attributes))
                }
            })
            .catch(console.log)

    }
}

export const logout = () => {
    return dispatch => {
        //this would be intermediate state
      
        fetch("http://localhost:3001/api/v1/logout", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            credentials: "include"
        })
        .then(resp => resp.json())
        .then(json => {
        if (json.failure){
            alert(json.failure)
        } else {
            dispatch(clearCurrentUser())
        }
        })
        .catch(console.log)

    }
}