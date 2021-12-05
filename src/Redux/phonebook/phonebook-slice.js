import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://61a4a9114c822c0017041d6f.mockapi.io/' }),
  tagTypes: ['Phone'],
  endpoints: (builder) => ({
    getFetchPhonebook: builder.query({
        query: () => `contacts`,
        providesTags: ['Phone'],
    }),
      getCreateContact: builder.mutation({
        query: ( body ) => ({
              url: `contacts`,
              method: 'POST',
          body,
              }),
          invalidatesTags: isSuccess => isSuccess ? ['Phone'] : []
    }),
      getDeleteContact: builder.mutation({
          query: phonebookId => ({
              url: `contacts/${phonebookId}`,
              method: 'DELETE',
        }),
        
        invalidatesTags: isSuccess => isSuccess ? ['Phone'] : []
    })
    }),
  
})
// transformResponse: (error) => console.log('r', error) ,
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFetchPhonebookQuery,useGetDeleteContactMutation,useGetCreateContactMutation } = phonebookApi