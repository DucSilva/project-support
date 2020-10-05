export const handleError = (error) => {
    const { response, request, message } = error;
    if (response) {
        const { data, status } = response;
        const { message: errorMessage } = data;
        if (errorMessage) {
            return { error: { message: errorMessage } }
        }
        return { error: { message: `[${status}] ${data}` }, data };
    }
    if (request) {
        return { error: request };
    }
    return { error: message };
}