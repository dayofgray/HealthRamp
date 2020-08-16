export const updateLoginForm = form => {
    return {
        type: "UPDATE_LOGIN_FORM",
        form
    }
}

export const clearLoginForm = () => {
    return {
        type: "CLEAR_LOGIN_FORM"
    }
}