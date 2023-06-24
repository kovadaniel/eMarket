import { useState } from "react";
/**
  * Hook Work: load indicator handling, error handling, executing of callback
  */

/**
 * fetching contains the result of the request;
 * isLoading==true white request in callback is running,
 * isLoading==false when request is finished;
 * error contains error massage if an error occured;
 * @param callback 
 * @returns [fetching, isLoading, error]
 */
function useFetching(callback) {
    /**
     * callback is a function that makes a request to a server
     */
    // 1. create loading and error states
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    // 2. create a 'wrap for a callback' that tracks errors
    const fetching = async (...args) => {
        try{
            setIsLoading(true);
            await callback(...args);
        } catch(e){
            setError(e.message);
        } finally{
            setIsLoading(false);
        }
        return;
    }

    return [fetching, isLoading, error];
}

export default useFetching;