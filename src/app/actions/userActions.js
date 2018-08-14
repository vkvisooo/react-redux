export function setName(name) {
    // return dispatch => {
    //     setTimeout(() => {
    //         dispatch({
    //             type: "NAME",
    //             payload: name
    //         })
    //     }, 2000)
    // }
    return {
        type: "NAME",
        payload: new Promise((resolve, reject) => {
            var array = [1, 2, 3, 4, 5]
            return resolve(array)
        })
    }
}
export function setAge() {
    return {
        type: "AGE",
        payload: 25
    }
}
