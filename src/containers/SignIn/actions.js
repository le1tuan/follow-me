const appActions = {
    register: function({email,password,url}){
        return {
            type: 'REGISTER',
            data: {
                email,
                password,
                url,
            }
        }
    },
}

export default appActions;