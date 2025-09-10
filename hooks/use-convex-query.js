import { useQuery, useMutation } from "convex/react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

// export const useConvexQuery = (query,args,options={enabled:true}) => {

//   // If the query is disabled, return a loading state immediately
//   if (!options.enabled) {
//     return {
//       data: undefined,
//       isLoading: true,
//       error: null,
//     };
//   }
//   const result = useQuery(query,args);
//   const [data, setData] = useState(undefined);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Use effect to handle the state changes based on the query result
//   useEffect(() => {
//     if (result === undefined) {
//       setIsLoading(true);
//     } else {
//       try {
//         setData(result);
//         setError(null);
//       } catch (err) {
//         setError(err);
//         toast.error(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   }, [result]);

//   return {
//     data,
//     isLoading,
//     error,
//   };
// };

// export const useConvexQuery = (query, args, options = {}) => {
//   const { enabled = true } = options;

//   // Use a conditional hook call to prevent the query from running
//   // with invalid arguments.
//   const result = useQuery(enabled ? query : null, args);

//   // Return the data, loading state, and error directly from the hook
//   return {
//     data: result,
//     isLoading: result === undefined,
//     error: result instanceof Error ? result : null,
//   };
// };


export const useConvexQuery = (query, args, options = { enabled: true }) => {
  // Check if the query itself is defined.
  // This is the most crucial fix.
  if (!query) {
    return {
      data: undefined,
      isLoading: true,
      error: null,
    };
  }

  // Then, apply the enabled check.
  const result = useQuery(options.enabled ? query : null, args);

  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (result === undefined) {
      setIsLoading(true);
    } else {
      try {
        setData(result);
        setError(null);
      } catch (err) {
        setError(err);
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, [result]);

  return {
    data,
    isLoading,
    error,
  };
};

export const useConvexMutation = (mutation) => {
  const mutationFn = useMutation(mutation);
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (...args) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await mutationFn(...args);
      setData(response);
      return response;
    } catch (err) {
      setError(err);
      toast.error(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { mutate, data, isLoading, error };
};