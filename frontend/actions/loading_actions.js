export const STOP_LOADING = "STOP_LOADING";
export const START_LOADING = "START_LOADING";

export const stopLoading = () => {
    return {
        type: STOP_LOADING
    }
}

export const startLoading = () => {
    return {
        type: START_LOADING
    }
}